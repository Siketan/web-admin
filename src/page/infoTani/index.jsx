import { useState, useEffect } from "react";
import { useNavigate  } from 'react-router-dom';
import MainCard from "@/components/MainCard";
import InputCrud from "@/components/page/infoTani/IconCrud";
import { IconEdit, IconEye, IconTrash, IconPlus } from "@tabler/icons-react";
import { Image } from "@mantine/core";
import { GetInfoTani, DeleteInfoTani } from "@/infrastruture";
import { Text, Button, Modal } from '@mantine/core';
const InfoTani = () => {
  const [datas, setDatas] = useState([]);
  const [checekd, setChecekd] = useState([false]);
  const [id, setId] = useState([]);
  const [modalDeleteData, setModalDeleteData] = useState(false);
  const history = useNavigate ();
  const handleCheckd = (e) => {
    if (e == true) {
      setChecekd([true, true, true]);
    } else {
      setChecekd([false, false, false]);
    }
  };
  const handleCheckdOne = (e, i, id) => {
    if (e == true) {
      const active = [...checekd];
      active[i] = true;
      setChecekd(active);
      setId(id);
    } else {
      const active = [...checekd];
      active[i] = false;
      setChecekd(active);
    }
  };
  useEffect(() => {
    GetInfoTani().then((data) => setDatas(data.infotani));
  }, []);
  useEffect(() => {
    setChecekd([...Array(datas.lengh).fill(false)]);
  }, [datas]);
  const handleDeleteUser = (ids)=>{
    DeleteInfoTani(ids)
  }
  const navigateToEdit = (itemId) => {
    history(`/info-tani/edit?id=${itemId}`, { state: { id:itemId } });
  };
  const navigateToDetail = (itemId) => {
    history(`/info-tani/detail?id=${itemId}`, { state: { id:itemId } });
  };
  return (
    <div className="pt-16">
      <div className="flex justify-center gap-3">
        <div className="flex justify-center">
          <div className="self-center h-[20px] w-[20px] border border-black me-1 flex justify-center">
            <input
              type="checkbox"
              onChange={(e) => handleCheckd(e.target.checked)}
            />
          </div>
          <span className="underline ">Pilih Semua</span>
        </div>
        <div
          className="flex justify-center cursor-pointer"
          onClick={() => (window.location.href = "/info-tani/tambah")}
        >
          <IconPlus className="m-auto rounded-full h-[20px] w-[20px] border border-black me-1" />
          <span className="underline">Tambah Baru</span>
        </div>
      </div>
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
      {datas?.map((item, i) => (
        <MainCard row transparent center gap="0" key={i}>
          <div className="self-center h-[20px] w-[20px] border border-black me-2 flex justify-center">
            <input
              type="checkbox"
              checked={checekd[i]}
              onChange={(e) => handleCheckdOne(e.target.checked, i, item.id)}
            />
          </div>
          <MainCard
            width="60%"
            radius="0"
            gap="0"
            style={{ border: "solid 1px black" }}
          >
            <h1 className="font-bold">{item.judul}</h1>
            <MainCard transparent row>
              <Image
                width={200}
                height={120}
                src={item.fotoBerita}
                alt="With default placeholder"
                withPlaceholder
              />
              <MainCard transparent noPadding>
                <MainCard row transparent noPadding>
                  <p>
                    <span className="font-medium">Dibuat Oleh : </span>
                    {item.createdBy}
                  </p>
                  <p>
                    <span className="font-medium">Tanggal : </span>
                    {item.tanggal?.split("T")[0]}
                  </p>
                  <p>
                    <span className="font-medium">Status : </span>
                    {item.status}
                  </p>
                  <p>
                    <span className="font-medium">Kategori : </span>
                    {item.kategori}
                  </p>
                </MainCard>
                <span dangerouslySetInnerHTML={{ __html: item.isi }} />
                <span className="italic cursor-pointer">
                  (Baca Selengkapnya)
                </span>
              </MainCard>
            </MainCard>
          </MainCard>
          <MainCard width="3%" noPadding gap="0" transparent>
            <InputCrud onClick={() => navigateToDetail(item.id)} icon={<IconEye />}>Liat</InputCrud>
            <InputCrud onClick={() => navigateToEdit(item.id)} icon={<IconEdit />}>Edit</InputCrud>
            <InputCrud onClick={()=>setModalDeleteData(item.id)} icon={<IconTrash />}>Hapus</InputCrud>
          </MainCard>
        </MainCard>
      ))}
    </div>
  );
};

export default InfoTani;
