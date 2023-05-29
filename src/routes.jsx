// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {DataTani, TambahDataTani, LaporanPenyuluh, LaporanPetani, InfoTani, TambahInfoTani,EventTani, TambahEventTani, LiveChat, RatingPetugas, TambahPenyuluhanTani, DataRiwayatChat, JurnalKegiatan, PresensiKehadiran, TambahPenjual, ProdukPenyuluh, ProdukPetani} from "./page"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
const Path = () => {
  return (
    <div >
      <Navbar />
      <div className="mt-20">
      <Router>
        <Routes>
          <Route path="/" element={<DataTani />} />
          <Route path="/data-tani/tambah" element={<TambahDataTani />} />
          <Route path="/laporan-penyuluh" element={<LaporanPenyuluh />} />
          <Route path="/laporan-petani" element={<LaporanPetani />} />
          <Route path="/info-tani" element={<InfoTani />} />
          <Route path="/info-tani/tambah" element={<TambahInfoTani />} />
          <Route path="/event-tani" element={<EventTani />} />
          <Route path="/event-tani/tambah" element={<TambahEventTani />} />
          <Route path="/penyuluhan-tani/tambah" element={<TambahPenyuluhanTani />} />
          <Route path="/live-chat" element={<LiveChat />} />
          <Route path="/rating-petugas" element={<RatingPetugas />} />
          <Route path="/riwayat-chat" element={<DataRiwayatChat />} />
          <Route path="/jurnal-kegiatan" element={<JurnalKegiatan />} />
          <Route path="/presensi-kehadiran" element={<PresensiKehadiran />} />
          <Route path="/tambah-penjual" element={<TambahPenjual />} />
          <Route path="/produk-penyuluh" element={<ProdukPenyuluh />} />
          <Route path="/produk-petani" element={<ProdukPetani />} />
        </Routes>
      </Router>
      </div>
      <Footer />
    </div>
  );
}

export default Path;