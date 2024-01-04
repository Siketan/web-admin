import { useState, useEffect, useRef } from "react";
import MainCard from "@/components/MainCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faEdit,
  faTrash,
  faBullseye,
  faPlus,
  faArrowRight,
  faArrowLeft,
  faUpload
} from "@fortawesome/free-solid-svg-icons";
import Table from "@/components/table/Table";
import { Image, Modal,Text,Button, Tooltip, Breadcrumbs, Anchor } from '@mantine/core';
import { GetListTanaman, GetTanmanPetani, DeleteTanamanPetani, UploadTanamanPetani } from "@/infrastruture";
import { useParams, Link } from 'react-router-dom';
import LoadingAnimation from '../../../../components/loading'
import SearchInput from "../../../../components/uiComponents/inputComponents/searchInput";
import { ImPencil } from "react-icons/im";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
// import { TPetani } from "../../../../types/petani";
import { SearchPetani } from "../../../../infrastucture/searchApi";


const breadcrumbItems = [
  { title: "Dashboard", href: "/" },
  { title: "Data Petani" },
  { title: "Tabel Petani" },
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


const columns = [
  {
    accessorKey: "no",
    header: "No",
    cell: (props) => <span>{`${props.getValue()}`}</span>,
  },
  {
    accessorKey: "kategori",
    header: "Kategori Tanaman",
    cell: (props) => <span>{`${props.getValue()}`}</span>,
  },
  {
    accessorKey: "actions",
    header: "Aksi",
    cell: (props) => props.row.original.actions,
  },
];

export default function DetailRekapPetani() {
  const [datas, setDatas] = useState([]);
  const [modalDeleteData, setModalDeleteData] = useState(false);
  const [loading, setLoading] = useState(true)
  const [dataTable, setDataTable] = useState();
  const [resp, setResp] = useState();
  const [petani, setPetani] = useState([]);
  const [selectedPetani, setSelectedPetani] = useState(null);
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
  const fileInputRef = useRef();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    GetListTanaman(page, limit, petani?.id).then((data) => {
      setDatas(data.data);
      setResp(data);
      setLoading(false);
    });
  }, [page, limit, petani]);
  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  
  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  
  const handleDeleteTanaman = (ids) => {
    DeleteTanamanPetani(ids);
    // delay 6 seconds
    setTimeout(() => {
      window.location.reload();
    }, 4000);
    // window.location.reload();
    
  };

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

  function handleFileChange(event) {
    if (!event.target.files) return;
  
    const file = event.target.files[0];
    console.log(file);
    UploadTanamanPetani(file).then(() => {
      window.location.reload();
    });
  }
    
  return (
    <div>
      <Breadcrumbs>{breadcrumbItems}</Breadcrumbs>
      <h3 className="text-white text-2xl font-bold mt-4">
        TABEL DATA TANAMAN PETANI
      </h3>
      <SearchInput 
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions
      // onChange={(value) => {
      //   setSelectedPetani(value)
      // }}
      onChange={(value) => {
        setPetani(value);
      }}
      value={petani}
      isClearable
      placeholder="Cari NIK PETANI" />
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
              handleDeleteTanaman(modalDeleteData);
              setModalDeleteData(false);
            }}
          >
            Delete
          </Button>
        </div>
      </Modal>
      <div className="bg-[#D9D9D9] rounded-lg w-full mt-5">
        <div className="relative bg-[#136B09] p-4 flex w-full justify-between rounded-t-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold px-3">
            DATA TABEL TANAMAN PETANI
          </h3>
          <div className="flex gap-4 items-center">
            <input
              type="file"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".xlsx,.xls"
            />
            <Link to={`/tanaman-petani/add`}>
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
      </div>
      
  );
}
