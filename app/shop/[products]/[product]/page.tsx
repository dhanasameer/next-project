import React from "react";
import Image from "next/image";
import image1 from "../../../../public/images/593dbc5d1e8f0af0d4fd35914d63a4ee.jpg";
const page = () => {
  return (
    <div className="flex items-center text-[#63564a] my-10">
      <div className="relative h-[60vh] w-[50vh] ">
        <Image src={image1} alt="" fill className="object-cover  " />
      </div>
      <div className=" flex flex-col pl-10 ">
        <div>
          <div className="font-bold text-3xl mb-10">Duvet Set - 3 Piece</div>
          <div className="text-xl pb-2">₹3999</div>
          <div>- Contains a Duvet and 2 Pillow Cases</div>
        </div>

        <div className="pt-10 ">
          <button className="bg-[#63564a] text-white text-center p-2 rounded-xs cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
