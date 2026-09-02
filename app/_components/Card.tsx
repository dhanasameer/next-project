import React from "react";
import Image from "next/image";
import Add from "@/svg/Add";

type Props = {
  image: string;
  name: string;
  category: string;
  price: number;
};

const Card = ({ image, name, category, price }: Props) => {
  return (
    <div>
      <div className="mx-2 my-5 rounded-[20px] overflow-hidden shadow-2xl text-[#63564a]">
        <div className="relative clamp-[h,180px,250px]">
          <Image src={image} alt="image" fill className="object-cover" />
        </div>

        <div className="p-2 flex flex-col clamp-[gap,6px,12px]">
          <div className="font-bold clamp-[text,16px,20px]">{name}</div>

          <div className="clamp-[text,12px,16px]">{category}</div>

          <hr className="text-[#c2bab2]" />

          <div className="font-bold text-[#3b332c] clamp-[text,18px,22px]">
            ₹{price}
            <span className="text-[#63564a] pl-1 clamp-[text,10px,12px]">
              INR
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
