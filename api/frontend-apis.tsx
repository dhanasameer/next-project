import { axiosConfig } from "./axios-config";

export const bannerApi = {
  getAllBanners: async () => {
    return await axiosConfig.get("/banner/get");
  },
};

export const categoryApi = {
  getAllCategories: async () => {
    return await axiosConfig.get("/category/get");
  },
};

export const productApi = {
  getProductsByCategory: async (id: string) => {
    return await axiosConfig.get(`/product/get/${id}`);
  },
};
