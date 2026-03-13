import React from "react";
import Image from "next/image";
import image1 from "../../public/images/593dbc5d1e8f0af0d4fd35914d63a4ee.jpg";
import image2 from "../../public/images/S45bf3b8b511e4c8ab6a64844fc6556e2u.webp";
import image3 from "../../public/images/ddca409f09495515caf83acbf64f05b5.jpg";
import Link from "next/link";

const array = [
  {
    image: image1,
    product: "Duvet",
    price: "5,000",
    quantity: "2",
    subtotal: "10,000",
  },
  {
    image: image2,
    product: "Pillow",
    price: "500",
    quantity: "1",
    subtotal: "500",
  },
  {
    image: image3,
    product: "Bedding",
    price: "2,500",
    quantity: "1",
    subtotal: "2,500",
  },
  {
    image: image1,
    product: "Bedding",
    price: "5,000",
    quantity: "1",
    subtotal: "5,000",
  },
  {
    image: image2,
    product: "Quilt",
    price: "3,000",
    quantity: "1",
    subtotal: "3,000",
  },
  {
    image: image3,
    product: "Bed Linen",
    price: "5,000",
    quantity: "2",
    subtotal: "10,000",
  },
];

const Cart = () => {
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
          {array.map((items, index) => (
            <tbody className="text-center" key={index}>
              <tr>
                <td className="py-2 px-10">
                  <div className="h-20 w-20 relative">
                    <Image
                      src={items.image}
                      alt=""
                      fill
                      className=" object-cover"
                    />
                  </div>
                </td>
                <td>{items.product}</td>
                <td>{items.price}</td>
                <td>{items.quantity} </td>
                <td>{items.subtotal}</td>
                <td>
                  <button>Delete</button>
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
