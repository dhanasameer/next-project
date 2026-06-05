import Link from "next/link";
import React from "react";
import IgLogo from "../../svg/IgLogo";
import XLogo from "../../svg/XLogo";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col justify-center max-md:items-center max-md:gap-3 md:flex-row md:justify-between   px-6 py-4 bg-[#f1e4f5] text-sm text-[#63564a]  ">
        <div className="font-bold w-full text-center">E-Commerce</div>

        <div className="flex flex-col items-center w-full">
          <div className="font-bold ">Links</div>

          <div className="flex gap-4">
            <Link href="">Login</Link>

            <Link href="">Contact</Link>

            <Link href="">Shop</Link>
          </div>
        </div>

        <div className="flex flex-col max-md:justify-center max-md:items-center gap-0.5 w-full">
          <div className="font-bold">Get In Touch</div>

          <div>Kannur, Kerala, India </div>

          <div className="flex gap-3 items-center">
            <Link href="">
              <IgLogo className="size-5" />
            </Link>

            <Link href="">
              <XLogo className="size-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center bg-[#faedff] text-[#63564a] text-sm py-1">
        Crafted by Urbanhub Innovations
      </div>
    </div>
  );
};

export default Footer;
