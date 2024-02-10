import SweatAlert from '../components/uiComponents/swetAlert';
import API from './base';

export const getLogActivity = async (page, limit) => {
  try {
    const url = `/log-activity?page=${page}&limit=${limit}`;
    const response = await API.get(url);
    return response.data;
  } catch (error) {
    SweatAlert(String(error.response.data.message), 'error');
  }
};

export const postLogActivity = async (data: LogActivity) => {
  try {
    const response = await API.post('/log-activity', data);
    return response.data;
  } catch (error) {
    SweatAlert(String(error.response.data.message), 'error');
  }
};
