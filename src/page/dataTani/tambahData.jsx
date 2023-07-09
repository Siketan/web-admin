import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "@mantine/core";
import { useState, useEffect } from "react";
import { faPlus, faSearch, faClose, faSave } from "@fortawesome/free-solid-svg-icons";
import InputImage from "@/components/inputImage";
import MainCard from "@/components/MainCard";
import { DatePicker } from '@mantine/dates';
import { DaftarTaniAdd, CekNik, select } from "@/infrastruture";
import { fecthKecamatan, fecthDesa } from "../../infrastucture/daerah";
const TambahDataTani = () => {
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
  const [datas, setDatas] = useState({});
  const [disable, setDisable] = useState(false);
  const [countData, setCountData] = useState(1);
  const [daftarKecamatan, setDaftarKecamatan] = useState([]);
  const [kecamatanActive, setKecamatanActive] = useState("");
  const [dafatarDesa, setDafatarDesa] = useState([{ nama: "" }]);
  const [daftarNamaKelompok, setDaftarNamaKelompok] = useState([{ nama: "" }]);
  const [daftarKomoditas, setDaftarKomoditas] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [jenisPanen, setjenisPanen] = useState(false)

  console.log(jenis)
  console.log(jenisPanen)
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleClikAdd = () => {
    setCountData(countData + 1);
  };

  useEffect(() => {
    fecthKecamatan().then((data) => {
      setDaftarKecamatan(data.kecamatan);
    });
  }, []);
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
  const handleselect = (e) => {
    setDesa(e);
    select(e).then((data) => {
      setGapoktan(data?.kelompok[0]?.gapoktan || "");
      setDaftarNamaKelompok(data?.kelompok);
      console.log(data);
    });
  };

  const handleCLick = () => {
    CekNik({ nik: NIK }).then((data) => {
      if (data) {
        setNIK(data?.NIK);
        setNoWa(data?.NoWa);
        setNama(data?.nama);
        setPassword(data?.password);
        setKecamatan(data?.kecamatan);
        setDesa(data?.desa);
        setFoto(data?.foto);
        setNamaKelompok(data?.kelompok?.namaKelompok);
        setPenyuluh(data?.kelompok?.penyuluh);
        setStatusLahan(data?.statusLahan);
        setLuasLahan(data?.luasLahan);
        setKategori(data?.kategori);
        setAlamat(data?.alamat);
        setGapoktan(data?.kelompok?.gapoktan);
        setJenis(data?.tanamanPetani?.jenis);
        setKomoditas(data?.tanamanPetani?.komoditas);
        setMusimTanam(data?.tanamanPetani?.musimTanam);
        setTanggalTanam(data?.tanamanPetani?.tanggalTanam);
        setPerkiraanPanen(data?.tanamanPetani?.perkiraanPanen?.split("T")[0]);
        setDisable(true);
      }
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      NIK,
      NoWa,
      nama,
      password,
      kecamatan,
      desa,
      namaKelompok,
      penyuluh,
      statusLahan,
      luasLahan,
      kategori,
      alamat,
      gapoktan,
      jenis,
      komoditas,
      musimTanam,
      tanggalTanam,
      perkiraanPanen,
      foto,
      realisasiPanen,
      hasilPanen,
    };
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    DaftarTaniAdd(formData)
    console.log(kategori);
  };
  const handleSelectKecamatan = (e) => {
    const id = e?.split("-")[1];
    const nama = e?.split("-")[0];
    setKecamatan(nama);
    setKecamatanActive(e);
    fecthDesa(id).then((data) => setDafatarDesa(data.kelurahan));
  };

  return (
    <div className="px-10 md:px-40 py-10 z-1">
      <form onSubmit={(e) => handleSubmit(e)}>
        <MainCard className="mb-10">
          <div className="flex items-center justify-center">
            <InputImage
              imageActive={foto}
              onChange={(e) => setFoto(e.target.files[0])}
              title="Foto Profil"
            />
          </div>
          <div className="w-max lg:w-full pt-5 flex justify-end">
            <button
              value={NIK}
              onClick={(e) => handleCLick(e)}
              className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 ml-auto"
            >
              <FontAwesomeIcon icon={faSearch} className="mr-2" />
              Cek NIK
            </button>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6 mt-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="NIK"
                id="NIK"
                disabled={disable}
                value={NIK}
                onChange={(e) => setNIK(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="NIK"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <strong>NIK</strong> (Contoh: 3514002000000001)
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="NoWa"
                id="NoWa"
                value={NoWa}
                onChange={(e) => setNoWa(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="NoWa"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <strong>No. HP/WA</strong> (Contoh: 0812 3456 7890)
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="nama"
                id="nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="nama"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                {" "}
                <strong>Nama</strong> (Contoh: Subagyo Joyo Kumuso)
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="password"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <strong>Password</strong>
              </label>
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
                {daftarKecamatan?.map((item, i) => (
                  <option value={`${item.nama}-${item.id}`} key={i}>
                    {item.nama}
                  </option>
                ))}
              </select>
              <label
                htmlFor="kecamatan"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <strong>Kecamatan</strong> (Contoh: Karanganyar)
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <select
                id="desa"
                value={desa}
                onChange={(e) => handleselect(e.target.value)}
                className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none  dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer-placeholder-shown"
              >
                <option value="">--Silahkan Pilih Desa--</option>
                {dafatarDesa?.map((item, i) => (
                  <option value={item.nama} key={i}>
                    {item.nama}
                  </option>
                ))}
              </select>
              <label
                htmlFor="desa"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <strong>Desa</strong> (Contoh: Karanganyar)
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="alamat"
              id="alamat"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="alamat"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              <strong>Alamat</strong> (Contoh: Jl. Raya Utara Timur Laut RT 01 /
              RW 09)
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="gapoktan"
                id="gapoktan"
                value={gapoktan}
                onChange={(e) => setGapoktan(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="gapoktan"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <strong>Gapoktan</strong> (Contoh: Power Ranger)
              </label>
            </div>
            {daftarNamaKelompok?.length > 0 ? (
              <div className="relative z-0 w-full mb-6 group">
                <select
                  id="namaKelompok"
                  value={namaKelompok}
                  onChange={(e) => setNamaKelompok(e.target.value)}
                  className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none  dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer-placeholder-shown"
                >
                  <option value="">--Silahkan Pilih Nama Kelompok--</option>
                  {daftarNamaKelompok?.map((item, i) => (
                    <option value={item.namaKelompok} key={i}>
                      {item.namaKelompok}
                    </option>
                  ))}
                </select>
                <label
                  htmlFor="desa"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  <strong>Desa</strong> (Contoh: Karanganyar)
                </label>
              </div>
            ) : (
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="namaKelompok"
                  id="namaKelompok"
                  value={namaKelompok}
                  onChange={(e) => setNamaKelompok(e.target.value)}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="namaKelompok"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  <strong>Nama Kelompok </strong>(Contoh: Ranger Merah)
                </label>
              </div>
            )}
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="penyuluh"
              id="penyuluh"
              value={penyuluh}
              onChange={(e) => setPenyuluh(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="penyuluh"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              <strong>Nama Penyuluh</strong> (Contoh: Nama Penyuluh)
            </label>
          </div>
        </MainCard>
        <MainCard>
          <div className="flex justify-end">
            <button
              className="text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 ml-auto"
              onClick={handleClikAdd}
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Tambah Tanaman Petani
            </button>
          </div>
          {[...Array(countData)]?.map((_, i) => (
            <div key={i}>
              <div className="grid md:grid-cols-2 mt-2 md:gap-6" key={i}>
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
                    <option value="US">Sewa</option>
                    <option value="CA">Milik Sendiri</option>
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
                      <option value="Buah">Buah</option>
                      <option value="Sayur">Sayur</option>
                    </select>
                  </div>
                )}
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
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    htmlFor="underline_select"
                    className="text-sm text-gray-500 "
                  >
                    <strong>Nama Penyuluh</strong>
                  </label>
                  <select
                    id="penyuluh"
                    value={penyuluh}
                    onChange={(e) => setPenyuluh(e.target.value)}
                    className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none  dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer-placeholder-shown"
                  >
                    <option value="US">Riski</option>
                    <option value="CA">Rizal</option>
                  </select>
                </div>
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
                    // value={tanggalTanam}
                    // onChange={(e) => setMusimTanam(e.target.value)}
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
                    type="date"
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
                    value={realisasiPanen}
                    onChange={(e) => setRealisasiPanen(e.target.value)}
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
                <div className="relative z-0 w-full mb-6 grou pt-6">
                  <input
                    type="text"
                    name="hasilpanen"
                    id="hasilpanen"
                    value={hasilPanen}
                    onChange={(e) => setHasilPanen(e.target.value)}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="hasilpanen"
                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    <strong>Realisasi Produksi Panen </strong>(Contoh: 10 kw)
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 grou pt-6">
                  <input
                    type="text"
                    name="hasilpanen"
                    id="hasilpanen"
                    value={hasilPanen}
                    onChange={(e) => setHasilPanen(e.target.value)}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="hasilpanen"
                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    <strong>Realisasi Luas Lahan Panen per M2</strong>(Contoh:
                    100)
                  </label>
                </div>
              </div>
              {countData != i + 1 && <Divider my="sm" variant="dotted" />}
            </div>
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
  );
};

export default TambahDataTani;


// Taman perkebunan
// perkebunanTahunan=
// perkebunanMusiman=
// Tanaman Holtikutura
// holtikuturaTahunan=
// holtikuturaBuahSemusim=
// holtikuturaBuahTahunan=
