import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { GetPreseiKehadiran } from '@/infrastruture';
import { Image } from '@mantine/core';
import LoadingAnimation from '../../../components/loadingSession';
function PresensiKehadiran() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    GetPreseiKehadiran().then((data) => {
      const datafix = data?.map((item) => {
        return {
          id: item?.id,
          nipPenyuluh: item?.dataPerson?.NIP,
          namaPenyuluh: item?.dataPerson?.nama,
          tanggalPresensi: item?.tanggalPresesi?.split('T')[0],
          judulKegiatan: item?.judulKegiatan,
          deskripsiKegiatan: item?.deskripsiKegiatan,
          kecamatan: item?.dataPerson?.kecamatan,
          wilayahBinaan: item?.dataPerson?.dataPenyuluh?.desaBinaan,
          fotoKegiatan: item?.FotoKegiatan
        };
      });
      setDatas(datafix);
      setLoading(false);
    });
  }, []);
  const [filters, setFilters] = useState({
    nipPenyuluh: '',
    namaPenyuluh: '',
    tanggalPresensi: '',
    judulKegiatan: '',
    deskripsiKegiatan: '',
    kecamatan: '',
    wilayahBinaan: '',
    fotoKegiatan: ''
  });

  const handleFilterChange = (e, column) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [column]: e.target.value
    }));
  };

  const filteredData = datas.filter((item) => {
    return Object.keys(filters).every((key) => {
      if (filters[key] !== '') {
        if (typeof item[key] === 'number') {
          return item[key] === Number(filters[key]);
        } else {
          return item[key].toLowerCase().includes(filters[key].toLowerCase());
        }
      }
      return true;
    });
  });
  return (
    <div className="flex justify-center pt-12">
      <div className="w-full lg:max-w-screen-lg 2xl:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl shadow-xl rounded-lg overflow-x-auto overflow-y-auto">
        <div className="pt-20">
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-2 truncate border">NIP Penyuluh</th>
                <th className="px-4 py-2 truncate border">Nama Penyuluh</th>
                <th className="px-4 py-2 truncate border">Tanggal Presensi</th>
                <th className="px-4 py-2 truncate border">Judul kegiatan</th>
                <th className="px-4 py-2 truncate border">Deskripsi kegiatan</th>
                <th className="px-4 py-2 truncate border">Kecamatan</th>
                <th className="px-4 py-2 truncate border">Wilayah Binaan</th>
                <th className="px-4 py-2 truncate border">Foto Kegiatan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={filters.nipPenyuluh}
                      onChange={(e) => handleFilterChange(e, 'nipPenyuluh')}
                      className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                      placeholder="Filter NIP Penyuluh"
                    />
                    <FontAwesomeIcon icon={faFilter} className="text-gray-500 ml-2" />
                  </div>
                </td>
                <td className="px-4 py-2 border">
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={filters.namaPenyuluh}
                      onChange={(e) => handleFilterChange(e, 'namaPenyuluh')}
                      className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                      placeholder="Filter Nama Penyuluh"
                    />
                    <FontAwesomeIcon icon={faFilter} className="text-gray-500 ml-2" />
                  </div>
                </td>
                <td className="px-4 py-2 border">
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={filters.tanggalPresensi}
                      onChange={(e) => handleFilterChange(e, 'tanggalPresensi')}
                      className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                      placeholder="Filter Tanggal Presensi"
                    />
                    <FontAwesomeIcon icon={faFilter} className="text-gray-500 ml-2" />
                  </div>
                </td>
                <td className="px-4 py-2 border">
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={filters.jamKedatangan}
                      onChange={(e) => handleFilterChange(e, 'judulKegiatan')}
                      className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                      placeholder="Filter Judul kegiatan"
                    />
                    <FontAwesomeIcon icon={faFilter} className="text-gray-500 ml-2" />
                  </div>
                </td>
                <td className="px-4 py-2 border">
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={filters.jamPulang}
                      onChange={(e) => handleFilterChange(e, 'deskripsiKegiatan')}
                      className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                      placeholder="Filter Deskripsi kegiatan"
                    />
                    <FontAwesomeIcon icon={faFilter} className="text-gray-500 ml-2" />
                  </div>
                </td>
                <td className="px-4 py-2 border">
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={filters.kecamatan}
                      onChange={(e) => handleFilterChange(e, 'kecamatan')}
                      className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                      placeholder="Filter Kecamatan"
                    />
                    <FontAwesomeIcon icon={faFilter} className="text-gray-500 ml-2" />
                  </div>
                </td>
                <td className="px-4 py-2 border">
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={filters.wilayahBinaan}
                      onChange={(e) => handleFilterChange(e, 'wilayahBinaan')}
                      className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                      placeholder="Filter Wilayah Binaan"
                    />
                    <FontAwesomeIcon icon={faFilter} className="text-gray-500 ml-2" />
                  </div>
                </td>
                <td className="px-4 py-2 border">
                  <div className="flex items-center"></div>
                </td>
              </tr>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-2 border">{item.nipPenyuluh}</td>
                  <td className="px-4 py-2 border">{item.namaPenyuluh}</td>
                  <td className="px-4 py-2 border">{item.tanggalPresensi}</td>
                  <td className="px-4 py-2 border">{item.judulKegiatan}</td>
                  <td className="px-4 py-2 border">{item.deskripsiKegiatan}</td>
                  <td className="px-4 py-2 border">{item.kecamatan}</td>
                  <td className="px-4 py-2 border">{item.wilayahBinaan}</td>
                  <td className="px-4 py-2 border">
                    <Image
                      width={170}
                      height={170}
                      mx="auto"
                      radius="md"
                      src={item.fotoKegiatan}
                      alt={item?.judulKegiatan || ''}
                      withPlaceholder
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {loading && <LoadingAnimation />}
        </div>
      </div>
    </div>
  );
}

export default PresensiKehadiran;
