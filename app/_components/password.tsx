"use client";
import { useState } from "react";
import Visibility from "@/svg/visibility";
import React from "react";
import Hide from "@/svg/Hide";

type Props = {
  placeholder: string;
  title: string;
  register: any;
  name: string;
  errors: any;
};

const Password = ({ placeholder, title, register, name, errors }: Props) => {
  const [show, setShow] = useState(true);

  const handleClick = () => setShow(!show);

  return (
    <div className=" flex flex-col gap-2">
      <div className="font-semibold">{title}</div>
      <div className="flex relative items-center">
        <input
          {...register(name)}
          type={show ? "text" : "password"}
          placeholder={placeholder}
          className="border p-2 rounded-xl w-full "
        />
        {errors.password && (
          <p className="text-red-700">{errors.password.message}</p>
        )}

        <button onClick={handleClick} className="size-6 absolute right-0 ">
          {show ? <Hide /> : <Visibility />}
        </button>
      </div>
    </div>
  );
};

export default Password;
