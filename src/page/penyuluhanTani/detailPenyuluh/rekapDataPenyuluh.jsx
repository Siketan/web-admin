import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faEdit,
  faTrash,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { getDaftarPenyuluh, DeleteDaftarPenyuluh } from "@/infrastruture";
import ExcelComponent from "../../../components/exelComponent";
import { Text, Button, Modal } from "@mantine/core";

const RekapDataPenyuluh = () => {
  const [datas, setDatas] = useState([]);
  const [modalDeleteData, setModalDeleteData] = useState(false);
  useEffect(() => {
    getDaftarPenyuluh().then((data) => setDatas(data.dataDaftarPenyuluh));
  }, []);
  const [filters, setFilters] = useState({
    kecamatan: "",
    desa: "",
    namaPenyuluh: "",
    NIP: "",
    nama: "",
    NoWa: "",
    kecamatanBinaan: "",
    desaBinaan: "",
    namaProduct: "",
  });

  const handleFilterChange = (e, column) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [column]: e.target.value,
    }));
  };
  const handleDeleteUser = (ids) => {
    DeleteDaftarPenyuluh(ids);
  };
  const filteredData = datas.filter((item) => {
    return Object.keys(filters).every((key) => {
      if (filters[key] !== "") {
        if (typeof item[key] === "number") {
          return item[key] === Number(filters[key]);
        } else {
          return item[key].toLowerCase().includes(filters[key].toLowerCase());
        }
      }
      return true;
    });
  });
  const handleDownlod = () => {
    const dataExel = filteredData.map((item) => {
      return {
        NIP: item.NIP,
        ["No Wa"]: item.NoWa,
        Alamat: item.alamat,
        Kecamatan: item.kecamatan,
        Desa: item.desa,
        nama: item.nama,
        foto: item.foto,
        password: item.password,
        // ["Kecamatan Binaan"]: 
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
      <div className="w-full max-w-screen-xl shadow-xl rounded-lg overflow-x-auto">
        <div className="w-max lg:w-full pt-10 px-10">
          <button
            onClick={handleDownlod}
            type="submit"
            className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 ml-auto"
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Download/Cetak
          </button>
          <p className="text-right mt-4">
            <strong>Jumlah Data :</strong> {totalData} Data Rekap Penyuluh
          </p>
        </div>
        <div className="pt-10">
          <div className="h-[calc(100vh-200px)] overflow-y-scroll">
            <table className="min-w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Kecamatan
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Desa
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    NIP
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Password
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Nama Penyuluh
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Nomor WhatsApp
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Kecamatan Binaan
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Desa Binaan
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Nama Product
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="sticky bg-white top-[40px] z-10 px-4 py-2">
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
                  <td className="sticky bg-white top-[40px] z-10 px-4 py-2">
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
                  <td className="sticky bg-white top-[40px] z-10 px-4 py-2">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.NIP}
                        onChange={(e) => handleFilterChange(e, "NIP")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter NIP"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                  <td className="sticky bg-white top-[40px] z-10 px-4 py-2">
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
                  <td className="sticky bg-white top-[40px] z-10 px-4 py-2">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.nama}
                        onChange={(e) => handleFilterChange(e, "nama")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Nama"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                  <td className="sticky bg-white top-[40px] z-10 px-4 py-2">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.NoWa}
                        onChange={(e) => handleFilterChange(e, "NoWa")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Nomor WhatsaApp"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                  <td className="sticky bg-white top-[40px] z-10 px-4 py-2">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.kecamatanBinaan}
                        onChange={(e) =>
                          handleFilterChange(e, "kecamatanBinaan")
                        }
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Kecamatan Binaan"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                  <td className="sticky bg-white top-[40px] z-10 px-4 py-2">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.desaBinaan}
                        onChange={(e) => handleFilterChange(e, "desaBinaan")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Desa Binaan"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                  <td className="sticky bg-white top-[40px] z-10 px-4 py-2">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.namaProduct}
                        onChange={(e) => handleFilterChange(e, "namaProduct")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Password"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                </tr>
                {filteredData.map((item) => (
                  <tr key={item.id}>
                    <td className="px-4 py-2 border">{item.kecamatan}</td>
                    <td className="px-4 py-2 border">{item.desa}</td>
                    <td className="px-4 py-2 border">{item.NIP}</td>
                    <td className="px-4 py-2 border">{item.password}</td>
                    <td className="px-4 py-2 border">{item.nama}</td>
                    <td className="px-4 py-2 border">{item.NoWa}</td>
                    <td className="px-4 py-2 border">{item.kecamatanBinaan}</td>
                    <td className="px-4 py-2 border">{item.desaBinaan}</td>
                    <td className="px-4 py-2 border">{item.namaProduct}</td>
                    <td className="px-4 py-2 border">
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="mr-2 ml-2 cursor-pointer text-blue-500 hover:text-blue-600"
                      />
                      <FontAwesomeIcon
                        onClick={() => setModalDeleteData(item?.id)}
                        icon={faTrash}
                        className="cursor-pointer text-red-500 hover:text-red-600"
                      />
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

export default RekapDataPenyuluh;
