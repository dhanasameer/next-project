"use client";

import React from "react";
import Image from "next/image";
import { CartProvider, useCart } from "react-use-cart";
import { useQuery } from "@tanstack/react-query";
import { frontendApi } from "@/api/frontend-apis";
import { useParams, useRouter } from "next/navigation";
import { storageUrl } from "@/utils/base_url";
import Link from "next/link";

const page = () => {
  const router = useRouter();

  const { addItem, items } = useCart();

  console.log(items);

  const params = useParams();

  const productid = params.product;

  const {
    data: response,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", productid],
    queryFn: () => frontendApi.getOneProduct(productid as string),
  });

  console.log(response);

  const product = response?.data.data.product;

  if (isLoading) return <p>Loading...</p>;

  if (error instanceof Error) {
    return <p>{error.message}</p>;
  }

  const isInCart = items.some((item) => item.id === product[0]._id);

  const handleCartAction = () => {
    if (isInCart) {
      router.push("/cart");
    } else {
      addItem({
        ...product[0],

        id: product[0]._id,
      });
    }
  };

  return (
    <div className="flex items-center text-[#63564a] my-10">
      <div className="relative h-[60vh] w-[50vh] ">
        <Image
          src={storageUrl + product[0].image}
          alt=""
          fill
          className="object-cover  "
        />
      </div>
      <div className=" flex flex-col pl-10 ">
        <div>
          <div className="font-bold text-3xl mb-10">{product[0].name}</div>
          <div className="text-xl pb-2">₹{product[0].price}</div>
          <div>{product[0].description}</div>
        </div>

        <div className="pt-10 ">
          <button
            className="bg-[#63564a] text-white text-center p-2 rounded-xs cursor-pointer"
            onClick={() => {
              handleCartAction();
            }}
          >
            {isInCart ? "Go to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
