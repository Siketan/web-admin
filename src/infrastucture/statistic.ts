import SweatAlert from "../components/uiComponents/swetAlert";
import { TDataTanaman, TDataTanamanInput } from "../types/dataTanaman";
import { PaginatedRespApi, RespApiData } from "../types/paginatedRespApi";
import {
  TKategoriResponse,
  TKomoditasResponse,
  TSummaryKategoriResponse,
  TSummaryKomoditasResponse,
} from "../types/statistik";
import { TTanamanPetani } from "../types/tanamanPetani";
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

export const GetStatistikTanamanAll = async (poktan_id?: number) => {
  try {
    const response = await Api.get(`/statistik?poktan_id=${poktan_id}`);
    return response.data as PaginatedRespApi<TDataTanaman>;
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

export const GetStatistikTanamanPetani = async (
  month: number,
  year: number,
  lineType = "komoditas",
  pieType = "kategori"
) => {
  try {
    const response = await Api.get(
      `/tanaman-petani/statistik?month=${month}&year=${year}&lineType=${lineType}&pieType=${pieType}`
    );

    return response.data as RespApiData<{
      latest: TTanamanPetani[];
      statistik: TKomoditasResponse[];
      summary: TSummaryKategoriResponse[];
    }>;
  } catch (error) {
    SweatAlert(String(error.response.data.message), "error");
  }
};
