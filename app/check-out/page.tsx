"use client";
import React from "react";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, useForm } from "react-hook-form";
const checkoutSchema = z.object({
  country: z.string().nonempty("Please select a Country"),
  firstName: z.string().min(1, "Please enter First Name"),
  lastName: z.string().min(1, "Please enter Last Name"),
  email: z
    .string()
    .min(1, "Please enter Email Address")
    .email({ message: "Invalid Email Format" }),
  address: z.string().min(1, "Please enter Address"),
  city: z.string().min(1, "Please enter City"),
  state: z.string().min(1, "Please enter State"),
  postcode: z.string().min(6, "Please enter Postcode"),
  mobile: z.string().min(10, "Please enter Mobile Number"),
});
type Tcheckout = z.infer<typeof checkoutSchema>;

const CheckOut = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(checkoutSchema) });
  const submit = (data: Tcheckout) => console.log(data);
  return (
    <form
      className="grid grid-cols-3  text-[#63564a] m-5  "
      onSubmit={handleSubmit(submit)}
    >
      <div className="col-span-2 pr-20">
        <div className="font-bold pb-4">Shipping Address</div>
        <div className="flex flex-col gap-4 text-[14px]">
          <div>
            <div className="pb-2">Country</div>

            <select
              {...register("country")}
              name="country"
              id="country"
              className="border w-full py-2"
            >
              {errors.country && (
                <p className="text-red-700">{errors.country.message}</p>
              )}
              <option value="select">Select a Country</option>
              <option value="india">India</option>
              <option value="uae">UAE</option>
              <option value="saudi arabia">Saudi Arabia</option>
              <option value="kuwait">Kuwait</option>
              <option value="oman">Oman</option>
              <option value="bahrain">Bahrain</option>
            </select>
          </div>
          <div className="flex gap-4  w-full">
            <div className="w-1/2">
              <div className="pb-2">First Name</div>
              <input
                {...register("firstName")}
                type="text"
                className="border rounded-sm py-2 w-full"
              />
              {errors.firstName && (
                <p className="text-red-700">{errors.firstName.message}</p>
              )}
            </div>
            <div className="w-1/2">
              <div className="pb-2">Last Name</div>
              <input
                {...register("lastName")}
                type="text"
                className="border rounded-sm py-2 w-full"
              />
              {errors.lastName && (
                <p className="text-red-700">{errors.lastName.message}</p>
              )}
            </div>
          </div>
          <div>
            <div>Email Address</div>
            <input
              {...register("email")}
              type="text"
              className="border rounded-sm py-2 w-full"
            />
            {errors.email && (
              <p className="text-red-700">{errors.email.message}</p>
            )}
          </div>
          <div>
            <div>Address</div>
            <input
              {...register("address")}
              type="text"
              className="border rounded-sm py-2 w-full"
            />
            {errors.address && (
              <p className="text-red-700">{errors.address.message}</p>
            )}
          </div>
          <div>
            <div className="pb-2">City</div>
            <input
              {...register("city")}
              type="text"
              className="border rounded-sm py-2 w-full"
            />
            {errors.city && (
              <p className="text-red-700">{errors.city.message}</p>
            )}
          </div>
          <div>
            <div className="pb-2">State</div>
            <input
              {...register("state")}
              type="text"
              className="border rounded-sm py-2 w-full"
            />
            {errors.state && (
              <p className="text-red-700">{errors.state.message}</p>
            )}
          </div>
          <div>
            <div className="pb-2">Postcode</div>
            <input
              {...register("postcode")}
              type="text"
              className="border rounded-sm py-2 w-full"
            />
            {errors.postcode && (
              <p className="text-red-700">{errors.postcode.message}</p>
            )}
          </div>
          <div>
            <div className="pb-2">Mobile Number</div>
            <input
              {...register("mobile")}
              type="text"
              className="border rounded-sm py-2 w-full"
            />
            {errors.mobile && (
              <p className="text-red-700">{errors.mobile.message}</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 ">
        <div className="font-bold">Order Summary</div>
        <div className="border border-[#63564a] p-10 flex flex-col gap-4 rounded-xl text-[14px]">
          <div className="flex justify-between">
            <div>Subtotal</div>
            <div>₹2599</div>
          </div>
          <div className="flex justify-between">
            <div>Shipping</div>
            <div>₹99</div>
          </div>
          <div className="flex justify-between font-bold">
            <div>Total</div>
            <div>₹2698</div>
          </div>

          <button
            type="submit"
            className="bg-[#63564a] text-[white] p-2 text-center w-full rounded-xl"
          >
            SHIP TO THIS ADDRESS
          </button>
        </div>
      </div>
    </form>
  );
};

export default CheckOut;
