import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCancel } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import InputImage from "@/components/inputImage"
import {AddPenyuluh} from "@/infrastruture"
import {fecthKecamatan, fecthDesa} from "../../infrastucture/daerah"
const TambahPenyuluhanTani = ()=>{
    const [NIP, setNIP] = useState("");
    const [NoWa, setNoWa] = useState("");
    const [nama, setNama] = useState("");
    const [password, setPassword] = useState("");
    const [kecamatan, setKecamatan] = useState("");
    const [desa, setDesa] = useState("");
    const [alamat, setAlamat] = useState("");
    const [foto, setFoto] = useState("");
    const [namaProduct, setNamaProduct] = useState("");
    const [desaBinaan, setDesaBinaan] = useState("");
    const [daftarKecamatan, setDaftarKecamatan] = useState([])
    const [kecamatanActive, setKecamatanActive] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        const data = {
            NIP, NoWa, nama, password, kecamatan, desa, foto, namaProduct, desaBinaan, alamat
        }
        const formData = new FormData();
        for (const key in data) {
        formData.append(key, data[key]);
        }
        AddPenyuluh(formData)
    }
    useEffect(() => {
        fecthKecamatan().then((data)=>{
            setDaftarKecamatan(data.kecamatan)
        })
    }, [])
    const handleSelectKecamatan = (e)=>{
        const id = e?.split("-")[1]
        const nama = e?.split("-")[0]
        setKecamatan(nama)
        setKecamatanActive(e)
    }
    return(
        <div className="px-10 md:px-40 py-10">
            <div className="shadow-xl rounded-xl px-5 py-5">
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className="flex items-center justify-center">
                        <InputImage id="foto" name="foto" value={foto}  onChange={(e) => setFoto(e.target.value)} />
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="NIP" id="NIP" value={NIP}  onChange={(e) => setNIP(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="NIP" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>NIP Penyuluh</strong> (Contoh: 3514002000000001)</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="NoWa" id="NoWa" value={NoWa}  onChange={(e) => setNoWa(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="NoWa" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>No. HP/WA</strong> (Contoh:  0812 3456 7890)</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="nama" id="nama" value={nama}  onChange={(e) => setNama(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="nama" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> <strong>Nama</strong> (Contoh: Subagyo Joyo Kumuso)</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="password" name="password" id="password" value={password}  onChange={(e) => setPassword(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>Password</strong></label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <select
                            id="kecamatan"
                            value={kecamatanActive}  
                            onChange={(e) => handleSelectKecamatan(e.target.value)}
                            className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none  dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer-placeholder-shown"
                        >
                            <option value="">--Silahkan Pilih Kecamatan--</option>
                            {daftarKecamatan?.map((item, i)=>(
                                    <option value={`${item.nama}-${item.id}`} key={i}>{item.nama}</option>
                            ))}
                        </select>
                        <label htmlFor="kecamatan" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>Kecamatan</strong> (Contoh:  Karanganyar)</label>
                    </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="desa" id="desa" value={desa}  onChange={(e) => setDesa(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="desa" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>Desa</strong> (Contoh:  Karanganyar)</label>
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="alamat" id="alamat" value={alamat}  onChange={(e) => setAlamat(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="alamat" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>Alamat</strong> (Contoh: Jl. Raya Utara Timur Laut RT 01 / RW 09)</label>
                    </div>
                    <div className="grid md:grid-cols-2 mt-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <label htmlFor="underline_select" className="text-sm text-gray-500 dark:text-gray-400 pt-5 md:pt-0">
                                <strong>Nama Kecamatan Binaan: </strong>
                            </label>
                            <select
                                id="kecamatan"
                                name="kecamatan"
                                value={kecamatan}  
                                onChange={(e) => setKecamatan(e.target.value)}
                                className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer-placeholder-shown"
                            >
                                <option value="karanganyar">Karanganyar</option>
                                <option value="perak">Perak</option>
                            </select>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <label htmlFor="underline_select" className="text-sm text-gray-500 dark:text-gray-400 pt-5 md:pt-0">
                                <strong>Desa Wilayah Binaan:  </strong>
                            </label>
                            <select
                                id="desaBinaan"
                                name="desaBinaan"
                                value={desaBinaan}  
                                onChange={(e) => setDesaBinaan(e.target.value)}
                                className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer-placeholder-shown"
                            >
                                <option value="1">Nama Desa Binaan 1</option>
                                <option value="2">Nama Desa Binaan 2</option>
                            </select>
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="namaProduct" id="namaProduct" value={namaProduct}  onChange={(e) => setNamaProduct(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="namaProduct" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>Nama Produk</strong> (Contoh: SiKetan Hijau)</label>
                    </div>
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
                            <FontAwesomeIcon icon={faCancel} className="mr-2" />
                            Batalkan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TambahPenyuluhanTani