import axios from "axios";
import { TEST_BASE_URL } from "../config/constants";

const axiosApi = axios.create({
  baseURL: TEST_BASE_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axiosApi;
