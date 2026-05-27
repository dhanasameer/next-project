"use client";

import React from "react";
import CategoryCard from "../_components/category-card";
import Image from "next/image";
import image1 from "../../public/images/593dbc5d1e8f0af0d4fd35914d63a4ee.jpg";
import image2 from "../../public/images/S45bf3b8b511e4c8ab6a64844fc6556e2u.webp";
import image3 from "../../public/images/ddca409f09495515caf83acbf64f05b5.jpg";
import image4 from "../../public/images/593dbc5d1e8f0af0d4fd35914d63a4ee.jpg";
import { useQuery } from "@tanstack/react-query";
import { categoryApi } from "@/api/frontend-apis";
import { storageUrl } from "@/utils/base_url";

const Page = () => {
  const {
    data: response,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: categoryApi.getAllCategories,
  });

  console.log(response);

  const categories = response?.data.data.categories;

  if (isLoading) return <p>Loading...</p>;

  if (error instanceof Error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="flex flex-col justify-center items-center   ">
      <div className="font-bold text-[#63564a] text-xl">CATEGORIES</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-10  ">
        {categories.map((categories: any, index: number) => (
          <CategoryCard
            key={index}
            image={storageUrl + categories.image}
            category={categories.name}
            id={categories._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
