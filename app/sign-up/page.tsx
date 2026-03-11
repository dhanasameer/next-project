"use client";
import React from "react";
import Password from "../_components/password";
import Visibility from "@/svg/visibility";
import Link from "next/link";
import { Form, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signupSchema = z.object({
  username: z.string().min(1, "This field can't be empty"),
  email: z
    .string()
    .min(1, "Email is required")
    .email({ message: "Invalid Email Format" }),
  password: z.string().min(8, "Minimum 8 Characters"),
});

type Tsignup = z.infer<typeof signupSchema>;

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) });
  const submit = (data: Tsignup) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col justify-center items-center my-10"
    >
      <div className="shadow-2xl rounded-2xl flex flex-col gap-4  py-10 px-8 ">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold">Create Account</div>
          <div className="">Sign up to get started</div>
        </div>
        <div>
          <div className="font-semibold">Username</div>
          <div>
            <input
              {...register("username")}
              type="text"
              placeholder="Choose a username"
              className="border p-2 rounded-xl w-full"
            />
            {errors.username && (
              <p className="text-red-700">{errors.username.message}</p>
            )}
          </div>
        </div>
        <div>
          <div className="font-semibold">Email</div>
          <div>
            <input
              {...register("email")}
              type="text"
              placeholder="Enter your email"
              className="border p-2 rounded-xl w-full"
            />
            {errors.email && (
              <p className="text-red-700">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div>
          <Password
            title="Password"
            placeholder="Enter a password"
            register={register}
            name="password"
            errors={errors}
          />
        </div>
        <div>
          <Password
            title="Confirm Password"
            placeholder="Re-enter your password"
            register={register}
            name="password"
            errors={errors}
          />
        </div>
        <button className="bg-[#f1dff7] p-2 rounded-xl ">Sign Up</button>
        <hr />
        <div>
          Already have an account?{" "}
          <Link href="/login" className="text-[#63564a]">
            Login
          </Link>
        </div>
      </div>
    </form>
  );
};

export default page;
