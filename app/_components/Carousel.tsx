"use client";

import Image from "next/image";
import React, { useState } from "react";

import NextArrow from "@/svg/NextArrow";
import { useQuery } from "@tanstack/react-query";
import { frontendApi } from "@/api/frontend-apis";
import { storageUrl } from "@/utils/base_url";

const Carousel = () => {
  const [index, setIndex] = useState<number>(0);

  const {
    data: response,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["banners"],
    queryFn: frontendApi.getAllBanners,
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
        <p>{banners[index].name}</p>

        {/* <p className="font-semibold text-2xl sm:text-4xl md:text-5xl   py-4">
          {images[index].subTitle}
        </p>*/}

        <p>{banners[index].description}</p>
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
