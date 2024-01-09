import React, { useEffect, useState } from "react";
import { Image } from "@mantine/core";
// import LinesEllipsis from "react-lines-ellipsis";
import { FaClock } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import MainCard from "../../../../components/MainCard";
const BeritaTani = () => {
  const [datas, setDatas] = useState([
    {
      judul: "Sate Ponorogo A",
      fotoBerita:
        "https://th.bing.com/th/id/OIP.kNkzv0e_cYqG9YcJbYoC9gHaHa?rs=1&pid=ImgDetMain",
      createdBy: "Kang Sate",
      tanggal: "25 September 2023",
      isi: "Sate Ponorogo is a type of satay originating from Ponorogo, East Java. The chicken meat is very tender and the seasoning is absorbed. Sate Ponorogo is made through the process of soaking the spices, after which the roasting process will be carried out. Once it’s well grilled, the satay is placed on a plate and seasoned again with special spices. Once cooked, the satay is covered with peanut sauce.It is difficult to find a restaurant or seller of Sate Ayam Ponorogo outside of town in East Java, besides that it does not necessarily meet the original taste.",
    },
    {
      judul: "Sate Ponorogo B",
      fotoBerita:
        "https://th.bing.com/th/id/OIP.kNkzv0e_cYqG9YcJbYoC9gHaHa?rs=1&pid=ImgDetMain",
      createdBy: "Kang Sate",
      tanggal: "25 September 2023",
      isi: "Sate Ponorogo is a type of satay originating from Ponorogo, East Java. The chicken meat is very tender and the seasoning is absorbed. Sate Ponorogo is made through the process of soaking the spices, after which the roasting process will be carried out. Once it’s well grilled, the satay is placed on a plate and seasoned again with special spices. Once cooked, the satay is covered with peanut sauce.It is difficult to find a restaurant or seller of Sate Ayam Ponorogo outside of town in East Java, besides that it does not necessarily meet the original taste.",
    },
    {
      judul: "Sate Ponorogo C",
      fotoBerita:
        "https://th.bing.com/th/id/OIP.kNkzv0e_cYqG9YcJbYoC9gHaHa?rs=1&pid=ImgDetMain",
      createdBy: "Kang Sate",
      tanggal: "25 September 2023",
      isi: "Sate Ponorogo is a type of satay originating from Ponorogo, East Java. The chicken meat is very tender and the seasoning is absorbed. Sate Ponorogo is made through the process of soaking the spices, after which the roasting process will be carried out. Once it’s well grilled, the satay is placed on a plate and seasoned again with special spices. Once cooked, the satay is covered with peanut sauce.It is difficult to find a restaurant or seller of Sate Ayam Ponorogo outside of town in East Java, besides that it does not necessarily meet the original taste.",
    },
  ]);
  const [isFull, setFull] = useState(false);
  // useEffect(() => {
  //   GetInfoTani().then((data)=>setDatas(data))
  // }, [])
  return (
    <>
      {datas?.map((data, i) => (
        <MainCard row transparent center gap={0} key={i}>
          <MainCard width="80%" radius={0} gap={0}>
            <MainCard transparent row>
              <Image
                className="h-min w-60 rounded-md"
                // width={200}
                src={data?.fotoBerita}
                alt="With default placeholder"
              />
              <MainCard transparent noPadding>
                <h1 className="font-bold text-base md:text-2xl tracking-[1px] text-green-primary">
                  {data?.judul}
                </h1>
                <div className="flex flex-row space-x-5">
                  <div className="flex flex-row space-x-2 items-center justify-center">
                    <BsPersonCircle size={20} className="fill-gray-primary" />
                    <p className="text-xs sm:text-sm md:text-base text-gray-primary">
                      {data?.createdBy}
                    </p>
                  </div>
                  <div className="flex flex-row space-x-2 items-center justify-center">
                    <FaClock size={20} className="fill-gray-primary" />
                    <p className="text-xs sm:text-sm md:text-base text-gray-primary">
                      {data?.tanggal?.split("T")[0]}
                    </p>
                  </div>
                </div>
                <div className="text-justify text-sm md:text-base line-clamp-3">
                  {data?.isi}
                  {/* <LinesEllipsis
                    text={data?.isi}
                    maxLine="3"
                    ellipsis="......"
                    trimRight
                    basedOn="letters"
                  /> */}
                </div>
                <Link
                  to="/info-pertanian/berita"
                  className="text-sm md:text-base hover:text-green-600"
                >
                  Read More &gt;{" "}
                </Link>
              </MainCard>
            </MainCard>
          </MainCard>
        </MainCard>
      ))}
    </>
  );
};

export default BeritaTani;
