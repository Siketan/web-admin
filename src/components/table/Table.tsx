import {
  ColumnDef,
  getCoreRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import { PaginatedRespApi } from "../../types/paginatedRespApi";
import { useSearchParams } from "react-router-dom";
import TBody from "./TBody";
import THead from "./THead";

type TableProps<T extends object> = {
  data: PaginatedRespApi<T> | undefined;
  columns: ColumnDef<T>[];
  isLoading?: boolean;
  omitSort?: boolean;
  withFilter?: boolean;
  withPaginationControl?: boolean;
  withPaginationCount?: boolean;
  withButton?: boolean;
  buttonText?: string;
  buttonHref?: string;
  filter?: string[];
} & React.ComponentPropsWithoutRef<"div">;

export default function Table<T extends object>({
  className,
  columns,
  data,
  isLoading,
  omitSort = false,
  withFilter = false,
  withPaginationCount = false,
  withPaginationControl = false,
  withButton = false,
  buttonText = "Tambah",
  buttonHref = "/",

  filter = [],
  ...rest
}: TableProps<T>) {
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [searchParams] = useSearchParams();

  const table = useReactTable({
    data: data?.data.data ?? [],
    columns,
    state: {
      globalFilter,
      sorting,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  React.useEffect(() => {
    table.setPageSize(Number(searchParams.get("page_size") ?? 10));
  }, [searchParams, table]);

  return (
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <THead
              table={table}
              data={data}
              omitSort={omitSort}
              className="rounded-xl text-white"
            />
            <TBody table={table} isLoading={isLoading} />
          </table>
        </div>
      </div>
    </div>
  );
}
