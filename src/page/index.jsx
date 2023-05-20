import DataTani from "./dataTani"
import TambahDataTani from "./dataTani/tambahData"
import InfoTani from "./infoTani"
import TambahInfoTani from "./infoTani/tambahData"
import PenyuluhanTani from "./penyuluhanTani"
import TambahPenyuluhanTani from "./penyuluhanTani/tambahData"
import TokoTani from "./tokoTani"
import TambahTokoTani from "./tokoTani/tambahData"
import UserTani from "./userTani"
import TambahUserTani from "./userTani/tambahData"
import InfoKegiatan from "./pengaturan/InfoKegiatan"
import LayananPesanan from "./pengaturan/layananPesanan"
const coba = ()=>{
    return(
        <div className="m-20 flex justify-center">
            <div>
                <h1> ini url yg ada  = "/" </h1>
                <h1> ini url yg ada  = "/data-tani" </h1>
                <h1> ini url yg ada  = "/data-tani/tambah" </h1>
                <h1> ini url yg ada  = "/info-tani" </h1>
                <h1> ini url yg ada  = "/info-tani/tambah" </h1>
                <h1> ini url yg ada  = "/penyuluhan-tani" </h1>
                <h1> ini url yg ada  = "/penyuluhan-tani/tambah" </h1>
                <h1> ini url yg ada  = "/toko-tani" </h1>
                <h1> ini url yg ada  = "/toko-tani/tambah" </h1>
                <h1> ini url yg ada  = "/user-tani" </h1>
                <h1> ini url yg ada  = "/user-tani/tambah" </h1>
                <h1> ini url yg ada  = "/layanan-pesanan" </h1>
                <h1> ini url yg ada  = "/info-kegiatan" </h1>
            </div>
        </div>
    )
}


export default coba;

export {DataTani, TambahDataTani, InfoTani, TambahInfoTani, PenyuluhanTani, TambahPenyuluhanTani, TokoTani, TambahTokoTani, UserTani, TambahUserTani, LayananPesanan, InfoKegiatan}