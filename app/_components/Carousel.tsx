"use client";
import Image from "next/image";
import React, { useState } from "react";
import image1 from "../../public/images/afe3f1215642c2c31b3d7ff1b207be04.jpg";
import image2 from "../../public/images/perfume-photography.jpg";
import image3 from "../../public/images/Perfume-Bottles-35-930x700.webp";
import NextArrow from "@/svg/NextArrow";
const images = [
  {
    image: image1,
    title: "30% DISCOUNT",
    subTitle: "SUMMER 2026",
    desc: "GET YOURS NOW",
  },
  {
    image: image2,
    title: "OFFER ENDS SOON",
    subTitle: "BLACK FRIDAY SALE",
    desc: "UPTO 15% OFF ON ALL PRODUCTS",
  },
  {
    image: image3,
    title: "30% DISCOUNT",
    subTitle: "SUMMER 2026",
    desc: "GET YOURS NOW",
  },
];
const Carousel = () => {
  const [index, setIndex] = useState(0);
  const handleNextclick = () => {
    if (index == images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const handlePrevClick = () => {
    if (index == 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  return (
    <div className="h-screen w-full relative">
      <Image
        src={images[index].image}
        alt="image 1"
        fill
        className="object-cover"
      />
      <div className="absolute flex flex-col items-center justify-center inset-0 text-[white] sm:text-2xl text-xl  font-bold">
        <p>{images[index].title}</p>
        <p className="font-semibold text-3xl sm:text-5xl py-4">
          {images[index].subTitle}
        </p>
        <p>{images[index].desc}</p>
      </div>

      <NextArrow
        className="absolute rotate-180 text-[white] size-6 top-1/2 -translate-x-2 right-0 sm:-translate-x-10 bg-[#63564a] rounded-full  "
        onClick={handleNextclick}
      />
      <NextArrow
        className="absolute text-[white] size-6 top-1/2 translate-x-2 sm:translate-x-10   bg-[#63564a] rounded-full   "
        onClick={handlePrevClick}
      />
    </div>
  );
};

export default Carousel;
