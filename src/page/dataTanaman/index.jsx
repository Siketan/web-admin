import { useState } from "react";
const DataTanaman = () => {
    const [filters, setFilters] = useState({
        kecamatan: "",
        desa: "",
        namaPetani: "",
        komoditas: "",
        jenisTanaman: "",
        musimTanam: "",
        luasLahan: "",
        tanggalTanam: "",
        prakiraanTanggalPanen: "",
        kondisiTanam: "",
        prakiraanHasilPanen: "",
        realisasiHasilPanen: ""
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
        namaPetani: "John Doe",
        komoditas: "Padi",
        jenisTanaman: "Tumbuhan",
        musimTanam: "Musim 1",
        luasLahan: 1000,
        tanggalTanam: "2023-05-01",
        prakiraanTanggalPanen: "2023-08-01",
        kondisiTanam: "Baik",
        prakiraanHasilPanen: 500,
        realisasiHasilPanen: 450
        },
        {
        id: 2,
        kecamatan: "AdasaA",
        desa: "Wonorejo",
        namaPetani: "John Doe",
        komoditas: "Padi",
        jenisTanaman: "Tumbuhan",
        musimTanam: "Musim 1",
        luasLahan: 1000,
        tanggalTanam: "2023-05-01",
        prakiraanTanggalPanen: "2023-08-01",
        kondisiTanam: "Baik",
        prakiraanHasilPanen: 500,
        realisasiHasilPanen: 450
        },
        {
        id: 3,
        kecamatan: "testing",
        desa: "Klakah",
        namaPetani: "John Doe",
        komoditas: "Padi",
        jenisTanaman: "Tumbuhan",
        musimTanam: "Musim 1",
        luasLahan: 1000,
        tanggalTanam: "2023-05-01",
        prakiraanTanggalPanen: "2023-08-01",
        kondisiTanam: "Baik",
        prakiraanHasilPanen: 500,
        realisasiHasilPanen: 450
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
        <div>
        <div className="overflow-x-auto">
            <table className="min-w-full">
            <thead>
                <tr>
                <th className="px-4 py-2 truncate border">Kecamatan</th>
                <th className="px-4 py-2 truncate border">Desa</th>
                <th className="px-4 py-2 truncate border">Nama Petani</th>
                <th className="px-4 py-2 truncate border">Komoditas</th>
                <th className="px-4 py-2 truncate border">Jenis Tanaman</th>
                <th className="px-4 py-2 truncate border">Musim Tanam</th>
                <th className="px-4 py-2 truncate border">Luas Lahan</th>
                <th className="px-4 py-2 truncate border">Tanggal Tanam</th>
                <th className="px-4 py-2 truncate border">Prakiraan Tanggal Panen</th>
                <th className="px-4 py-2 truncate border">Kondisi Tanam</th>
                <th className="px-4 py-2 truncate border">Prakiraan Hasil Panen</th>
                <th className="px-4 py-2 truncate border">Realisasi Hasil Panen</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className="px-4 py-2 border">
                    <input
                    type="text"
                    value={filters.kecamatan}
                    onChange={(e) => handleFilterChange(e, "kecamatan")}
                    />
                </td>
                <td className="px-4 py-2 border">
                    <input
                    type="text"
                    value={filters.desa}
                    onChange={(e) => handleFilterChange(e, "desa")}
                    />
                </td>
                <td className="px-4 py-2 border">
                    <input
                    type="text"
                    value={filters.namaPetani}
                    onChange={(e) => handleFilterChange(e, "namaPetani")}
                    />
                </td>
                <td className="px-4 py-2 border">
                    <input
                    type="text"
                    value={filters.komoditas}
                    onChange={(e) => handleFilterChange(e, "komoditas")}
                    />
                </td>
                <td className="px-4 py-2 border">
                    <input
                    type="text"
                    value={filters.jenisTanaman}
                    onChange={(e) => handleFilterChange(e, "jenisTanaman")}
                    />
                </td>
                <td className="px-4 py-2 border">
                    <input
                    type="text"
                    value={filters.musimTanam}
                    onChange={(e) => handleFilterChange(e, "musimTanam")}
                    />
                </td>
                <td className="px-4 py-2 border">
                    <input
                    type="text"
                    value={filters.luasLahan}
                    onChange={(e) => handleFilterChange(e, "luasLahan")}
                    />
                </td>
                <td className="px-4 py-2 border">
                    <input
                    type="text"
                    value={filters.tanggalTanam}
                    onChange={(e) => handleFilterChange(e, "tanggalTanam")}
                    />
                </td>
                <td className="px-4 py-2 border">
                    <input
                    type="text"
                    value={filters.prakiraanTanggalPanen}
                    onChange={(e) =>
                        handleFilterChange(e, "prakiraanTanggalPanen")
                    }
                    />
                </td>
                <td className="px-4 py-2 border">
                    <input
                    type="text"
                    value={filters.kondisiTanam}
                    onChange={(e) => handleFilterChange(e, "kondisiTanam")}
                    />
                </td>
                <td className="px-4 py-2 border">
                    <input
                    type="text"
                    value={filters.prakiraanHasilPanen}
                    onChange={(e) =>
                        handleFilterChange(e, "prakiraanHasilPanen")
                    }
                    />
                </td>
                <td className="px-4 py-2 border">
                    <input
                    type="text"
                    value={filters.realisasiHasilPanen}
                    onChange={(e) =>
                        handleFilterChange(e, "realisasiHasilPanen")
                    }
                    />
                </td>
                </tr>
                {filteredData.map((item) => (
                <tr key={item.id}>
                    <td className="px-4 py-2 border">{item.kecamatan}</td>
                    <td className="px-4 py-2 border">{item.desa}</td>
                    <td className="px-4 py-2 border">{item.namaPetani}</td>
                    <td className="px-4 py-2 border">{item.komoditas}</td>
                    <td className="px-4 py-2 border">{item.jenisTanaman}</td>
                    <td className="px-4 py-2 border">{item.musimTanam}</td>
                    <td className="px-4 py-2 border">{item.luasLahan}</td>
                    <td className="px-4 py-2 border">{item.tanggalTanam}</td>
                    <td className="px-4 py-2 border">{item.prakiraanTanggalPanen}</td>
                    <td className="px-4 py-2 border">{item.kondisiTanam}</td>
                    <td className="px-4 py-2 border">{item.prakiraanHasilPanen}</td>
                    <td className="px-4 py-2 border">{item.realisasiHasilPanen}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    );
};

export default DataTanaman