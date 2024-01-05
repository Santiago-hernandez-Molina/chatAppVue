import router from "@/router";
import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { logout } from "../authentication/AuthHelper";
import { BASE_URL } from "../utils/constants";
import { RoomModel } from "@/models/room.model";
import { MessageUserModel } from "@/models/message.model";

export const getRooms = async (): Promise<RoomModel[]> => {
  const headers: AxiosHeaders = new AxiosHeaders();
  headers.setContentType("application/json");
  const config: AxiosRequestConfig = {
    headers: headers,
    withCredentials: true,
  };
  const request = axios.get(BASE_URL + "/v1/room/find", config);
  return request
    .then((res: AxiosResponse) => {
      return res.data;
    })
    .catch((res: AxiosError) => {
      if (res.code === AxiosError.ERR_NETWORK) {
        router.push("/");
      }
      if (res.response?.status === 401) {
        logout();
        router.push("/login");
      }
    });
};

export const getMessages = async (
  roomId: number,
): Promise<MessageUserModel[]> => {
  const headers: AxiosHeaders = new AxiosHeaders();
  headers.setContentType("application/json");
  const config: AxiosRequestConfig = {
    headers: headers,
    withCredentials: true,
  };
  return axios
    .get(BASE_URL + "/v1/message/find/room/" + roomId, config)
    .then((res: AxiosResponse) => {
      return res.data;
    })
    .catch((res: AxiosError) => {
      if (res.code === AxiosError.ERR_NETWORK) {
        router.push("/");
      }
      if (res.response?.status === 401) {
        router.push("/login");
      }
    });
};
