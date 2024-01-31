import SweatAlert from '../components/uiComponents/swetAlert';
import { TKelompokTani } from '../types/kelompokTani';
import { TPetani } from '../types/petani';
import Api from './base';

export const SearchPoktan = async (search: string) => {
  try {
    const response = await Api.get(`/search/poktan?search=${search}`);

    return response.data.data as TKelompokTani[];
  } catch (error) {
    SweatAlert(String(error.response.data.message), 'error');
  }
};

export const SearchPetani = async (search: string) => {
  try {
    const response = await Api.get(`/search/petani?search=${search}`);

    return response.data.data as TPetani[];
  } catch (error) {
    SweatAlert(String(error.response.data.message), 'error');
  }
};
