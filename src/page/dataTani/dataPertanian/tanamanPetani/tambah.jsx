import {
  Anchor,
  Breadcrumbs,
  Button,
  Image,
  NumberInput,
  Radio,
  Select,
  Stack,
  Tabs,
  TextInput,
} from "@mantine/core";
import React, { useEffect } from "react";
// import SearchInput from "../../../../components/uiComponents/inputComponents/SearchInput";
import SearchInput from "../../../../components/uiComponents/inputComponents/searchInput";
import { FaRegRectangleList, FaUpload } from "react-icons/fa6";
// import { GetStatistikTanamanAll } from "../../infrastucture";
import { IoImageOutline } from "react-icons/io5";

const breadcrumbItems = [
  { title: "Dashboard", href: "/" },
  { title: "Statistik" },
  { title: "Tambah Data" },
].map((item, index) => (
  <Anchor href={item.href} key={index} className="text-white opacity-50">
    {item.title}
  </Anchor>
));

export default function TambahStatistik() {
  return (
    <div>
      <Breadcrumbs>{breadcrumbItems}</Breadcrumbs>
      <h3 className="text-white text-2xl font-bold mt-4">
        TABEL DATA STATISTIK PERTANIAN
      </h3>
      <SearchInput placeholder="Cari NIK PETANI / POKTAN" />
      <div className="bg-[#D9D9D9] rounded-lg">
        <div className="relative bg-[#136B09] mt-6 p-4 flex w-full justify-between rounded-t-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold">
            MENAMPILKAN DATA PETANI
          </h3>
        </div>
        <div className="grid grid-cols-5 gap-8 p-6">
          <div className="col-span-2">
            <span className="flex items-center gap-2">
              <IoImageOutline /> Menampilkan Gambar
            </span>
            <Image
              radius="md"
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
            />
          </div>
          <div className="col-span-3 grid grid-cols-2 gap-4">
            <TextInput label="NIK" />
            <TextInput label="Desa Domisili" />
            <TextInput label="Nama Kelompok" />
            <TextInput label="Nama Gapoktan" />
            <TextInput label="Nama Petani" />
            <TextInput label="Nama Poktan" />
          </div>
        </div>
      </div>
      <div className="bg-[#D9D9D9] rounded-lg">
        <div className="relative bg-[#136B09] mt-6 p-4 flex w-full justify-between rounded-t-lg shadow-lg items-center">
          <h3 className="text-white text-2xl font-bold">
            MASUKKAN DATA TANAMAN
          </h3>
          <button className="flex px-4 py-2 gap-4 bg-[#F29D0E] rounded-lg items-center justify-center text-xl text-white active:bg-[#F29D0E] active:shadow-md active:translate-y-1">
            <FaUpload />
            <span>UPLOAD FILE </span>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-8 p-6">
          <div className="flex flex-col gap-4 justify-between">
            <div div className="bg-white rounded-lg p-4">
              <p>STATUS KEPEMILIKAN LAHAN</p>
              <Select
                className="mt-2"
                placeholder="-Tanaman Holtikultura Sayur-"
                data={[
                  "MILIK SENDIRI",
                  "TANAH SEWA",
                ]}
              />
            </div>
            <div className="bg-white rounded-lg p-4">
              <p>
                Luas Lahan Tanam (M<sup>2</sup>)
              </p>
              <NumberInput placeholder="Luas Lahan Tanaman" min={0} />
            </div>
            <div className="bg-white rounded-lg p-4">
              <p>Kategori Tanaman</p>
              <div className="rounded-lg shadow-lg p-4">
                <Radio.Group className="[&>*]:mt-1 first:mt-0">
                  <Radio label="Tanaman Pangan" value="pangan" />
                  <Radio label="Tanaman Perkebunan" value="perkebunan" />
                  <Radio label="Tanaman Holtikultura" value="holtikultura" />
                  <Radio.Group className="ml-8 [&>*]:mt-1">
                    <Radio label="Jenis Buah" value="buah" />
                    <Radio label="Jenis Sayur" value="sayur" />
                  </Radio.Group>
                </Radio.Group>
              </div>
              <p className="mt-4">Komoditas Tanaman</p>
              <Tabs defaultValue="semusim">
                <Tabs.List>
                  <Tabs.Tab value="semusim">Semusim</Tabs.Tab>
                  <Tabs.Tab value="tahunan">Tahunan</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="semusim">
                  <Select
                    className="mt-2"
                    placeholder="-Tanaman Holtikultura Buah-"
                    data={[
                      "Melon",
                      "Semangka",
                      "Pisang",
                      "Blewah",
                      "Mangga",
                      "Durian",
                      "Manggis",
                      "Alpukat",
                      "Rambutan",
                      "Jeruk Lemon",
                      "Jeruk Nipis",
                      "Jeruk Keprok",
                      "Jeruk Besar",
                      "Nangka",
                      "Jambu Biji",
                      "Jambu Air",
                      "Sukun",
                      "Sirsak",
                      "Sawo",
                      "Duku",
                    ].map((buah) => `Buah ${buah}`)}
                  />
                </Tabs.Panel>
                <Tabs.Panel value="tahunan">
                  <Select
                    className="mt-2"
                    placeholder="-Tanaman Holtikultura Sayur-"
                    data={[
                      "Cabe Kecil",
                      "Cabe Besar",
                      "Bawang Merah",
                      "Tomat",
                      "Terong",
                      "Pare",
                      "Gambas",
                      "Bayam",
                      "Kangkung",
                      "Sawi",
                      "Kacang Panjang",
                    ].map((sayur) => `Sayur ${sayur}`)}
                  />
                </Tabs.Panel>
              </Tabs>
            </div>
            {/* <div className="bg-white rounded-lg p-4">
              <p>Periode Tanam</p>
              <Select
                className="mt-2"
                placeholder="-Tanaman Holtikultura Sayur-"
                data={[
                  "Januari",
                  "Februari",
                  "Maret",
                  "April",
                  "Mei",
                  "Juni",
                  "Juli",
                  "Agustus",
                  "September",
                  "Oktober",
                  "November",
                  "Desember",
                ]}
              />
            </div> */}
          </div>
          <div className="flex flex-col gap-4 justify-between">
            <div className="relative">
              <div className="bg-[#136B09] text-xl text-white font-bold py-2 px-6 flex w-fit justify-between rounded-t-lg shadow-lg items-center">
                Prakiraan Panen
              </div>
              <div className="bg-white rounded-lg p-4 rounded-tl-none flex gap-1 flex-col">
                <p>PRAKIRAAN LUAS PANEN (HA)</p>
                <NumberInput placeholder="Prakiraan Luas Panen" min={0} />
                <p>PRAKIRAAN HASIL PANEN (TON)</p>
                <NumberInput placeholder="Prakiraan Hasil Panen" min={0} />
                <p>PRAKIRAAN BULAN PANEN</p>
                <Select
                  placeholder="-Periode Bulan Panen-"
                  data={[
                    "Januari",
                    "Februari",
                    "Maret",
                    "April",
                    "Mei",
                    "Juni",
                    "Juli",
                    "Agustus",
                    "September",
                    "Oktober",
                    "November",
                    "Desember",
                  ]}
                />
              </div>
            </div>
            <div className="relative">
              {/* <div className="absolute w-full h-full bg-[#545454] z-50 rounded-lg bg-opacity-75 flex items-center justify-center text-[#888888] font-bold text-4xl cursor-default">
                DISABLED
              </div> */}
              <div className="bg-[#136B09] text-xl text-white font-bold py-2 px-6 flex w-fit justify-between rounded-t-lg shadow-lg items-center">
                Realisasi Panen
              </div>
              <div className="bg-white rounded-lg p-4 rounded-tl-none flex gap-1 flex-col">
                <p>LUAS PANEN (HA)</p>
                <NumberInput placeholder="Luas Panen" min={0} />
                <p>HASIL PANEN (TON)</p>
                <NumberInput placeholder="Hasil Panen" min={0} />
                <p>BULAN PANEN</p>
                <Select
                  placeholder="-Periode Bulan Panen-"
                  data={[
                    "Januari",
                    "Februari",
                    "Maret",
                    "April",
                    "Mei",
                    "Juni",
                    "Juli",
                    "Agustus",
                    "September",
                    "Oktober",
                    "November",
                    "Desember",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex px-6 pb-6 justify-end">
          <Button className="bg-[#307B28]">Simpan Data</Button>
        </div>
      </div>
      <div className="relative bg-white bg-opacity-20 mt-6 p-4 flex items-center w-full">
        <h3 className="text-white text-2xl font-bold mx-auto">
          TABEL DATA STATISTIK PERTANIAN
        </h3>
        <button className="absolute right-4 text-[#0FA958] text-xl">
          <FaRegRectangleList />
        </button>
      </div>
    </div>
  );
}

// export default TambahDataTani;


