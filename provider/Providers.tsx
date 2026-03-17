"use client";
import { CartProvider } from "react-use-cart";
import type { ReactNode } from "react";
type Props = { children: ReactNode };

const ProviderClient = ({ children }: Props) => {
  return <CartProvider>{children}</CartProvider>;
};

export default ProviderClient;
