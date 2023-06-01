import React, { useState, useRef } from 'react';
import InputImage from "@/components/inputImage"
import MainCard from "@/components/MainCard"
import TimeInput from "@/components/uiComponents/inputComponents/timeInput" 
import TextInput from "@/components/uiComponents/inputComponents/textInput" 
function TambahEventTani() {

  return (
    <div className="flex flex-col items-center justify-center">
      <InputImage/>
      <MainCard width="50%" transparent className="mt-10">
        <TextInput id="namaKegiatan" name="namaKegiatan" label="Nama Kegiatan" contoh="Penyuluhan Tanaman"/>
        <TextInput id="tanggalAcara" name="tanggalAcara" label="Tanggal Acara" contoh="26/10/2023" type="date"/>
        <TimeInput idMulai="waktuMulai" nameMulai="waktuMulai" idSelesai="waktuSelesai" nameSelesai="waktuSelesai" label="Waktu Acara" contoh="12:45 AM - 01:10 PM"/>
        <TextInput id="tempatKegiatan" name="tempatKegiatan" label="Tempat" contoh="Balay Merdeka Raya"/>
        <TextInput id="peserta" name="peserta" label="Peserta" contoh="Petani Desa A"/>
      </MainCard>
    </div>
  )
}

export default TambahEventTani