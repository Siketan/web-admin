import MainCard from "@/components/MainCard"
import {useState, useEffect} from "react"
import InputCrud from "@/components/page/infoTani/IconCrud"
import { IconEdit, IconEye, IconTrash, IconPlus   } from '@tabler/icons-react';
import { Image,} from '@mantine/core';
import {GetEventTani, DeleteEventTani} from "@/infrastruture"
import { Text, Button, Modal } from '@mantine/core';
function EventTani() {
    const [datas, setDatas] = useState([])
    const [modalDeleteData, setModalDeleteData] = useState(false);
    useEffect(() => {
        GetEventTani().then((data)=>setDatas(data.infotani))
    }, [])
    const now = new Date();
    const formattedDate = now.toLocaleDateString("id-ID");
    const handleDeleteUser = (ids)=>{
      DeleteEventTani(ids)
      setModalDeleteData(false)
      const updatedDatas = datas.filter((d) => d.id !== id);
      setDatas(updatedDatas);
    }
    return(
    <div className="pt-16">
        <Modal
            opened={modalDeleteData}
            onClose={() => setModalDeleteData(false)}
            withCloseButton={false}
            centered
        >
            <Text>Apakah Kamu Yakin Akan Menghapus Data Ini ?</Text>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
            <Button
                color="cyan"
                style={{ color: 'white', backgroundColor: '#303A47', marginRight: 8 }}
                onClick={() => setModalDeleteData(false)}
            >
                Cancel
            </Button>
            <Button
                color="cyan"
                style={{ color: 'white', backgroundColor: 'red' }}
                type="submit"
                onClick={() => {
                handleDeleteUser(modalDeleteData); 
                setModalDeleteData(false);
                }}
            >
                Delete
            </Button>
            </div>
        </Modal>
        {datas?.map((d, i)=>(
            <MainCard row transparent center gap="0" key={d.id}>
                <MainCard width="60%" radius="0" gap="0" style={{border:"solid 1px black"}}>
                    <h1 className="font-bold">{d.namaKegiatan}</h1>
                    <MainCard transparent row>
                        <Image width={200} height={120} src={d.fotoKegiatan} alt="With default placeholder" withPlaceholder />
                        <MainCard transparent noPadding>
                            <MainCard row transparent noPadding>
                                <p><span className="font-medium">Dibuat Oleh : </span>{d.createdBy}</p>
                                <p>{d.createdAt?.split("T")[0]}</p>
                                <p><span className="font-medium">Status : </span>{new Date(d.createdAt?.split("T")[0] || "").getTime() < new Date().getTime() ? 'sudah Terlewat' : 'akan Datang'}</p>
                            </MainCard>
                        <p>{d.isi}<span className="italic cursor-pointer">... (Baca Selengkapnya)</span></p>
                        </MainCard>
                    </MainCard>
                </MainCard>
                <MainCard width="3%" noPadding gap="0" transparent>
                    <InputCrud icon={<IconEye/>}>Lihat</InputCrud>
                    <InputCrud icon={<IconEdit/>}>Edit</InputCrud>
                    <InputCrud onClick={()=>setModalDeleteData(d.id)} icon={<IconTrash/>}>Hapus</InputCrud>
                </MainCard>
            </MainCard>       
        ))}
    </div>
  )
}

export default EventTani