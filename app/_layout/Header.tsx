"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Cart from "../../svg/Cart";
import Hamburger from "../../svg/Hamburger";
import Close from "../../svg/Close";
import { useCart } from "react-use-cart";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const { totalUniqueItems } = useCart();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  return (
    <div className="text-[#63564a] flex justify-between items-center clamp-[mx,16px,40px] clamp-[my,16px,40px]">
      <div className="font-bitcount_grid_double_ink clamp-[text,20px,30px]">
        <Link href="/">E-COMMERCE</Link>
      </div>

      <div className="flex items-center clamp-[gap,12px,20px]">
        <div className="hidden md:flex clamp-[gap,16px,24px] clamp-[text,14px,16px]">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/contact">Contact</Link>

          {token ? (
            <Link href="">Log Out</Link>
          ) : (
            <Link href="/login">Log In</Link>
          )}
        </div>

        <div className="relative">
          <Link href="/cart">
            <Cart className="clamp-[w,20px,24px] clamp-[h,20px,24px]" />
          </Link>

          <div className="absolute -top-2 -right-2 bg-[#63564a] text-white rounded-full flex items-center justify-center clamp-[w,16px,20px] clamp-[h,16px,20px] clamp-[text,10px,12px]">
            {totalUniqueItems}
          </div>
        </div>

        <Hamburger
          onClick={() => setMenu(true)}
          className="flex md:hidden cursor-pointer clamp-[w,20px,24px] clamp-[h,20px,24px]"
        />

        {menu && (
          <div className="fixed top-0 right-0 z-50 h-screen bg-[#f1dff7] clamp-[w,220px,320px] shadow-lg">
            <Close
              onClick={() => setMenu(false)}
              className="absolute top-5 right-5 text-[#63564a] cursor-pointer clamp-[w,20px,24px] clamp-[h,20px,24px]"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center clamp-[gap,16px,24px] clamp-[text,16px,20px]">
              <Link href="/" onClick={() => setMenu(false)}>
                HOME
              </Link>

              <Link href="/shop" onClick={() => setMenu(false)}>
                SHOP
              </Link>

              <Link href="/contact" onClick={() => setMenu(false)}>
                CONTACT
              </Link>

              {token ? (
                <Link href="" onClick={() => setMenu(false)}>
                  LOGOUT
                </Link>
              ) : (
                <Link href="/login" onClick={() => setMenu(false)}>
                  LOGIN
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
