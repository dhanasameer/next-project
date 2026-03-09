"use client";
import Card from "@/app/_components/Card";
import React, { useState } from "react";
import Image from "next/image";
import image1 from "../../../public/images/593dbc5d1e8f0af0d4fd35914d63a4ee.jpg";
import image2 from "../../../public/images/S45bf3b8b511e4c8ab6a64844fc6556e2u.webp";
import image3 from "../../../public/images/ddca409f09495515caf83acbf64f05b5.jpg";
import Link from "next/link";
const array = [
  {
    image: image1,
    name: "Duvet Set (Red) - 3 Piece",
    category: "Bedding",
    price: "₹3999",
  },
  {
    image: image2,
    name: "Duvet Set (Lavender) - 3 Piece",
    category: "Bedding",
    price: "₹3999",
  },
  {
    image: image3,
    name: "Duvet Set (Blue) - 3 Piece",
    category: "Bedding",
    price: "₹3999",
  },
  {
    image: image1,
    name: "Duvet Set (Red) - 3 Piece",
    category: "Bedding",
    price: "₹3999",
  },
];

const page = () => {
  const [search, setSearch] = useState("");
  

  const newSearch = array.filter((item) =>
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
        <div className="font-bold text-3xl">4 PRODUCTS</div>
        <div>Sort by Price</div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4   h-screen">
        {newSearch.map((items, index) => (
          <Link key={index} href={`/shop/products/${items.name}`}>
            <Card
              key={index}
              image={items.image}
              name={items.name}
              category={items.category}
              price={items.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
