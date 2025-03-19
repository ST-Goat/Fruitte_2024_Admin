import ApiUtils from "@/lib/axiosInstanceAuth";
import { API_URL } from "@/constants/api";
import { AxiosResponse } from "axios";
import * as i from "../../types/option/api";

export const getOptions = async (placeId: string) => {
  const { data } = await ApiUtils.fetch<
    i.GetOptionsRequest,
    AxiosResponse<i.GetOptionsResponse>
  >(`${API_URL.getOptions}/${placeId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const createOption = async (
  placeId: string,
  createInfo: i.CreateOptionRequest,
) => {
  const { data } = await ApiUtils.post<
    i.CreateOptionRequest,
    AxiosResponse<i.CreateOptionResponse>
  >(`${API_URL.createOption}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const updateOption = async (
  id: number,
  updateInfo: i.UpdateOptionRequest,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateOptionRequest,
    AxiosResponse<i.UpdateOptionResponse>
  >(`${API_URL.updateOption}/${id}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const deleteOption = async (id: number) => {
  const { data } = await ApiUtils.patch<
    i.DeleteOptionRequest,
    AxiosResponse<i.DeleteOptionResponse>
  >(`${API_URL.deleteOption}/${id}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
