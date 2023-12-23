export interface PaginatedRespApi<T> {
  message: string;
  data: {
    data: T[];
    total: number;
    currentPages: number;
    limit: number;
    maxPages: number;
    from: number;
    to: number;
    sortBy: string;
    sortType: "ASC" | "DESC";
  };
}
