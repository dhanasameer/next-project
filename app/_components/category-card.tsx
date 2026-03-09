import React from "react";

import Image from "next/image";
import Link from "next/link";
type Props = {
  image: any;
  category: string;
};

const CategoryCard = ({ image, category }: Props) => {
  return (
    <Link href={`/shop/${category}`}>
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
