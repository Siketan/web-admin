import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

function ProdukPenyuluh() {
    const [filters, setFilters] = useState({
        kecamatan: "",
        desa: "",
        nipPenyuluh: "",
        namaPenyuluh: "",
        namaProduk: "",
        stok: "",
        satuan: "",
        harga: "",
        deskripsi: "",
        fotoProduk: "",
        statusProduk: "",
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
        kecamatan: "Kecamatan A",
        desa: "Desa 1",
        namaPenyuluh: "John Doe",
        nipPenyuluh: "Padi",
        namaProduk: "Tumbuhan",
        stok: "Musim 1",
        satuan: 1000,
        harga: "2023-05-01",
        deskripsi: "2023-08-01",
        fotoProduk: "Baik",
        statusProduk: 500
        },
        {
        id: 2,
        kecamatan: "AdasaA",
        desa: "Wonorejo",
        namaPenyuluh: "John Doe",
        nipPenyuluh: "Padi",
        namaProduk: "Tumbuhan",
        stok: "Musim 1",
        satuan: 1000,
        harga: "2023-05-01",
        deskripsi: "2023-08-01",
        fotoProduk: "Baik",
        statusProduk: 500
        },
        {
        id: 3,
        kecamatan: "testing",
        desa: "Klakah",
        namaPenyuluh: "John Doe",
        nipPenyuluh: "Padi",
        namaProduk: "Tumbuhan",
        stok: "Musim 1",
        satuan: 1000,
        harga: "2023-05-01",
        deskripsi: "2023-08-01",
        fotoProduk: "Baik",
        statusProduk: 500
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
                <div className="pt-20">
                    <table className="w-full">
                    <thead className="bg-slate-100">
                        <tr>
                        <th className="px-4 py-2 truncate border">Kecamatan</th>
                        <th className="px-4 py-2 truncate border">Desa</th>
                        <th className="px-4 py-2 truncate border">NIP Penyuluh</th>
                        <th className="px-4 py-2 truncate border">Nama Penyuluh</th>
                        <th className="px-4 py-2 truncate border">Nama Produk</th>
                        <th className="px-4 py-2 truncate border">Stok</th>
                        <th className="px-4 py-2 truncate border">Satuan</th>
                        <th className="px-4 py-2 truncate border">Harga</th>
                        <th className="px-4 py-2 truncate border">Deskripsi</th>
                        <th className="px-4 py-2 truncate border">Foto Produk</th>
                        <th className="px-4 py-2 truncate border">Status Produk</th>
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
                                value={filters.namaProduk}
                                onChange={(e) => handleFilterChange(e, "namaProduk")}
                                className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Filter Produk"
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
                                value={filters.stok}
                                onChange={(e) => handleFilterChange(e, "stok")}
                                className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Filter Stok"
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
                                value={filters.satuan}
                                onChange={(e) => handleFilterChange(e, "satuan")}
                                className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Filter Satuan"
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
                                value={filters.harga}
                                onChange={(e) => handleFilterChange(e, "harga")}
                                className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Filter Harga"
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
                                value={filters.deskripsi}
                                onChange={(e) => handleFilterChange(e, "deskripsi")}
                                className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Filter Deskripsi"
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
                                value={filters.fotoProduk}
                                onChange={(e) => handleFilterChange(e, "fotoProduk")}
                                className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Filter Foto Produk"
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
                                value={filters.statusProduk}
                                onChange={(e) => handleFilterChange(e, "statusProduk")}
                                className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Filter Status Produk"
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
                            <td className="px-4 py-2 border">{item.nipPenyuluh}</td>
                            <td className="px-4 py-2 border">{item.namaPenyuluh}</td>
                            <td className="px-4 py-2 border">{item.namaProduk}</td>
                            <td className="px-4 py-2 border">{item.stok}</td>
                            <td className="px-4 py-2 border">{item.satuan}</td>
                            <td className="px-4 py-2 border">{item.harga}</td>
                            <td className="px-4 py-2 border">{item.deskripsi}</td>
                            <td className="px-4 py-2 border">{item.fotoProduk}</td>
                            <td className="px-4 py-2 border">{item.statusProduk}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default ProdukPenyuluh