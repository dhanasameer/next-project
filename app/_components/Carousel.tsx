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
    if (index === banners.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handlePrevClick = () => {
    if (index === 0) {
      setIndex(banners.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="h-[90vh] w-full relative">
      <Image
        src={storageUrl + banners[index].image}
        alt={banners[index].name}
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-center px-4">
        <p className="clamp-[text,18px,48px]">{banners[index].name}</p>

        <p className="clamp-[text,14px,24px] max-w-3xl">
          {banners[index].description}
        </p>
      </div>

      <NextArrow
        className="absolute top-1/2 left-2 md:left-6 -translate-y-1/2  text-white bg-[#63564a] rounded-full cursor-pointer clamp-[w,24px,40px] clamp-[h,24px,40px]"
        onClick={handlePrevClick}
      />

      <NextArrow
        className="absolute top-1/2 right-2 md:right-6 -translate-y-1/2 rotate-180 text-white bg-[#63564a] rounded-full cursor-pointer clamp-[w,24px,40px] clamp-[h,24px,40px]"
        onClick={handleNextclick}
      />
    </div>
  );
};

export default Carousel;
