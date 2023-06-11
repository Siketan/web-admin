import { useState } from "react";
import EditorText from "@/components/textAreaEditor"
import { Radio, Group, Button } from '@mantine/core';
import MainCard from "@/components/MainCard"
import TextInput from "@/components/uiComponents/inputComponents/textInput" 
import { IconPlus, IconX, IconDeviceFloppy} from '@tabler/icons-react';
import {AddInfoTani} from "@/infrastruture"
const TambahInfoTani = ()=>{
    const [judul, setJudul] = useState("");
    const [kategori, setKategori] = useState("");
    const [isi, setIsi] = useState("");
    // const [fotoBerita, setNamaKegiatan] = useState("");
    
    const currentDate = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('id-ID', options);

    const handleClick = (e)=>{
        const data = {
            tanggal:formattedDate, judul, kategori, isi
        }
        console.log(data)
        if(e == "simpan"){
            AddInfoTani(data)
        }else{
            window.location.reload();
        }
    }
    return(
        <MainCard transparent row center style={{paddingTop:"50px"}}>
            <MainCard width="80%" >
                <h1 className="text-center">Tambahkan Data Tani</h1>
                <MainCard transparent gap="0">
                    <MainCard transparent noPadding  width="40%">
                        <TextInput id="judul" name="judul" label="Judul" value={judul}  onChange={(e) => setJudul(e.target.value)} />
                    </MainCard >
                    <MainCard transparent noPadding row gap="15rem">
                        <MainCard transparent noPadding gap="0">
                            <span id="tanggal" name="tanggal">{formattedDate}</span>
                            <span>Dibuat Oleh: @suheri_26</span>
                        </MainCard>
                        <MainCard transparent noPadding gap="0">
                            <div className="flex justify-center">
                                    <IconPlus className="m-auto rounded-full h-[20px] w-[20px] border border-black me-1"/>
                                <span className="underline">Upload Baru</span>            
                            </div>
                        </MainCard>
                        <MainCard transparent noPadding gap="0">
                                <Radio.Group
                                    withAsterisk
                                    id="kategori" name="kategori" value={kategori}  onChange={(e) => setKategori(e)}
                                    >
                                    <Group mt="xs">
                                        <Radio value="berita" label="Berita" />
                                        <Radio value="artikel" label="Artikel" />
                                        <Radio value="tips" label="Tips" />
                                    </Group>
                                </Radio.Group>
                        </MainCard>
                    </MainCard>
                </MainCard>
                <EditorText setValue={setIsi}/>
                <MainCard transparent id="isi" name="isi" row style={{justifyContent:"end"}}>
                    <Button leftIcon={<IconDeviceFloppy size="1rem" />} variant='outline' onClick={()=>handleClick("simpan")}>Simpan</Button>
                    <Button leftIcon={<IconX size="1rem" />} variant='outline' onClick={()=>handleClick("batal")}>Batalkan</Button>
                </MainCard>
            </MainCard>
        </MainCard>
    )
}

export default TambahInfoTani