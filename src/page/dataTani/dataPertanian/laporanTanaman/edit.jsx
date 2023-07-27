import { useState, useEffect } from "react";
import EditorText from "@/components/textAreaEditor"
import { Button } from '@mantine/core';
import MainCard from "@/components/MainCard"
import TextInput from "@/components/uiComponents/inputComponents/textInput" 
import { IconPlus, IconX, IconDeviceFloppy} from '@tabler/icons-react';
import {AddJurnalKegiatan} from "@/infrastruture"
import InputImage from "@/components/inputImage";

const EditLaporanTanam = ()=>{
    const [tanggalLaporan, setTanggalLaporan] = useState("")
    const [komdisiTanaman, setKomdisiTanaman] = useState("")
    const [deskripsi, setDeskripsi] = useState("")
    const [fotoTanaman, setFotoTanaman] = useState("")
    const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
        tanamanPetaniId ,
        tanggalLaporan,
        komdisiTanaman,
        deskripsi,
        fotoTanaman
      };
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      
    };    
    return(
        <MainCard transparent row center style={{paddingTop:"50px"}}>
            <MainCard width="80%" >
                <h1 className="text-center">Tambahkan Laporan Tanam</h1>
                <MainCard transparent gap="10%" row>
                    <MainCard transparent noPadding  width="40%">
                        <TextInput id="kondisiTanaman" name="kondisiTanaman" label="Judul" value={komdisiTanaman}  onChange={(e) => setKomdisiTanaman(e.target.value)} />
                        <TextInput type="date" id="tanggalLaporan" name="tanggalLaporan" label="Status Jurnal" value={tanggalLaporan}  onChange={(e) => setTanggalLaporan(e.target.value)} />
                    </MainCard >
                    <MainCard transparent noPadding>
                        <InputImage
                            imageActive={fotoTanaman}
                            onChange={(e) => setFotoTanaman(e)}
                            title="Foto Tanaman"
                        />
                    </MainCard>
                </MainCard>
                <span>Deskripsi:</span>
                <EditorText setValue={setDeskripsi}/>
                <MainCard transparent row style={{justifyContent:"end"}}>
                    <Button leftIcon={<IconDeviceFloppy size="1rem" />} variant='outline' onClick={(e)=>handleSubmit(e)}>Simpan</Button>
                    <Button leftIcon={<IconX size="1rem" />} variant='outline'>Batalkan</Button>
                </MainCard>
            </MainCard>
        </MainCard>
    )
}

export default EditLaporanTanam