// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coba from "./page"
import { DataTani, TambahDataTani, InfoTani, TambahInfoTani, PenyuluhanTani, TambahPenyuluhanTani, TokoTani, TambahTokoTani, UserTani, TambahUserTani, LayananPesanan, InfoKegiatan } from "./page"
const Path = () => {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Coba />} />
          <Route path="/data-tani" element={<DataTani />} />
          <Route path="/data-tani/tambah" element={<TambahDataTani />} />
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
    </div>
  );
}

export default Path;