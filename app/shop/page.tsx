import React from "react";
import CategoryCard from "../_components/category-card";
import Image from "next/image";
import image1 from "../../public/images/593dbc5d1e8f0af0d4fd35914d63a4ee.jpg";
import image2 from "../../public/images/S45bf3b8b511e4c8ab6a64844fc6556e2u.webp";
import image3 from "../../public/images/ddca409f09495515caf83acbf64f05b5.jpg";
import image4 from "../../public/images/593dbc5d1e8f0af0d4fd35914d63a4ee.jpg";

const array = [
  { image: image1, category: "BEDDING" },
  { image: image2, category: "TABLE LINEN" },
  { image: image3, category: "CURTAIN" },
  { image: image4, category: "HOME DECOR" },
];

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center   ">
      <div className="font-bold text-[#63564a] text-xl">CATEGORIES</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-10  ">
        {array.map((items, index) => (
          <CategoryCard
            key={index}
            image={items.image}
            category={items.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
