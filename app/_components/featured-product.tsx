"use client";

import React from "react";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { frontendApi } from "@/api/frontend-apis";
import { storageUrl } from "@/utils/base_url";
import Link from "next/link";

const FeaturedProduct = () => {
  const {
    data: response,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["featured products"],
    queryFn: frontendApi.getFeaturedProducts,
  });

  console.log(response);

  const featuredProducts = response?.data.data.featuredProducts;

  if (isLoading) return <p>Loading...</p>;

  if (error instanceof Error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <div className="flex flex-col gap-5 justify-center items-center py-10 text-[#63564a]">
        <h1 className="font-semibold text-2xl sm:text-4xl md:text-5xl ">
          NEW COLLECTION
        </h1>
        <h2 className="font-bold text-sm sm:text-2xl md:text-3xl ">SHOP NOW</h2>
      </div>

      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  ">
        {featuredProducts.map((items: any, index: number) => (
          <Link key={index} href={`/shop/products/${items._id}`}>
            <Card
              image={storageUrl + items.image}
              name={items.name}
              category={items.categoryDetails.name}
              price={items.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
