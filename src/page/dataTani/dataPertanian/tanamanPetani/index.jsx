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
import Table from "@/components/table/Table";
import { Image, Modal,Text,Button, Tooltip, Breadcrumbs, Anchor } from '@mantine/core';
import { GetListTanaman, GetTanmanPetani, DeleteTanamanPetani } from "@/infrastruture";
import { useParams, Link } from 'react-router-dom';
import LoadingAnimation from '../../../../components/loading'
import SearchInput from "../../../../components/uiComponents/inputComponents/searchInput";


const breadcrumbItems = [
  { title: "Dashboard", href: "/" },
  { title: "Data Petani" },
  { title: "Tabel Petani" },
].map((item, index) => (
  <Anchor href={item.href} key={index} className="text-white opacity-50">
    {item.title}
  </Anchor>
));
export default function DetailRekapPetani() {
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
    GetListTanaman().then((data)=>{
      // setPetani(data)
      setDatas(data.data)
      setLoading(false)
    });
  }, []);
  const handleFilterChange = (e, column) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [column]: e.target.value,
    }));
  };
  //   const filteredData = datas.filter((item) => {
  //   return Object.keys(filters).every((key) => {
  //     if (filters[key] !== "") {
  //         if (typeof item[key] == "number") {
  //           return item[key].toString().includes(filters[key].toLowerCase());
  //         } else if(typeof item[key] == "string"){
  //           return item[key]
  //             .toLowerCase()
  //             .includes(filters[key].toLowerCase());
  //         }
  //     }
  //     return true;
  //   });
  // });
  const handleTanaman = (ids) => {
    DeleteTanamanPetani(ids);
  };
  return (
    <div>
      <Breadcrumbs>{breadcrumbItems}</Breadcrumbs>
      <h3 className="text-white text-2xl font-bold mt-4">
        TABEL DATA PETANI
      </h3>
      <SearchInput placeholder="Cari NIK PETANI / POKTAN" />
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
      <div className="bg-[#D9D9D9] rounded-lg w-full">
        <div className="relative bg-[#136B09] p-4 flex w-full justify-between rounded-t-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold px-3">
            DATA TABEL PETANI
          </h3>
          <Link to={``}>
              <button className="ms-5 rounded-md bg-[#86BA34] text-white p-1 px-5 w-30 h-10"> 
                <FontAwesomeIcon className="text-xl"
                  icon={faPlus}
                /></button>
            </Link>
        </div>
          <div className="pt-0">
            <div className="h-[calc(100vh-200px) p-6 flex justify-between items-center">
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
                      <td className="px-4 py-2 text-center ">{index + 1}</td>
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
                          <a href={`/rekap-data-tani/edit/${item.id}`}>
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
      </div>
  );
}
