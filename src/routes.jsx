// eslint-disable-next-line no-unused-vars
import React, { forwardRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Coba from "./page"
import {
  TambahDataTani,
  RekapDataPetani,
  LaporanPetani,
  InfoTani,
  TambahInfoTani,
  EventTani,
  TambahEventTani,
  LiveChat,
  RatingPetugas,
  TambahPenyuluhanTani,
  DataRiwayatChat,
  JurnalKegiatan,
  PresensiKehadiran,
  TambahPenjual,
  FormJurnalKegiatan,
  ProdukPenyuluh,
  ProdukPetani,
  Login,
  Register,
  NotFoundPage,
  Notification,
  RekapDataPenyuluh,
  DetailInfoTani,
  DetailEventTani,
  EditInfoTani,
  DetailRekapPetani,
  EditEventTani,
  EditRekapPetani,
  TambahTanamanPetani,
  EditTanamanPetani,
  DetailTanamanPetani,
  EditLaporanTanam,
  TambahLaporanTanam,
  TambahLaporanAhir,
  EditPenyuluhan
} from "./page";

import Footer from "./components/footer";
import ProtectedRoute from "./page/protectedRoute";
import { Image, Menu, clsx, Group, Avatar, Text, UnstyledButton } from "@mantine/core";
import { IconMenu2 } from "@tabler/icons-react";
import { IoMailUnreadOutline, IoCaretDownOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";


const menu = [
  {
    name: "Statistik",
    icon: "/icons/statistik.svg",
    path: "/statistik",
  }, {
    name: "Data Pertanian",
    icon: "/icons/data-tani.svg",
    path: "/data-tani",
  }, {
    name: "Info Pertanian",
    icon: "/icons/info-tani.svg",
    path: "/info-tani"
  }, {
    name: "Toko Pertanian",
    icon: "/icons/toko-tani.svg",
    path: "/toko-tani"
  }, {
    name: "Info Penyuluh",
    icon: "/icons/data-penyuluh.svg",
    path: "/data-penyuluh"
  }, {
    name: "Hak Akses",
    icon: "/icons/hak-akses.svg",
    path: "/hak-akses"
  }, {
    name: "Log Aktivitas",
    icon: "/icons/log-aktivitas.svg",
    path: "/log-aktivitas"
  }, {
    name: "List Operator",
    icon: "/icons/list-operator.svg",
    path: "/list-operator"
  }
]

const dropdownMenu = [
  {
    name: "Profil",
    icon: "/icons/profil.svg",
    path: "/profil",
  }, {
    name: "Pengaturan",
    icon: "/icons/pengaturan.svg",
    path: "/pengaturan",
  }, {
    name: "Keluar",
    icon: "/icons/keluar.svg",
    path: "/keluar",
  }
]
const Path = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const activePage = window.location.pathname.split("/")[1];

  const sidebar = React.useRef(null);
  const mainMenuClasses =
    "flex items-center p-2 bg-white-primary text-green-primary hover:bg-green-sidebar-hover transition-all duration-200 ease-in-out";
  const activeClasses =
    "bg-gray-100 text-gray-700";
  const textMenuClasses = "ml-3 transition-all duration-200 text-left whitespace-nowrap font-bold text-lg uppercase underline"

  // const login = window.localStorage.getItem('token')
  // const chekToken = () => {
  //   if ((login && window.location.pathname != "/loginAdminSiketan") || (login && window.location.pathname != "/registerAdminSiketan")) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  return (
    <div className="bg-green-primary bg-opacity-70">
      <div className="flex">
        <aside
          ref={sidebar}
          className={clsx(
            "fixed left-0 top-0 z-20 flex h-screen flex-col justify-between bg-green-primary pb-8 shadow-lg duration-300 lg:translate-x-0 text-white",
            sidebarOpen ? "w-72" : "w-20"
          )}
        >
          <div className={clsx("bg-green-secondary bg-opacity-50",
            !sidebarOpen && "p-4"
          )}>
            <Image
              src="/image/logo-navbar.png"
              alt="Logo Siketan"
              className={sidebarOpen ? "block" : "hidden"}
            />
            <Image
              src="/image/logo.png"
              alt="Logo Siketan"
              className={sidebarOpen ? "hidden" : "block"}
            />
          </div>
          <div className="h-full px-3 py-2 overflow-y-auto">
            <ul className="space-y-1.5 font-medium">
              {
                menu.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.path}
                      className={clsx(
                        mainMenuClasses,
                        activePage === item.path &&
                        activeClasses
                      )}
                    >
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={24}
                      />
                      <span
                        className={clsx(
                          textMenuClasses,
                          sidebarOpen ? "block" : "hidden"
                        )}
                      >
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </aside>
        <div
          className={clsx(
            "box-border h-full min-h-screen w-full transition-all duration-300 ease-in-out relative overflow-hidden",
            sidebarOpen ? "lg:ml-72" : "lg:ml-20"
          )}
        >
          <nav className="p-5 flex justify-between text-white bg-green-primary">
            <div className="flex gap-4 items-center text-xl">
              <button
                onClick={() => {
                  setSidebarOpen(!sidebarOpen);
                }}
              >
                <IconMenu2
                />
              </button>
              <h2 className="font-bold">All Data</h2>
            </div>
            <div className="flex gap-4 items-center">
              <IoMailUnreadOutline
                size={24}
              />
              <FaRegBell
                size={24}
              />
              <Menu
                styles={{
                  dropdown: {
                    background: "linear-gradient(180deg, #22571C 0%, #194115 100%);",
                  },
                  item: {
                    color: "white",
                    textTransform: "uppercase",
                    ":hover": {
                      background: "linear-gradient(180deg, #86BA34 0%, rgba(111, 163, 29, 0.50) 100%)",
                    },
                  },
                }}
              >
                <Menu.Target>
                  <UnstyledButton className="text-white">
                    <Group>
                      <div style={{ flex: 1 }}>
                        <Text fw={700} underline>
                          Alila Indah
                        </Text>

                        <Text size="xs">
                          SUPER ADMIN KABUPATEN
                        </Text>
                      </div>
                      <Avatar radius="xl" />
                      <IoCaretDownOutline />
                    </Group>
                  </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                  {
                    dropdownMenu.map((item, index) => (
                      <Menu.Item key={index} href={item.path}>
                        <div className="flex gap-2 items-center">
                          <Image
                            src={item.icon}
                            alt={item.name}
                            className="inline-block"
                            width={24}
                          />
                          {item.name}
                        </div>
                      </Menu.Item>
                    ))
                  }
                </Menu.Dropdown>
              </Menu>
            </div>
          </nav>
          <div
            className="p-6 overflow-hidden"
          // style={{
          //     width: `calc(100% - ${sidebarOpen ? 18 : 7}rem)`,
          // }}
          >
            <RoutesPath />
          </div>
        </div>
      </div>
      <Footer sidebarOpen={sidebarOpen} />
    </div>
  );
};


