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

  const featuredProducts = response?.data.data.featuredProducts;

  if (isLoading) return <p>Loading...</p>;

  if (error instanceof Error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center text-[#63564a] clamp-[gap,12px,20px] clamp-[py,40px,80px]">
        <h1 className="font-semibold clamp-[text,24px,48px]">NEW COLLECTION</h1>

        <h2 className="font-bold clamp-[text,14px,30px]">SHOP NOW</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 clamp-[gap,8px,20px] clamp-[px,8px,16px]">
        {featuredProducts.map((item: any) => (
          <Link key={item._id} href={`/shop/products/${item._id}`}>
            <Card
              image={storageUrl + item.image}
              name={item.name}
              category={item.categoryDetails.name}
              price={item.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
