import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import InputImage from "@/components/inputImage"
import MainCard from "@/components/MainCard"
// import {DaftarTaniAdd} from "@/infrastruture"
const TambahDataTani = ()=>{
    const [NIK, setNIK] = useState("");
    const [NoWa, setNoWa] = useState("");
    const [nama, setNama] = useState("");
    const [password, setPassword] = useState("");
    const [kecamatan, setKecamatan] = useState("");
    const [desa, setDesa] = useState("");
    const [namaKelompok, setNamaKelompok] = useState("");
    const [penyuluh, setPenyuluh] = useState("");
    const [statusLahan, setStatusLahan] = useState("");
    const [luasLahan, setLuasLahan] = useState("");
    const [kategori, setKategori] = useState("");
    const [alamat, setAlamat] = useState("");
    const [gapoktan, setGapoktan] = useState("");
    const [jenis, setJenis] = useState("");
    const [komoditas, setKomoditas] = useState("");
    const [musimTanam, setMusimTanam] = useState("");
    const [tanggalTanam, setTanggalTanam] = useState("");
    const [perkiraanPanen, setPerkiraanPanen] = useState("");
    const [foto, setFoto] = useState("");
    const [realisasiPanen, setRealisasiPanen] = useState("");
    const [hasilPanen, setHasilPanen] = useState("");

    const [countData, setCountData] = useState(1)
    const handleClikAdd = ()=>{
        setCountData(countData + 1)
    }
    const handleSubmit = ()=>{
        const formData = new FormData();
        for (const key in data) {
        formData.append(key, data[key]);
        }
    }
    return(
        <div className="px-10 md:px-40 py-10 z-1">
            <form>
            <MainCard className="mb-10">
                <div className="flex items-center justify-center">
                    <InputImage value={foto}  onChange={(e) => setFoto(e.target.value)}/>
                </div>
                <div className="w-max lg:w-full pt-5 flex justify-end">
                    <button type="submit" value={NIK}  onChange={(e) => setNIK(e.target.value)} className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 ml-auto">
                        <FontAwesomeIcon icon={faSearch} className="mr-2" />
                        Cek NIK
                    </button>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6 mt-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="NIK" id="NIK" value={NIK}  onChange={(e) => setNIK(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="NIK" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>NIK</strong> (Contoh: 3514002000000001)</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="NoWa" id="NoWa"  value={NoWa}  onChange={(e) => setNoWa(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="NoWa" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>No. HP/WA</strong> (Contoh:  0812 3456 7890)</label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="nama" id="nama" value={nama}  onChange={(e) => setNama(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="nama" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> <strong>Nama</strong> (Contoh: Subagyo Joyo Kumuso)</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="password" name="password" id="password" value={password}  onChange={(e) => setPassword(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>Password</strong></label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="kecamatan" id="kecamatan" value={kecamatan}  onChange={(e) => setKecamatan(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="kecamatan" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>Kecamatan</strong> (Contoh:  Karanganyar)</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="desa" id="desa" value={desa}  onChange={(e) => setDesa(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="desa" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>Desa</strong> (Contoh:  Karanganyar)</label>
                    </div>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="alamat" id="alamat" value={alamat}  onChange={(e) => setAlamat(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="alamat" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>Alamat</strong> (Contoh: Jl. Raya Utara Timur Laut RT 01 / RW 09)</label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="gapoktan" id="gapoktan" value={gapoktan}  onChange={(e) => setGapoktan(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="gapoktan" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>Gapoktan</strong> (Contoh: Power Ranger)</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="namaKelompok" id="namaKelompok" value={namaKelompok}  onChange={(e) => setNamaKelompok(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="namaKelompok" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>Nama Kelompok </strong>(Contoh: Ranger Merah)</label>
                    </div>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="penyuluh" id="penyuluh" value={penyuluh}  onChange={(e) => setPenyuluh(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="penyuluh" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>Nama Penyuluh</strong> (Contoh: Nama Penyuluh)</label>
                </div>
                </MainCard>
                <MainCard>
                    <div className="flex justify-end">
                        <button className="text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 ml-auto" onClick={handleClikAdd}>
                            <FontAwesomeIcon icon={faPlus} className="mr-2" />
                            Tambah Tanaman Petani
                        </button>
                    </div>
                {[...Array(countData)]?.map(()=>(
                    <>
                        <div className="grid md:grid-cols-2 mt-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <label htmlFor="underline_select" className="text-sm text-gray-500 dark:text-gray-400 pt-5 md:pt-0">
                                    <strong>Pilih Status Lahan</strong>
                                </label>
                                <select
                                    id="statusLahan"
                                    value={statusLahan}  
                                    onChange={(e) => setStatusLahan(e.target.value)}
                                    className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer-placeholder-shown"
                                >
                                    <option value="US">Sewa</option>
                                    <option value="CA">Milik Sendiri</option>
                                </select>
                            </div>
                            <div className="relative z-0 w-full mb-6 grou pt-6">
                                <input type="text" name="luasLahan" id="luasLahan" value={luasLahan}  onChange={(e) => setLuasLahan(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="luasLahan" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>Luas Lahan per M2 </strong>(Contoh: 100)</label>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <label htmlFor="underline_select" className="text-sm text-gray-500 dark:text-gray-400">
                                    <strong>Kategori:</strong>
                                </label>
                                <div className="flex items-center pt-2">
                                    <input id="kategori" value={kategori}  onChange={(e) => setKategori(e.target.value)} type="radio" name="kategori" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="-1" className="ml-2 text-sm font-medium text-gray-900">Tanaman Pangan</label>
                                </div>
                                <div className="flex items-center py-2">
                                    <input checked id="kategori" type="radio" value={kategori}  onChange={(e) => setKategori(e.target.value)}  name="kategori" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-900 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="-2" className="ml-2 text-sm font-medium text-gray-900">Tanaman Perkebunan</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="kategori" type="radio" value={kategori}  onChange={(e) => setKategori(e.target.value)}  name="kategori" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-900 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="-3" className="ml-2 text-sm font-medium text-gray-900">Tanaman  Holtikultura</label>
                                </div>
                                <div className="flex items-center py-2">
                                    <input checked id="kategori" type="radio" value={kategori}  onChange={(e) => setKategori(e.target.value)}  name="kategori" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-900 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="-4" className="ml-2 text-sm font-medium text-gray-900">Lainnya</label>
                                </div>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <label htmlFor="underline_select" className="text-sm text-gray-500 dark:text-gray-400">
                                    <strong>Pilih Jenis Tanaman</strong>
                                </label>
                                <select
                                    id="jenis"
                                    value={jenis}  
                                    onChange={(e) => setJenis(e.target.value)}
                                    className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer-placeholder-shown"
                                >
                                    <option value="US">Buah</option>
                                    <option value="CA">Sayur</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <label htmlFor="underline_select" className="text-sm text-gray-500 dark:text-gray-400">
                                    <strong>Nama Penyuluh</strong>
                                </label>
                                <select
                                    id="penyuluh"
                                    value={penyuluh}  
                                    onChange={(e) => setPenyuluh(e.target.value)}
                                    className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer-placeholder-shown"
                                >
                                    <option value="US">Riski</option>
                                    <option value="CA">Rizal</option>
                                </select>
                            </div> 
                            <div className="relative z-0 w-full mb-6 grou pt-6">
                                <input type="date" name="tanggalTanam" id="tanggalTanam" value={tanggalTanam} onChange={(e) => setTanggalTanam(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="tanggalTanam" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>Tanggal Tanam </strong></label>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 mt-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <label htmlFor="underline_select" className="text-sm text-gray-500 dark:text-gray-400 pt-5 md:pt-0">
                                    <strong>Pilih komoditas: </strong>
                                </label>
                                <select
                                    id="komoditas"
                                    value={komoditas}  
                                    onChange={(e) => setKomoditas(e.target.value)}
                                    className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer-placeholder-shown"
                                >
                                    <option value="US">Pilih Komoditas</option>
                                    <option value="CA">Milik Sendiri</option>
                                </select>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <label htmlFor="underline_select" className="text-sm text-gray-500 dark:text-gray-400 pt-5 md:pt-0">
                                    <strong>Musim Tanam Ke:  </strong>
                                </label>
                                <select
                                    id="musimTanam"
                                    value={musimTanam}  
                                    onChange={(e) => setMusimTanam(e.target.value)}
                                    className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer-placeholder-shown"
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 mt-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 grou pt-6">
                                <input type="date" name="perkiraanPanen" id="perkiraanPanen" value={perkiraanPanen} onChange={(e) => setPerkiraanPanen(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="perkiraanPanen" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>Perkiraan Panen </strong>(Contoh: 3 Bulan)</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 grou pt-6">
                                <input type="text" name="realisasipanen" id="realisasipanen" value={realisasiPanen} onChange={(e) => setRealisasiPanen(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="realisasipanen" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>Prakiraan Hasil Panen </strong>(Contoh: 10 kw)</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 grou pt-6">
                                <input type="text" name="hasilpanen" id="hasilpanen" value={hasilPanen} onChange={(e) => setHasilPanen(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="hasilpanen" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>Realisasi Hasil Panen </strong>(Contoh: 10 kw)</label>
                            </div>
                        </div>
                        </>
                ))}
                <div className="flex space-x-4 justify-end">
                    <button
                        type="submit"
                        className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-orange-800"
                        >
                        <FontAwesomeIcon icon={faSave} className="mr-2" />
                        Simpan
                    </button>
                    <button
                        type="submit"
                        className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-orange-800"
                        >
                        <FontAwesomeIcon icon={faClose} className="mr-2" />
                        Batalkan
                    </button>
                </div>
            </MainCard>
            </form>
        </div>
    )
}

export default TambahDataTani