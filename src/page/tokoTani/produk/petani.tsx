import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
// import { ProductsPetani } from "@/infrastruture";
import { getTokoTani } from "../../../infrastucture/toko";
import { Image } from "@mantine/core";
import LoadingAnimation from "../../../components/loadingSession";
import {
  FilteredTokoTani,
  TableTokoTani,
  TokoTani,
} from "../../../@types/toko";
import Table from "../../../components/table/Table";
import { PaginatedRespApiData } from "../../../types/paginatedRespApi";
import { ColumnDef } from "@tanstack/react-table";

const columns: ColumnDef<TableTokoTani>[] = [
  {
    accessorKey: "no",
    header: "No",
    cell: (props) => <span>{`${props.getValue()}`}</span>,
  },
  {
    header: "Nama",
    accessorFn: (row) => row.tbl_akun?.nama,
    cell: (props) => <span>{`${props.getValue()}`}</span>,
  },
  {
    header: "Peran",
    accessorFn: (row) => row.tbl_akun?.peran,
    cell: (props) => <span>{`${props.getValue()}`}</span>,
  },
  {
    accessorKey: "namaProducts",
    header: "Nama Produk",
    cell: (props) => <span>{`${props.getValue()}`}</span>,
  },
  {
    accessorKey: "stok",
    header: "Stok",
    cell: (props) => <span>{`${props.getValue()}`}</span>,
  },
  {
    accessorKey: "satuan",
    header: "Satuan",
    cell: (props) => <span>{`${props.getValue()}`}</span>,
  },
  {
    accessorKey: "harga",
    header: "Harga",
    cell: (props) => <span>{`${props.getValue()}`}</span>,
  },
  {
    accessorKey: "deskripsi",
    header: "Deskripsi",
    cell: (props) => <span>{`${props.getValue()}`}</span>,
  },
  {
    accessorKey: "status",
    header: "Status Produk",
    cell: (props) => <span>{`${props.getValue()}`}</span>,
  },
  // {
  //   accessorKey: "actions",
  //   header: "Aksi",
  //   cell: (props) => props.row.original.actions,
  // },
];

function ProdukPetani() {
  const [dataTable, setDataTable] = React.useState<
    PaginatedRespApiData<TableTokoTani> | undefined
  >();
  const [resp, setResp] = React.useState<
    PaginatedRespApiData<TokoTani> | undefined
  >();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getTokoTani().then((res) => {
      setResp(res.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (resp) {
      setDataTable({
        ...resp,
        data: resp.data.map((item, index) => ({
          ...item,
          no: resp.from + index,
          actions: <div className="flex gap-4"></div>,
        })),
      });
    }
  }, [resp]);

  return (
    <div>
      <Table
        data={dataTable}
        columns={columns}
        withPaginationCount
        withPaginationControl
      />
    </div>
  );
}

export default ProdukPetani;
