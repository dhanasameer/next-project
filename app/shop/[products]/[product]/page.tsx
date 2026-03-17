"use client";
import React from "react";
import Image from "next/image";
import image1 from "../../../../public/images/593dbc5d1e8f0af0d4fd35914d63a4ee.jpg";
import { CartProvider, useCart } from "react-use-cart";
const product = {
  id: "1",
  image: image1,
  name: "Duvet Set (Red) - 3 Piece",
  price: 3999,
  description: "- Contains a Duvet and 2 Pillow Cases",
};
const page = () => {
  const { addItem, items } = useCart();
  console.log(items);
  return (
    <div className="flex items-center text-[#63564a] my-10">
      <div className="relative h-[60vh] w-[50vh] ">
        <Image src={product.image} alt="" fill className="object-cover  " />
      </div>
      <div className=" flex flex-col pl-10 ">
        <div>
          <div className="font-bold text-3xl mb-10">{product.name}</div>
          <div className="text-xl pb-2">₹{product.price}</div>
          <div>{product.description}</div>
        </div>

        <div className="pt-10 ">
          <button
            className="bg-[#63564a] text-white text-center p-2 rounded-xs cursor-pointer"
            onClick={() => {
              addItem(product);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
