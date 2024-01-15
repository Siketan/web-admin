export type TRequestQuery = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortType?: "ASC" | "DESC" | "";
  search?: string;
  isExport?: boolean;
};
