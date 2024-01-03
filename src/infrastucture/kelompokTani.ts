import SweatAlert from "../components/uiComponents/swetAlert";
import API from "./base";

export const GetKelompokTaniById = async (id: number) => {
  try {
    const response = await API.get(`/kelompok-tani/${id}`);
    return response.data;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
