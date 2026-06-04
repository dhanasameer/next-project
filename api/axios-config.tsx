import { baseUrl } from "@/utils/base_url";
import { getToken } from "@/utils/get-token";
import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: baseUrl,
  headers: { "content-type": "application/json" },
});

axiosConfig.interceptors.request.use(async (config) => {
  const token = await getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
