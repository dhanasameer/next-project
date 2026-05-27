import React from "react";

import Image from "next/image";
import Link from "next/link";
import { id } from "zod/locales";
type Props = {
  image: string;
  category: string;
  id: string;
};

const CategoryCard = ({ image, category, id }: Props) => {
  return (
    <Link href={`/shop/${id}`}>
      <div className="relative w-80 h-40">
        <Image src={image} alt="" fill className="object-cover rounded-2xl" />
        <div className="absolute flex inset-0 justify-center items-center font-bold text-[#63564a] text-sm">
          {category}
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
