import ApiUtils from "@/lib/axiosInstanceAuth";
import { API_URL } from "@/constants/api";
import { AxiosResponse } from "axios";
import * as i from "../../types/session/api";

export const getSessions = async (placeId: string) => {
  const { data } = await ApiUtils.fetch<
    i.GetSessionsRequest,
    AxiosResponse<i.GetSessionsResponse>
  >(`${API_URL.getSessions}/${placeId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const createSession = async (
  placeId: string,
  createInfo: i.CreateSessionRequest,
) => {
  const { data } = await ApiUtils.post<
    i.CreateSessionRequest,
    AxiosResponse<i.CreateSessionResponse>
  >(`${API_URL.createSession}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const updateSession = async (
  id: number,
  updateInfo: i.UpdateSessionRequest,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateSessionRequest,
    AxiosResponse<i.UpdateSessionResponse>
  >(`${API_URL.updateSession}/${id}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const deleteSession = async (id: number) => {
  const { data } = await ApiUtils.patch<
    i.DeleteSessionRequest,
    AxiosResponse<i.DeleteSessionResponse>
  >(`${API_URL.deleteSession}/${id}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const createMultipleSession = async (
  placeId: string,
  createInfo: i.CreateMultipleSessionRequest,
) => {
  const { data } = await ApiUtils.post<
    i.CreateMultipleSessionRequest,
    AxiosResponse<i.CreateMultipleSessionResponse>
  >(`${API_URL.createMultipleSession}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  console.log(data);

  if (statusCode === 200) {
    return response;
  }
};
