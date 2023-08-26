import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { faClose, faSave } from "@fortawesome/free-solid-svg-icons";
import MainCard from "@/components/MainCard";
import { AddTanmanPetani, } from "@/infrastruture";
import { fecthKecamatan, fecthDesa } from "../../../../infrastucture/daerah";
import {useLocation, useNavigate, Link } from "react-router-dom"
const TambahDataTani = () => {
  const [statusLahan, setStatusLahan] = useState("");
  const [luasLahan, setLuasLahan] = useState("");
  const [kategori, setKategori] = useState("");
  const [jenis, setJenis] = useState("");
  const [komoditas, setKomoditas] = useState("");
  const [musimTanam, setMusimTanam] = useState("");
  const [tanggalTanam, setTanggalTanam] = useState("");
  const [perkiraanHasilPanen, setPerkiraanHasilPanen] = useState("");
  const [perkiraanPanen, setPerkiraanPanen] = useState("");
  const [daftarKomoditas, setDaftarKomoditas] = useState([]);
  const [jenisPanen, setjenisPanen] = useState("")
  
  const location = useLocation()
  const history = useNavigate()
  const petaniId = new URLSearchParams(location.search).get('petaniId');

  useEffect(() => {
    if (kategori == "Tanaman Pangan") {
      setDaftarKomoditas([
        "Padi Konvensional",
        "Padi Ramah Lingkungan",
        "Padi Organik",
        "Jagung",
        "Kedelai",
        "Ubi Jalar",
        "Ubi Kayu",
        "Kacang Tanah",
        "Kacang Hijau",
      ]);
    } else if (kategori == "Tanaman Perkebunan") {
      if(jenisPanen == "Musiman"){
        setDaftarKomoditas(["Tembakau", "Tebu"])
      }else if(jenisPanen == "Tahunan"){
        setDaftarKomoditas(["Kopi", "Kakao", "Cengkeh", "Teh", "Karet", "Kelapa"])
      }else{
        setDaftarKomoditas([""])
      }
    } else if (kategori == "Tanaman Holtikultura") {
      if(jenis == "Buah"){
        if(jenisPanen == "Musiman"){
          setDaftarKomoditas(["Melon", "Semangka", "Pisang", "Blewah"])
        }else if(jenisPanen == "Tahunan"){
          setDaftarKomoditas(["Mangga", "Durian", "Manggis", "Alpukat", "Rambutan", "Jeruk Lemon", "Jeruk nipis", "Jeruk Keprok", "Jeruk Besar", "Nangka", "Jambu Biji", "Jambu air", "Sukun", "Sirsat", "Sawo", "Duku"])
        }else{
          setDaftarKomoditas([""])
        }
      }else if(jenis == "Sayur"){
        setDaftarKomoditas(["Cabe Kecil", "Cabe Besar", "Bawang Merah", "Tomat", "Terong", "Pare", "Gambas", "Bayam", "Kangkung", "Sawi", "Kacang Panjang"] );
      }else{
        setDaftarKomoditas[""]
      }
    } else {
      setDaftarKomoditas([""]);
    }
  }, [kategori, jenis, jenisPanen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      statusLahan,
      luasLahan,
      kategori,
      jenis,
      jenisPanen,
      komoditas,
      musimTanam,
      tanggalTanam,
      perkiraanPanen,
      perkiraanHasilPanen,
      dataPersonId:petaniId,
    };
    AddTanmanPetani(data)
  };

  return (
    <div className="px-10 md:px-40 py-10 z-1">
      <Link to={`/data-tani/detail/${petaniId}`}>
        <button className="mb-5 ms-8 rounded-full bg-cyan-900 text-white p-2 w-35 h-10">kembali</button>
      </Link>
      <form onSubmit={(e) => handleSubmit(e)}>
        <MainCard>
            <div>
              <div className="grid md:grid-cols-2 mt-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    htmlFor="underline_select"
                    className="text-sm text-gray-500  pt-5 md:pt-0"
                  >
                    <strong>Pilih Status Lahan</strong>
                  </label>
                  <select
                    id="statusLahan"
                    value={statusLahan}
                    onChange={(e) => setStatusLahan(e.target.value)}
                    className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none  dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer-placeholder-shown"
                  >
                    <option value="">--pilih status lahan--</option>
                    <option value="Sewa">Sewa</option>
                    <option value="Milik Sendiri">Milik Sendiri</option>
                  </select>
                </div>
                <div className="relative z-0 w-full mb-6 grou pt-6">
                  <input
                    type="text"
                    name="luasLahan"
                    id="luasLahan"
                    value={luasLahan}
                    onChange={(e) => setLuasLahan(e.target.value)}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="luasLahan"
                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    <strong>Luas Lahan Tanam per M2 </strong>(Contoh: 100)
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <label htmlFor="kategori" className="text-sm text-gray-500">
                    <strong>Kategori:</strong>
                  </label>
                  <div className="flex items-center pt-2">
                    <input
                      id="tanaman-pangan"
                      value="Tanaman Pangan"
                      onChange={(e) => setKategori(e.target.value)}
                      type="radio"
                      name="kategori"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="tanaman-pangan"
                      className="ml-2 text-sm font-medium text-gray-900"
                    >
                      Tanaman Pangan
                    </label>
                  </div>
                  <div className="flex items-center py-2">
                    <input
                      id="tanaman-perkebunan"
                      value="Tanaman Perkebunan"
                      onChange={(e) => setKategori(e.target.value)}
                      type="radio"
                      name="kategori"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-900 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="tanaman-perkebunan"
                      className="ml-2 text-sm font-medium text-gray-900"
                    >
                      Tanaman Perkebunan
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="tanaman-holtikultura"
                      value="Tanaman Holtikultura"
                      onChange={(e) => setKategori(e.target.value)}
                      type="radio"
                      name="kategori"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-900 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="tanaman-holtikultura"
                      className="ml-2 text-sm font-medium text-gray-900"
                    >
                      Tanaman Holtikultura
                    </label>
                  </div>
                </div>

                {kategori == "Tanaman Holtikultura" && (
                  <div className="relative z-0 w-full mb-6 group">
                    <label
                      htmlFor="underline_select"
                      className="text-sm text-gray-500 "
                    >
                      <strong>Pilih Jenis Tanaman</strong>
                    </label>
                    <select
                      id="jenis"
                      value={jenis}
                      onChange={(e) => setJenis(e.target.value)}
                      className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none  dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer-placeholder-shown"
                    >
                      <option value="">--Pilih Jenis Tanaman--</option>
                      <option value="Buah">Buah</option>
                      <option value="Sayur">Sayur</option>
                    </select>
                  </div>
                )}
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                {((kategori == "Tanaman Holtikultura" && jenis == "Buah") || (kategori == "Tanaman Perkebunan")) && (
                  <div className="relative z-0 w-full mb-6 group">
                    <label
                      htmlFor="underline_select"
                      className="text-sm text-gray-500 "
                    >
                      <strong>Pilih Jenis Panen</strong>
                    </label>
                    <select
                      id="jenis"
                      value={jenisPanen}
                      onChange={(e) => setjenisPanen(e.target.value)}
                      className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none  dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer-placeholder-shown"
                    >
                      <option value="">-- pilih jenis panen --</option>
                      <option value="Musiman">Musiman</option>
                      <option value="Tahunan">Tahunan</option>
                    </select>
                  </div>
                )}
                {kategori == "Tanaman Perkebunan" ?  
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    htmlFor="underline_select"
                    className="text-sm text-gray-500  pt-5 md:pt-0"
                  >
                    <strong>Tahun Tanam </strong>
                  </label>
                  <select
                    id="musimTanam"
                    value={tanggalTanam}
                    onChange={(e) => setTanggalTanam(e.target.value)}
                    className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none  dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer-placeholder-shown"
                  >
                    <option value="">-- Pilih Tahun --</option>
                    {[...Array(16)].map((_,i)=>(
                      <option value={`20${i + 15}`} key={i}>{`20${i + 15}`}</option>
                    ))}
                  </select>
                </div>
                :(
                  <div className="relative z-0 w-full mb-6 grou pt-6">
                    <input
                      type="month"
                      name="tanggalTanam"
                      id="tanggalTanam"
                      value={tanggalTanam}
                      onChange={(e) => setTanggalTanam(e.target.value)}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="tanggalTanam"
                      className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      <strong>Bulan Tanam </strong>
                    </label>
                  </div>
                )
              }
              </div>
              <div className="grid md:grid-cols-2 mt-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    htmlFor="underline_select"
                    className="text-sm text-gray-500  pt-5 md:pt-0"
                  >
                    <strong>Pilih komoditas: </strong>
                  </label>
                  <select
                    id="komoditas"
                    value={komoditas}
                    onChange={(e) => setKomoditas(e.target.value)}
                    className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none  dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer-placeholder-shown"
                  >
                    <option value="">-- Pilih Komoditas --</option>
                    {daftarKomoditas?.map((item, i) => (
                      <option value={item} key={i}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    htmlFor="underline_select"
                    className="text-sm text-gray-500  pt-5 md:pt-0"
                  >
                    <strong>Musim Tanam Ke: </strong>
                  </label>
                  <select
                    id="musimTanam"
                    value={musimTanam}
                    onChange={(e) => setMusimTanam(e.target.value)}
                    className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none  dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer-placeholder-shown"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 mt-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 grou pt-6">
                  <input
                    type="month"
                    name="perkiraanPanen"
                    id="perkiraanPanen"
                    value={perkiraanPanen}
                    onChange={(e) => setPerkiraanPanen(e.target.value)}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="perkiraanPanen"
                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    <strong>Prakiraan Bulan Panen</strong>(Contoh: 3 Bulan)
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 grou pt-6">
                  <input
                    type="text"
                    name="realisasipanen"
                    id="realisasipanen"
                    value={perkiraanHasilPanen}
                    onChange={(e) => setPerkiraanHasilPanen(e.target.value)}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="realisasipanen"
                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    <strong>Prakiraan Produksi Panen </strong>(Contoh: 10 kw)
                  </label>
                </div>
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
              onClick={()=>history(-1)}
              className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-orange-800"
            >
              <FontAwesomeIcon icon={faClose} className="mr-2" />
              Batalkan
            </button>
          </div>
        </MainCard>
      </form>
    </div>
  );
};

export default TambahDataTani;


