import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import {AddPenjual} from "@/infrastruture"
const TambahTokoTani = ()=>{
    return(
        <div className="px-10 md:px-40 py-10">
            <div className="shadow-xl rounded-xl px-5 py-5">
                <form>
                        <div className="w-max lg:w-full py-5 flex justify-end">
                            <button type="submit" className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 ml-auto">
                                <FontAwesomeIcon icon={faSearch} className="mr-2" />
                                Cek NIK
                            </button>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="nik" id="nik" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="nik" className="peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>Cek NIK</strong> (Contoh: 3514002000000001)</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <p><strong>Status Tanah: </strong> Milik Sendiri</p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 gronup">
                                <p><strong>Nama Petani: </strong> SUROSO DIKDOYO</p>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <p><strong>Status Tanah: </strong> Milik Sendiri</p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 gronup">
                                <p><strong>Kecamatan: </strong> Karanganyar</p>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <p><strong>Desa: </strong> Pringgodani</p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 gronup">
                                <p><strong>Gapoktan: </strong> Power Ranger</p>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <p><strong>Nama Kelompok: </strong> Ranger Merah</p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 gronup">
                                <p><strong>Penyuluh: </strong> Werkudara Arya Bima</p>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <label htmlFor="underline_select" className="text-sm ">
                                    <strong>Profesi Penjual:</strong>
                                </label>
                                <div className="flex items-center pt-2">
                                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Petani</label>
                                </div>
                                <div className="flex items-center py-2">
                                    <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Penyuluh</label>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="namaProduk" id="namaProduk" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="namaProduk" className="peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> <strong>Nama Produk</strong> (Contoh: Siketan)</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="stok" id="stok" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="stok" className="peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>Stok</strong> (Contoh: 10kg)</label>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <label htmlFor="underline_select" className="text-sm dark:text-gray-400 pt-5 md:pt-0">
                                        <strong>Satuan</strong>
                                    </label>
                                    <select
                                        id="underline_select"
                                        className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer-placeholder-shown"
                                    >
                                        <option value="US">Sewa</option>
                                        <option value="CA">Milik Sendiri</option>
                                    </select>
                                </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="harga" id="harga" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="harga" className="peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>Harga</strong> (Contoh: 100.000)</label>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="deskripsi" id="deskripsi" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="deskripsi" className="peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>Deskripsi Uraian</strong></label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="file" name="fotoTanaman" accept=".png, .jpg, .jpeg" id="fotoTanaman" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="fotoTanaman" className="peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><strong>Foto Tanaman</strong> (Jenis File: .png, .jpg, .jpeg)</label>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <label htmlFor="underline_select" className="text-sm dark:text-gray-400 pt-5 md:pt-0">
                                    <strong>Status</strong>
                                </label>
                                <select
                                    id="underline_select"
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