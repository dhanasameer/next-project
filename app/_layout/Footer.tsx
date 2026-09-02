import Link from "next/link";
import React from "react";
import IgLogo from "../../svg/IgLogo";
import XLogo from "../../svg/XLogo";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start bg-[#f1e4f5] text-[#63564a] clamp-[px,16px,40px] clamp-[py,16px,24px] clamp-[text,14px,16px] clamp-[gap,12px,24px]">
        <div className="font-bold w-full text-center md:text-left clamp-[text,18px,24px]">
          E-Commerce
        </div>

        <div className="flex flex-col items-center w-full">
          <div className="font-bold clamp-[mb,4px,8px]">Links</div>

          <div className="flex clamp-[gap,12px,20px]">
            <Link href="/login">Login</Link>

            <Link href="/contact">Contact</Link>

            <Link href="/shop">Shop</Link>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start w-full clamp-[gap,2px,6px]">
          <div className="font-bold">Get In Touch</div>

          <div>Kannur, Kerala, India</div>

          <div className="flex items-center clamp-[gap,12px,16px]">
            <Link href="">
              <IgLogo className="clamp-[w,18px,22px] clamp-[h,18px,22px]" />
            </Link>

            <Link href="">
              <XLogo className="clamp-[w,18px,22px] clamp-[h,18px,22px]" />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center bg-[#faedff] text-[#63564a] clamp-[text,12px,14px] clamp-[py,4px,8px]">
        Crafted by Urbanhub Innovations
      </div>
    </div>
  );
};

export default Footer;
