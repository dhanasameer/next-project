import { axiosConfig } from "./axios-config";

export const bannerApi = {
  getAllBanners: async () => {
    return await axiosConfig.get("/banner/get");
  },
};
