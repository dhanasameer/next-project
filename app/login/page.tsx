"use client";
import React from "react";
import Password from "../_components/password";
import Link from "next/link";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, useForm } from "react-hook-form";
const loginSchema = z.object({
  email: z.string().email().min(5, "Email is Required"),
  // password: z.string().min(8, "Minimum 8 Characters"),
});

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const submit = (data) => console.log(data);;
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex  justify-center items-center"
    >
      <div className="flex flex-col gap-4 justify-center items-center shadow-2xl rounded-2xl p-10 m-10 ">
        <div className="font-bold text-3xl">LOGIN</div>
        <div className="w-full flex flex-col gap-2">
          <div className="font-semibold">Email</div>
          <div>
            <input
              {...register("email")}
              type="text"
              placeholder="Enter your email address"
              className="border p-2 rounded-xl w-full"
            />
            {errors.email && (
              <p className="text-red-700">{errors.email.message}</p>
            )}
          </div>
        </div>
        {/* <div className="w-full ">
          <Password title="Password" placeholder="Enter your password" />
        </div> */}
        <button type="submit" className="bg-[#f1dff7] w-full rounded-xl py-2">
          LOGIN
        </button>
        <hr />
        <div>
          Don't have an account?
          <Link href="/sign-up" className="text-[#63564a]">
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default page;
