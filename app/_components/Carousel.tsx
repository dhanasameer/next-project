"use client";

import Image from "next/image";
import React, { useState } from "react";
import image1 from "../../public/images/ddca409f09495515caf83acbf64f05b5.jpg";
import image2 from "../../public/images/593dbc5d1e8f0af0d4fd35914d63a4ee.jpg";
import image3 from "../../public/images/S45bf3b8b511e4c8ab6a64844fc6556e2u.webp";
import NextArrow from "@/svg/NextArrow";
import { useQuery } from "@tanstack/react-query";
import { bannerApi } from "@/api/frontend-apis";
import { storageUrl } from "@/utils/base_url";

const images = [
  {
    image: image1,
    title: "30% DISCOUNT",
    subTitle: "SUMMER 2026",
    desc: "OFFER ENDS SOON",
  },
  {
    image: image2,
    subTitle: " LINEN SERIES",
    desc: "GET YOURS NOW",
  },

  {
    image: image3,
    title: "LATEST IN",
    subTitle: "DUVETS",
    desc: "SHOP COLLECTION",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState<number>(0);

  const {
    data: response,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["banners"],
    queryFn: bannerApi.getAllBanners,
  });

  const banners = response?.data.data.banners;

  if (isLoading) return <p>Loading...</p>;

  if (error instanceof Error) {
    return <p>{error.message}</p>;
  }

  const handleNextclick = () => {
    if (index == banners.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handlePrevClick = () => {
    if (index == 0) {
      setIndex(banners.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="h-[90vh] w-full relative">
      <Image
        src={storageUrl + banners[index].image}
        alt="image 1"
        fill
        className="object-cover "
      />

      <div className="absolute flex flex-col items-center justify-center inset-0 text-[white]  font-bold text-sm sm:text-2xl md:text-3xl ">
        <p>{images[index].title}</p>

        <p className="font-semibold text-2xl sm:text-4xl md:text-5xl   py-4">
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
