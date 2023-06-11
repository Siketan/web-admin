import { useState } from "react";
import EditorText from "@/components/textAreaEditor"
import { Button } from '@mantine/core';
import MainCard from "@/components/MainCard"
import TextInput from "@/components/uiComponents/inputComponents/textInput" 
import { IconPlus, IconX, IconDeviceFloppy} from '@tabler/icons-react';
// import {AddInfoTani} from "@/infrastruture"
const FormJurnalKegiatan = ()=>{
    // const [NIP, setNIP] = useState("");
    const [judul, setJudul] = useState("");
    const [tanggalDibuat, setTanggalDibuat] = useState("");
    // const [statusJurnal, setStatusJurnal] = useState("");
    const [isi, setIsi] = useState("");
    // const [gambar, setGambar] = useState("");
    
    return(
        <MainCard transparent row center style={{paddingTop:"50px"}}>
            <MainCard width="80%" >
                <h1 className="text-center">Tambahkan Jurnal Kegiatan</h1>
                <MainCard transparent gap="0">
                    <MainCard transparent noPadding  width="40%">
                        <TextInput id="judul" name="judul" label="Judul" value={judul}  onChange={(e) => setJudul(e.target.value)} />
                    </MainCard >
                    <MainCard transparent noPadding row gap="15rem">
                        <MainCard transparent noPadding gap="0">
                            <span id="tanggal" name="tanggal" value={tanggalDibuat}  onChange={(e) => setTanggalDibuat(e.target.value)}>26 Oktober 2023</span>
                            <span >Dibuat Oleh: @suheri_26</span>
                        </MainCard>
                        <MainCard transparent noPadding gap="0">
                            <div className="flex justify-center">
                                    <IconPlus className="m-auto rounded-full h-[20px] w-[20px] border border-black me-1"/>
                                <span className="underline">Upload Baru</span>            
                            </div>
                        </MainCard>
                        {/* <MainCard transparent noPadding gap="0">
                                <Radio.Group
                                    withAsterisk
                                    id="kategori" name="kategori" value={kategori}  onChange={(e) => setKategori(e.target.value)}
                                    >
                                    <Group mt="xs">
                                        <Radio value="berita" label="Berita" />
                                        <Radio value="artikel" label="Artikel" />
                                        <Radio value="tips" label="Tips" />
                                    </Group>
                                </Radio.Group>
                        </MainCard> */}
                    </MainCard>
                </MainCard>
                <EditorText/>
                <MainCard transparent id="isi" name="isi" value={isi}  onChange={(e) => setIsi(e.target.value)} row style={{justifyContent:"end"}}>
                    <Button leftIcon={<IconDeviceFloppy size="1rem" />} variant='outline'>Simpan</Button>
                    <Button leftIcon={<IconX size="1rem" />} variant='outline'>Batalkan</Button>
                </MainCard>
            </MainCard>
        </MainCard>
    )
}

export default FormJurnalKegiatan