const RoutesPath = () => {
  return <Router>
    <Routes>
      <Route path="/loginAdminSiketan" element={<Login />} />
      <Route path="/registerAdminSiketan" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<EventTani />} />
        <Route path="/notification" element={<Notification />} />
        {/* Data Tani */}
        <Route path="/rekap-data-tani/edit/:id" element={<EditRekapPetani />} />
        <Route path="/data-tani/tambah" element={<TambahDataTani />} />
        <Route path="/data-tani/laporan-tanam" element={<LaporanPetani />} />
        <Route path="/data-tani/rekap-petani" element={<RekapDataPetani />} />
        <Route path="/data-tani/detail/:id" element={<DetailRekapPetani />} />
        <Route path="/tanaman-petani/add" element={<TambahTanamanPetani />} />
        <Route path="/tanaman-petani/edit/:id" element={<EditTanamanPetani />} />
        <Route path="/laporan-tanam/add" element={<TambahLaporanTanam />} />
        <Route path="/laporan-akhir/add" element={<TambahLaporanAhir />} />
        <Route path="/laporan-tanam/edit/:id" element={<EditLaporanTanam />} />
        <Route path="/laporan-tanam/:id" element={<DetailTanamanPetani />} />
        {/* <Route path="/data-tanaman" element={<DataTanaman />} /> */}
        {/* event Tani */}
        <Route path="/event-tani/tambah" element={<TambahEventTani />} />
        <Route path="/event-tani/detail" element={<DetailEventTani />} />
        <Route path="/info-tani/event-tani" element={<EventTani />} />
        <Route path="/event-tani/edit/:id" element={<EditEventTani />} />
        {/* info tani */}
        <Route path="/info-tani" element={<InfoTani />} />
        <Route path="/info-tani/tambah" element={<TambahInfoTani />} />
        <Route path="/info-tani/detail" element={<DetailInfoTani />} />
        <Route path="/info-tani/edit/:id" element={<EditInfoTani />} />
        {/* Toko Tani */}
        <Route path="/toko-tani/tambah-penjual" element={<TambahPenjual />} />
        <Route path="/toko-tani/produk-petani" element={<ProdukPetani />} />
        <Route path="/toko-tani/produk-penyuluh" element={<ProdukPenyuluh />} />
        {/* Data Penyuluh */}
        <Route path="/data-penyuluh/tambah" element={<TambahPenyuluhanTani />} />
        <Route path="/data-penyuluh/:id" element={<EditPenyuluhan />} />
        <Route path="/data-penyuluh/presensi-kehadiran" element={<PresensiKehadiran />} />
        <Route path="/data-penyuluh/jurnal-kegiatan" element={<JurnalKegiatan />} />
        <Route path="/data-penyuluh/jurnal-kegiatan/form" element={<FormJurnalKegiatan />} />
        <Route path="/data-penyuluh/riwayat-chat" element={<DataRiwayatChat />} />
        <Route path="/data-penyuluh/rekap-penyuluh" element={<RekapDataPenyuluh />} />
        {/* LiveChat */}
        <Route path="/live-chat" element={<LiveChat />} />
        <Route path="/live-chat/rating-petugas" element={<RatingPetugas />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
}

export default Path;
