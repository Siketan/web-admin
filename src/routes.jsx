// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Coba from "./page"
import {
  TambahDataTani,
  RekapDataPetani,
  LaporanPetani,
  InfoTani,
  TambahInfoTani,
  EventTani,
  TambahEventTani,
  LiveChat,
  RatingPetugas,
  TambahPenyuluhanTani,
  DataRiwayatChat,
  JurnalKegiatan,
  PresensiKehadiran,
  TambahPenjual,
  FormJurnalKegiatan,
  ProdukPenyuluh,
  ProdukPetani,
  Login,
  Register,
  NotFoundPage,
  Notification,
  RekapDataPenyuluh,
  DetailInfoTani,
  DetailEventTani,
  EditInfoTani,
  DetailRekapPetani,
  EditEventTani,
  EditRekapPetani,
  TambahTanamanPetani,
  EditTanamanPetani,
  DetailTanamanPetani,
  EditLaporanTanam,
  TambahLaporanTanam,
  TambahLaporanAhir,
  EditPenyuluhan
} from "./page";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ProtectedRoute from "./page/protectedRoute";
const Path = () => {
  const login = window.localStorage.getItem('token')
  const chekToken = ()=>{
    if((login && window.location.pathname != "/loginAdminSiketan") || (login && window.location.pathname != "/registerAdminSiketan")) {
      return true
    } else{
      return false
    }
  }
  return (
    <div>
      {/* {window.location.pathname !== "/loginAdminSiketan" && <Navbar /> } */}
      { chekToken() && <Navbar />}
      <div
        className={
          chekToken()
            ? "my-32"
            : ""
        }
      >
        <Router>
          <Routes>
            <Route path="/loginAdminSiketan" element={<Login />} />
            <Route path="/registerAdminSiketan" element={<Register />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<EventTani />} />
              <Route path="/notification" element={<Notification />} />
              {/* Data Tani */}
              <Route path="/rekap-data-tani/edit/:id" element={<EditRekapPetani />} />
              <Route path="/data-tani/tambah" element={<TambahDataTani />} />
              <Route path="/data-tani/laporan-tanam" element={<LaporanPetani />}/>
              <Route path="/data-tani/rekap-petani" element={<RekapDataPetani />}/>
              <Route path="/data-tani/detail/:id" element={<DetailRekapPetani />} />
              <Route path="/tanaman-petani/add" element={<TambahTanamanPetani />} />
              <Route path="/tanaman-petani/edit/:id" element={<EditTanamanPetani />} />
              <Route path="/laporan-tanam/add" element={<TambahLaporanTanam />} />
              <Route path="/laporan-akhir/add" element={<TambahLaporanAhir />} />
              <Route path="/laporan-tanam/edit/:id" element={<EditLaporanTanam />} />
              <Route path="/laporan-tanam/:id" element={<DetailTanamanPetani />} />
              {/* <Route path="/data-tanaman" element={<DataTanaman />} /> */}
              {/* event Tani */}
              <Route path="/event-tani/tambah" element={<TambahEventTani />} />
              <Route path="/event-tani/detail" element={<DetailEventTani />} />
              <Route path="/info-tani/event-tani" element={<EventTani />} />
              <Route path="/event-tani/edit/:id" element={<EditEventTani />} />
              {/* info tani */}
              <Route path="/info-tani" element={<InfoTani />} />
              <Route path="/info-tani/tambah" element={<TambahInfoTani />} />
              <Route path="/info-tani/detail" element={<DetailInfoTani />} />
              <Route path="/info-tani/edit/:id" element={<EditInfoTani />} />
              {/* Toko Tani */}
              <Route path="/toko-tani/tambah-penjual" element={<TambahPenjual />} />
              <Route path="/toko-tani/produk-petani" element={<ProdukPetani />} />
              <Route path="/toko-tani/produk-penyuluh" element={<ProdukPenyuluh />} />
              {/* Data Penyuluh */}
              <Route path="/data-penyuluh/tambah" element={<TambahPenyuluhanTani />} />
              <Route path="/data-penyuluh/:id" element={<EditPenyuluhan />} />
              <Route path="/data-penyuluh/presensi-kehadiran" element={<PresensiKehadiran />} />
              <Route path="/data-penyuluh/jurnal-kegiatan" element={<JurnalKegiatan />} />
              <Route path="/data-penyuluh/jurnal-kegiatan/form" element={<FormJurnalKegiatan />} />
              <Route path="/data-penyuluh/riwayat-chat" element={<DataRiwayatChat />} />
              <Route path="/data-penyuluh/rekap-penyuluh" element={<RekapDataPenyuluh />} />
              {/* LiveChat */}
              <Route path="/live-chat" element={<LiveChat />} />
              <Route path="/live-chat/rating-petugas" element={<RatingPetugas />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </div>
      {chekToken() && <Footer />}
    </div>
  );
};

export default Path;
