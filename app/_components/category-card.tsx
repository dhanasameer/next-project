"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  image: string;
  category: string;
  id: string;
};

const CategoryCard = ({ image, category, id }: Props) => {
  return (
    <Link href={`/shop/${id}`}>
      <div className="relative clamp-[w,240px,320px] clamp-[h,120px,160px]">
        <Image
          src={image}
          alt={category}
          fill
          className="object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex items-center justify-center font-bold text-[#63564a] clamp-[text,14px,18px]">
          {category}
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;