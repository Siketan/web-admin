import { TKomoditasResponse } from '../types/statistik';

export const ResponseApiToDataChart = (
  data: TKomoditasResponse[],
  komoditas: string,
  year: number,
  month: number
) => {
  const filteredData = data.filter(
    (item) => item.komoditas.toLowerCase() === komoditas.toLowerCase()
  );

  const numberOfDays = new Date(year, month, 0).getDate();
  const result = Array.from({ length: numberOfDays }, (_, i) => {
    return filteredData.find((item) => new Date(item.date).getDate() == i + 1)?.count ?? 0;
  });

  return result;
};
