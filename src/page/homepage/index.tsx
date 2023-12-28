import React, { useEffect, useState } from "react";
import MainCard from "../../components/MainCard";
import UserLayout from "../../components/UserLayout";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import Tabel from "./components/Tabel";

export default function Homepage() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
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
              <PieChart />
            </MainCard>
            <MainCard transparent width="60%">
              <h2 className="text-center">
                STATISTIK PERTUMBUHAN PERTANIAN DALAM 1 TAHUN
              </h2>
              <h5>{time.toLocaleString()}</h5>
              <LineChart />
            </MainCard>
          </MainCard>
          <MainCard transparent noPadding row center>
            <Tabel />
          </MainCard>
        </MainCard>
      </section>
    </UserLayout>
  );
}
