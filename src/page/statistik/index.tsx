import { Anchor, Breadcrumbs } from "@mantine/core";
import React, { useEffect } from "react";
import SearchInput from "../../components/uiComponents/inputComponents/searchInput";
import { FaPlus } from "react-icons/fa";
import {
  DeleteStatistikTanamanById,
  GetStatistikTanamanAll,
} from "../../infrastucture/statistic";
import Table from "../../components/table/Table";
import { PaginatedRespApiData } from "../../types/paginatedRespApi";
import { TDataTanaman, TTableDataTanaman } from "../../types/dataTanaman";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { ImPencil } from "react-icons/im";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { TKelompokTani } from "../../types/kelompokTani";
import { SearchPoktan } from "../../infrastucture/searchApi";
import { FaCheckDouble } from "react-icons/fa6";

const breadcrumbItems = [
  { title: "Dashboard", href: "/" },
  { title: "Statistik" },
  { title: "Tabel Statistik" },
].map((item, index) => (
  <Anchor href={item.href} key={index} className="text-white opacity-50">
    {item.title}
  </Anchor>
));

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
  {
    accessorKey: "actions",
    header: "Aksi",
    cell: (props) => props.row.original.actions,
  },
];

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

export default function index() {
  const [dataTable, setDataTable] = React.useState<
    PaginatedRespApiData<TTableDataTanaman> | undefined
  >();
  const [resp, setResp] = React.useState<
    PaginatedRespApiData<TDataTanaman> | undefined
  >();
  const [poktan, setPoktan] = React.useState<TKelompokTani>();

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
              <Link to={`/statistik/${item.id}/realisasi`}>
                <div className="flex h-7 w-7 items-center justify-center bg-gray-500">
                  <FaCheckDouble className="h-[18px] w-[18px] text-white" />
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
      <div className="relative bg-white bg-opacity-20 mt-6 p-4 flex items-center w-full">
        <h3 className="text-white text-2xl font-bold mx-auto">
          TABEL DATA STATISTIK PERTANIAN
        </h3>
        <Link
          to="/statistik/tambah"
          className="absolute right-4 text-[#0FA958] text-xl"
        >
          <FaPlus />
        </Link>
      </div>
      <Table data={dataTable} columns={columns} />
    </div>
  );
}
