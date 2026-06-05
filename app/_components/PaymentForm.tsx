"use client";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { error } from "console";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PrimaryButton from "./PrimaryButton";
// import toast from "react-hot-toast";

type Props = {
  clientSecretKey: any;
};

const PaymentForm = ({ clientSecretKey }: Props) => {
  const [clientSecret, SetClientSecret] = useState(clientSecretKey);
  console.log("clientSecret::", clientSecret);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  const { handleSubmit } = useForm();

  const amount = searchParams.get("amount");
  //   console.log("clientSecret::", clientSecret);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (!stripe || !elements) {
      return;
    }
    if (!clientSecret) return;
  }, [stripe, elements, clientSecret]);

  const onSubmit = async () => {
    setLoading(true);
    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements?.submit();
    if (submitError) {
      // toast.error(submitError.message);
      setLoading(false);
    }
    if (!clientSecret) {
      return;
    }
    const { error: confirmPaymentError } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "http://localhost:3001/payment-success",
      },
    });
    if (confirmPaymentError) {
      console.log("confirmPaymentError:::", confirmPaymentError);
      // toast.error(confirmPaymentError.message);
    }
    setLoading(false);
  };
  return (
    <div className="py-36 px-80 bg-[#eeeeee] ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-2xl shadow-2xl bg-white py-24 px-10"
      >
        {" "}
        {clientSecret && <PaymentElement />}
        <PrimaryButton
          type="submit"
          text={`${loading ? "....processing your payment" : `pay  ${amount}`}`}
          classname={
            "bg-[#2d2d2d] w-full  mt-14 sen-unique font-light text-white  py-2"
          }
        />
      </form>
    </div>
  );
};

export default PaymentForm;
