export enum EKomoditas {
  'PADI KONVENSIONAL',
  'PADI RAMAH LINGKUNGAN',
  'PADI ORGANIK',
  'JAGUNG',
  'KEDELAI',
  'UBI JALAR',
  'UBI KAYU',
  'KACANG TANAH',
  'KACANG HIJAU'
}
export type TKomoditasResponse = {
  date: string;
  komoditas: string;
  count: number;
};

export type TKategoriResponse = {
  date: string;
  kategori: string;
  count: number;
};

export type TSummaryKomoditasResponse = Omit<TKomoditasResponse, 'date'>;
export type TSummaryKategoriResponse = Omit<TKategoriResponse, 'date'>;
