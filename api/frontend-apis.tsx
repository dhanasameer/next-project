import { axiosConfig } from "./axios-config";

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
};
