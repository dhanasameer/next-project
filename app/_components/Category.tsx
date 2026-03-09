import React from "react";
import Image from "next/image";
import image1 from "../../public/images/593dbc5d1e8f0af0d4fd35914d63a4ee.jpg";
import image2 from "../../public/images/S45bf3b8b511e4c8ab6a64844fc6556e2u.webp";
import image3 from "../../public/images/ddca409f09495515caf83acbf64f05b5.jpg";

const Category = () => {
  return (
    <div className="text-[#63564a]">
      <div className="flex flex-col justify-center items-center gap-5 py-10  ">
        <h1 className="font-semibold text-2xl sm:text-4xl md:text-5xl">CATEGORIES</h1>
        <h2 className="font-bold text-sm sm:text-2xl md:text-3xl">THESE ARE OUR CATEGORIES</h2>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 col-span-1 gap-2 px-2 py-2 h-[50vh] md:h-[80vh] ">
        <div className="relative row-span-2 ">
          <Image src={image1} alt="image1" className="object-cover  h-full w-full" />
          <div className="absolute max-md:bottom-1 max-md:left-1 bottom-5 left-5 bg-white max-md:p-0.5 p-2 font-bold text-sm sm:text-xl md:text-2xl">
            HOME
          </div>
        </div>
        <div className="relative row-span-2">
          <Image src={image2} alt="image1" className="object-cover  h-full w-full" />
          <div className="absolute max-md:bottom-1 max-md:left-1 bottom-5 left-5 bg-white max-md:p-0.5 p-2 font-bold text-sm sm:text-xl md:text-2xl">
            HOME
          </div>
        </div>
        <div className="relative row-span-1">
          <Image src={image3} alt="image1" className="object-cover h-full w-full  " />
          <div className="absolute max-md:bottom-1 max-md:left-1 bottom-5 left-5 bg-white max-md:p-0.5 p-2 font-bold text-sm sm:text-xl md:text-2xl">
            HOME
          </div>
        </div>
        <div className="relative row-span-1">
          <Image src={image3} alt="image1" className="object-cover h-full w-full " />
          <div className="absolute max-md:bottom-1 max-md:left-1 bottom-5 left-5 bg-white max-md:p-0.5 p-2 font-bold text-sm sm:text-xl md:text-2xl">
            HOME
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
