// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Coba from "./page"
import {DataTani, TambahDataTani, LaporanPenyuluh, LaporanPetani, InfoTani, TambahInfoTani,EventTani, TambahEventTani, LiveChat, RatingPetugas, TambahPenyuluhanTani, DataRiwayatChat, JurnalKegiatan, PresensiKehadiran, TambahPenjual, ProdukPenyuluh, ProdukPetani} from "./page"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
const Path = () => {
  return (
    <div >
      <Navbar />
      <div className="my-20">
      <Router>
        <Routes>
          <Route path="/" element={<DataTani />} />
          {/* Data Tani */}
          <Route path="/data-tani/tambah" element={<TambahDataTani />} />
          <Route path="/data-tani/laporan-tanam" element={<LaporanPetani />} />
          <Route path="/data-tani/laporan-penyuluh" element={<LaporanPenyuluh />} />
          {/* <Route path="/data-tanaman" element={<DataTanaman />} /> */}
          {/* Info Tani */}
          <Route path="/info-tani" element={<InfoTani />} />
          <Route path="/info-tani/tambah" element={<TambahInfoTani />} />
          <Route path="/event-tani/tambah" element={<TambahEventTani />} />
          <Route path="/info-tani/event-tani" element={<EventTani />} />
          {/* Toko Tani */}
          <Route path="/toko-tani/tambah-penjual" element={<TambahPenjual />} />
          <Route path="/toko-tani/produk-petani" element={<ProdukPetani />} />
          <Route path="/toko-tani/produk-penyuluh" element={<ProdukPenyuluh />} />
          {/* Data Penyuluh */}
          <Route path="/data-penyuluh/tambah" element={<TambahPenyuluhanTani />} />
          <Route path="/data-penyuluh/presensi-kehadiran" element={<PresensiKehadiran />} />
          <Route path="/data-penyuluh/jurnal-kegiatan" element={<JurnalKegiatan />} />
          <Route path="/data-penyuluh/riwayat-chat" element={<DataRiwayatChat />} />
          {/* LiveChat */}
          <Route path="/live-chat" element={<LiveChat />} />
          <Route path="/live-chat/rating-petugas" element={<RatingPetugas />} />
        </Routes>
      </Router>
      </div>
      <Footer />
    </div>
  );
}

export default Path;