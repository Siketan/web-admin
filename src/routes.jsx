// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coba from "./page"
import { DataTani, TambahDataTani, DataTanaman, TambahDataTanaman, InfoTani, TambahInfoTani, PenyuluhanTani, TambahPenyuluhanTani, TokoTani, TambahTokoTani, UserTani, TambahUserTani, LayananPesanan, InfoKegiatan } from "./page"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
const Path = () => {
  return (
    <div >
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Coba />} />
          <Route path="/data-tani" element={<DataTani />} />
          <Route path="/data-tani/tambah" element={<TambahDataTani />} />
          <Route path="/data-tanaman" element={<DataTanaman />} />
          <Route path="/data-tanaman/tambah" element={<TambahDataTanaman />} />
          <Route path="/info-tani" element={<InfoTani />} />
          <Route path="/info-tani/tambah" element={<TambahInfoTani />} />
          <Route path="/penyuluhan-tani" element={<PenyuluhanTani />} />
          <Route path="/penyuluhan-tani/tambah" element={<TambahPenyuluhanTani />} />
          <Route path="/toko-tani" element={<TokoTani />} />
          <Route path="/toko-tani/tambah" element={<TambahTokoTani />} />
          <Route path="/user-tani" element={<UserTani />} />
          <Route path="/user-tani/tambah" element={<TambahUserTani />} />
          <Route path="/layanan-pesanan" element={<LayananPesanan />} />
          <Route path="/info-kegiatan" element={<InfoKegiatan />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default Path;