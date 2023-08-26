import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faEdit,
  faTrash,
  faDownload,
  faBullseye,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { GetDaftarTani, DeleteDaftarTani } from "@/infrastruture";
import ExcelComponent from "../../../components/exelComponent";
import { Text, Button, Modal,Tooltip } from "@mantine/core";
import { Link } from 'react-router-dom';
const RekapPetani = () => {
  const [datas, setDatas] = useState([]);
  const [modalDeleteData, setModalDeleteData] = useState(false);
  useEffect(() => {
    GetDaftarTani().then((data) => {
    const combinedData = data.map(item => {
      const petani = { ...item }; // Duplicating the petani data
      petani.namaKelompok = item.kelompok?.namaKelompok || ""; // Adding kelompok data to petani object
      petani.gapoktan = item.kelompok?.gapoktan || ""; // Adding kelompok data to petani object
      petani.penyuluh = item.kelompok?.penyuluh || ""; // Adding kelompok data to petani object
      return petani;
    });
      setDatas(combinedData)
    });
  }, []);
  const [filters, setFilters] = useState({
    kecamatan: "",
    desa: "",
    NIK: "",
    nama: "",
    namaKelompok: "",
    gapoktan: "",
    penyuluh: "",
  });
  const handleFilterChange = (e, column) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [column]: e.target.value,
    }));
  };
  const handleDeleteUser = (ids) => {
    DeleteDaftarTani(ids);
  };
  const filteredData = datas.filter((item) => {
    return Object.keys(filters).every((key) => {
      if (filters[key] !== "") {
          if (typeof item[key] === "number") {
            return item[key] === Number(filters[key]);
          } else if(typeof item[key] === "string"){
            return item[key].toLowerCase().includes(filters[key].toLowerCase());
          }
        }
      return true;
    });
  });
  const handleDownlod = () => {
    const dataExel = filteredData.map((item) => {
      return {
        NIK: item.NIK,
        ["No Wa"]: item.NoWa,
        Alamat: item.alamat,
        Kecamatan: item.kecamatan,
        Desa: item.desa,
        nama: item.nama,
        password: item.password,
        namaKelompok: item?.kelompok?.namaKelompok,
        gapoktan: item?.kelompok?.gapoktan,
        penyuluh: item?.kelompok?.penyuluh
      };
    });
    ExcelComponent(dataExel, "data.xlsx", "Sheet1");
  };
  const totalData = filteredData.length;
  return (
    <div className="flex justify-center pt-12">
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
              handleDeleteUser(modalDeleteData);
              setModalDeleteData(false);
            }}
          >
            Delete
          </Button>
        </div>
      </Modal>
      <div className="w-full max-w-screen-xl shadow-xl rounded-lg overflow-x-auto overflow-y-auto">
        <div className="w-max lg:w-full pt-10 px-10">
          <button
            onClick={handleDownlod}
            type="submit"
            className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 ml-auto"
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Download/Cetak
          </button>
          <Link to={`/data-tani/tambah`}>
            <button className="ms-5 rounded-md bg-sky-500 text-white p-1 px-5 w-30 h-10"> 
              <FontAwesomeIcon
                icon={faPlus}
              />
              Tambah Daftar Tani</button>
          </Link>
          <p className="text-right mt-4">
            <strong>Jumlah Data :</strong> {totalData} Data Rekap Petani
          </p>
        </div>
        <div className="pt-10">
          <div className="h-[calc(100vh-200px)] overflow-y-scroll ">
            <table className="min-w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Nama Petani
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Kecamatan
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Desa
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    NIK
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Password
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Nama Kelompok
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Gapoktan
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Penyuluh
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
                        value={filters.nama}
                        onChange={(e) => handleFilterChange(e, "nama")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Nama Petani"
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
                        value={filters.kecamatan}
                        onChange={(e) => handleFilterChange(e, "kecamatan")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Kecamatan"
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
                        value={filters.desa}
                        onChange={(e) => handleFilterChange(e, "desa")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Desa"
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
                        value={filters.NIK}
                        onChange={(e) => handleFilterChange(e, "NIK")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter NIK"
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
                        value={filters.password}
                        onChange={(e) => handleFilterChange(e, "password")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Password"
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
                        value={filters.namaKelompok}
                        onChange={(e) => handleFilterChange(e, "namaKelompok")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Nama Kelompok"
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
                        value={filters.gapoktan}
                        onChange={(e) => handleFilterChange(e, "gapoktan")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Gapoktan"
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
                        value={filters.penyuluh}
                        onChange={(e) => handleFilterChange(e, "penyuluh")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Penyuluh"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                </tr>
                {filteredData?.map((item) => (
                  <tr key={item.id}>
                    <td className="px-4 py-2 border">{item?.nama}</td>
                    <td className="px-4 py-2 border">{item?.kecamatan}</td>
                    <td className="px-4 py-2 border">{item?.desa}</td>
                    <td className="px-4 py-2 border">{item?.NIK}</td>
                    <td className="px-4 py-2 border">{item?.password}</td>
                    <td className="px-4 py-2 border">{item?.namaKelompok}</td>
                    <td className="px-4 py-2 border">{item?.gapoktan}</td>
                    <td className="px-4 py-2 border">{item?.penyuluh}</td>
                    <td className="px-2 py-2 border">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default RekapPetani;
