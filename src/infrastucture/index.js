import Api from "./base";
import SweatAlert from "../components/uiComponents/swetAlert";
// import LoadingAnimation from "../components/loading";

const headers = {
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
};
// authentication
export const Register = async (data) => {
  try {
    const response = await Api.post("/auth/register", data);
    SweatAlert(String(response.data.message), "success");
    // redirect to login page
    window.location.href = "/loginAdminSiketan";
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const Login = async (data) => {
  try {
    const response = await Api.post("/auth/login", data);
    console.log(response);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("nama", response?.data?.user?.nama);
    window.location.href = "data-tani/rekap-petani";
    SweatAlert(String(response.data.message), "success");
    // <LoadingAnimation/>
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const GetProfile = async () => {
  const response = await Api.get("/auth/profile");
  return response;
};
export const Logout = () => {
  localStorage.clear();
  window.location = "/loginAdminSiketan";
};

// cekNik
export const CekNik = async (data) => {
  try {
    const response = await Api.post("/cek-nik", data);
    return response.data.users;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const CekNiP = async (data) => {
  try {
    const response = await Api.post("/cek-nip", data);
    return response.data.users;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};

// data tani
export const DaftarTaniAdd = async (data) => {
  try {
    const response = await Api.post("/daftar-tani/add", data, headers);
    SweatAlert(
      String(response.data.message),
      "success",
      "/data-tani/rekap-petani"
    );
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const DeleteDaftarTani = async (id) => {
  try {
    const response = await Api.delete(`/daftar-tani/${id}`);
    SweatAlert(String(response.data.message), "success", "reload");
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const AddLaporanTani = async (data) => {
  try {
    const response = await Api.post("/laporan-tani/add", data, headers);
    SweatAlert(String(response.data.message), "success");
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const tambahLaporanAkhir = async (data) => {
  try {
    const response = await Api.post("/laporan-akhir", data, headers);
    SweatAlert(String(response.data.message), "success");
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error", "reload");
  }
};
export const editDaftarTani = async (id, data) => {
  try {
    const response = await Api.put(`/daftar-tani/${id}`, data, headers);
    SweatAlert(
      String(response.data.message),
      "success",
      "/data-tani/rekap-petani"
    );
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error", "reload");
  }
};
export const GetLaporanTani = async () => {
  try {
    const response = await Api.get("/laporan-petani");
    return response.data;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const GetDaftarTani = async () => {
  try {
    const response = await Api.get(`/daftar-tani`);
    return response.data.tani;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const GetDaftarTaniById = async (id) => {
  try {
    const response = await Api.get(`/daftar-tani/${id}`);
    return response.data.detailTani;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};

export const GetTanmanPetani = async (id) => {
  try {
    const response = await Api.get(`/tanaman-petani/${id}`);
    return response.data.tani;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const GetDetailTanmanTani = async (id) => {
  try {
    const response = await Api.get(`/tanaman-petani/detail/${id}`);
    return response.data;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const AddTanmanPetani = async (data) => {
  try {
    const response = await Api.post("/tanaman-petani", data);
    SweatAlert(String(response.data.message), "success");
    setTimeout(() => {
      window.location.href = `/data-tani/detail/${data.dataPersonId}`;
    }, 500);
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const editTanmanPetani = async (id, data) => {
  try {
    const response = await Api.put(`/tanaman-petani/${id}`, data);
    SweatAlert(String(response.data.message), "success");
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const DeleteTanamanPetani = async (id) => {
  try {
    const response = await Api.delete(`/tanaman-petani/${id}`);
    SweatAlert(String(response.data.message), "success", "reload");
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
// info tani
export const AddInfoTani = async (data) => {
  try {
    const response = await Api.post("/info-tani/add", data, headers);
    SweatAlert(String(response.data.message), "success", "/info-tani");
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const GetInfoTani = async () => {
  try {
    const response = await Api.get("/info-tani");
    return response.data;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const GetInfoTaniById = async (id) => {
  try {
    const response = await Api.get(`/info-tani/${id}`);
    return response.data;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};

export const AddEventTani = async (data) => {
  try {
    const response = await Api.post("/event-tani/add", data, headers);
    SweatAlert(
      String(response.data.message),
      "success",
      "/info-tani/event-tani"
    );
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const GetEventTani = async () => {
  try {
    const response = await Api.get("/event-tani");
    return response.data;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const GetEventTaniById = async (id) => {
  try {
    const response = await Api.get(`/event-tani/${id}`);
    return response.data?.infotani;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const DeleteEventTani = async (id) => {
  try {
    const response = await Api.delete(`/event-tani/${id}`);
    SweatAlert(String(response.data.message), "success", "reload");
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const DeleteInfoTani = async (id) => {
  try {
    const response = await Api.delete(`/info-tani/${id}`);
    SweatAlert(String(response.data.message), "success", "reload");
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const updateEventTani = async (id, data) => {
  try {
    const response = await Api.put(`/event-tani/${id}`, data, headers);
    SweatAlert(String(response.data.message), "success", "reload");
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const updateInfoTani = async (id, data) => {
  try {
    const response = await Api.put(`/info-tani/${id}`, data, headers);
    SweatAlert(String(response.data.message), "success", "reload");
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};

// toko tani
export const AddPenjual = async (data, log) => {
  try {
    const response = await Api.post("/daftar-penjual/add", data, headers);
    if ((log = "petani")) {
      SweatAlert(
        String(response.data.message),
        "success",
        "/toko-tani/produk-petani"
      );
    } else if ((log = "penyuluh")) {
      SweatAlert(
        String(response.data.message),
        "success",
        "/toko-tani/produk-penyuluh"
      );
    }
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error", "reload");
  }
};
export const ProductsPenyuluh = async () => {
  try {
    const response = await Api.get("/product-penyuluh");
    return response.data;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const ProductsPetani = async () => {
  try {
    const response = await Api.get("/product-petani");
    return response.data;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};

// data penyuluh
export const AddPenyuluh = async (data) => {
  try {
    const response = await Api.post("/penyuluh/add", data, headers);
    SweatAlert(String(response.data.message), "success");
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const AddPresesiKehadiran = async (data) => {
  try {
    const response = await Api.post("/presesi-kehadiran/add", data);
    SweatAlert(String(response.data.message), "success");
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const AddJurnalKegiatan = async (data) => {
  try {
    const response = await Api.post("/jurnal-kegiatan/add", data, headers);
    SweatAlert(String(response.data.message), "success");
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const GetPreseiKehadiran = async () => {
  try {
    const response = await Api.get("/presensi-kehadiran/web");
    return response.data?.DataPresesiKehadiran;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const GatJurnalKegiatan = async () => {
  try {
    const response = await Api.get("/jurnal-kegiatan");
    return response.data;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const GetRiwayatChat = async () => {
  try {
    const response = await Api.get("/riwayat-chat");
    return response.data;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const getDaftarPenyuluh = async () => {
  try {
    const response = await Api.get("/daftar-penyuluh");
    return response.data.dataDaftarPenyuluh;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const DeleteDaftarPenyuluh = async (id) => {
  try {
    const response = await Api.delete(`/daftar-penyuluh/${id}`);
    SweatAlert(String(response.data.message), "success", "reload");
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};

// live chat
export const AddChat = async (data) => {
  try {
    const response = await Api.post("/chat/add", data);
    SweatAlert(String(response.data.message), "success");
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const AddRating = async () => {
  try {
    const response = await Api.post("/rating-add");
    SweatAlert(String(response.data.message), "success");
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const GetChatt = async () => {
  try {
    const response = await Api.get("/chat");
    return response.data;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const GetRatting = async () => {
  try {
    const response = await Api.get("/ratting");
    return response.data;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};

// laporan tanaman
export const tambahLaporanTanam = async (data) => {
  try {
    const response = await Api.post("/laporan-tanam", data, headers);
    SweatAlert(String(response.data.message), "success");
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
    throw new Error(error);
  }
};
export const editLaporanTanam = async (id, data) => {
  try {
    const response = await Api.put(`/laporan-tanam/${id}`, data, headers);
    SweatAlert(String(response.data.message), "success");
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
    throw new Error(error);
  }
};
export const getAllLaporanTanam = async (id) => {
  try {
    const response = await Api.get(`/laporan-tanam/${id}`);
    return response.data;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const deleteLaporanTanam = async (id) => {
  try {
    const response = await Api.delete(`/laporan-tanam/${id}`);
    SweatAlert(String(response.data.message), "success", "reload");
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const getByIdLaporanTanam = async (id) => {
  try {
    const response = await Api.get(`/laporan-tanam/detail/${id}`);
    return response.data.daftarTani;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};

export const select = async (desa) => {
  try {
    const response = await Api.get(`/kelompok-tani/${desa}`);
    return response.data;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const selectPenyuluh = async (kecamatan) => {
  try {
    const response = await Api.get(`/select-tani/${kecamatan}`);
    return response.data;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const getNotification = async () => {
  try {
    const response = await Api.get("/auth/verify");
    return response.data.user;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const updateStatusUser = async (id) => {
  try {
    const response = await Api.get(`/auth/verify/${id}`);
    return response.data;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
export const getPenyuluhById = async (id) => {
  try {
    const response = await Api.get(`/daftar-penyuluh/${id}`);
    return response.data;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
    throw new Error("error");
  }
};
export const updatePenyuluhById = async (payload, id) => {
  try {
    const response = await Api.put(`/daftar-penyuluh/${id}`, payload, headers);
    SweatAlert(
      String(response.data.message),
      "success",
      "/data-penyuluh/rekap-penyuluh"
    );
    return response.data;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
