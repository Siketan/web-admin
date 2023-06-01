import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

function PresensiKehadiran() {
    const [filters, setFilters] = useState({
        nipPenyuluh: "",
        namaPenyuluh: "",
        tanggalPresensi: "",
        jamKedatangan: "",
        jamPulang: "",
        kecamatan: "",
        wilayahBinaan: "",
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
        nipPenyuluh: "350877994433",
        namaPenyuluh: "John Doe",
        tanggalPresensi: "2023-05-29",
        jamKedatangan: "08.10",
        jamPulang: "17.30",
        kecamatan: "Karanganyar",
        wilayahBinaan: "Wilayah Binaan 1",
        },
        {
        id: 2,
        nipPenyuluh: "350877994432",
        namaPenyuluh: "John Doa",
        tanggalPresensi: "2023-05-0",
        jamKedatangan: "08.14",
        jamPulang: "17.42",
        kecamatan: "Benowo",
        wilayahBinaan: "Wilayah Binaan 2",
        },
        {
        id: 3,
        nipPenyuluh: "350877994431",
        namaPenyuluh: "John Dou",
        tanggalPresensi: "2023-05-31",
        jamKedatangan: "08.20",
        jamPulang: "17.39",
        kecamatan: "Kita",
        wilayahBinaan: "Wilayah Binaan 3",
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
        <div className="flex justify-center pt-5">
            <div className="w-full max-w-screen-xl overflow-x-auto overflow-y-auto pt-10">
                <table className="w-full">
                    <thead className="bg-slate-100">
                        <tr>
                        <th className="px-4 py-2 truncate border">NIP Penyuluh</th>
                        <th className="px-4 py-2 truncate border">Nama Penyuluh</th>
                        <th className="px-4 py-2 truncate border">Tanggal Presensi</th>
                        <th className="px-4 py-2 truncate border">Jam Kedatangan</th>
                        <th className="px-4 py-2 truncate border">Jam Pulang</th>
                        <th className="px-4 py-2 truncate border">Kecamatan</th>
                        <th className="px-4 py-2 truncate border">Wilayah Binaan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
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
                                value={filters.tanggalPresensi}
                                onChange={(e) => handleFilterChange(e, "tanggalPresensi")}
                                className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Filter Tanggal Presensi"
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
                                value={filters.jamKedatangan}
                                onChange={(e) => handleFilterChange(e, "jamKedatangan")}
                                className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Filter Jam Kedatangan"
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
                                value={filters.jamPulang}
                                onChange={(e) => handleFilterChange(e, "jamPulang")}
                                className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Filter Jam Pulang"
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
                        </tr>
                        {filteredData.map((item) => (
                        <tr key={item.id}>
                            <td className="px-4 py-2 border">{item.nipPenyuluh}</td>
                            <td className="px-4 py-2 border">{item.namaPenyuluh}</td>
                            <td className="px-4 py-2 border">{item.tanggalPresensi}</td>
                            <td className="px-4 py-2 border">{item.jamKedatangan}</td>
                            <td className="px-4 py-2 border">{item.jamPulang}</td>
                            <td className="px-4 py-2 border">{item.kecamatan}</td>
                            <td className="px-4 py-2 border">{item.wilayahBinaan}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PresensiKehadiran