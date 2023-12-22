import SweatAlert from "../components/uiComponents/swetAlert";
import { dataTanamanInput } from "../types/dataTanaman";
import Api from "./base";

export const addNewDataTanaman = async (data: dataTanamanInput) => {
  try {
    const response = await Api.post("/statistik", data);
    SweatAlert(String(response.data.message), "success");
    return response.data;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
