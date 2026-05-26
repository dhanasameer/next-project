import { baseUrl } from "@/utils/base_url";
import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: baseUrl,
});
