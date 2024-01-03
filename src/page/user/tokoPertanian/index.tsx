import React from "react";
import UserLayout from "../../../components/UserLayout";
import MainCard from "../../../components/MainCard";
import CarouselPromo from "./components/CarouselPromo";
import CarouselUnggulan from "./components/carouselUnggulan";

export default function index() {
  return (
    <UserLayout>
      <section>
        <div className="pb-5 max-w-[90%] mx-auto flex flex-col gap-12 justify-center items-center">
          {/* Header */}
          {/* Dekstop */}
          <MainCard className="w-[80%] hidden md:block">
            <div className="flex justify-between">
              <div className="w-[67%]">
                <img src="/image/icon-buah-1.png" alt="buah-1" />
              </div>
              <div className="">
                <div>
                  <img src="/image/icon-buah-2.png" alt="buah-2" />
                </div>
                <div>
                  <img src="/image/icon-buah-3.png" alt="buah-3" />
                </div>
              </div>
            </div>
          </MainCard>
          {/* Mobile */}

          {/* Produk Unggulan Petani */}
          <MainCard className="w-[80%]">
            <div className="py-8">
              <p className="text-lg lg:text-2xl font-bold text-green-primary text-center pb-5">
                PRODUK UNGGULAN PETANI
              </p>
              <div className="hidden md:block">
                <div className="grid md:grid-cols-7">
                  <div className="cursor-pointer hover:bg-green-primary hover:rounded-md">
                    <a
                      href="https://api.whatsapp.com/send?phone=6281252232644"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/image/icon-unggulan-1.png"
                        alt="Icon Unggulan 1"
                      />
                    </a>
                  </div>
                  <div className="cursor-pointer hover:bg-green-primary hover:rounded-md">
                    <a
                      href="https://api.whatsapp.com/send?phone=6281252232644"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/image/icon-unggulan-2.png"
                        alt="Icon Unggulan 2"
                      />
                    </a>
                  </div>
                  <div className="cursor-pointer hover:bg-green-primary hover:rounded-md">
                    <a
                      href="https://api.whatsapp.com/send?phone=6281252232644"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/image/icon-unggulan-3.png"
                        alt="Icon Unggulan 3"
                      />
                    </a>
                  </div>
                  <div className="cursor-pointer hover:bg-green-primary hover:rounded-md">
                    <a
                      href="https://api.whatsapp.com/send?phone=6281252232644"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/image/icon-unggulan-4.png"
                        alt="Icon Unggulan 4"
                      />
                    </a>
                  </div>
                  <div className="cursor-pointer hover:bg-green-primary hover:rounded-md">
                    <a
                      href="https://api.whatsapp.com/send?phone=6281252232644"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/image/icon-unggulan-5.png"
                        alt="Icon Unggulan 5"
                      />
                    </a>
                  </div>
                  <div className="cursor-pointer hover:bg-green-primary hover:rounded-md">
                    <a
                      href="https://api.whatsapp.com/send?phone=6281252232644"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/image/icon-unggulan-6.png"
                        alt="Icon Unggulan 6"
                      />
                    </a>
                  </div>
                  <div className="cursor-pointer hover:bg-green-primary hover:rounded-md">
                    <a
                      href="https://api.whatsapp.com/send?phone=6281252232644"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/image/icon-unggulan-7.png"
                        alt="Icon Unggulan 7"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Dekstop */}

            {/* Mobile */}
            <div className="md:hidden">
              <CarouselUnggulan />
            </div>
          </MainCard>
          {/* Promo Penjual Ngawi */}
          <MainCard className="w-[80%]">
            <div className="py-8">
              <p className="text-lg lg:text-2xl font-bold text-green-primary text-center pb-5">
                PROMO PENJUAL NGAWI
              </p>
              <div className="grid md:grid-cols-2">
                <div>
                  <div className="flex items-center justify-center">
                    <img
                      src="/image/icon-promo.png"
                      width="60%"
                      height="60%"
                      alt="Icon Promo"
                    />
                  </div>
                </div>
                {/* Dekstop */}
                <div className="w-full hidden md:flex items-center justify-center">
                  <div className="grid grid-cols-3 pt-5 pl-10 md:pl-0 gap-2 md:gap-2">
                    <div>
                      <img
                        src="/image/icon-merujaya.png"
                        width="60%"
                        height="60%"
                        alt="Icon Merujaya"
                        className="cursor-pointer hover:py-2 hover:px-2 hover:bg-green-primary hover:rounded-md"
                      />
                    </div>
                    <div>
                      <img
                        src="/image/icon-alamjayatani.png"
                        width="60%"
                        height="60%"
                        alt="Icon Alam Jaya Tani"
                        className="cursor-pointer hover:py-2 hover:px-2 hover:bg-green-primary hover:rounded-md"
                      />
                    </div>
                    <div>
                      <img
                        src="/image/icon-sida.png"
                        width="60%"
                        height="60%"
                        alt="Icon Sida"
                        className="cursor-pointer hover:py-2 hover:px-2 hover:bg-green-primary hover:rounded-md"
                      />
                    </div>
                    <div>
                      <img
                        src="/image/icon-sam.png"
                        width="60%"
                        height="60%"
                        alt="Icon Syari'ah Mandiri Agro"
                        className="cursor-pointer hover:py-2 hover:px-2 hover:bg-green-primary hover:rounded-md"
                      />
                    </div>
                    <div>
                      <img
                        src="/image/icon-mulyatani.png"
                        width="60%"
                        height="60%"
                        alt="Icon Mulya Tani"
                        className="cursor-pointer hover:py-2 hover:px-2 hover:bg-green-primary hover:rounded-md"
                      />
                    </div>
                    <div>
                      <img
                        src="/image/icon-jagoantani.png"
                        width="60%"
                        height="60%"
                        alt="Icon Jagoan Tani"
                        className="cursor-pointer hover:py-2 hover:px-2 hover:bg-green-primary hover:rounded-md"
                      />
                    </div>
                  </div>
                </div>
                {/* Mobile */}
                <div className="md:hidden">
                  <CarouselPromo />
                </div>
              </div>
            </div>
          </MainCard>
        </div>
      </section>
    </UserLayout>
  );
}
