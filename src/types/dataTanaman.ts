export type dataTanaman = {
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
  fk_kelompokId: number;
  createdAt: string;
  updatedAt: string;
};

export type dataTanamanInput = Omit<
  dataTanaman,
  "id" | "createdAt" | "updatedAt"
>;

export const dataTanamanDefault: dataTanamanInput = {
  kategori: "",
  komoditas: "",
  periodeTanam: "",
  luasLahan: 0,
  prakiraanLuasPanen: 0,
  prakiraanHasilPanen: 0,
  prakiraanBulanPanen: "",
  realisasiLuasPanen: 0,
  realisasiHasilPanen: 0,
  fk_kelompokId: 0,
};
