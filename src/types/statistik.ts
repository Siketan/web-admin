export enum EKomoditas {
  "PADI KONVENSIONAL",
  "PADI RAMAH LINGKUNGAN",
  "PADI ORGANIK",
  "JAGUNG",
  "KEDELAI",
  "UBI JALAR",
  "UBI KAYU",
  "KACANG TANAH",
  "KACANG HIJAU",
}
export type TKomoditasResponse = {
  date: string;
  komoditas:
    | "PADI KONVENSIONAL"
    | "PADI RAMAH LINGKUNGAN"
    | "PADI ORGANIK"
    | "JAGUNG"
    | "KEDELAI"
    | "UBI JALAR"
    | "UBI KAYU"
    | "KACANG TANAH"
    | "KACANG HIJAU";
  count: number;
};

export type TKategoriResponse = {
  date: string;
  kategori: "HOLTIKULTURA" | "TANAMAN PANGAN" | "TANAMAN PERKEBUNAN";
  count: number;
};

export type TSummaryKomoditasResponse = Omit<TKomoditasResponse, "date">;
export type TSummaryKategoriResponse = Omit<TKategoriResponse, "date">;
