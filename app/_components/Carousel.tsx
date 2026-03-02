"use client";
import Image from "next/image";
import React, { useState } from "react";
import image1 from "../../public/images/ddca409f09495515caf83acbf64f05b5.jpg";
import image2 from "../../public/images/593dbc5d1e8f0af0d4fd35914d63a4ee.jpg";
import image3 from "../../public/images/S45bf3b8b511e4c8ab6a64844fc6556e2u.webp";
import NextArrow from "@/svg/NextArrow";
const images = [
  {
    image: image1,
    title: "30% DISCOUNT",
    subTitle: "SUMMER 2026",
    desc: "OFFER ENDS SOON",
  },
  {
    image: image2,
    subTitle: "NEW LINEN COLLECTION",
    desc: "GET YOURS NOW",
  },

  {
    image: image3,
    title: "LATEST",
    subTitle: "DUVET SERIES",
    desc: "SHOP COLLECTION",
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
        className="object-cover  "
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
