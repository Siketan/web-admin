import SweatAlert from "../components/uiComponents/swetAlert";
import { TDataTanamanInput } from "../types/dataTanaman";
import Api from "./base";

export const AddNewDataTanaman = async (data: TDataTanamanInput) => {
  try {
    const response = await Api.post("/statistik", data);
    SweatAlert(String(response.data.message), "success");
    return response.data;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};

export const GetStatistikTanamanAll = async () => {
  try {
    const response = await Api.get(`/statistik`);
    return response.data;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};

export const GetStatistikTanamanById = async (id: number) => {
  try {
    const response = await Api.get(`/statistik/${id}`);
    return response.data;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};

export const UpdateStatistikTanamanById = async (
  id: number,
  data: TDataTanamanInput
) => {
  try {
    const response = await Api.put(`/statistik/${id}`, data);
    SweatAlert(String(response.data.message), "success");
    return response.data;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};

export const DeleteStatistikTanamanById = async (id: number) => {
  try {
    const response = await Api.delete(`/statistik/${id}`);
    SweatAlert(String(response.data.message), "success");
    return response.data;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
