import {useState, useEffect} from "react"
import MainCard from "@/components/MainCard"
import InputCrud from "@/components/page/infoTani/IconCrud"
import { IconEdit, IconEye, IconTrash, IconPlus } from '@tabler/icons-react';
import { Image,} from '@mantine/core';
import {GetInfoTani} from "@/infrastruture"
const InfoTani = ()=>{
    const [datas, setDatas] = useState([])
    const [checekd, setChecekd] = useState([false])
    const [id, setId] = useState([])
    const handleCheckd = (e)=>{
        if(e == true){
            setChecekd([true, true, true])
        }else{
            setChecekd([false, false, false])
        }
    }
    const handleCheckdOne = (e, i, id)=>{
        if(e == true){
            const active = [...checekd]
            active[i] = true
            setChecekd(active)
            setId(id)
        }else{
            const active = [...checekd]
            active[i] = false
            setChecekd(active)
        }
    }
    useEffect(() => {
        GetInfoTani().then((data)=>setDatas(data.infotani))
    }, [])
    useEffect(() => {
        setChecekd([...Array(datas.lengh).fill(false)])
    }, [datas])
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
        {datas?.map((item, i)=>(
      <MainCard row transparent center gap="0" key={i}>
        <div className="self-center h-[20px] w-[20px] border border-black me-2 flex justify-center">
            <input type="checkbox" checked={checekd[i]} onChange={(e)=> handleCheckdOne(e.target.checked, i, item.id)}/>
        </div>
        <MainCard width="60%" radius="0" gap="0" style={{border:"solid 1px black"}}>
            <h1 className="font-bold">{item.judul}</h1>
            <MainCard transparent row>
                <Image width={200} height={120} src={item.fotoBerita} alt="With default placeholder" withPlaceholder />
                <MainCard transparent noPadding>
                    <MainCard row transparent noPadding>
                        <p><span className="font-medium">Dibuat Oleh : </span>{item.createdBy}</p>
                        <p><span className="font-medium">Tanggal : </span>{item.tanggal?.split("T")[0]}</p>
                        <p><span className="font-medium">Status : </span>{item.status}</p>
                        <p><span className="font-medium">Kategori : </span>{item.kategori}</p>
                    </MainCard>
                <span dangerouslySetInnerHTML={{ __html: item.isi }}/><span className="italic cursor-pointer">(Baca Selengkapnya)</span>
                </MainCard>
            </MainCard>
        </MainCard>
        <MainCard width="3%" noPadding gap="0" transparent>
            <InputCrud icon={<IconEye/>}>Liat</InputCrud>
            <InputCrud icon={<IconEdit/>}>Edit</InputCrud>
            <InputCrud icon={<IconTrash/>}>Hapus</InputCrud>
        </MainCard>
      </MainCard>       
        ))}
    </div>
    )
}

export default InfoTani