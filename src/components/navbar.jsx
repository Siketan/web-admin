import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Navbar = ()=>{
    const [navbar, setNavbar] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };
    
    return(
        <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-10">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="/">
                            <h2 className="text-2xl font-bold">SIKETAN</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        <li className="text-black">
                            <button onClick={() => toggleDropdown("petani")} className="hover:underline underline-offset-auto">
                            Data Petani
                            </button>
                            {activeDropdown === "petani" && (
                            <ul className="absolute mt-2 py-2 w-36 bg-white border rounded-md shadow-lg px-2">
                                <li className="text-gray-600 hover:text-black hover:font-bold">
                                <a href="/data-tani">Semua Data</a>
                                </li>
                                <li className="text-gray-600 hover:text-black hover:font-bold">
                                <a href="/data-tani/tambah">Tambah Data</a>
                                </li>
                            </ul>
                            )}
                        </li>
                        <li className="text-black">
                            <button onClick={() => toggleDropdown("penyuluh")} className="hover:underline underline-offset-auto">
                            Data Penyuluh
                            </button>
                            {activeDropdown === "penyuluh" && (
                            <ul className="absolute mt-2 py-2 w-36 bg-white border rounded-md shadow-lg px-2">
                                <li className="text-gray-600 hover:text-black hover:font-bold">
                                <a href="/penyuluhan-tani">Semua Data</a>
                                </li>
                                <li className="text-gray-600 hover:text-black hover:font-bold">
                                <a href="/penyuluhan-tani/tambah">Tambah Data</a>
                                </li>
                            </ul>
                            )}
                        </li>
                        <li className="text-black">
                            <button onClick={() => toggleDropdown("tanaman")} className="hover:underline underline-offset-auto">
                            Data Tanaman
                            </button>
                            {activeDropdown === "tanaman" && (
                            <ul className="absolute mt-2 py-2 w-36 bg-white border rounded-md shadow-lg px-2">
                                <li className="text-gray-600 hover:text-black hover:font-bold">
                                <a href="/data-tanaman">Semua Data</a>
                                </li>
                                <li className="text-gray-600 hover:text-black hover:font-bold">
                                <a href="/data-tanaman/tambah">Tambah Data</a>
                                </li>
                            </ul>
                            )}
                        </li>
                        <li className="text-black">
                            <button onClick={() => toggleDropdown("info-tani")} className="hover:underline underline-offset-auto">
                            Info Petani
                            </button>
                            {activeDropdown === "info-tani" && (
                            <ul className="absolute mt-2 py-2 w-36 bg-white border rounded-md shadow-lg px-2">
                                <li className="text-gray-600 hover:text-black hover:font-bold">
                                <a href="/info-tani">Semua Data</a>
                                </li>
                                <li className="text-gray-600 hover:text-black hover:font-bold">
                                <a href="/into-tani/tambah">Tambah Data</a>
                                </li>
                            </ul>
                            )}
                        </li>
                        <li className="text-black">
                            <button onClick={() => toggleDropdown("toko-tani")} className="hover:underline underline-offset-auto">
                            Toko Tani
                            </button>
                            {activeDropdown === "toko-tani" && (
                            <ul className="absolute mt-2 py-2 w-36 bg-white border rounded-md shadow-lg px-2">
                                <li className="text-gray-600 hover:text-black hover:font-bold">
                                <a href="/toko-tani">Semua Data</a>
                                </li>
                                <li className="text-gray-600 hover:text-black hover:font-bold">
                                <a href="/toko-tani/tambah">Tambah Data</a>
                                </li>
                            </ul>
                            )}
                        </li>
                        <li className="text-black">
                            <button onClick={() => toggleDropdown("pengaturan")} className="hover:underline underline-offset-auto">
                            Pengaturan
                            </button>
                            {activeDropdown === "pengaturan" && (
                            <ul className="absolute mt-2 py-2 w-36 bg-white border rounded-md shadow-lg px-2">
                                <li className="text-gray-600 hover:text-black hover:font-bold">
                                <a href="/">Info Kegiatan</a>
                                </li>
                                <li className="text-gray-600 hover:text-black hover:font-bold">
                                <a href="/">Layanan Pesanan</a>
                                </li>
                            </ul>
                            )}
                        </li>
                        <li>
                            <div className="text-black">
                            <button onClick={() => toggleDropdown("profile")} className="hover:underline underline-offset-auto">
                                <FontAwesomeIcon icon={faUser} />
                            </button>
                            {activeDropdown === "profile" && (
                                <ul className="absolute mt-2 py-2 w-35 bg-white border rounded-md shadow-lg px-2">
                                <li className="text-gray-600 hover:text-black hover:font-bold">
                                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                    <a href="/" className="pl-3">Logout</a>
                                </li>
                                </ul>
                            )}
                            </div>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar