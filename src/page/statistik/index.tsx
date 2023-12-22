import { Anchor, Breadcrumbs, TextInput } from "@mantine/core";
import React, { useEffect } from "react";
import SearchInput from "../../components/uiComponents/inputComponents/searchInput";
import { FaPlus } from "react-icons/fa";
import { GetStatistikTanamanAll } from "../../infrastucture";

const breadcrumbItems = [
  { title: "Dashboard", href: "/" },
  { title: "Statistik" },
  { title: "Tabel Statistik" },
].map((item, index) => (
  <Anchor href={item.href} key={index} className="text-white opacity-50">
    {item.title}
  </Anchor>
));

export default function index() {
  useEffect(() => {
    GetStatistikTanamanAll().then((res) => console.log(res));
  }, []);
  return (
    <div>
      <Breadcrumbs>{breadcrumbItems}</Breadcrumbs>
      <h3 className="text-white text-2xl font-bold mt-4">
        TABEL DATA STATISTIK PERTANIAN
      </h3>
      <SearchInput placeholder="Cari NIK PETANI / POKTAN" />
      <div className="relative bg-white bg-opacity-20 mt-6 p-4 flex items-center w-full">
        <h3 className="text-white text-2xl font-bold mx-auto">
          TABEL DATA STATISTIK PERTANIAN
        </h3>
        <a
          href="/statistik/tambah"
          className="absolute right-4 text-[#0FA958] text-xl"
        >
          <FaPlus />
        </a>
      </div>
    </div>
  );
}
