"use client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../_components/PaymentForm";
import { useSearchParams } from "next/navigation";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY == undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY illa");
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

const page = () => {
  const searchParams = useSearchParams();

  const amount: any = searchParams.get("amount");
  const clientSecret: any = searchParams.get("sessionId");

  const options = {
    clientSecret,
  };
  return (
    <div>
      <Elements options={options} stripe={stripePromise}>
        <PaymentForm clientSecretKey={clientSecret} />
      </Elements>
    </div>
  );
};

export default page;
