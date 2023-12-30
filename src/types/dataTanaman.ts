export type TDataTanaman = {
  id: number;
  kategori: string;
  komoditas: string;
  periodeTanam: string;
  luasLahan: number;
  prakiraanLuasPanen: number;
  prakiraanHasilPanen: number;
  prakiraanBulanPanen: string;
  realisasiLuasPanen: number;
  realisasiHasilPanen: number;
  realisasiBulanPanen: string;
  fk_kelompokId: number;
  createdAt: string;
  updatedAt: string;
};

export type TDataTanamanInput = Omit<
  TDataTanaman,
  "id" | "createdAt" | "updatedAt"
>;

export const dataTanamanDefault: TDataTanamanInput = {
  kategori: "",
  komoditas: "",
  periodeTanam: "",
  luasLahan: 0,
  prakiraanLuasPanen: 0,
  prakiraanHasilPanen: 0,
  prakiraanBulanPanen: "",
  realisasiLuasPanen: 0,
  realisasiHasilPanen: 0,
  realisasiBulanPanen: "",
  fk_kelompokId: 0,
};

export type TTableDataTanaman = {
  no: number;
  actions: React.ReactNode;
} & TDataTanaman;
