"use client";
import React from "react";
import Image from "next/image";
import image1 from "../../public/images/593dbc5d1e8f0af0d4fd35914d63a4ee.jpg";
import image2 from "../../public/images/S45bf3b8b511e4c8ab6a64844fc6556e2u.webp";
import image3 from "../../public/images/ddca409f09495515caf83acbf64f05b5.jpg";
import Link from "next/link";
import { useCart } from "react-use-cart";
import { id } from "zod/locales";

const Cart = () => {
  const { updateItemQuantity, removeItem, items } = useCart();
  console.log(items);

  return (
    <div className="grid grid-cols-3 h-screen text-[#63564a] ">
      <div className="col-span-2">
        <table className="table-fixed w-full ">
          <thead className="text-center">
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          {items.map((item, index) => (
            <tbody className="text-center" key={index}>
              <tr>
                <td className="py-2 px-10">
                  <div className="h-20 w-20 relative">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className=" object-cover"
                    />
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price?.toLocaleString()}</td>
                <td>
                  <button
                    onClick={() => {
                      updateItemQuantity(item.id, (item.quantity ?? 0) - 1);
                    }}
                  >
                    -
                  </button>
                  {item.quantity}{" "}
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, (item.quantity ?? 0) + 1)
                    }
                  >
                    +
                  </button>
                </td>
                <td>{item.itemTotal?.toLocaleString()}</td>
                <td>
                  <button
                    onClick={() => {
                      removeItem(item.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className="flex flex-col justify-center items-start gap-5 bg-[#f1dff7] pl-5 pb-5">
        <div className="text-6xl">Cart Total</div>
        <div className="text-xl">Item Total:</div>
        <div className="text-xl">Total:</div>

        <Link href="/check-out">
          <button className="bg-white text-sm py-2 px-30 rounded-xl text-center ">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
