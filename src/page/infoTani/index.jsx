import MainCard from "@/components/MainCard"
import { useState } from "react";
import InputCrud from "@/components/page/infoTani/IconCrud"
import { IconEdit, IconEye, IconTrash, IconPlus } from '@tabler/icons-react';
import { Image,} from '@mantine/core';
const InfoTani = ()=>{
    const [checekd, setChecekd] = useState([false, false, false])
    const handleCheckd = (e)=>{
        if(e == true){
            setChecekd([true, true, true])
        }else{
            setChecekd([false, false, false])
        }
    }
    const handleCheckdOne = (e, i)=>{
        if(e == true){
            const active = [...checekd]
            active[i] = true
            setChecekd(active)
        }else{
            const active = [...checekd]
            active[i] = false
            setChecekd(active)
        }
    }
    return(
    <div className="pt-16">
        <div className="flex justify-center gap-3">
            <div className="flex justify-center">
                <div className="self-center h-[20px] w-[20px] border border-black me-1 flex justify-center">
                    <input type="checkbox" onChange={(e)=> handleCheckd(e.target.checked)}/>
                </div>
                <span className="underline ">Pilih Semua</span>
            </div>
            <div className="flex justify-center">
                    <IconPlus className="m-auto rounded-full h-[20px] w-[20px] border border-black me-1"/>
                <span className="underline">Tambah Baru</span>            
            </div>
            <div className="flex justify-center">
                    <IconPlus className="m-auto rounded-full h-[20px] w-[20px] border border-black me-1"/>
                <span className="underline">Upload Baru</span>            
            </div>
        </div>
        {checekd?.map((item, i)=>(
      <MainCard row transparent center gap="0" key={i}>
        <div className="self-center h-[20px] w-[20px] border border-black me-2 flex justify-center">
            <input type="checkbox" checked={item} onChange={(e)=> handleCheckdOne(e.target.checked, i)}/>
        </div>
        <MainCard width="60%" radius="0" gap="0" style={{border:"solid 1px black"}}>
            <h1 className="font-bold">JUDUL TERLALU BESAR</h1>
            <MainCard transparent row>
                <Image width={200} height={120} src={null} alt="With default placeholder" withPlaceholder />
                <MainCard transparent noPadding>
                    <MainCard row transparent noPadding>
                        <p><span className="font-medium">Dibuat Oleh : </span>Fian</p>
                        <p><span className="font-medium">Tanggal : </span>yg Tidak Di Tentukan</p>
                        <p><span className="font-medium">Status : </span>Duda Herang</p>
                        <p><span className="font-medium">Kategori : </span>DiTinggal Pergi</p>
                    </MainCard>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ex corrupti veniam ut et officiis in omnis minima culpa sit dignissimos consequuntur, tempora asperiores eum molestiae ratione deserunt consectetur nisi suscipit sint! Nostrum fugiat provident laudantium, unde et saepe ratione eligendi mollitia aut tempore quod ullam animi id pariatur totam.<span className="italic cursor-pointer">... (Baca Selengkapnya)</span></p>
                </MainCard>
            </MainCard>
        </MainCard>
        <MainCard width="2%" noPadding gap="0" transparent>
            <InputCrud icon={<IconEye/>}>Liat</InputCrud>
            <InputCrud icon={<IconEdit/>}>Edit</InputCrud>
            <InputCrud icon={<IconTrash/>}>Delete</InputCrud>
        </MainCard>
      </MainCard>       
        ))}
    </div>
    )
}

export default InfoTani