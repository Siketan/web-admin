import { useState, useEffect } from "react";
import MainCard from "@/components/MainCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faEdit,
  faTrash,
  faBullseye,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Image, Modal,Text,Button, Tooltip } from '@mantine/core';
import { GetTanmanPetani, DeleteTanamanPetani } from "@/infrastruture";
import { useParams, Link } from 'react-router-dom';
import LoadingAnimation from '../../../../components/loading'
export default function DetailRekapPetani() {
  const params = useParams()
  const id = params.id
  const [Petani, setPetani] = useState([]);
  const [datas, setDatas] = useState([]);
  const [modalDeleteData, setModalDeleteData] = useState(false);
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    janisPanen: "",
    jenis: "",
    kategori: "",
    komoditas: "",
    luasLahan: "",
    musimTanam: "",
    perkiraanHasilPanen: '',
    perkiraanPanen: "",
    realisasiHasilPanen: "",
    statusLahan: "",
    tanggalTanam: "",
  });
  useEffect(() => {
    GetTanmanPetani(id).then((data)=>{
      setPetani(data)
      setDatas(data.tanamanPetanis)
      setLoading(false)
    });
  }, []);
  const handleFilterChange = (e, column) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [column]: e.target.value,
    }));
  };
    const filteredData = datas.filter((item) => {
    return Object.keys(filters).every((key) => {
      if (filters[key] !== "") {
          if (typeof item[key] == "number") {
            return item[key].toString().includes(filters[key].toLowerCase());
          } else if(typeof item[key] == "string"){
            return item[key]
              .toLowerCase()
              .includes(filters[key].toLowerCase());
          }
      }
      return true;
    });
  });
  const handleTanaman = (ids) => {
    DeleteTanamanPetani(ids);
  };
  return (
    <div>
     <Modal
        opened={modalDeleteData}
        onClose={() => setModalDeleteData(false)}
        withCloseButton={false}
        centered
      >
        <Text>Apakah Kamu Yakin Akan Menghapus Data Ini ?</Text>
        <div
          style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}
        >
          <Button
            color="cyan"
            style={{
              color: "white",
              backgroundColor: "#303A47",
              marginRight: 8,
            }}
            onClick={() => setModalDeleteData(false)}
          >
            Cancel
          </Button>
          <Button
            color="cyan"
            style={{ color: "white", backgroundColor: "red" }}
            type="submit"
            onClick={() => {
              handleTanaman(modalDeleteData);
              setModalDeleteData(false);
            }}
          >
            Delete
          </Button>
        </div>
      </Modal>
      <MainCard row transparent noPadding center>
        <MainCard width="40%">
          <MainCard fullwidth transparent>
            {/* <a href="/data-tani/rekap-petani" className="ml-auto cursor-pointer">
              <FontAwesomeIcon icon={faX} />
            </a>
            <p className="text-center font-bold text-base md:text-2xl mb-5">
              Detail Rekap Petani
            </p> */}
              <Image width={170} height={170} mx="auto" radius="md" src={Petani.foto} alt="Random image" withPlaceholder />
            <div className="text-left lg:ms-16 xl:ms-26 2xl:ms-36">
              <div className="flex">
                <p className="relative z-0 w-full mb-5 group">
                  <strong>Nama : </strong> {Petani?.nama}
                </p>
                <p className="relative z-0 w-full mb-5 group">
                  <strong>NIK : </strong> {Petani?.NIK}
                </p>
              </div>
              <div className="flex">
                <p className="relative z-0 w-full mb-5 group">
                  <strong>Kecamatan : </strong> {Petani?.kecamatan}
                </p>
                <p className="relative z-0 w-full mb-5 group">
                  <strong>Desa : </strong> {Petani?.desa}
                </p>
              </div>
              <div className="flex">
                <p className="relative z-0 w-full mb-5 group">
                  <strong>No Wa/HP : </strong> {Petani?.NoWa}
                </p>
                <p className="relative z-0 w-full mb-5 group">
                  <strong>Desa : </strong> {Petani?.desa}
                </p>
              </div>
              <div className="flex">
                <p className="relative z-0 w-full mb-5 group">
                  <strong>Nama Kelompok: </strong> {Petani?.kelompok?.namaKelompok}
                </p>
                <p className="relative z-0 w-full mb-5 group">
                  <strong>gapoktan : </strong> {Petani?.kelompok?.gapoktan}
                </p>
              </div>
              <div className="flex">
                <p className="relative z-0 w-full mb-5 group">
                  <strong>Penyuluh: </strong> {Petani?.kelompok?.penyuluh}
                </p>
                <p className="relative z-0 w-full mb-5 group">
                  {/* <strong>gapoktan : </strong> {Petani?.kelompok?.gapoktan} */}
                </p>
              </div>
            </div>
          </MainCard>
        </MainCard>
      </MainCard>
        <h1 className="text-center mt-5 font-bold">Tanaman {Petani?.nama}</h1>
        <Link to={`/tanaman-petani/add?petaniId=${Petani.id}`}>
          <button className="ms-16 rounded-md bg-blue-500 text-white p-2 px-5 w-35 h-10"> 
            <FontAwesomeIcon
              icon={faPlus}
            />
            Tambah Tanaman</button>
        </Link>
          <Link to="/data-tani/rekap-petani">
            <button
              className="ms-2 text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-orange-800"
            >
              Kembali
            </button>
          </Link>
        <div className="pt-5 mx-8 overflow-y-scroll">
          <div className="h-[calc(100vh-200px)]">
            <table className="min-w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Luas Lahan
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Musin Tanam
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Perkiraan Hasil Panen
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Perkiraan Panen
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Realisasi Hasil Panen
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Status Lahan
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Bulan/Tahun Tanam
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Komoditas
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Kategori
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Jenis
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Jenis Panen
                  </th>
                  <th className="px-4 py-2 truncate border">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="sticky bg-white top-[40px] z-10  px-4 py-2 border">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.luasLahan}
                        onChange={(e) => handleFilterChange(e, "luasLahan")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Luas Lahan"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                  <td className="sticky bg-white top-[40px] z-10  px-4 py-2 border">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.musimTanam}
                        onChange={(e) => handleFilterChange(e, "musimTanam")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Musim Tanam"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                  <td className="sticky bg-white top-[40px] z-10  px-4 py-2 border">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.perkiraanHasilPanen}
                        onChange={(e) => handleFilterChange(e, "perkiraanHasilPanen")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Perkiraan Hasil Panen"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                  <td className="sticky bg-white top-[40px] z-10  px-4 py-2 border">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.perkiraanPanen}
                        onChange={(e) => handleFilterChange(e, "perkiraanPanen")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Perkiraan Panen"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                  <td className="sticky bg-white top-[40px] z-10  px-4 py-2 border">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.realisasiHasilPanen}
                        onChange={(e) => handleFilterChange(e, "realisasiHasilPanen")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Realisasi Hasil Panen"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                  <td className="sticky bg-white top-[40px] z-10  px-4 py-2 border">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.statusLahan}
                        onChange={(e) => handleFilterChange(e, "statusLahan")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Status Lahan"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                  <td className="sticky bg-white top-[40px] z-10  px-4 py-2 border">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.tanggalTanam}
                        onChange={(e) => handleFilterChange(e, "tanggalTanam")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Tanggal Tanam"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                  <td className="sticky bg-white top-[40px] z-10  px-4 py-2 border">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.komoditas}
                        onChange={(e) => handleFilterChange(e, "komoditas")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Komoditas"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                  <td className="sticky bg-white top-[40px] z-10  px-4 py-2 border">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.kategori}
                        onChange={(e) => handleFilterChange(e, "kategori")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Kategori"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                  <td className="sticky bg-white top-[40px] z-10  px-4 py-2 border">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.jenis}
                        onChange={(e) => handleFilterChange(e, "jenis")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Jenis Tanaman"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                  <td className="sticky bg-white top-[40px] z-10  px-4 py-2 border">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.janisPanen}
                        onChange={(e) => handleFilterChange(e, "janisPanen")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Jenis Panen"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                  <td className="sticky bg-white top-[40px] z-10  px-4 py-2 border">
                  </td>
                </tr>
                {filteredData?.map((item) => (
                  <tr key={item.id}>
                    <td className="px-4 py-2 border">{item.luasLahan}</td>
                    <td className="px-4 py-2 border">{item.musimTanam}</td>
                    <td className="px-4 py-2 border">{item.perkiraanHasilPanen}</td>
                    <td className="px-4 py-2 border">{item.perkiraanPanen}</td>
                    <td className="px-4 py-2 border">{item.realisasiHasilPanen}</td>
                    <td className="px-4 py-2 border">{item.statusLahan}</td>
                    <td className="px-4 py-2 border">{item.tanggalTanam}</td>
                    <td className="px-4 py-2 border">{item.komoditas}</td>
                    <td className="px-4 py-2 border">{item.kategori}</td>
                    <td className="px-4 py-2 border">{item.jenis || "-"}</td>
                    <td className="px-4 py-2 border">{item.jenisPanen || "-"}</td>
                    <td className="px-2 py-2 border">
                    <Tooltip label="Detail">                      
                        <a href={`/laporan-tanam/${item.id}`}>
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
            </table>
            {loading &&
            <LoadingAnimation/>}
          </div>
        </div>
    </div>
  );
}
