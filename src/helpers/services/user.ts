import axios, { AxiosHeaders, AxiosRequestConfig, AxiosResponse } from "axios";
import { BASE_URL } from "../utils/constants";
import type { LoginRequest } from "@/models/loginRequest.model";
import type {
  ActivationCode,
  RegisterRequest,
} from "@/models/registerRequest.model";

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

export const register = async (user: RegisterRequest) => {
  const headers: AxiosHeaders = new AxiosHeaders();
  headers.setContentType("application/json");

  const config: AxiosRequestConfig = {
    headers: headers,
    withCredentials: true,
  };

  const request = axios.post(BASE_URL + "/register", user, config);
  return request
    .then((res: AxiosResponse) => {
      return res;
    })
    .catch(() => {
      return null;
    });
};

export const validateCode = async (code: ActivationCode) => {
  const headers: AxiosHeaders = new AxiosHeaders();
  headers.setContentType("application/json");

  const config: AxiosRequestConfig = {
    headers: headers,
    withCredentials: true,
  };

  const request = axios.post(BASE_URL + "/activate", code, config);
  return request
    .then((res: AxiosResponse) => {
      return res;
    })
    .catch(() => {
      return null;
    });
};
