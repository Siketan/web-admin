import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import {ProductsPetani} from "@/infrastruture"
import { Image } from '@mantine/core';
function ProdukPetani() {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        ProductsPetani().then((data)=>setDatas(data.productPetani))
    }, [])
    console.log(datas)
    const [filters, setFilters] = useState({
        kecamatan: "",
        desa: "",
        nikPetani: "",
        namaPetani: "",
        namaProducts: "",
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


    const filteredData = datas.filter((item) => {
        return Object.keys(filters).every((key) => {
            if (filters[key] !== "") {
                if (item[key] == "dataPerson") {
                    if (typeof item.dataPerson[key] === "number") {
                        return item.dataPerson[key] === Number(filters[key]);
                    } else {
                        return item.dataPerson[key]
                        .toLowerCase()
                        .includes(filters[key].toLowerCase());
                    }
                }else{
                    if (typeof item[key] === "number") {
                        return item[key] === Number(filters[key]);
                    } else {
                        return item[key]
                        .toLowerCase()
                        .includes(filters[key].toLowerCase());
                    }
                }
            }
        return true;
        });
    });
    return (
        <div className="flex justify-center pt-12">
            <div className="w-full max-w-screen-xl shadow-xl rounded-lg overflow-x-auto overflow-y-auto pt-20">
                <table className="w-full">
                    <thead className="bg-slate-100">
                        <tr>
                        <th className="px-4 py-2 truncate border">Kecamatan</th>
                        <th className="px-4 py-2 truncate border">Desa</th>
                        <th className="px-4 py-2 truncate border">NIK Petani</th>
                        <th className="px-4 py-2 truncate border">Nama Petani</th>
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
                                value={filters.nikPetani}
                                onChange={(e) => handleFilterChange(e, "nikPetani")}
                                className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Filter NIK Petani"
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
                                value={filters.namaPetani}
                                onChange={(e) => handleFilterChange(e, "namaPetani")}
                                className="pl-8 pr-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Filter Nama Petani"
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
                                value={filters.namaProducts}
                                onChange={(e) => handleFilterChange(e, "namaProducts")}
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
                                placeholder="Filter Filter"
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
                            <td className="px-4 py-2 border">{item.dataPerson.kecamatan}</td>
                            <td className="px-4 py-2 border">{item.dataPerson.desa}</td>
                            <td className="px-4 py-2 border">{item.dataPerson.NIK}</td>
                            <td className="px-4 py-2 border">{item.dataPerson.nama}</td>
                            <td className="px-4 py-2 border">{item.namaProducts}</td>
                            <td className="px-4 py-2 border">{item.stok}</td>
                            <td className="px-4 py-2 border">{item.satuan}</td>
                            <td className="px-4 py-2 border">{item.harga}</td>
                            <td className="px-4 py-2 border">{item.deskripsi}</td>
                            <td className="px-4 py-2 border"><Image width={200} height={80} mx="auto" radius="md" src={item.fotoTanaman}/></td>
                            <td className="px-4 py-2 border">{item.status}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProdukPetani