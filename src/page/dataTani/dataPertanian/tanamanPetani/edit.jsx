import { useState, useEffect } from "react";
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
import { useParams,Link } from "react-router-dom";
import {
  faFilter,
  faEdit,
  faTrash,
  faBullseye,
  faPlus,
  faArrowRight,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
// import React, { useEffect } from "react";
// import SearchInput from "../../../../components/uiComponents/inputComponents/SearchInput";
import SearchInput from "../../../../components/uiComponents/inputComponents/searchInput";
import { FaRegRectangleList, FaUpload } from "react-icons/fa6";
// import { GetStatistikTanamanAll } from "../../infrastucture";
import { IoImageOutline } from "react-icons/io5";
import { SearchPetani } from "../../../../infrastucture/searchApi";
import {
  AddTanamanPetani,
  GetListTanaman,
  GetTanamanPetaniById,
  UpdateTanamanPetani,
  DeleteTanamanPetani
} from "../../../../infrastucture/index"
//import tooltip, fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mantine/core";
import Loading from "../../../../components/loading";
import LoadingAnimation from "../../../../components/loading";

const breadcrumbItems = [
  { title: "Dashboard", href: "/" },
  { title: "Data Tanaman Petani" },
  { title: "Edit" },
].map((item, index) => (
  <Anchor href={item.href} key={index} className="text-white opacity-50">
    {item.title}
  </Anchor>
));

const filterDataPetani = (data) => {
  return data.map((item) => ({
    ...item,
    value: item.id.toString(),
    label: `${item.nik} - ${item.nama}`,
  }));
};

const loadOptions = (inputValue, callback) => {
  setTimeout(async () => {
    const data = await SearchPetani(inputValue);
    callback(filterDataPetani(data || []));
  }, 1000);
};


export default function EditTanamanPetani() {
  const [petani, setPetani] = useState([]);
  const [datas, setDatas] = useState([]);
  const [statusKepemilikanLahan, setStatusKepemilikanLahan] = useState("");
  const [luasLahan, setLuasLahan] = useState();
  const [kategori, setKategori] = useState("");
  const [jenis, setJenis] = useState("");
  const [komoditas, setKomoditas] = useState("");
  const [periodeMusimTanam, setPeriodeMusimTanam] = useState("");
  const [periodeBulanTanam, setPeriodeBulanTanam] = useState("");
  const [prakiraanLuasPanen, setPrakiraanLuasPanen] = useState();
  const [prakiraanProduksiPanen, setPrakiraanProduksiPanen] = useState(0);
  const [prakiraanBulanPanen, setPrakiraanBulanPanen] = useState("");
  const [filters, setFilters] = useState({});
  const [modalDeleteData, setModalDeleteData] = useState(false);
  const [loading, setLoading] = useState(true)
  const [dataTable, setDataTable] = useState();
  const [resp, setResp] = useState();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [tanaman, setTanaman] = useState({});
  const { id } = useParams()
  
  useEffect(() => {
    GetTanamanPetaniById(id).then((data) => {
      console.log(data)
      setTanaman(data.data);
      // setLimit(tanaman?.limit)
      // setPage(tanaman?.page)
    })
  }, [id])

  useEffect(() => {
    setStatusKepemilikanLahan(tanaman?.statusKepemilikanLahan)
    setLuasLahan(tanaman?.luasLahan)
    setKategori(tanaman?.kategori)
    setJenis(tanaman?.jenis)
    setKomoditas(tanaman?.komoditas)
    setPeriodeMusimTanam(tanaman?.periodeMusimTanam)
    setPeriodeBulanTanam(tanaman?.periodeBulanTanam)
    setPrakiraanLuasPanen(tanaman?.prakiraanLuasPanen)
    setPrakiraanProduksiPanen(tanaman?.prakiraanProduksiPanen)
    setPrakiraanBulanPanen(tanaman?.prakiraanBulanPanen)
  }, [tanaman])

  console.log(jenis);

  useEffect(() => {
    GetListTanaman(page, limit, tanaman?.fk_petaniId).then((data) => {
      setDatas(data.data);
      setResp(data);
      // console.log(datas)
      setLoading(false);
    });
  }, [page, limit, petani]);

  
  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  
  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  useEffect(()=> {
    // console.log(dataTable)
  }, [dataTable])
  useEffect(() => {
    if (resp) {
      setDataTable({
        ...resp,
        
          data: resp.data.map((item, index) => ({
            ...item,
            no: index + 1,
            actions: (
              <div className="flex gap-4">
                <Tooltip label="Detail">
                  <a href={`/tanaman-petani/edit/${item.id}`} >
                    <FontAwesomeIcon
                      icon={faBullseye}
                      className="cursor-pointer text-black hover:text-black"
                    />
                  </a>
                </Tooltip>
                <Tooltip label="Edit">
                  <a href={`/tanaman-petani/edit/${item.id}`}>
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="mr-2 ml-2 cursor-pointer text-blue-500 hover:text-blue-600"
                    />
                  </a>
                </Tooltip>
                <Tooltip label="Delete">
                  <FontAwesomeIcon
                    onClick={() => setModalDeleteData(item?.id)}
                    icon={faTrash}
                    className="cursor-pointer text-red-500 hover:text-red-600"
                  />
                </Tooltip>
              </div>
            ),
          })),
      });
    }
  }, [resp]);
  const handleFilterChange = (e, column) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [column]: e.target.value,
    }));
  };
  const handleDeleteTanaman = (ids) => {
    DeleteTanamanPetani(ids);
  };
  const handleSubmit=(e) => {
    setLoading(true)
    e.preventDefault()
    const data = {
      statusKepemilikanLahan
      , luasLahan
      , kategori
      , jenis
      , komoditas
      , periodeMusimTanam
      , periodeBulanTanam
      , prakiraanLuasPanen
      , prakiraanProduksiPanen
      , prakiraanBulanPanen
      , fk_petaniId: tanaman?.fk_petaniId
    };
    // console.log(data)
    const formData = new FormData();
    for (const key in data){
      formData.append(key, data[key]);
    }
    // console.log({formData})
    console.log(data);
    UpdateTanamanPetani(id, data).then(()=> setLoading(false))
    // history.push('/tanaman-petani');
  };

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
      disabled
      value={tanaman.dataPetani?.nik}
      isClearable
      placeholder="Cari NIK PETANI" />
      <div className="bg-[#D9D9D9] rounded-lg">
        <div className="relative bg-[#136B09] mt-6 p-4 flex w-full justify-between rounded-t-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold">
            MENAMPILKAN DATA PETANI
          </h3>
        </div>
        <div className="grid grid-cols-5 gap-8 p-6">
          <div className="col-span-2">
            <span className="flex items-center gap-2">
              <IoImageOutline /> Menampilkan Gambar
            </span>
            <Image
              radius= "md"
              rounded= "md"
              width={300} // Set the width of the image
              height={200} // Set the height of the image
              src={ petani?.foto ??"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"}
            />
          </div>
          <div className="col-span-3 grid grid-cols-2 gap-4">
            <TextInput label="NIK" disabled value={tanaman?.dataPetani?.nik}/>
            <TextInput label="Nama Petani" disabled value={tanaman?.dataPetani?.nama}/>
            <TextInput label="Desa Domisili" disabled value={tanaman?.dataPetani?.desa}/>
            <TextInput label="Nama Gapoktan" disabled value={tanaman?.dataPetani?.kelompok?.gapoktan}/>
            <TextInput label="Nama Kelompok" disabled value={tanaman?.dataPetani?.kelompok?.namaKelompok}/>
            <TextInput label="Nama Penyuluh" disabled value={tanaman?.dataPetani?.dataPenyuluh?.nama} />
          </div>
        </div>
      </div>
      {tanaman?.fk_petaniId ? (
        <form className=
          "bg-[#D9D9D9] rounded-lg" onSubmit={(e)=>handleSubmit(e)} method="PUT">
            {loading &&
          <Loading />}
          {/* <div className="bg-[#D9D9D9] rounded-lg"> */}
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
                <div className="flex flex-col gap-4 justify-between flex-1">
                  <div div className="bg-white rounded-lg p-4">
                    <p>STATUS KEPEMILIKAN LAHAN</p>
                    <Select
                      className="mt-2"
                      placeholder="Status Tanah"
                      value={statusKepemilikanLahan}
                      data={[
                        "MILIK SENDIRI",
                        "TANAH SEWA",
                      ]}
                      onChange={(value) => setStatusKepemilikanLahan(value)}
                    />
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p>
                      Luas Lahan Tanam (M<sup>2</sup>)
                    </p>
                    <NumberInput 
                    placeholder="Luas Lahan Tanaman" 
                    min={0}
                    value={Number(luasLahan)}
                    onChange={(value) => setLuasLahan(value)} />
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p>Kategori Tanaman</p>
                    <div className="rounded-lg shadow-lg p-4">
                      <Radio.Group className="[&>*]:mt-1 first:mt-0" value={kategori} onChange={(value) => setKategori(value)}>
                        <Radio label="Tanaman Pangan" value="TANAMAN PANGAN" />
                        <Radio label="Tanaman Perkebunan" value="TANAMAN PERKEBUNAN" />
                        <Radio label="Tanaman Holtikultura" value="TANAMAN HOLTIKULTURA" />
                        {kategori && kategori.toLowerCase() === 'tanaman holtikultura' && (
                          <Radio.Group className="ml-8 [&>*]:mt-1" value={jenis} onChange={(value) => setJenis(value)}>
                            <Radio label="Jenis Buah" value="BUAH" />
                            <Radio label="Jenis Sayur" value="SAYUR" />
                          </Radio.Group>
                        )}
                      </Radio.Group>
                    </div>
                    <p className="mt-4">Komoditas Tanaman</p>
                    <Tabs defaultValue="semusim">
                      <Tabs.List>
                        <Tabs.Tab value="semusim">Semusim</Tabs.Tab>
                        <Tabs.Tab value="tahunan">Tahunan</Tabs.Tab>
                      </Tabs.List>

                      {/* {periodeMusimTanam?.toLowerCase === 'tanaman semusim' ? ( */}
                        <Tabs.Panel value="semusim">
                          <Select
                            className="mt-2"
                            placeholder="Jenis Hasil Panen"
                            data={
                              kategori?.toUpperCase() === 'TANAMAN PANGAN'
                                ? [
                                    'Padi Konvensional',
                                    'Padi Ramah Lingkungan',
                                    'Padi Organik',
                                    'Jagung',
                                    'Kedelai',
                                    'Ubi Jalar',
                                    'Ubi Kayu',
                                    'Kacang Tanah',
                                    'Kacang Hijau',
                                  ].map((buah) => `${buah}`)
                                : kategori?.toUpperCase() === 'TANAMAN PERKEBUNAN'
                                ? [
                                    'Perkebunan Kopi',
                                    'Perkebunan Kakao',
                                    'Perkebunan Cengkeh',
                                    'Perkebunan Teh',
                                    'Perkebunan Karet',
                                    'Perkebunan Kelapa',
                                  ].map((buah) => `${buah}`)
                                : [
                                    'Melon',
                                    'Semangka',
                                    'Pisang',
                                    'Blewah',
                                    'Mangga',
                                    'Durian',
                                    'Manggis',
                                    'Alpukat',
                                    'Rambutan',
                                    'Jeruk Lemon',
                                    'Jeruk Nipis',
                                    'Jeruk Keprok',
                                    'Jeruk Besar',
                                    'Nangka',
                                    'Jambu Biji',
                                    'Jambu Air',
                                    'Sukun',
                                    'Sirsak',
                                    'Sawo',
                                    'Duku',
                                  ].map((buah) => `${buah}`)
                            }
                            value={komoditas}
                            onChange={(value) => setKomoditas(value)}
                          />
                        </Tabs.Panel>
                      {/* ) : ( */}
                        <Tabs.Panel value="tahunan">
                          <Select
                            className="mt-2"
                            placeholder="Jenis Hasil Panen"
                            data={
                              kategori?.toUpperCase() === 'TANAMAN PANGAN'
                                ? [
                                    'Padi Konvensional',
                                    'Padi Ramah Lingkungan',
                                    'Padi Organik',
                                    'Jagung',
                                    'Kedelai',
                                    'Ubi Jalar',
                                    'Ubi Kayu',
                                    'Kacang Tanah',
                                    'Kacang Hijau',
                                  ].map((buah) => `${buah}`)
                                : kategori?.toUpperCase() === 'TANAMAN PERKEBUNAN'
                                ? [
                                    'Perkebunan Tembakau',
                                    'Perkebunan Tebu',
                                  ].map((buah) => `${buah}`)
                                : [
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
                                  ].map((buah) => `${buah}`)
                            }
                            value={komoditas}
                            onChange={(value) => setKomoditas(value)}
                          />
                        </Tabs.Panel>
                      {/* )} */}
                    </Tabs>
                  </div>
                </div>
                <div className="flex flex-col gap-4 justify-between flex-1">
                  <div className="relative">
                  <div className="relative">
                    {/* <div className="absolute w-full h-full bg-[#545454] z-50 rounded-lg bg-opacity-75 flex items-center justify-center text-[#888888] font-bold text-4xl cursor-default">
                      DISABLED
                    </div> */}
                    <div className="bg-[#136B09] text-xl text-white font-bold py-2 px-6 flex w-fit justify-between rounded-t-lg shadow-lg items-center">
                      DATA TANAMAN
                    </div>
                    <div className="bg-white rounded-lg p-4 rounded-tl-none flex gap-1 flex-col">
                      <p>PERIODE MUSIM TANAM</p>
                      <Select
                        value={periodeMusimTanam}
                        placeholder="-Periode Musim Tanam-"
                        data={[
                          "Tanaman Semusim",
                          "Tanaman Tahunan"
                        ]}
                        onChange={(value) => setPeriodeMusimTanam(value)}
                      />
                      <p>PERIODE BULAN TANAM</p>
                      <Select
                        placeholder="-Periode Bulan Tanam-"
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
                        value={periodeBulanTanam}
                        onChange={(value) => setPeriodeBulanTanam(value)}
                      />
                    </div>
                  </div>
                    <div className="bg-[#136B09] mt-4 text-xl text-white font-bold py-2 px-6 flex w-fit justify-between rounded-t-lg shadow-lg items-center">
                      Prakiraan Panen
                    </div>
                    <div className="bg-white rounded-lg p-4 rounded-tl-none flex gap-1 flex-col ">
                      <p>PRAKIRAAN LUAS PANEN (HA)</p>
                      <NumberInput 
                        placeholder="Prakiraan Luas Panen" 
                        // min={0}
                        value={Number(prakiraanLuasPanen)}
                        onChange={(value) => setPrakiraanLuasPanen(value)} />
                      <p>PRAKIRAAN HASIL PANEN (TON)</p>
                      <NumberInput
                       placeholder="Prakiraan Hasil Panen" 
                       min={0}
                       value={Number(prakiraanProduksiPanen)}
                       onChange={(value) => setPrakiraanProduksiPanen(value)}  />
                      <p>PRAKIRAAN BULAN PANEN</p>
                      <Select
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
                        value={prakiraanBulanPanen}
                        onChange={(value) => setPrakiraanBulanPanen(value)} 
                      />
                    </div>
                  </div>
                </div>
              </div>
          {/* </div> */}
          <div className="flex px-6 pb-6 justify-end">
            <Button className="bg-[#307B28]" type="submit">Simpan Data</Button>
          </div>
          {loading &&
              <LoadingAnimation/>}
        </form>
        
      ): (
        <div className="relative bg-yellow-500 mt-6 p-4 flex w-full justify-center rounded-lg shadow-lg items-center">
          <h3 className="text-white text-2xl font-bold text-center">
            CARI PETANI TERLEBIH DAHULU
          </h3>
        </div>
      )}
      <div className="relative bg-white bg-opacity-20 mt-6 p-4 flex items-center w-full">
        <h3 className="text-white text-2xl font-bold mx-auto">
          TABEL DATA TANAMAN PERTANIAN
        </h3>
        <button className="absolute right-4 text-[#0FA958] text-xl">
          <FaRegRectangleList />
        </button>
      </div>
      <div className="pt-0">
            <div className="h-[calc(100vh-200px) p-6 flex justify-between items-center">
              {/* <Table className="min-w-full shadow-md" data={dataTable} columns={columns} /> */}
              <table className="min-w-full shadow-md">
                <thead className="bg-[#079073] text-white">
                  <tr>
                    <th  className="sticky top-0 px-4 py-2 truncate">
                      NO
                    </th>
                    <th className="sticky top-0 px-4 py-2 truncate ">
                      KATEGORI TANAMAN
                    </th>
                    <th className="sticky top-0 px-4 py-2 truncate ">
                      JENIS KOMODITAS
                    </th>
                    <th className="sticky top-0 px-4 py-2 truncate ">
                      STATUS LAHAN
                    </th>
                    <th className="sticky top-0 px-4 py-2 truncate ">
                      PRAKIRAAN PANEN
                    </th>
                    <th className="sticky top-0 px-4 py-2 truncate ">
                      REALISASI PANEN
                    </th>
                    <th className="sticky top-0 px-4 py-2 truncate">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {datas?.map((item, index) => (
                    <tr key={item.id} className={`${index % 2 === 0 ? 'bg-white text-black font-medium' : 'bg-[#D1D9D3] text-emerald-800 font-medium'}`}>
                      <td className="px-4 py-2 text-center ">{index + 1 + (page - 1) * 10}</td>
                      <td className="px-4 py-2 text-center ">{item?.kategori}</td>
                      <td className="px-4 py-2 text-center ">{item?.komoditas}</td>
                      <td className="px-4 py-2 text-center ">{item?.statusKepemilikanLahan}</td>
                      <td className="px-4 py-2 text-center ">{item?.periodeBulanTanam}</td>
                      <td className="px-4 py-2 text-center ">{item?.prakiraanBulanPanen}</td>
                      <td className="px-2 py-2 text-center">
                        <Tooltip label="Detail">
                          <a href={`/data-tani/detail/${item.id}`} >
                            <FontAwesomeIcon
                              icon={faBullseye}
                              className="cursor-pointer text-black hover:text-black"
                            />
                          </a>
                        </Tooltip>
                        <Tooltip label="Edit">
                          <a href={`/tanaman-petani/edit/${item.id}`}>
                            <FontAwesomeIcon
                              icon={faEdit}
                              className="mr-2 ml-2 cursor-pointer text-blue-500 hover:text-blue-600"
                            />
                          </a>
                        </Tooltip>
                        <Tooltip label="Delete">
                          <FontAwesomeIcon
                            onClick={() => setModalDeleteData(item?.id)}
                            icon={faTrash}
                            className="cursor-pointer text-red-500 hover:text-red-600"
                          />
                        </Tooltip>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <div className="flex justify-end items-center mt-4">
                  <p className="text-black font-bold">Page: {page}</p>
                  <button className="ml-2" onClick={handlePrevPage}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </button>
                  <button className="ml-2" onClick={handleNextPage}>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </table>
              {loading &&
              <LoadingAnimation/>}
            </div>
          </div>
    </div>
  );
}

// export default TambahDataTani;


