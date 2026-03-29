import React from "react";
import Image from "next/image";
import image1 from "../../public/images/258a285baa4319f6228118d327131240.jpg";
import Chat from "@/svg/Chat";
import Phone from "@/svg/Phone";
import Location from "@/svg/Location";

const page = () => {
  return (
    <div className="relative">
      <Image
        src={image1}
        alt="image"
        className="object-cover 
         w-full h-screen"
      />

      <div className=" absolute flex flex-col gap-10  justify-center items-start md:ml-10  inset-0 text-[#63564a] ">
        <div className="font-semibold text-xl md:text-5xl">GET IN TOUCH</div>
        <div className="text-xs/5 md:text-xl/15  font-bold ">
          Have a question, feedback, or just want to say hi? We’d love to hear
          from you. <br /> Fill out the form below, and our team will get back
          to you within 24 hours.
        </div>
        <div className="flex  w-full justify-start items-center">
        <div
          className="  flex flex-col  md:flex-row justify-center items-center   bg-white/55
         rounded-3xl p-4 gap-4"
        >
          <div className=" bg-[#f1dff7] rounded-full p-2">
            <Chat className="size-4 md:size-8 " />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold text-sm md:text-xl">EMAIL</div>
            <div className="text-sm md:text-xl">Dhana@ecommerce.com</div>
          </div>
          <div className=" bg-[#f1dff7] rounded-full p-2">
            <Phone className=" size-4 md:size-8 " />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold text-sm md:text-xl">CALL</div>
            <div className="text-sm md:text-xl">+971562315481</div>
          </div>
          <div className=" bg-[#f1dff7] rounded-full p-2">
            <Location className="size-4 md:size-8 " />
          </div>
          <div className="flex flex-col justify-center items-center text-nowrap">
            <div className="font-bold text-sm md:text-xl">ADDRESS</div>
            <div className="text-sm md:text-xl">
              1908, 19th Floor, Prism Tower, Business Bay
            </div>
          </div>
        </div>
        </div>
        
        <div></div>
      </div>
    </div>
  );
};

export default page;
