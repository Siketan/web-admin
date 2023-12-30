import React, { useEffect, useState } from "react";
import MainCard from "../../../components/MainCard";
import UserLayout from "../../../components/UserLayout";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import Tabel from "./components/Tabel";
import { GetStatistikTanamanPetani } from "../../../infrastucture/statistic";
import { TTanamanPetani } from "../../../types/tanamanPetani";
import {
  TKomoditasResponse,
  TSummaryKategoriResponse,
} from "../../../types/statistik";

export default function Homepage() {
  const [time, setTime] = useState(new Date());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [respData, setRespData] = useState<
    | {
        latest: TTanamanPetani[];
        statistik: TKomoditasResponse[];
        summary: TSummaryKategoriResponse[];
      }
    | undefined
  >(undefined);

  useEffect(() => {
    GetStatistikTanamanPetani(month, year).then((res) => {
      setRespData(res?.data);
    });

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <UserLayout>
      <section className="pb-5 max-w-[90%] mx-auto">
        <MainCard transparent noPadding>
          <MainCard transparent noPadding row center>
            <MainCard transparent width="30%">
              <h2 className="text-center">Musim Tanam Seluruh Komoditas</h2>
              <PieChart apiData={respData?.summary ?? []} />
            </MainCard>
            <MainCard transparent width="60%">
              <h2 className="text-center">STATISTIK PERTUMBUHAN PERTANIAN</h2>
              <h5>
                {time.toLocaleString("id-ID", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                })}
              </h5>
              <LineChart
                apiData={respData?.statistik ?? []}
                month={month}
                year={year}
              />
            </MainCard>
          </MainCard>
          <MainCard transparent noPadding row center>
            <Tabel apiData={respData?.latest ?? []} />
          </MainCard>
        </MainCard>
      </section>
    </UserLayout>
  );
}
