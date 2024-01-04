import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faEdit,
  faTrash,
  faDownload,
  faBullseye,
  faPlus,
  faUpload
} from "@fortawesome/free-solid-svg-icons";
import { getDaftarPenyuluh, DeleteDaftarPenyuluh, UploadDataPenyuluh } from "@/infrastruture";
import ExcelComponent from "../../../components/exelComponent";
import { Text, Button, Modal,Tooltip, Anchor, Breadcrumbs, TextInput  } from "@mantine/core";
import LoadingAnimation from '../../../components/loadingSession'
import { Link } from 'react-router-dom';
import SearchInput from "../../../components/uiComponents/inputComponents/searchInput";

const breadcrumbItems = [
  { title: "Dashboard", href: "/" },
  { title: "Data Penyuluh" },
  { title: "Tabel Penyuluh" },
].map((item, index) => (
  <Anchor href={item.href} key={index} className="text-white opacity-50">
    {item.title}
  </Anchor>
));
const RekapDataPenyuluh = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true)
  const [modalDeleteData, setModalDeleteData] = useState(false);
  const fileInputRef = useRef();
  useEffect(() => {
    getDaftarPenyuluh().then((data) => {
      const filterData = data.map(obj => {
        return Object.keys(obj).reduce((result, key) => {
          if (key === 'dataPenyuluh') {
            result = { ...result, ...obj[key] };
          } else {
            result[key] = obj[key];
          }
          return result;
        }, {});
      });
      setDatas(filterData)
      setLoading(false)
    });
  }, []);
  // console.log(datas)
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
        ["Kecamatan Binaan"]: item?.dataPenyuluh?.kecamatanBinaan,
        ["Desa Binaan"]: item?.dataPenyuluh?.desaBinaan
      };
    });
    ExcelComponent(dataExel, "data.xlsx", "Sheet1");
  };
  const totalData = filteredData.length;
  function handleFileChange(event) {
    if (!event.target.files) return;
  
    const file = event.target.files[0];
    console.log(file);
    UploadDataPenyuluh(file).then(() => {
      window.location.reload();
    });
  }
  return (
    <div>
      <Breadcrumbs>{breadcrumbItems}</Breadcrumbs>
      <h3 className="text-white text-2xl font-bold mt-4">
        TABEL DATA PENYULUH
      </h3>
      <SearchInput placeholder="Cari NIK PENYULUH" />
      <div className="relativemt-6 mt-4 flex items-center w-full">
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
        {/* ... (previous code) */}
        <div className="bg-[#D9D9D9] rounded-lg w-full">
          <div className="relative bg-[#136B09] p-4 flex w-full justify-between rounded-t-lg shadow-lg">
            <h3 className="text-white text-2xl font-bold px-3">
              DATA TABEL PENYULUH
            </h3>
            <div className="flex gap-4 items-center">
              <input
                type="file"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".xlsx,.xls"
              />
              <Link to={`/data-penyuluh/tambah`}>
                <button className="ms-5 rounded-md bg-[#86BA34] text-white p-1 px-5 w-30 h-10"> 
                  <FontAwesomeIcon className="text-xl"
                    icon={faPlus}
                  /></button>
              </Link>
              <Button
                className="bg-[#F29D0E]"
                onClick={() => {
                  if (fileInputRef.current) {
                      fileInputRef.current.click();
                    }
                  }}
                >
                  <FontAwesomeIcon className="text-xl"
                      icon={faUpload}
                    />
                  {/* <faUpload /> */}
                  <span className="ml-2">Upload File</span>
              </Button> 
            </div>
          </div>
          <div className="pt-0">
            <div className="h-[calc(100vh-200px) p-6 flex justify-between items-center">
              <table className="min-w-full shadow-md">
                <thead className="bg-[#079073] text-white">
                  <tr>
                    <th className="sticky top-0  px-4 py-2">
                      NO
                    </th>
                    <th className="sticky top-0  px-4 py-2">
                      NIP PENYULUH
                    </th>
                    <th className="sticky top-0  px-4 py-2">
                      NAMA PEYULUH
                    </th>
                    <th className="sticky top-0 px-4 py-2 truncate ">
                      KONTAK PENYULUH
                    </th>
                    <th className="sticky top-0  px-4 py-2">
                      KECAMATAN BINAAN
                    </th>
                    <th className="sticky top-0  px-4 py-2">
                      DESA BINAAN 
                    </th>
                    <th className="sticky top-0  px-4 py-2">
                      TINDAKAN
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-white text-black font-medium' : 'bg-emerald-100 text-emerald-800 font-medium'}`}>
                      <td className="px-4  py-2 text-center">{index + 1}</td>
                      <td className="px-4  py-2 text-center">{item.nik}</td>
                      <td className="px-4  py-2 text-center">{item.nama}</td>
                      <td className="px-4  py-2 text-center">{item.noTelp}</td>
                      <td className="px-4  py-2 text-center">{item.kecamatanBinaan}</td>
                      <td className="px-4  py-2 text-center">{item.desaBinaan}</td>
                      <td className="px-2 py-2 text-center">
                      <Tooltip label="Detail">
                          <a href={`/data-penyuluh/detail/${item.id}`} >
                            <FontAwesomeIcon
                              icon={faBullseye}
                              className="cursor-pointer text-black hover:text-black"
                            />
                          </a>
                        </Tooltip>
                        <Tooltip label="Edit">
                          <a href={`/data-penyuluh/${item.id}`}>
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
              {loading && <LoadingAnimation />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RekapDataPenyuluh;