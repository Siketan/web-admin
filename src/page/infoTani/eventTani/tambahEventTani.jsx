import React, { useState, useRef } from 'react';
import InputImage from "@/components/inputImage"
import MainCard from "@/components/MainCard"
import TimeInput from "@/components/uiComponents/inputComponents/timeInput" 
import TextInput from "@/components/uiComponents/inputComponents/textInput" 
import {AddEventTani} from "@/infrastruture"
function TambahEventTani() {

  const handleSubmit = ()=>{
    const data = {
      
    }
    AddEventTani(data)
  }
  return (
    <MainCard transparent row center style={{paddingTop:"50px"}}>
      <MainCard width="80%">
        <MainCard transparent nopadding center>
          <InputImage id="fotoKegiatan" name="fotoKegiatan"/>
        </MainCard>
        <MainCard fullwidth transparent className="mt-10">
          <TextInput id="namaKegiatan" name="namaKegiatan" label="Nama Kegiatan" contoh="Penyuluhan Tanaman"/>
          <TextInput id="tanggalAcara" name="tanggalAcara" label="Tanggal Acara" contoh="26/10/2023" type="date"/>
          <TimeInput idMulai="waktuMulai" nameMulai="waktuMulai" idSelesai="waktuSelesai" nameSelesai="waktuSelesai" label="Waktu Acara" contoh="12:45 AM - 01:10 PM"/>
          <TextInput id="tempat" name="tempat" label="Tempat" contoh="Balay Merdeka Raya"/>
          <TextInput id="peserta" name="peserta" label="Peserta" contoh="Petani Desa A"/>
        </MainCard>
      </MainCard>
    </MainCard>
  )
}

export default TambahEventTani