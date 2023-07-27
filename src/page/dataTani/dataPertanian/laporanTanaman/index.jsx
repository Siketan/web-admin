import MainCard from "@/components/MainCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "@mantine/core";
import {
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
export default function DetailTanamanPetani() {

  return (
    <div>
      <MainCard row transparent noPadding center>
        <MainCard width="40%">
          <MainCard fullwidth transparent>
            <p className="font-bold text-center text-2xl">Detail Tanaman</p>
            <div className="text-left lg:ms-16 xl:ms-26 2xl:ms-36 pt-5 px-5 md:px-0">
              <div className="flex">
                <p className="relative z-0 w-full mb-5 group">
                  <strong>Luas Lahan : </strong>
                </p>
                <p className="relative z-0 w-full mb-5 group">
                  <strong>Musim Tanam : </strong> 
                </p>
              </div>
              <div className="flex">
                <p className="relative z-0 w-full mb-5 group">
                  <strong>Prakiraan Hasil Panen : </strong>
                </p>
                <p className="relative z-0 w-full mb-5 group">
                  <strong>Hasil Panen : </strong>
                </p>
              </div>
              <div className="flex">
                <p className="relative z-0 w-full mb-5 group">
                  <strong>Status Lahan : </strong>
                </p>
                <p className="relative z-0 w-full mb-5 group">
                  <strong>Bulan/Tahun Tanam : </strong>
                </p>
              </div>
              <div className="flex">
                <p className="relative z-0 w-full mb-5 group">
                  <strong>Komoditas : </strong>
                </p>
                <p className="relative z-0 w-full mb-5 group">
                  <strong>Kategori : </strong>
                </p>
              </div>
              <div className="flex">
                <p className="relative z-0 w-full mb-5 group">
                  <strong>Jenis Tanaman : </strong>
                </p>
                <p className="relative z-0 w-full mb-5 group">
                  <strong>Jenis Panen : </strong>
                </p>
              </div>
            </div>
          </MainCard>
        </MainCard>
      </MainCard>
      <h1 className="text-center font-bold my-5">Laporan Tanaman</h1>
        <Link to={`/laporan-tanam/add?tanamanId=${Petani.id}`}>
          <button className="ms-16 rounded-md bg-blue-500 text-white p-2 px-5 w-35 h-10"> 
            <FontAwesomeIcon
              icon={faPlus}
            />
            Tambah Tanaman</button>
        </Link>
        <MainCard row transparent center className="flex-wrap">
            {[...Array(5)].map((_, index) => (
            <MainCard key={index} width="390px">
                <MainCard fullwidth transparent>
                <Image width={170} height={170} mx="auto" radius="md" alt="Random image" withPlaceholder />
                <div className="pt-5 px-5 md:px-0">
                    <div className="grid md:grid-cols-2">
                    <div className="flex justify-start font-bold text-green-primary">
                        <p>27 Juli 2023</p>
                    </div>
                    <div className="flex justify-end font-bold text-orange-primary">
                        <p>Status</p>
                    </div>
                    </div>
                    <div className="py-5">
                    <p className="relative z-0 w-full group font-semibold">
                        <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </span>
                    </p>
                    </div>
                    <div className="flex justify-end">
                    <FontAwesomeIcon icon={faEdit} className="cursor-pointer text-blue-500 hover:text-blue-600 pr-3" />
                    <FontAwesomeIcon icon={faTrash} className="cursor-pointer text-red-500 hover:text-red-600" />
                    </div>
                </div>
                </MainCard>
            </MainCard>
            ))}
  </MainCard>
    </div>
  );
}
