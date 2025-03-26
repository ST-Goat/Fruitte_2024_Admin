import ApiUtils from "@/lib/axiosInstanceAuth";
import { API_URL } from "@/constants/api";
import { AxiosResponse } from "axios";
import * as i from "../../types/session-option/api";

export const getSessionOptions = async (placeId: string) => {
  const { data } = await ApiUtils.fetch<
    i.GetSessionOptionsRequest,
    AxiosResponse<i.GetSessionOptionsResponse>
  >(`${API_URL.getSessionOptions}/${placeId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getSessionOptionsBySessionId = async (sessionId: string) => {
  const { data } = await ApiUtils.fetch<
    i.GetSessionOptionsRequest,
    AxiosResponse<i.GetSessionOptionsResponse>
  >(`${API_URL.getSessionOptionsBySessionId}/${sessionId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const createSessionOption = async (
  placeId: string,
  createInfo: i.CreateSessionOptionRequest,
) => {
  const { data } = await ApiUtils.post<
    i.CreateSessionOptionRequest,
    AxiosResponse<i.CreateSessionOptionResponse>
  >(`${API_URL.createSessionOption}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const updateSessionOption = async (
  id: number,
  updateInfo: i.UpdateSessionOptionRequest,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateSessionOptionRequest,
    AxiosResponse<i.UpdateSessionOptionResponse>
  >(`${API_URL.updateSessionOption}/${id}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const deleteSessionOption = async (id: number) => {
  const { data } = await ApiUtils.patch<
    i.DeleteSessionOptionRequest,
    AxiosResponse<i.DeleteSessionOptionResponse>
  >(`${API_URL.deleteSessionOption}/${id}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getSessionsForSelector = async (placeId: string) => {
  const { data } = await ApiUtils.fetch<
    i.GetSessionsForSelectorRequest,
    AxiosResponse<i.GetSessionsForSelectorResponse>
  >(`${API_URL.getSessionsForSelector}/${placeId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getSessionsForStepSelector = async (placeId: string) => {
  const { data } = await ApiUtils.fetch<
    i.GetSessionsForStepSelectorRequest,
    AxiosResponse<i.GetSessionsForStepSelectorResponse>
  >(`${API_URL.getSessionsForStepSelector}/${placeId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getSessionsForOptionStepSelector = async (placeId: string) => {
  const { data } = await ApiUtils.fetch<
    i.GetSessionsForStepSelectorRequest,
    AxiosResponse<i.GetSessionsForStepSelectorResponse>
  >(`${API_URL.getSessionsForOptionStepSelector}/${placeId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getOptionsForSelector = async (placeId: string) => {
  const { data } = await ApiUtils.fetch<
    i.GetOptionsForSelectorRequest,
    AxiosResponse<i.GetOptionsForSelectorResponse>
  >(`${API_URL.getOptionsForSelector}/${placeId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const updateSessionOptionStep = async (
  placeId: string,
  updateInfo: i.UpdateSessionOptionStepRequest,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateSessionOptionStepRequest,
    AxiosResponse<i.UpdateSessionOptionStepResponse>
  >(`${API_URL.updateSessionOptionStep}/${placeId}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
