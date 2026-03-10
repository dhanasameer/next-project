import React from "react";
import Password from "../_components/password";
import Visibility from "@/svg/visibility";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div className="shadow-2xl rounded-2xl flex flex-col gap-4  py-10 px-8 ">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold">Create Account</div>
          <div className="">Sign up to get started</div>
        </div>
        <div>
          <div className="font-semibold">Username</div>
          <div>
            <input
              type="text"
              placeholder="Choose a username"
              className="border p-2 rounded-xl w-full"
            />
          </div>
        </div>
        <div>
          <div className="font-semibold">Email</div>
          <div>
            <input
              type="text"
              placeholder="Enter your email"
              className="border p-2 rounded-xl w-full"
            />
          </div>
        </div>
        <div>
          <Password title="Password" placeholder="Enter a password" />
        </div>
        <div>
          <Password
            title="Confirm Password"
            placeholder="Re-enter your password"
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
    </div>
  );
};

export default page;
