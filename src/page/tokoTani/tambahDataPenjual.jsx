import {useState, useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import {AddPenjual, CekNik} from "@/infrastruture"
const TambahTokoTani = ()=>{
    const [NIK, setNIK] = useState ("");
    const [profesiPenjual, setProfesiPenjual] = useState ("");
    const [namaProducts, setNamaProducts] = useState ("");
    const [stok, setStok] = useState ("");
    const [satuan, setSatuan] = useState ("");
    const [harga, setHarga] = useState ("");
    const [deskripsi, setDeskripsi] = useState ("");
    const [status, setStatus] = useState ("");
    const [fotoTanaman, setFotoTanaman] = useState ("");
    const [datas, setDatas] = useState({})
    const [disable, setDisable] = useState(false)

    const handleCLick = ()=>{
        CekNik({nik:NIK}).then((data)=>{
            setDatas(data)
            setDisable(true)
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const data = {
            NIK, profesiPenjual: !datas ? '' : datas?.NIK ? 'petani' : datas?.NIP ? 'penyuluh' : '' , namaProducts, stok, satuan, harga, deskripsi, status, fotoTanaman
        }
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }
        AddPenjual(formData)
    }

    return(
        <div className="px-10 md:px-40 py-10">
            <div className="shadow-xl rounded-xl px-5 py-5">
                <form onSubmit={(e)=>handleSubmit(e)}>
                        <div className="w-max lg:w-full py-5 flex justify-end">
                            <button type="submit" id="NIK" name="NIK" onClick={()=>handleCLick()} className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 ml-auto">
                                <FontAwesomeIcon icon={faSearch} className="mr-2" />
                                Cek NIK
                            </button>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="NIK" id="NIK" value={NIK}  onChange={(e) => setNIK(e.target.value)}  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="NIK" className="peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>Cek NIK</strong> (Contoh: 3514002000000001)</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <p><strong>Status Tanah: </strong> {datas?.tanamanPetani?.statusLahan}</p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 gronup">
                                <p><strong>Nama Petani: </strong> {datas?.nama}</p>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <p><strong>Luas Tanah: </strong> {datas?.tanamanPetani?.luasLahan}</p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 gronup">
                                <p><strong>Kecamatan: </strong> {datas?.kecamatan}</p>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <p><strong>Desa: </strong> {datas?.desa}</p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 gronup">
                                <p><strong>Gapoktan: </strong> {datas?.kelompok?.gapoktan}</p>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <p><strong>Nama Kelompok: </strong> {datas?.kelompok?.namaKelompok}</p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 gronup">
                                <p><strong>Penyuluh: </strong> {datas?.kelompok?.penyuluh}</p>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                    <label htmlFor="profesiPenjual" className="text-sm">
                                        <strong>Profesi Penjual:</strong>
                                    </label>
                                    <div className="flex items-center pt-2">
                                        <input
                                            type="radio"
                                            value="petani"
                                            id="profesiPetani"
                                            checked={datas?.NIK ? true : false }
                                            name="profesiPenjual"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            onChange={(e) => setProfesiPenjual(e.target.value)}
                                        />
                                        <label htmlFor="profesiPetani" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                            Petani
                                        </label>
                                    </div>
                                    <div className="flex items-center py-2">
                                        <input
                                            type="radio"
                                            value="penyuluh"
                                            id="profesiPenyuluh"
                                            checked={datas?.NIP ? true : false }
                                            name="profesiPenjual"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            onChange={(e) => setProfesiPenjual(e.target.value)}
                                        />
                                        <label htmlFor="profesiPenyuluh" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                            Penyuluh
                                        </label>
                                    </div>
                                </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="namaProducts" id="namaProducts" value={namaProducts}  onChange={(e) => setNamaProducts(e.target.value)}  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="namaProducts" className="peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> <strong>Nama Produk</strong> (Contoh: Siketan)</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="stok" id="stok" value={stok}  onChange={(e) => setStok(e.target.value)}  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="stok" className="peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>Stok</strong> (Contoh: 10kg)</label>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <label htmlFor="underline_select" className="text-sm dark:text-gray-400 pt-5 md:pt-0">
                                        <strong>Satuan</strong>
                                    </label>
                                    <select
                                        id="satuan" name="satuan" value={satuan}  onChange={(e) => setSatuan(e.target.value)} 
                                        className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer-placeholder-shown"
                                    >
                                        <option value="US">Sewa</option>
                                        <option value="CA">Milik Sendiri</option>
                                    </select>
                                </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="harga" id="harga" value={harga}  onChange={(e) => setHarga(e.target.value)}  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="harga" className="peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>Harga</strong> (Contoh: 100.000)</label>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="deskripsi" id="deskripsi" value={deskripsi}  onChange={(e) => setDeskripsi(e.target.value)}  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="deskripsi" className="peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>Deskripsi Uraian</strong></label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="file" name="fotoTanaman"   onChange={(e) => setFotoTanaman(e.target.files[0])}  accept=".png, .jpg, .jpeg" id="fotoTanaman" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="fotoTanaman" className="peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>Foto Tanaman</strong> (Jenis File: .png, .jpg, .jpeg)</label>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <label htmlFor="underline_select" className="text-sm dark:text-gray-400 pt-5 md:pt-0">
                                    <strong>Status</strong>
                                </label>
                                <select
                                    id="status" name="status" value={status}  onChange={(e) => setStatus(e.target.value)} 
                                    className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer-placeholder-shown"
                                >
                                    <option value="US">Sewa</option>
                                    <option value="CA">Milik Sendiri</option>
                                </select>
                            </div>
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
                            <FontAwesomeIcon icon={faClose} className="mr-2" />
                            Batalkan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TambahTokoTani