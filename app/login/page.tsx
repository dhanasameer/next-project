"use client";
import React from "react";
import Password from "../_components/password";
import Link from "next/link";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, useForm } from "react-hook-form";
const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email({ message: "Invalid Email Format" }),

  password: z.string().min(8, "Minimum 8 Characters"),
});

type Tlogin = z.infer<typeof loginSchema>;

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const submit = (data: Tlogin) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center justify-center  text-[#63564a]"
    >
      <div className="flex flex-col gap-4 justify-center items-center shadow-2xl rounded-2xl p-10 m-10 ">
        <div className="font-bold text-3xl">LOGIN</div>
        <div className="w-full flex flex-col gap-2">
          <div className="font-semibold">Email</div>

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
        <div className="w-full">
          <Password
            title="Password"
            placeholder="Enter your password"
            register={register}
            name="password"
            errors={errors}
          />
        </div>
       
          <button type="submit" className="bg-[#f1dff7] w-full rounded-xl py-2">
            LOGIN
          </button>
       
        <hr />
        <div>
          Don't have an account?
          <Link href="/sign-up" className="text-[#63564a] pl-2 underline">
            SIGN UP
          </Link>
        </div>
      </div>
    </form>
  );
};

export default page;
