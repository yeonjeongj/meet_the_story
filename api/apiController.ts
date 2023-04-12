import axios, { AxiosError } from "axios";

const baseURL = "https://openapi.naver.com/v1/search/book.json";

export const instance = axios.create({
  baseURL,
  headers: {
    "X-Naver-Client-Id": process.env.NAVER_CLIENT_ID,
    "X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRET,
  },
});

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);
