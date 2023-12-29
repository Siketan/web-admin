import {
  Anchor,
  Breadcrumbs,
  Button,
  Image,
  NumberInput,
  Radio,
  Select,
  Stack,
  Tabs,
  TextInput,
} from "@mantine/core";
import clsx from "clsx";
import React, { useEffect } from "react";
import SearchInput from "../../components/uiComponents/inputComponents/searchInput";
import { FaRegRectangleList, FaUpload } from "react-icons/fa6";
import { IoEyeOutline, IoImageOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "../../infrastucture/redux/store";
import {
  TDataTanaman,
  TTableDataTanaman,
  dataTanamanDefault,
} from "../../types/dataTanaman";
import {
  GetStatistikTanamanById,
  UpdateStatistikTanamanById,
  AddNewDataTanaman,
  GetStatistikTanamanAll,
  DeleteStatistikTanamanById,
} from "../../infrastucture/statistic";
import { Link, useNavigate, useParams } from "react-router-dom";
import Table from "../../components/table/Table";
import {
  PaginatedRespApi,
  PaginatedRespApiData,
} from "../../types/paginatedRespApi";
import { ColumnDef } from "@tanstack/react-table";
import { ImPencil } from "react-icons/im";
import { MdDeleteOutline } from "react-icons/md";
import { TKelompokTani } from "../../types/kelompokTani";
import { SearchPoktan } from "../../infrastucture/searchApi";
import AsyncSelect from "react-select/async";
import { StylesConfig } from "react-select";

const breadcrumbItems = [
  { title: "Dashboard", href: "/" },
  { title: "Statistik" },
  { title: "Tambah Data" },
].map((item, index) => (
  <Anchor href={item.href} key={index} className="text-white opacity-50">
    {item.title}
  </Anchor>
));

const filterDataPoktan = (data: TKelompokTani[]) => {
  return data.map((item) => ({
    ...item,
    value: item.id.toString(),
    label: `${item.gapoktan} - ${item.namaKelompok}`,
  }));
};

const loadOptions = (
  inputValue: string,
  callback: (
    options: (TKelompokTani & {
      value: string;
      label: string;
    })[]
  ) => void
) => {
  setTimeout(async () => {
    const data = await SearchPoktan(inputValue);
    callback(filterDataPoktan(data ?? []));
  }, 1000);
};

const columns: ColumnDef<TTableDataTanaman>[] = [
  {
    accessorKey: "no",
    header: "No",
    cell: (props) => <span>{`${props.getValue()}`}</span>,
  },
  {
    accessorKey: "fk_kelompokId",
    header: "No. Poktan",
    cell: (props) => <span>{`${props.getValue()}`}</span>,
  },
  {
    accessorKey: "kategori",
    header: "Kategori Tanaman",
    cell: (props) => <span>{`${props.getValue()}`}</span>,
  },
  {
    accessorKey: "komoditas",
    header: "Komoditas",
    cell: (props) => <span>{`${props.getValue()}`}</span>,
  },
  {
    accessorKey: "createdAt",
    header: "Tanggal Dibuat",
    cell: (props) => (
      <span>{`${new Date(props.getValue() as string).toLocaleDateString(
        "id-ID"
      )}`}</span>
    ),
  },
  {
    accessorKey: "prakiraanBulanPanen",
    header: "Prakiraan Bulan Panen",
    cell: (props) => <span>{`${props.getValue()}`}</span>,
  },
];

export default function DataTanamanForm({ type }: { type: "add" | "edit" }) {
  const params = useParams();
  const id = Number(params.id);
  const user = useSelector((state: RootState) => state.state.user);
  const [newData, setNewData] = React.useState(dataTanamanDefault);
  const [isHoltikultura, setIsHoltikultura] = React.useState(false);
  const [poktan, setPoktan] = React.useState<TKelompokTani>();

  const [dataTable, setDataTable] = React.useState<
    PaginatedRespApiData<TTableDataTanaman> | undefined
  >();
  const [resp, setResp] = React.useState<
    PaginatedRespApiData<TDataTanaman> | undefined
  >();

  useEffect(() => {
    GetStatistikTanamanAll().then((res) => {
      setResp(res?.data);
    });
  }, []);

  useEffect(() => {
    if (resp) {
      setDataTable({
        ...resp,
        data: resp.data.map((item, index) => ({
          ...item,
          no: index + 1,
          actions: (
            <div className="flex gap-4">
              <Link to={`/statistik/${item.id}`}>
                <div className="flex h-7 w-7 items-center justify-center bg-green-500">
                  <IoEyeOutline className="h-6 w-6 text-white" />
                </div>
              </Link>
              <Link to={`/statistik/${item.id}`}>
                <div className="flex h-7 w-7 items-center justify-center bg-yellow-500">
                  <ImPencil className="h-[18px] w-[18px] text-white" />
                </div>
              </Link>
              <button
                onClick={() => {
                  DeleteStatistikTanamanById(item.id).then(() => {
                    GetStatistikTanamanAll().then((res) => {
                      setResp(res?.data);
                    });
                  });
                }}
              >
                <div className="flex h-7 w-7 items-center justify-center bg-red-500">
                  <MdDeleteOutline className="h-6 w-6 text-white" />
                </div>
              </button>
            </div>
          ),
        })),
      });
    }
  }, [resp]);

  useEffect(() => {
    if (type === "edit") {
      GetStatistikTanamanById(id).then((e) => {
        const dataResult = e.data as TDataTanaman;
        if (e) setNewData(dataResult);
        if (dataResult.kategori === "buah" || dataResult.kategori === "sayur")
          setIsHoltikultura(true);
      });
    }
  }, [type, id]);

  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (type === "add")
      AddNewDataTanaman({ ...newData, fk_kelompokId: poktan?.id ?? 1 }).then(
        (e) => {
          if (e) navigate("/statistik");
        }
      );
    else {
      UpdateStatistikTanamanById(id, newData).then((e) => {
        if (e) navigate("/statistik");
      });
    }
  }

  return (
    <div>
      <Breadcrumbs>{breadcrumbItems}</Breadcrumbs>
      <h3 className="text-white text-2xl font-bold mt-4">
        TABEL DATA STATISTIK PERTANIAN
      </h3>
      <SearchInput
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        onChange={(value) => {
          setPoktan(value as TKelompokTani);
        }}
        value={poktan}
        isClearable
      />
      <div className="bg-[#D9D9D9] rounded-lg">
        <div className="relative bg-[#136B09] mt-6 p-4 flex w-full justify-between rounded-t-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold">
            MENAMPILKAN DATA POKTAN
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-8 p-6">
          <Image
            radius="md"
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
          />
          <div className="flex flex-col gap-2">
            <TextInput label="ID Poktan" disabled value={poktan?.id} />
            <TextInput label="Gapoktan" disabled value={poktan?.gapoktan} />
            <TextInput
              label="Nama Kelompok"
              disabled
              value={poktan?.namaKelompok}
            />
            <TextInput label="Desa" disabled value={poktan?.desa} />
          </div>
        </div>
      </div>
      {poktan?.id ? (
        <form
          className={clsx(
            "bg-[#D9D9D9] rounded-lg",
            poktan?.id ? "block" : "hidden"
          )}
          onSubmit={handleSubmit}
          method="POST"
        >
          <div className="relative bg-[#136B09] mt-6 p-4 flex w-full justify-between rounded-t-lg shadow-lg items-center">
            <h3 className="text-white text-2xl font-bold">
              MASUKKAN DATA TANAMAN
            </h3>
            <button className="flex px-4 py-2 gap-4 bg-[#F29D0E] rounded-lg items-center justify-center text-xl text-white active:bg-[#F29D0E] active:shadow-md active:translate-y-1">
              <FaUpload />
              <span>UPLOAD FILE </span>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-8 p-6">
            <div className="flex flex-col gap-4 justify-between">
              <div className="bg-white rounded-lg p-4">
                <p>Kategori Tanaman</p>
                <div className="rounded-lg shadow-lg p-4">
                  <Radio.Group className="[&>*]:mt-1 first:mt-0">
                    <Radio
                      label="Tanaman Pangan"
                      value="pangan"
                      onClick={(event) => {
                        setIsHoltikultura(false);
                        setNewData({
                          ...newData,
                          kategori: event.currentTarget.value,
                        });
                      }}
                      checked={newData.kategori === "pangan"}
                    />
                    <Radio
                      label="Tanaman Perkebunan"
                      value="perkebunan"
                      onClick={(event) => {
                        setIsHoltikultura(false);
                        setNewData({
                          ...newData,
                          kategori: event.currentTarget.value,
                        });
                      }}
                      checked={newData.kategori === "perkebunan"}
                    />
                    <Radio
                      label="Tanaman Holtikultura"
                      value="holtikultura"
                      onClick={() => {
                        setIsHoltikultura(true);
                      }}
                      checked={isHoltikultura}
                    />
                    <Radio.Group className="ml-8 [&>*]:mt-1">
                      <Radio
                        label="Jenis Buah"
                        value="buah"
                        disabled={!isHoltikultura}
                        onClick={(event) => {
                          if (isHoltikultura)
                            setNewData({
                              ...newData,
                              kategori: event.currentTarget.value,
                            });
                        }}
                        checked={newData.kategori === "buah" && isHoltikultura}
                      />
                      <Radio
                        label="Jenis Sayur"
                        value="sayur"
                        disabled={!isHoltikultura}
                        onClick={(event) => {
                          if (isHoltikultura)
                            setNewData({
                              ...newData,
                              kategori: event.currentTarget.value,
                            });
                        }}
                        checked={newData.kategori === "sayur" && isHoltikultura}
                      />
                    </Radio.Group>
                  </Radio.Group>
                </div>
                <p className="mt-4">Komoditas Tanaman</p>
                <Tabs defaultValue="semusim">
                  <Tabs.List>
                    <Tabs.Tab value="semusim">Semusim</Tabs.Tab>
                    <Tabs.Tab value="tahunan">Tahunan</Tabs.Tab>
                  </Tabs.List>

                  <Tabs.Panel value="semusim">
                    <Select
                      className="mt-2"
                      placeholder="-Tanaman Holtikultura Buah-"
                      value={newData.komoditas}
                      onChange={(e) =>
                        setNewData((prev) => ({
                          ...prev,
                          komoditas: e ?? "",
                        }))
                      }
                      data={[
                        "Melon",
                        "Semangka",
                        "Pisang",
                        "Blewah",
                        "Mangga",
                        "Durian",
                        "Manggis",
                        "Alpukat",
                        "Rambutan",
                        "Jeruk Lemon",
                        "Jeruk Nipis",
                        "Jeruk Keprok",
                        "Jeruk Besar",
                        "Nangka",
                        "Jambu Biji",
                        "Jambu Air",
                        "Sukun",
                        "Sirsak",
                        "Sawo",
                        "Duku",
                      ].map((buah) => `Buah ${buah}`)}
                    />
                  </Tabs.Panel>
                  <Tabs.Panel value="tahunan">
                    <Select
                      className="mt-2"
                      placeholder="-Tanaman Holtikultura Sayur-"
                      value={newData.komoditas}
                      onChange={(e) =>
                        setNewData((prev) => ({
                          ...prev,
                          komoditas: e ?? "",
                        }))
                      }
                      data={[
                        "Cabe Kecil",
                        "Cabe Besar",
                        "Bawang Merah",
                        "Tomat",
                        "Terong",
                        "Pare",
                        "Gambas",
                        "Bayam",
                        "Kangkung",
                        "Sawi",
                        "Kacang Panjang",
                      ].map((sayur) => `Sayur ${sayur}`)}
                    />
                  </Tabs.Panel>
                </Tabs>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p>Periode Tanam</p>
                <Select
                  className="mt-2"
                  placeholder="-Tanaman Holtikultura Sayur-"
                  value={newData.periodeTanam}
                  onChange={(e) =>
                    setNewData((prev) => ({
                      ...prev,
                      periodeTanam: e ?? "",
                    }))
                  }
                  data={[
                    "Januari",
                    "Februari",
                    "Maret",
                    "April",
                    "Mei",
                    "Juni",
                    "Juli",
                    "Agustus",
                    "September",
                    "Oktober",
                    "November",
                    "Desember",
                  ]}
                />
              </div>
              <div className="bg-white rounded-lg p-4">
                <p>
                  Luas Lahan Tanam (M<sup>2</sup>)
                </p>
                <NumberInput
                  placeholder="Luas Lahan Tanaman"
                  min={0}
                  value={newData.luasLahan}
                  onChange={(e) =>
                    setNewData((prev) => ({
                      ...prev,
                      luasLahan: Number(e),
                    }))
                  }
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-between">
              <div className="relative">
                <div className="bg-[#136B09] text-xl text-white font-bold py-2 px-6 flex w-fit justify-between rounded-t-lg shadow-lg items-center">
                  Prakiraan Panen
                </div>
                <div className="bg-white rounded-lg p-4 rounded-tl-none flex gap-1 flex-col">
                  <p>PRAKIRAAN LUAS PANEN (HA)</p>
                  <NumberInput
                    placeholder="Prakiraan Luas Panen"
                    min={0}
                    value={newData.prakiraanLuasPanen}
                    onChange={(e) =>
                      setNewData((prev) => ({
                        ...prev,
                        prakiraanLuasPanen: Number(e),
                      }))
                    }
                  />
                  <p>PRAKIRAAN HASIL PANEN (TON)</p>
                  <NumberInput
                    placeholder="Prakiraan Hasil Panen"
                    min={0}
                    value={newData.prakiraanHasilPanen}
                    onChange={(e) =>
                      setNewData((prev) => ({
                        ...prev,
                        prakiraanHasilPanen: Number(e),
                      }))
                    }
                  />
                  <p>PRAKIRAAN BULAN PANEN</p>
                  <Select
                    placeholder="-Periode Bulan Panen-"
                    value={newData.prakiraanBulanPanen}
                    onChange={(e) =>
                      setNewData((prev) => ({
                        ...prev,
                        prakiraanBulanPanen: e ?? "",
                      }))
                    }
                    data={[
                      "Januari",
                      "Februari",
                      "Maret",
                      "April",
                      "Mei",
                      "Juni",
                      "Juli",
                      "Agustus",
                      "September",
                      "Oktober",
                      "November",
                      "Desember",
                    ]}
                  />
                </div>
              </div>
              <div className="relative">
                <div className="absolute w-full h-full bg-[#545454] z-50 rounded-lg bg-opacity-75 flex items-center justify-center text-[#888888] font-bold text-4xl cursor-default">
                  DISABLED
                </div>
                <div className="bg-[#136B09] text-xl text-white font-bold py-2 px-6 flex w-fit justify-between rounded-t-lg shadow-lg items-center">
                  Realisasi Panen
                </div>
                <div className="bg-white rounded-lg p-4 rounded-tl-none flex gap-1 flex-col">
                  <p>LUAS PANEN (HA)</p>
                  <NumberInput placeholder="Luas Panen" min={0} disabled />
                  <p>HASIL PANEN (TON)</p>
                  <NumberInput placeholder="Hasil Panen" min={0} disabled />
                  <p>BULAN PANEN</p>
                  <Select
                    disabled
                    placeholder="-Periode Bulan Panen-"
                    data={[
                      "Januari",
                      "Februari",
                      "Maret",
                      "April",
                      "Mei",
                      "Juni",
                      "Juli",
                      "Agustus",
                      "September",
                      "Oktober",
                      "November",
                      "Desember",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex px-6 pb-6 justify-end">
            <Button type="submit" className="bg-[#307B28]">
              Simpan Data
            </Button>
          </div>
        </form>
      ) : (
        <div className="relative bg-yellow-500 mt-6 p-4 flex w-full justify-center rounded-lg shadow-lg items-center">
          <h3 className="text-white text-2xl font-bold text-center">
            CARI POKTAN TERLEBIH DAHULU
          </h3>
        </div>
      )}
      <div className="relative bg-white bg-opacity-20 mt-6 p-4 flex items-center w-full">
        <h3 className="text-white text-2xl font-bold mx-auto">
          TABEL DATA STATISTIK PERTANIAN
        </h3>
        <Link
          to="/statistik"
          className="absolute right-4 text-[#0FA958] text-xl"
        >
          <FaRegRectangleList />
        </Link>
      </div>
      <Table data={dataTable} columns={columns} />
    </div>
  );
}
