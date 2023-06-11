import Api from "./base"
import SweatAlert from "../components/uiComponents/swetAlert"

const headers = {
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
};
// authentication
export const Register = async(data)=>{
    try {
      const response = await Api.post("/auth/register", data);
      SweatAlert(String(response.data.message), 'success');
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}
export const Login = async(data)=>{
    try {
      const response = await Api.post("/auth/login", data);
      localStorage.setItem('token', response.data.token)
      SweatAlert(String(response.data.message), 'success');
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}

// cekNik
export const CekNik = async(data)=>{
    try {
      const response = await Api.post("/cek-nik", data);
      return response.data
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}

// data tani 
export const DaftarTaniAdd = async(data)=>{
    try {
      const response = await Api.post("/daftar-tani/add", data, headers);
      SweatAlert(String(response.data.message), 'success');
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}

export const AddLaporanTani = async(data)=>{
    try {
      const response = await Api.post("/laporan-tani/add", data, headers);
      SweatAlert(String(response.data.message), 'success');
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}
export const GetLaporanTani = async()=>{
    try {
      const response = await Api.get("/laporan-petani");
      return response.data
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}

// info tani
export const AddInfoTani = async(data)=>{
    try {
      const response = await Api.post("/info-tani/add", data, headers);
      SweatAlert(String(response.data.message), 'success');
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}
export const GetInfoTani = async()=>{
    try {
      const response = await Api.get("/info-tani");
      return response.data
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}
    
export const AddEventTani = async(data)=>{
    try {
      const response = await Api.post("/event-tani/add", data, headers);
      SweatAlert(String(response.data.message), 'success');
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}
export const GetEventTani = async()=>{
    try {
      const response = await Api.get("/event-tani");
      return response.data
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}

// toko tani
export const AddPenjual = async(data)=>{
    try {
      const response = await Api.post("/daftar-penjual/add", data, headers);
      SweatAlert(String(response.data.message), 'success');
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}
export const ProductsPenyuluh = async()=>{
    try {
      const response = await Api.get("/product-penyuluh");
      return response.data
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}
export const ProductsPetani = async()=>{
    try {
      const response = await Api.get("/product-petani");
      return response.data
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}

// data penyuluh 
export const AddPenyuluh = async(data)=>{
    try {
      const response = await Api.post("/penyuluh/add", data, headers);
      SweatAlert(String(response.data.message), 'success');
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}
export const AddPresesiKehadiran = async(data)=>{
    try {
      const response = await Api.post("/presesi-kehadiran/add", data);
      SweatAlert(String(response.data.message), 'success');
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}
export const AddJurnalKegiatan = async(data)=>{
    try {
      const response = await Api.post("/jurnal-kegiatan/add", data, headers);
      SweatAlert(String(response.data.message), 'success');
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}
export const GetPreseiKehadiran = async()=>{
    try {
      const response = await Api.get("/presesi-kehadiran");
      return response.data
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}
export const GatJurnalKegiatan = async()=>{
    try {
      const response = await Api.get("/jurnal-kegiatan");
      return response.data
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}
export const GetRiwayatChat = async()=>{
    try {
      const response = await Api.get("/riwayat-chat");
      return response.data
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}

// live chat
export const AddChat = async(data)=>{
    try {
      const response = await Api.post("/chat/add", data);
      SweatAlert(String(response.data.message), 'success');
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}
export const AddRating = async()=>{
    try {
      const response = await Api.post("/rating-add");
      SweatAlert(String(response.data.message), 'success');
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}
export const GetChatt = async()=>{
    try {
      const response = await Api.get("/chat");
      return response.data
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}
export const GetRatting = async()=>{
    try {
      const response = await Api.get("/ratting");
      return response.data
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}