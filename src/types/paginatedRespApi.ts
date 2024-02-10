export interface PaginatedRespApi<T> {
  message: string;
  data: PaginatedRespApiData<T>;
}

export interface PaginatedRespApiData<T> {
  data: T[];
  total: number;
  currentPages: number;
  limit: number;
  maxPages: number;
  from: number;
  to: number;
  sortBy: string;
  sortType: 'ASC' | 'DESC';
}

export interface RespApiData<T> {
  message: string;
  data: T;
}
