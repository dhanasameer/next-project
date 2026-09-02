"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "react-use-cart";
import { storageUrl } from "@/utils/base_url";

const Cart = () => {
  const { updateItemQuantity, removeItem, items } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen clamp-[gap,16px,24px]">
        <h1 className="font-semibold text-[#63564a] clamp-[text,24px,48px]">
          Your cart is empty
        </h1>

        <p className="text-gray-500 clamp-[text,14px,18px]">
          Looks like you haven't added anything yet.
        </p>

        <Link href="/">
          <button className="bg-[#63564a] text-white rounded-lg clamp-[px,20px,32px] clamp-[py,10px,14px]">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen text-[#63564a]">
      <div className="lg:col-span-2 overflow-x-auto">
        <table className="w-full">
          <thead className="text-center clamp-[text,12px,16px]">
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="text-center border-b">
                <td className="clamp-[py,8px,16px] clamp-[px,8px,24px]">
                  <div className="relative clamp-[w,60px,80px] clamp-[h,60px,80px]">
                    <Image
                      src={storageUrl + item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </td>

                <td className="clamp-[text,12px,16px]">{item.name}</td>

                <td className="clamp-[text,12px,16px]">
                  ₹{item.price?.toLocaleString()}
                </td>

                <td>
                  <div className="flex justify-center items-center clamp-[gap,8px,16px]">
                    <button
                      className="clamp-[text,12px,16px]"
                      onClick={() =>
                        updateItemQuantity(
                          item.id,
                          Math.max(1, (item.quantity ?? 0) - 1),
                        )
                      }
                    >
                      -
                    </button>

                    <span className="clamp-[text,12px,16px]">
                      {item.quantity}
                    </span>

                    <button
                      className="clamp-[text,12px,16px]"
                      onClick={() =>
                        updateItemQuantity(item.id, (item.quantity ?? 0) + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </td>

                <td className="clamp-[text,12px,16px]">
                  ₹{item.itemTotal?.toLocaleString()}
                </td>

                <td>
                  <button
                    className="text-red-500 clamp-[text,12px,16px]"
                    onClick={() => removeItem(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-[#f1dff7] flex flex-col justify-center clamp-[gap,12px,24px] clamp-[p,20px,40px]">
        <h2 className="clamp-[text,32px,60px]">Cart Total</h2>

        <div className="clamp-[text,16px,24px]">Item Total:</div>

        <div className="clamp-[text,16px,24px]">Total:</div>

        <Link href="/check-out">
          <button className="w-full bg-white rounded-xl clamp-[text,14px,18px] clamp-[py,10px,14px]">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
