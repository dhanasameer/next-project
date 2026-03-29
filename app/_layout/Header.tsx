"use client";
import Link from "next/link";
import React, { useState } from "react";
import Cart from "../../svg/Cart";
import Hamburger from "../../svg/Hamburger";
import Close from "../../svg/Close";
import { useCart } from "react-use-cart";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const { totalUniqueItems } = useCart();
  return (
    <div className=" text-[#63564a]  flex  justify-between  items-center m-5  md:m-10  ">
      <div className="max-md:text-[20px]  text-3xl font-bitcount_grid_double_ink ">
        <Link href={"/"}>E-COMMERCE</Link>
      </div>

      <div className="flex justify-between items-center gap-5">
        <div className=" md:flex hidden  gap-6   ">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>

          <Link
            href="/contact
          "
          >
            Contact
          </Link>
          <Link href="/login">Login</Link>
        </div>

        <div className="relative">
          <Link href="/cart">
            <Cart className=" size-6  " />
          </Link>
          <div className="absolute bg-[#63564a] text-white h-4 w-4 text-xs text-center rounded-full px-0.5  -top-2 -right-2">
            {totalUniqueItems}
          </div>
        </div>

       
          <Hamburger
            onClick={() => setMenu(true)}
            className="size-6 flex md:hidden cursor-pointer"
          />
          {menu === true && (
            <div className="bg-[#f1dff7] w-[250] right-0 z-50 h-screen fixed top-0">
              <Close
                className="size-6 text-[#63564a] absolute z-20 right-5 top-5 "
                onClick={() => setMenu(false)}
              />
              <div className="flex flex-col absolute items-center justify-center inset-0 gap-5 ">
                <Link href="/">HOME</Link>
                <Link href="/shop">SHOP</Link>

                <Link href="/contact">CONTACT</Link>
                <Link href="">LOGIN</Link>
              </div>
            </div>
          )}
        
      </div>
    </div>
  );
};

export default Header;
