import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {GatJurnalKegiatan} from "@/infrastruture"
function JurnalKegiatan() {
    const [filters, setFilters] = useState({
        kecamatan: "",
        nipPenyuluh: "",
        namaPenyuluh: "",
        wilayahBinaan: "",
        judulJurnalHarian: "",
        tanggalDibuat: "",
        uraian: "",
        gambar: "",
        statusJurnal: "",
    });

    const handleFilterChange = (e, column) => {
        setFilters((prevFilters) => ({
        ...prevFilters,
        [column]: e.target.value
        }));
    };

    const data = [
        {
        id: 1,
        kecamatan: "Karanganyar",
        nipPenyuluh: "350877994433",
        namaPenyuluh: "John Doe",
        wilayahBinaan: "Wilayah Binaan 1",
        judulJurnalHarian: "Judul Jurnal Harian 1",
        tanggalDibuat: "2023-05-29",
        uraian: "Judul jurnal harian 1 adalah",
        gambar: "gambar 1",
        statusJurnal: "Terbit",
        },
        {
        id: 2,
        kecamatan: "Benowo",
        nipPenyuluh: "350877994432",
        namaPenyuluh: "John Doa",
        wilayahBinaan: "Wilayah Binaan 2",
        judulJurnalHarian: "Judul Jurnal Harian 2",
        tanggalDibuat: "2023-05-30",
        uraian: "Judul jurnal harian 2 adalah",
        gambar: "gambar 2",
        statusJurnal: "Draft",
        },
        {
        id: 3,
        kecamatan: "Kita",
        nipPenyuluh: "350877994431",
        namaPenyuluh: "John Dou",
        wilayahBinaan: "Wilayah Binaan 3",
        judulJurnalHarian: "Judul Jurnal Harian 3",
        tanggalDibuat: "2023-05-31",
        uraian: "Judul jurnal harian 3 adalah",
        gambar: "gambar 3",
        statusJurnal: "Terbit",
        }
    ];

    const filteredData = data.filter((item) => {
        return Object.keys(filters).every((key) => {
        if (filters[key] !== "") {
            if (typeof item[key] === "number") {
            return item[key] === Number(filters[key]);
            } else {
            return item[key]
                .toLowerCase()
                .includes(filters[key].toLowerCase());
            }
        }
        return true;
        });
    });
    return (
        <div className="flex justify-center pt-12">
            <div className="w-full max-w-screen-xl shadow-xl rounded-lg overflow-x-auto overflow-y-auto">
            <div className="w-max lg:w-full pt-10 px-10">
                    <button type="submit" className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 ml-auto">
                        <FontAwesomeIcon icon={faPlus} className="mr-2" />
                        Tambah Jurnal
                    </button>
                </div>
                <div className="pt-10">
                    <table className="w-full">
                        <thead className="bg-slate-100">
                            <tr>
                            <th className="px-4 py-2 truncate border">Kecamatan</th>
                            <th className="px-4 py-2 truncate border">NIP Penyuluh</th>
                            <th className="px-4 py-2 truncate border">Nama Penyuluh</th>
                            <th className="px-4 py-2 truncate border">Wilayah Binaan</th>
                            <th className="px-4 py-2 truncate border">Judul Journal Harian</th>
                            <th className="px-4 py-2 truncate border">Tanggal Dibuat</th>
                            <th className="px-4 py-2 truncate border">Uraian</th>
                            <th className="px-4 py-2 truncate border">Gambar</th>
                            <th className="px-4 py-2 truncate border">Status Journal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="px-4 py-2 border">
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
                            <td className="px-4 py-2 border">
                                <div className="flex items-center">
                                    <input
                                    type="text"
                                    value={filters.nipPenyuluh}
                                    onChange={(e) => handleFilterChange(e, "nipPenyuluh")}
                                    className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                                    placeholder="Filter NIP Penyuluh"
                                    />
                                    <FontAwesomeIcon
                                    icon={faFilter}
                                    className="text-gray-500 ml-2"
                                    />
                                </div>
                            </td>
                            <td className="px-4 py-2 border">
                                <div className="flex items-center">
                                    <input
                                    type="text"
                                    value={filters.namaPenyuluh}
                                    onChange={(e) => handleFilterChange(e, "namaPenyuluh")}
                                    className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                                    placeholder="Filter Nama Penyuluh"
                                    />
                                    <FontAwesomeIcon
                                    icon={faFilter}
                                    className="text-gray-500 ml-2"
                                    />
                                </div>
                            </td>
                            <td className="px-4 py-2 border">
                                <div className="flex items-center">
                                    <input
                                    type="text"
                                    value={filters.wilayahBinaan}
                                    onChange={(e) => handleFilterChange(e, "wilayahBinaan")}
                                    className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                                    placeholder="Filter Wilayah Binaan"
                                    />
                                    <FontAwesomeIcon
                                    icon={faFilter}
                                    className="text-gray-500 ml-2"
                                    />
                                </div>
                            </td>
                            <td className="px-4 py-2 border">
                                <div className="flex items-center">
                                    <input
                                    type="text"
                                    value={filters.judulJurnalHarian}
                                    onChange={(e) => handleFilterChange(e, "judulJurnalHarian")}
                                    className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                                    placeholder="Filter Judul Journal Harian"
                                    />
                                    <FontAwesomeIcon
                                    icon={faFilter}
                                    className="text-gray-500 ml-2"
                                    />
                                </div>
                            </td>
                            <td className="px-4 py-2 border">
                                <div className="flex items-center">
                                    <input
                                    type="text"
                                    value={filters.tanggalDibuat}
                                    onChange={(e) => handleFilterChange(e, "tanggalDibuat")}
                                    className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                                    placeholder="Filter Tanggal Dibuat"
                                    />
                                    <FontAwesomeIcon
                                    icon={faFilter}
                                    className="text-gray-500 ml-2"
                                    />
                                </div>
                            </td>
                            <td className="px-4 py-2 border">
                                <div className="flex items-center">
                                    <input
                                    type="text"
                                    value={filters.uraian}
                                    onChange={(e) => handleFilterChange(e, "uraian")}
                                    className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                                    placeholder="Filter Uraian"
                                    />
                                    <FontAwesomeIcon
                                    icon={faFilter}
                                    className="text-gray-500 ml-2"
                                    />
                                </div>
                            </td>
                            <td className="px-4 py-2 border">
                                <div className="flex items-center">
                                    <input
                                    type="text"
                                    value={filters.gambar}
                                    onChange={(e) => handleFilterChange(e, "gambar")}
                                    className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                                    placeholder="Filter Gambar"
                                    />
                                    <FontAwesomeIcon
                                    icon={faFilter}
                                    className="text-gray-500 ml-2"
                                    />
                                </div>
                            </td>
                            <td className="px-4 py-2 border">
                                <div className="flex items-center">
                                    <input
                                    type="text"
                                    value={filters.statusJurnal}
                                    onChange={(e) => handleFilterChange(e, "statusJurnal")}
                                    className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                                    placeholder="Filter Status Jurnal"
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
                                <td className="px-4 py-2 border">{item.nipPenyuluh}</td>
                                <td className="px-4 py-2 border">{item.namaPenyuluh}</td>
                                <td className="px-4 py-2 border">{item.wilayahBinaan}</td>
                                <td className="px-4 py-2 border">{item.judulJurnalHarian}</td>
                                <td className="px-4 py-2 border">{item.tanggalDibuat}</td>
                                <td className="px-4 py-2 border">{item.uraian}</td>
                                <td className="px-4 py-2 border">{item.gambar}</td>
                                <td className="px-4 py-2 border">{item.statusJurnal}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default JurnalKegiatan