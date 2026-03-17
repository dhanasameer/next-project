import React from "react";
import Image from "next/image";

type Props = {
  image: any;
  name: string;
  category: string;
  price: string;
};

const Card = ({ image, name, category, price }: Props) => {
  return (
    <div className=" mx-2 my-5 rounded-[20] overflow-hidden shadow-2xl text-[#63564a]  ">
      <div
        className=" 
      h-50 relative"
      >
        <Image src={image} alt="image" fill className="h-full object-cover " />
      </div>

      <div className=" p-2 flex flex-col gap-2 ">
        <div className="font-bold  text-[14px] sm:text-[16px] md:text-[20px] ">
          {name}
        </div>
        <div className=" text-[10px] sm:text-[10px] md:text-[16px] ">
          {category}
        </div>
        <hr className="text-[#c2bab2]" />
        <div className=" text-[8px] sm:text-[12px] md:text-[22px]  font-bold text-[#3b332c]">
          {price}
          <span className="text-[12px] text-[#63564a] pl-1">INR</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
