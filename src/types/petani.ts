import { TKelompokTani } from './kelompokTani';

export type TPetani = {
  id: number;
  accoundID: number;
  fk_kelompokId: number;
  fk_penyuluhId: number;
  nik: string;
  nkk: string;
  nama: string;
  foto: string;
  alamat: string;
  desa: string;
  kecamatan: string;
  email: string;
  noTelp: string;
  createdAt: string | null;
  updatedAt: string | null;

  kelompok?: TKelompokTani;
};
