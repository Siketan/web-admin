import MainCard from "@/components/MainCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
export default function DetailRekapPetani() {
  return (
    <MainCard row transparent noPadding center>
      <MainCard width="50%">
        <MainCard fullwidth transparent>
          <a href="/data-tani/rekap-petani" className="ml-auto cursor-pointer">
            <FontAwesomeIcon icon={faX} />
          </a>
          <p className="text-center font-bold text-base md:text-2xl mb-5">
            Detail Rekap Petani
          </p>
          <div className="text-left">
            <div className="flex">
              <p className="relative z-0 w-full mb-6 group">
                <strong>Kecamatan : </strong> Serang
              </p>
              <p className="relative z-0 w-full mb-6 group">
                <strong>Desa : </strong> Taktakan
              </p>
            </div>
            <div className="flex">
              <p className="relative z-0 w-full mb-6 group">
                <strong>NIK : </strong> 089515776243
              </p>
              <p className="relative z-0 w-full mb-6 group">
                <strong>Nama : </strong> Kuitua
              </p>
            </div>
            <div className="flex">
              <p className="relative z-0 w-full mb-6 group">
                <strong>Komoditas : </strong> Sewa
              </p>
              <p className="relative z-0 w-full mb-6 group">
                <strong>Jenis Tanaman : </strong> Buah
              </p>
            </div>
            <div className="flex">
              <p className="relative z-0 w-full mb-6 group">
                <strong>Musim Tanam : </strong> Agustus
              </p>
              <p className="relative z-0 w-full mb-6 group">
                <strong>Luas Lahan : </strong> 100 M2
              </p>
            </div>
            <div className="flex">
              <p className="relative z-0 w-full mb-6 group">
                <strong>Tanggal Tanam : </strong> 12 Maret 2023
              </p>
              <p className="relative z-0 w-full mb-6 group">
                <strong>Prakiraan Tanggal Panen : </strong> 30 Agustus 2023
              </p>
            </div>
            <div className="flex">
              <p className="relative z-0 w-full mb-6 group">
                <strong>Kondisi Tanam : </strong> Bagus
              </p>
              <p className="relative z-0 w-full mb-6 group">
                <strong>Prakiraan Hasil Panen : </strong> 90 M2
              </p>
            </div>
            <div>
              <p className="relative z-0 w-full mb-6 group">
                <strong>Realisasi Hasil Panen : </strong> 70 M2
              </p>
            </div>
          </div>
        </MainCard>
      </MainCard>
    </MainCard>
  );
}
