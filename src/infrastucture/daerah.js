import axios from 'axios';
const fecthKecamatan = async () => {
  try {
    const response = await axios.get(
      'https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=3521'
    );
    return response.data;
  } catch (error) {
    return 'terjadi kesalahan';
  }
};
const fecthDesa = async (id) => {
  try {
    const response = await axios.get(
      `https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${id}`
    );
    return response.data;
  } catch (error) {
    return 'terjadi kesalahan';
  }
};

export { fecthKecamatan, fecthDesa };
