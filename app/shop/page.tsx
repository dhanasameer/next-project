"use client";

import React from "react";
import CategoryCard from "../_components/category-card";

import { useQuery } from "@tanstack/react-query";
import { storageUrl } from "@/utils/base_url";
import { frontendApi } from "@/api/frontend-apis";

const Page = () => {
  const {
    data: response,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: frontendApi.getAllCategories,
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
