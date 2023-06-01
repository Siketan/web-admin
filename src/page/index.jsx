import DataTani from "./dataTani"
import TambahDataTani from "./dataTani/tambahData"
import LaporanPenyuluh from "./dataTani/dataPertanian/laporanPenyuluhan"
import LaporanPetani from "./dataTani/dataPertanian/laporanPetani"
import InfoTani from "./infoTani"
import TambahInfoTani from "./infoTani/tambahData"
import EventTani from "./infoTani/eventTani"
import TambahEventTani from "./infoTani/eventTani/tambahEventTani"
import LiveChat from "./liveChat"
import RatingPetugas from "./liveChat/ratingPetugas"
import TambahPenyuluhanTani from "./penyuluhanTani/tambahData"
import DataRiwayatChat from "./penyuluhanTani/detailPenyuluh/dataRiwayatChat"
import JurnalKegiatan from "./penyuluhanTani/detailPenyuluh/jurnalKegiatan"
import PresensiKehadiran from "./penyuluhanTani/detailPenyuluh/presensiKehadiran"
import TambahPenjual from "./tokoTani/tambahDataPenjual"
import ProdukPenyuluh from "./tokoTani/produk/penyuluh"
import ProdukPetani from "./tokoTani/produk/petani"
import Airplane404 from "../assets/notFound.svg"

const NotFoundPage = () => {
  return (
<div className="container img-banner">
  <div className="flex justify-center mt-5 mb-5">
    <div className="col-md-4">
      <img src={Airplane404} alt="airplane404" />
    </div>
    <div className="col-md-4 text-center mt-5">
      <h1 className="text-4xl font-bold text-blue-600">404</h1>
      <h3 className="text-2xl text-gray-800">Page Not Found!</h3>
    </div>
  </div>
</div>

  );
};

export {DataTani, TambahDataTani, LaporanPenyuluh, LaporanPetani, InfoTani, TambahInfoTani,EventTani, TambahEventTani, LiveChat, RatingPetugas, TambahPenyuluhanTani, DataRiwayatChat, JurnalKegiatan, PresensiKehadiran, TambahPenjual, ProdukPenyuluh, ProdukPetani, NotFoundPage}