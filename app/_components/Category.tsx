"use client";

import React from "react";
import Image from "next/image";

import { useQuery } from "@tanstack/react-query";
import { frontendApi } from "@/api/frontend-apis";
import { storageUrl } from "@/utils/base_url";
import Link from "next/link";

const Category = () => {
  const {
    data: response,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: frontendApi.getAllCategories,
  });

  const categories = response?.data.data.categories;

  if (isLoading) return <p>Loading...</p>;

  if (error instanceof Error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="text-[#63564a]">
      <div className="flex flex-col justify-center items-center clamp-[gap,12px,20px] clamp-[py,40px,80px]">
        <h1 className="font-semibold clamp-[text,24px,48px]">CATEGORIES</h1>

        <h2 className="font-bold clamp-[text,14px,30px]">
          THESE ARE OUR CATEGORIES
        </h2>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-2 clamp-[px,8px,16px] clamp-[py,8px,16px] h-[50vh] md:h-[80vh]">
        <div className="relative row-span-2">
          <Link href={`/shop/${categories[0]._id}`}>
            <Image
              src={storageUrl + categories[0].image}
              fill
              alt="Bedding"
              className="object-cover"
            />

            <div className="absolute bg-white font-bold clamp-[bottom,4px,20px] clamp-[left,4px,20px] clamp-[p,4px,12px] clamp-[text,12px,32px]">
              BEDDING
            </div>
          </Link>
        </div>

        <div className="relative row-span-2">
          <Link href={`/shop/${categories[1]._id}`}>
            <Image
              src={storageUrl + categories[1].image}
              fill
              alt="Table Linen"
              className="object-cover"
            />

            <div className="absolute bg-white font-bold clamp-[bottom,4px,20px] clamp-[left,4px,20px] clamp-[p,4px,12px] clamp-[text,12px,32px]">
              TABLE LINEN
            </div>
          </Link>
        </div>

        <div className="relative">
          <Link href={`/shop/${categories[2]._id}`}>
            <Image
              src={storageUrl + categories[2].image}
              fill
              alt="Curtain"
              className="object-cover"
            />

            <div className="absolute bg-white font-bold clamp-[bottom,4px,20px] clamp-[left,4px,20px] clamp-[p,4px,12px] clamp-[text,12px,32px]">
              CURTAIN
            </div>
          </Link>
        </div>

        <div className="relative">
          <Link href={`/shop/${categories[3]._id}`}>
            <Image
              src={storageUrl + categories[3].image}
              fill
              alt="Home Decor"
              className="object-cover"
            />

            <div className="absolute bg-white font-bold clamp-[bottom,4px,20px] clamp-[left,4px,20px] clamp-[p,4px,12px] clamp-[text,12px,32px]">
              HOME DECOR
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
