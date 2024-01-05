import axios, { AxiosHeaders, AxiosRequestConfig, AxiosResponse } from "axios";
import { BASE_URL } from "../utils/constants";
import { LoginRequest } from "@/models/loginRequest.model";

export const login = async (user: LoginRequest) => {
  const headers: AxiosHeaders = new AxiosHeaders();
  headers.setContentType("application/json");
  const config: AxiosRequestConfig = {
    headers: headers,
    withCredentials: true,
  };
  const request = axios.post(BASE_URL + "/login", user, config);
  return request
    .then((res: AxiosResponse) => {
      return res.data;
    })
    .catch(() => {
      return null;
    });
};

