import TextInput from '../../components/uiComponents/inputComponents/textInput';
import InputImage from '../../components/inputImage';
import { useState } from 'react';
import LoadingAnimation from '../../components/loading';
import { BsPersonGear } from 'react-icons/bs';
import { CiLocationArrow1 } from 'react-icons/ci';
import { SlLocationPin } from 'react-icons/sl';
import { GiVillage } from 'react-icons/gi';

export default function DataProfil() {
  const [fotoProfil, setFotoProfil] = useState('');
  const [nama, setNama] = useState('');
  const [kecamatan, setKecamatan] = useState('');
  const [desa, setDesa] = useState('');
  const [alamat, setAlamat] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    const data = {
      fotoProfil,
      nama,
      kecamatan,
      desa,
      alamat
    };
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    // AddEventTani(formData).then(()=>setLoading(false))
  };

  return (
    <div>
      {loading && <LoadingAnimation />}
      <div className="flex justify-between">
        <InputImage
          id="fotoProfil"
          name="fotoProfil"
          value={fotoProfil}
          title="Foto Profil"
          onChange={(e) => setFotoProfil(e)}
        />
        <div className="w-[45%]">
          <div className="flex space-x-2">
            <BsPersonGear size="30px" />
            <TextInput
              id="nama"
              name="nama"
              label="Nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="flex space-x-2">
            <CiLocationArrow1 size="30px" />
            <TextInput
              id="kecamatan"
              name="Kecamatan"
              label="Kecamatan"
              value={kecamatan}
              onChange={(e) => setKecamatan(e.target.value)}
            />
          </div>
          <div className="flex space-x-2">
            <GiVillage size="30px" />
            <TextInput
              id="desa"
              name="desa"
              label="Desa"
              value={desa}
              onChange={(e) => setDesa(e.target.value)}
            />
          </div>
          <div className="flex space-x-2">
            <SlLocationPin size="30px" />
            <TextInput
              id="alamat"
              name="alamat"
              label="Alamat"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
            />
          </div>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="w-[30%] float-end text-white bg-[#307B28] hover:bg-white hover:text-[#307B28] focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        Update Data Profil
      </button>
    </div>
  );
}
