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
    <div className="inline-block mx-2 my-5 rounded-[20] overflow-hidden shadow-2xl text-[#63564a]  ">
      <div className="h-[50vh] w-[50vh] relative">
        <Image src={image} alt="image" fill className="h-full object-cover " />
      </div>

      <div className=" p-2 flex flex-col gap- ">
        <div className="font-bold   md:text-[22px]">{name}</div>
        <div className="  md:text-[16px]">{category}</div>
        <hr className="text-[#c2bab2]" />
        <div className="  md:text-[30px] font-bold text-[#3b332c]">
          {price}
          <span className="text-[12px] text-[#63564a] pl-1">INR</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
