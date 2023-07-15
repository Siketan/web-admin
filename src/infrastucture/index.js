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
      localStorage.setItem('nama', response?.data?.user?.nama)
      window.location.href = "data-tani/rekap-petani"
      SweatAlert(String(response.data.message), 'success');
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}


export const Logout = ()=>{
  localStorage.clear()
  window.location = "./loginAdminSiketan"
} 

// cekNik
export const CekNik = async(data)=>{
    try {
      const response = await Api.post("/cek-nik", data);
      return response.data.users
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
export const DeleteDaftarTani = async(id)=>{
    try {
      const response = await Api.delete(`/daftar-tani/${id}`);
      SweatAlert(String(response.data.message), 'success', "reload");
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
export const editDaftarTani = async(id, data)=>{
    try {
      const response = await Api.put(`/daftar-tani/${id}`, data, headers);
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
export const GetDaftarTaniById = async(id)=>{
    try {
      const response = await Api.get(`/daftar-tani/${id}`);
      return response.data.detailTani
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}

// info tani
export const AddInfoTani = async(data)=>{
    try {
      const response = await Api.post("/info-tani/add", data, headers);
      SweatAlert(String(response.data.message), 'success', '/info-tani');
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
export const GetInfoTaniById = async(id)=>{
    try {
      const response = await Api.get(`/info-tani/${id}`);
      return response.data
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}
    
export const AddEventTani = async(data)=>{
    try {
      const response = await Api.post("/event-tani/add", data, headers);
      SweatAlert(String(response.data.message), 'success', '/info-tani/event-tani');
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
export const GetEventTaniById = async(id)=>{
    try {
      const response = await Api.get(`/event-tani/${id}`);
      return response.data?.infotani
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}
export const DeleteEventTani = async(id)=>{
    try {
      const response = await Api.delete(`/event-tani/${id}`);
      SweatAlert(String(response.data.message), 'success', "reload");
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}
export const DeleteInfoTani = async(id)=>{
    try {
      const response = await Api.delete(`/info-tani/${id}`);
      SweatAlert(String(response.data.message), 'success', "reload");
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}
export const updateEventTani = async(id, data)=>{
    try {
      const response = await Api.put(`/event-tani/${id}`, data, headers);
      SweatAlert(String(response.data.message), 'success', "reload");
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}
export const updateInfoTani = async(id, data)=>{
    try {
      const response = await Api.put(`/info-tani/${id}`, data, headers);
      SweatAlert(String(response.data.message), 'success', "reload");
    } catch (error) {
      console.log(error)
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
export const getDaftarPenyuluh = async()=>{
    try {
      const response = await Api.get("/daftar-penyuluh");
      return response.data
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}
export const DeleteDaftarPenyuluh = async(id)=>{
    try {
      const response = await Api.delete(`/daftar-penyuluh/${id}`);
      SweatAlert(String(response.data.message), 'success', "reload");
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




export const select = async(kecamatan)=>{
    try {
      const response = await Api.get(`/select-tani/${kecamatan}`);
      return response.data
    } catch (error) {
      SweatAlert(String(error.response.data.message), 'error');
    }
}