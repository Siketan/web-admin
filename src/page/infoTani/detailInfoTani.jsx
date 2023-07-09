import React, { useState, useEffect  } from 'react';
import { Card, Image, Text, Badge, Button, Group, Modal } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
import { GetInfoTaniById } from "@/infrastruture";
import MainCard from "@/components/MainCard";
function DetailInfoTani() {
  const [data, setData] = useState(null);
  const location = useLocation();
  const [modalDeleteData, setModalDeleteData] = useState(false);
  const id = location.state?.id;
  const navigate = useNavigate();
  useEffect(() => {
    if(id){
      GetInfoTaniById(id).then((data) => setData(data.infotani));
    }
  }, []);
    const handleDeleteUser = (ids)=>{
    DeleteInfoTani(ids)
  }
  const navigateToEdit = (itemId) => {
    history(`/info-tani/edit?id=${itemId}`, { state: { id:itemId } });
  };
  return (
    <MainCard noPadding transparent row center style={{marginTop:"100px"}}>
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
      <Button variant='outline' color="cyan" sx={{marginTop:"19px"}} onClick={()=>navigate(-1)}>
        kembali
      </Button>
      <MainCard width="50%" transparent>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src={data?.fotoBerita}
            height={"35vh"}
            alt={data?.judul}
            withPlaceholder 
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{data?.judul}</Text>
          {data?.kategori && 
          <Badge color="pink" variant="light">
            {data?.kategori}
          </Badge>
}
        </Group>

        <Text size="sm" color="black">
          <span dangerouslySetInnerHTML={{ __html: data?.isi }} />
        </Text>
        <Group position="right" sx={{marginTop:"19px"}}>
          <Button variant='outline' color="cyan" onClick={() => navigateToEdit(data?.id)}>
            Edit
          </Button>
          <Button variant='outline' color="cyan" onClick={()=>setModalDeleteData(data?.id)}>
            Delete
          </Button>
        </Group>
      </Card>
      </MainCard>
    </MainCard>
  );
}

export default DetailInfoTani