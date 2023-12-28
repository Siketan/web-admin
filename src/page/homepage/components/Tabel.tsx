import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export default function Tabel() {
  const [filters, setFilters] = useState({
    kecamatan: "",
    desa: "",
    komoditas: "",
    jenisTanaman: "",
    musimTanam: "",
    luasLahan: "",
    tanggalTanam: "",
    prakiraanTanggalPanen: "",
    kondisiTanam: "",
    prakiraanHasilPanen: "",
    realisasiHasilPanen: "",
  });

  const handleFilterChange = (e, column) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [column]: e.target.value,
    }));
  };

  const data = [
    {
      id: 1,
      kecamatan: "Kecamatan A",
      desa: "Desa 1",
      komoditas: "Padi",
      jenisTanaman: "Tumbuhan",
      musimTanam: "Musim 1",
      luasLahan: 1000,
      tanggalTanam: "2023-05-01",
      prakiraanTanggalPanen: "2023-08-01",
      kondisiTanam: "Baik",
      prakiraanHasilPanen: 500,
      realisasiHasilPanen: 450,
    },
    {
      id: 2,
      kecamatan: "AdasaA",
      desa: "Wonorejo",
      komoditas: "Padi",
      jenisTanaman: "Tumbuhan",
      musimTanam: "Musim 1",
      luasLahan: 1000,
      tanggalTanam: "2023-05-01",
      prakiraanTanggalPanen: "2023-08-01",
      kondisiTanam: "Baik",
      prakiraanHasilPanen: 500,
      realisasiHasilPanen: 450,
    },
    {
      id: 3,
      kecamatan: "testing",
      desa: "Klakah",
      komoditas: "Padi",
      jenisTanaman: "Tumbuhan",
      musimTanam: "Musim 1",
      luasLahan: 1000,
      tanggalTanam: "2023-05-01",
      prakiraanTanggalPanen: "2023-08-01",
      kondisiTanam: "Baik",
      prakiraanHasilPanen: 500,
      realisasiHasilPanen: 450,
    },
  ];

  const filteredData = data.filter((item) => {
    return Object.keys(filters).every((key) => {
      if (filters[key] !== "") {
        if (typeof item[key] === "number") {
          return item[key] === Number(filters[key]);
        } else {
          return item[key].toLowerCase().includes(filters[key].toLowerCase());
        }
      }
      return true;
    });
  });

  const totalData = filteredData.length;
  return (
    <div className="flex justify-center pt-12 w-full">
      <div className="w-[96%] shadow-xl rounded-lg overflow-x-auto overflow-y-auto">
        <div className="pt-10">
          <h2 className="text-center mb-4 font-bold">
            STATISTIK PERTUMBUHAN PERTANIAN DALAM 1 TAHUN
          </h2>
          <p className="text-right mt-4 px-5 py-5">
            <strong>Jumlah Data :</strong> {totalData} Data Statistik
            Pertumbuhan Pertanian Selama 1 Tahun
          </p>
          <div className="h-[calc(100vh-200px)] overflow-y-scroll ">
            <table className="min-w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Kecamatan
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Desa
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Komoditas
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Jenis Tanaman
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Musim Tanam
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Luas Lahan
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Tanggal Tanam
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Prakiraan Tanggal Panen
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Kondisi Tanam
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Prakiraan Hasil Panen
                  </th>
                  <th className="sticky top-0 bg-slate-100 px-4 py-2 truncate border">
                    Realisasi Hasil Panen
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className=" bg-white top-[40px] z-10 px-4 py-2 border">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.kecamatan}
                        onChange={(e) => handleFilterChange(e, "kecamatan")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Kecamatan"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                  <td className=" bg-white top-[40px] z-10 px-4 py-2 border">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.desa}
                        onChange={(e) => handleFilterChange(e, "desa")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Desa"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                  <td className=" bg-white top-[40px] z-10 px-4 py-2 border">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.komoditas}
                        onChange={(e) => handleFilterChange(e, "komoditas")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Komoditas"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                  <td className=" bg-white top-[40px] z-10 px-4 py-2 border">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.jenisTanaman}
                        onChange={(e) => handleFilterChange(e, "jenisTanaman")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Jenis Tanaman"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                  <td className=" bg-white top-[40px] z-10 px-4 py-2 border">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.musimTanam}
                        onChange={(e) => handleFilterChange(e, "musimTanam")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Musim Tanam"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                  <td className=" bg-white top-[40px] z-10 px-4 py-2 border">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.luasLahan}
                        onChange={(e) => handleFilterChange(e, "luasLahan")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Luas Lahan"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                  <td className=" bg-white top-[40px] z-10 px-4 py-2 border">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.tanggalTanam}
                        onChange={(e) => handleFilterChange(e, "tanggalTanam")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Tanggal Tanam"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                  <td className=" bg-white top-[40px] z-10 px-4 py-2 border">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.prakiraanTanggalPanen}
                        onChange={(e) =>
                          handleFilterChange(e, "prakiraanTanggalPanen")
                        }
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Prakiraan Tanggal Panen"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                  <td className=" bg-white top-[40px] z-10 px-4 py-2 border">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.kondisiTanam}
                        onChange={(e) => handleFilterChange(e, "kondisiTanam")}
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Kondisi Tanam"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                  <td className=" bg-white top-[40px] z-10 px-4 py-2 border">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.prakiraanHasilPanen}
                        onChange={(e) =>
                          handleFilterChange(e, "prakiraanHasilPanen")
                        }
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Prakiraan Hasil Panen"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                  <td className=" bg-white top-[40px] z-10 px-4 py-2 border">
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={filters.realisasiHasilPanen}
                        onChange={(e) =>
                          handleFilterChange(e, "realisasiHasilPanen")
                        }
                        className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Filter Realisasi Hasil Panen"
                      />
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-gray-500 ml-2"
                      />
                    </div>
                  </td>
                </tr>
                {filteredData.map((item) => (
                  <tr key={item.id}>
                    <td className="px-4 py-2 border">{item.kecamatan}</td>
                    <td className="px-4 py-2 border">{item.desa}</td>
                    <td className="px-4 py-2 border">{item.komoditas}</td>
                    <td className="px-4 py-2 border">{item.jenisTanaman}</td>
                    <td className="px-4 py-2 border">{item.musimTanam}</td>
                    <td className="px-4 py-2 border">{item.luasLahan}</td>
                    <td className="px-4 py-2 border">{item.tanggalTanam}</td>
                    <td className="px-4 py-2 border">
                      {item.prakiraanTanggalPanen}
                    </td>
                    <td className="px-4 py-2 border">{item.kondisiTanam}</td>
                    <td className="px-4 py-2 border">
                      {item.prakiraanHasilPanen}
                    </td>
                    <td className="px-4 py-2 border">
                      {item.realisasiHasilPanen}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
