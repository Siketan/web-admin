import { Anchor, Breadcrumbs, TextInput } from "@mantine/core";
import React, { useEffect } from "react";
import SearchInput from "../../components/uiComponents/inputComponents/searchInput";
import { FaPlus } from "react-icons/fa";
import {
  DeleteStatistikTanamanById,
  GetStatistikTanamanAll,
} from "../../infrastucture/statistic";
import Table from "../../components/table/Table";
import { PaginatedRespApi } from "../../types/paginatedRespApi";
import { TDataTanaman, TTableDataTanaman } from "../../types/dataTanaman";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { ImPencil } from "react-icons/im";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

const breadcrumbItems = [
  { title: "Dashboard", href: "/" },
  { title: "Statistik" },
  { title: "Tabel Statistik" },
].map((item, index) => (
  <Anchor href={item.href} key={index} className="text-white opacity-50">
    {item.title}
  </Anchor>
));

const columns: ColumnDef<TTableDataTanaman>[] = [
  {
    accessorKey: "no",
    header: "No",
    cell: (props) => <span>{`${props.getValue()}`}</span>,
  },
  {
    accessorKey: "fk_kelompokId",
    header: "No. Poktan",
    cell: (props) => <span>{`${props.getValue()}`}</span>,
  },
  {
    accessorKey: "kategori",
    header: "Kategori Tanaman",
    cell: (props) => <span>{`${props.getValue()}`}</span>,
  },
  {
    accessorKey: "komoditas",
    header: "Komoditas",
    cell: (props) => <span>{`${props.getValue()}`}</span>,
  },
  {
    accessorKey: "createdAt",
    header: "Tanggal Dibuat",
    cell: (props) => (
      <span>{`${new Date(props.getValue() as string).toLocaleDateString(
        "id-ID"
      )}`}</span>
    ),
  },
  {
    accessorKey: "prakiraanBulanPanen",
    header: "Prakiraan Bulan Panen",
    cell: (props) => <span>{`${props.getValue()}`}</span>,
  },
  {
    accessorKey: "actions",
    header: "Aksi",
    cell: (props) => props.row.original.actions,
  },
];

export default function index() {
  const [dataTable, setDataTable] = React.useState<
    PaginatedRespApi<TTableDataTanaman> | undefined
  >();
  const [resp, setResp] = React.useState<
    PaginatedRespApi<TDataTanaman> | undefined
  >();

  useEffect(() => {
    GetStatistikTanamanAll().then((res) => {
      setResp(res);
    });
  }, []);

  useEffect(() => {
    if (resp) {
      setDataTable({
        ...resp,
        data: {
          ...resp.data,
          data: resp.data.data.map((item, index) => ({
            ...item,
            no: index + 1,
            actions: (
              <div className="flex gap-4">
                <Link to={`/statistik/${item.id}`}>
                  <div className="flex h-7 w-7 items-center justify-center bg-green-500">
                    <IoEyeOutline className="h-6 w-6 text-white" />
                  </div>
                </Link>
                <Link to={`/statistik/${item.id}`}>
                  <div className="flex h-7 w-7 items-center justify-center bg-yellow-500">
                    <ImPencil className="h-[18px] w-[18px] text-white" />
                  </div>
                </Link>
                <button
                  onClick={() => {
                    DeleteStatistikTanamanById(item.id).then(() => {
                      GetStatistikTanamanAll().then((res) => {
                        setResp(res);
                      });
                    });
                  }}
                >
                  <div className="flex h-7 w-7 items-center justify-center bg-red-500">
                    <MdDeleteOutline className="h-6 w-6 text-white" />
                  </div>
                </button>
              </div>
            ),
          })),
        },
      });
    }
  }, [resp]);
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
      <Table data={dataTable} columns={columns} />
    </div>
  );
}
