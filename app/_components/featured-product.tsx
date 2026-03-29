import React from "react";
import Card from "./Card";
import Image from "next/image";
import image1 from "../../public/images/S45bf3b8b511e4c8ab6a64844fc6556e2u.webp";
import image2 from "../../public/images/593dbc5d1e8f0af0d4fd35914d63a4ee.jpg";
import image3 from "../../public/images/ddca409f09495515caf83acbf64f05b5.jpg";

const array = [
  {
    image: image1,
    name: "Duvet Set (Lavender) - 3 Piece",
    category: "Bedding",
    price: 3999,
  },
  {
    image: image2,
    name: "Duvet Set (Red) - 3 Piece",
    category: "Bedding",
    price: 3999,
  },
  {
    image: image3,
    name: "Duvet Set (Blue) - 3 Piece",
    category: "Bedding",
    price: 3999,
  },
  {
    image: image1,
    name: "Duvet Set (Lavender) - 3 Piece",
    category: "Bedding",
    price: 3999,
  },
  {
    image: image2,
    name: "Duvet Set (Red) - 3 Piece",
    category: "Bedding",
    price: 3999,
  },
  {
    image: image3,
    name: "Duvet Set (Blue) - 3 Piece",
    category: "Bedding",
    price: 3999,
  },
  {
    image: image1,
    name: "Duvet Set (Lavender) - 3 Piece",
    category: "Bedding",
    price: 3999,
  },
  {
    image: image2,
    name: "Duvet Set (Red) - 3 Piece",
    category: "Bedding",
    price: 3999,
  },
];
const FeaturedProduct = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 justify-center items-center py-10 text-[#63564a]">
        <h1 className="font-semibold text-2xl sm:text-4xl md:text-5xl ">
          NEW COLLECTION
        </h1>
        <h2 className="font-bold text-sm sm:text-2xl md:text-3xl ">SHOP NOW</h2>
      </div>

      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  ">
        {array.map((items, index) => (
          <Card
            key={index}
            image={items.image}
            name={items.name}
            category={items.category}
            price={items.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
