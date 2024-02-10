import { TPetani } from './petani';

export type TTanamanPetani = {
  id: number;
  createdAt: string;
  fk_petaniId: number;
  jenis: string;
  kategori: string;
  komoditas: string;
  luasLahan: string;
  periodeBulanTanam: string;
  periodeMusimTanam: string;
  prakiraanBulanPanen: string;
  prakiraanLuasPanen: number;
  prakiraanProduksiPanen: number;
  statusKepemilikanLahan: string;
  updatedAt: string;

  dataPetani?: TPetani;
};

export type TTableTanamanPetani = {
  no: number;
} & TTanamanPetani;
