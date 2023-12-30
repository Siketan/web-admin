import React from "react";
import { Carousel } from "@mantine/carousel";

export default function Demo() {
  return (
    <Carousel mx="auto">
      <Carousel.Slide>
        <div className="flex px-2 gap-7">
          <div className="cursor-pointer hover:bg-green-primary hover:rounded-md">
            <img
              src="/image/icon-unggulan-1.png"
              width="181"
              height="319"
              alt="Icon Unggulan 1"
            />
          </div>
          <div className="cursor-pointer hover:bg-green-primary hover:rounded-md">
            <img
              src="/image/icon-unggulan-2.png"
              width="181"
              height="319"
              alt="Icon Unggulan 2"
            />
          </div>
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div className="flex px-2 gap-7">
          <div className="cursor-pointer hover:bg-green-primary hover:rounded-md">
            <img
              src="/image/icon-unggulan-3.png"
              width="181"
              height="319"
              alt="Icon Unggulan 3"
            />
          </div>
          <div className="cursor-pointer hover:bg-green-primary hover:rounded-md">
            <img
              src="/image/icon-unggulan-4.png"
              width="181"
              height="319"
              alt="Icon Unggulan 4"
            />
          </div>
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div className="flex px-2 gap-7">
          <div className="cursor-pointer hover:bg-green-primary hover:rounded-md">
            <img
              src="/image/icon-unggulan-5.png"
              width="181"
              height="319"
              alt="Icon Unggulan 5"
            />
          </div>
          <div className="cursor-pointer hover:bg-green-primary hover:rounded-md">
            <img
              src="/image/icon-unggulan-6.png"
              width="181"
              height="319"
              alt="Icon Unggulan 6"
            />
          </div>
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div className="flex px-2 gap-7">
          <div className="cursor-pointer hover:bg-green-primary hover:rounded-md">
            <img
              src="/image/icon-unggulan-7.png"
              width="181"
              height="319"
              alt="Icon Unggulan 7"
            />
          </div>
          <div className="cursor-pointer hover:bg-green-primary hover:rounded-md">
            <img
              src="/image/icon-unggulan-1.png"
              width="181"
              height="319"
              alt="Icon Unggulan 1"
            />
          </div>
        </div>
      </Carousel.Slide>
    </Carousel>
  );
}
