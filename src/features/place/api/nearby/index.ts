import ApiUtils from "@/lib/axiosInstanceAuth";
import { API_URL } from "@/constants/api";
import { AxiosResponse } from "axios";
import * as i from "../../types/nearby/api";

export const getNearbyOpt1 = async (placeId: string) => {
  try {
    const { data } = await ApiUtils.fetch<
      i.GetNearbyOpt1Request,
      AxiosResponse<i.GetNearbyOpt1Response>
    >(`${API_URL.getNearbyOpt1}/${placeId}`);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
export const getNearbyOpt1Detail = async (placeId: string, id: string) => {
  try {
    const { data } = await ApiUtils.fetch<
      i.GetNearbyOpt1DetailRequest,
      AxiosResponse<i.GetNearbyOpt1DetailResponse>
    >(`${API_URL.getNearbyOpt1Detail}/${placeId}/${id}`);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response?.info;
    }
  } catch (e) {
    throw e;
  }
};
export const updateNearbyOpt1 = async (
  updateInfo: i.UpdateNearbyOpt1Request,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateNearbyOpt1Request,
    AxiosResponse<i.UpdateNearbyOpt1Response>
  >(
    `${API_URL.updateNearbyOpt1}/${updateInfo.placeId}/${updateInfo.id}`,
    updateInfo,
  );

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const createNearbyOpt1 = async (
  placeId: string,
  createInfo: i.CreateNearbyOpt1Request,
) => {
  const { data } = await ApiUtils.post<
    i.CreateNearbyOpt1Request,
    AxiosResponse<i.CreateNearbyOpt1Response>
  >(`${API_URL.createNearbyOpt1}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const updateNearbyOpt1Step = async (
  placeId: string,
  updateInfo: i.UpdateNearbyOpt1StepRequest,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateNearbyOpt1StepRequest,
    AxiosResponse<i.UpdateNearbyOpt1StepResponse>
  >(`${API_URL.updateNearbyOpt1Step}/${placeId}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const deleteNearbyOpt1 = async (placeId: string, id: number) => {
  const { data } = await ApiUtils.patch<
    i.DeleteNearbyOpt1Request,
    AxiosResponse<i.DeleteNearbyOpt1Response>
  >(`${API_URL.deleteNearbyOpt1}/${placeId}/${id}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
