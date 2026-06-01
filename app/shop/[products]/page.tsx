"use client";
import Card from "@/app/_components/Card";
import React, { useState } from "react";
import Link from "next/link";
import Add from "@/svg/Add";
import { useCart } from "react-use-cart";
import { useQuery } from "@tanstack/react-query";
import { frontendApi } from "@/api/frontend-apis";
import { useParams } from "next/navigation";
import { storageUrl } from "@/utils/base_url";

const page = () => {
  const [search, setSearch] = useState("");

  const { addItem, items } = useCart();

  console.log(items);

  const params = useParams();

  const categoryid = params.products;

  const {
    data: response,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products by category", categoryid],
    queryFn: () => frontendApi.getProductsByCategory(categoryid as string),
  });

  console.log(response);

  const products = response?.data.data.products;

  if (isLoading) return <p>Loading...</p>;

  if (error instanceof Error) {
    return <p>{error.message}</p>;
  }

  const newSearch = products.filter((item: any) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  console.log(newSearch);

  return (
    <div className="text-[#63564a]">
      <div className="flex justify-between items-center px-2">
        <input
          type="text"
          placeholder="Search"
          className="text-[#63564a] outline-0 border-2 p-2 rounded-full
        "
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />

        <div className="font-bold text-3xl">
          {products.length} {products.length == 1 ? "PRODUCT" : "PRODUCTS"}
        </div>

        <button>Sort by Price</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4   h-screen">
        {newSearch.map((items: any, index: number) => (
          <div key={index} className="relative">
            <Link href={`/shop/products/${items._id} `} className="cursor-auto">
              <Card
                key={index}
                image={storageUrl + items.image}
                name={items.name}
                category={items.name}
                price={items.price}
              />
            </Link>

            <button
              onClick={() =>
                addItem({
                  ...products[index],
                  id: products[index]._id,
                })
              }
            >
              <Add className="absolute top-5 right-5 z-50 size-10 " />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
