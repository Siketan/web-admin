import { useState, useEffect } from "react";
import MainCard from "@/components/MainCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image, Modal,Text,Button } from '@mantine/core';
import {
  faEdit,
  faTrash,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams, useNavigate  } from 'react-router-dom';
import {getAllLaporanTanam,deleteLaporanTanam} from "@/infrastruture";

export default function DetailTanamanPetani() {
  const history = useNavigate()
  const [tanaman, setTanaman] = useState({})
  const [laporan, setLaporan] = useState([])
  const [modalDeleteData, setModalDeleteData] = useState(false);
  const {id} = useParams()
  useEffect(() => {
    getAllLaporanTanam(id).then((data)=>{
      setTanaman(data?.daftarTani)
      setLaporan(data?.daftarTani?.laporanTanams)
    })
  }, [id])
  const handleDelete = (idLaporan)=>{
    deleteLaporanTanam(idLaporan)
  }

  return (
    <div>
      <MainCard row transparent noPadding center>
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
                  handleDelete(modalDeleteData);
                  setModalDeleteData(false);
                }}
              >
                Delete
              </Button>
            </div>
          </Modal>
            <button
              onClick={()=>history(-1)}
              className="ms-2 text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-orange-800"
            >
              Kembali
            </button>
          <MainCard width="50%">
            <MainCard fullwidth transparent>
              <p className="font-bold text-center text-2xl">Detail Tanaman</p>
              <div className="text-left lg:ms-10 xl:ms-16 2xl:ms-26 pt-5 px-5 md:px-0">
                <div className="flex">
                  <p className="relative z-0 w-full mb-5 group">
                    <strong>Luas Lahan : {tanaman?.luasLahan}</strong>
                  </p>
                  <p className="relative z-0 w-full mb-5 group">
                    <strong>Musim Tanam : {tanaman?.musimTanam}</strong> 
                  </p>
                </div>
                <div className="flex">
                  <p className="relative z-0 w-full mb-5 group">
                    <strong>Prakiraan Hasil Panen : {tanaman?.perkiraanHasilPanen}</strong>
                  </p>
                  <p className="relative z-0 w-full mb-5 group">
                    <strong>Realisasi Hasil Panen : {tanaman?.realisasiHasilPanen}</strong>
                  </p>
                </div>
                <div className="flex">
                  <p className="relative z-0 w-full mb-5 group">
                    <strong>Status Lahan : {tanaman?.statusLahan}</strong>
                  </p>
                  <p className="relative z-0 w-full mb-5 group">
                    <strong>Bulan/Tahun Tanam : {tanaman?.tanggalTanam}</strong>
                  </p>
                </div>
                <div className="flex">
                  <p className="relative z-0 w-full mb-5 group">
                    <strong>Komoditas : {tanaman?.komoditas}</strong>
                  </p>
                  <p className="relative z-0 w-full mb-5 group">
                    <strong>Kategori : {tanaman?.kategori}</strong>
                  </p>
                </div>
                {tanaman?.jenis && tanaman?.jenisPanen &&
                <div className="flex">
                  {tanaman?.jenis &&
                  <p className="relative z-0 w-full mb-5 group">
                    <strong>Jenis Tanaman : {tanaman?.jenis}</strong>
                  </p>
                  }
                  {tanaman?.jenisPanen &&
                  <p className="relative z-0 w-full mb-5 group">
                    <strong>Jenis Panen : {tanaman?.jenisPanen}</strong>
                  </p>
                  }
                </div>
                }
                <div className="flex">
                  <p className="relative z-0 w-full mb-5 group">
                    <strong>Perkiraan Tanggal Panen : {tanaman?.perkiraanPanen}</strong>
                  </p>
                </div>
              </div>
            </MainCard>
          </MainCard>
      </MainCard>
      <h1 className="text-center font-bold my-5">Laporan Tanaman</h1>
      <div className="flex flex-row">
        <Link to={`/laporan-tanam/add?tanamanId=${tanaman.id}`}>
          <button className="ms-16 rounded-md bg-sky-500 text-white p-1 px-5 w-30 h-10"> 
            <FontAwesomeIcon
              icon={faPlus}
            />
            Tambah Laporan</button>
        </Link>
        <Link to={`/laporan-akhir/add?tanamanId=${tanaman.id}`}>
          <button className="ms-2 rounded-md bg-sky-500 text-white p-1 px-5 w-30 h-10"> 
            <FontAwesomeIcon
              icon={faPlus}
            />
            Tambah Laporan Akhir</button>
        </Link>

      </div>
        {!laporan?.length && <h3 className="text-center font-semibold">Belum Ada Laporan Tanaman</h3>}
        <MainCard row transparent center className="flex-wrap">
            {laporan?.map((data, index) => (
            <MainCard key={index} width="460px">
                <MainCard fullwidth transparent>
                <Image width={170} height={170} mx="auto" radius="md" src={data?.fotoTanaman} alt={data?.komdisiTanaman || ''} withPlaceholder />
                <div className="pt-5 px-5 md:px-0">
                    <div className="grid md:grid-cols-2">
                    <div className="flex justify-start font-bold">
                        <p>{data?.komdisiTanaman}</p>
                    </div>
                    <div className="flex justify-end font-bold text-orange-primary">
                        <p>{data?.tanggalLaporan?.split("T")[0]}</p>
                    </div>
                    </div>
                    <div className="py-5">
                    <p className="relative z-0 w-full group font-semibold">
                       <span dangerouslySetInnerHTML={{ __html: data?.deskripsi }} />
                    </p>
                    </div>
                    <div className="flex justify-end">
                      <Link to={`/laporan-tanam/edit/${data?.id}`}>
                        <FontAwesomeIcon icon={faEdit} className="cursor-pointer text-blue-500 hover:text-blue-600 pr-3" />
                      </Link>
                      <FontAwesomeIcon icon={faTrash} onClick={() => setModalDeleteData(data?.id)} className="cursor-pointer text-red-500 hover:text-red-600 mt-1" />
                    </div>
                </div>
                </MainCard>
            </MainCard>
            ))}
        </MainCard>
    </div>
  );
}
