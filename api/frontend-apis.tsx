import { Tcheckout } from "@/app/check-out/page";
import { axiosConfig } from "./axios-config";
import { Item } from "react-use-cart";

export const frontendApi = {
  getAllBanners: async () => {
    return await axiosConfig.get("/banner/get");
  },

  getAllCategories: async () => {
    return await axiosConfig.get("/category/get");
  },

  getProductsByCategory: async (id: string) => {
    return await axiosConfig.get(`/product/get/${id}`);
  },

  getOneProduct: async (id: string) => {
    return await axiosConfig.get(`/product/get-one/${id}`);
  },

  getFeaturedProducts: async () => {
    return await axiosConfig.get("/product/get-featured-products");
  },

  createOrder: async (body: {
    cartItems: Item[];
    billingDetails: Tcheckout;
  }) => {
    return await axiosConfig.post("/order/create", body);
  },
};
