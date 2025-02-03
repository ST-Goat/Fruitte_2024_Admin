import ApiUtils from "@/lib/axiosInstanceAuth";
import { API_URL } from "@/constants/api";
import { AxiosResponse } from "axios";
import {
  introOpt1,
  GetIntroOpt1Request,
  GetIntroOpt1Response,
  CreateIntroOpt1Request,
  CreateIntroOpt1Response,
  UpdateIntroOpt1Request,
  UpdateIntroOpt1Response,
  GetIntroOpt2Request,
  GetIntroOpt2Response,
  GetIntroOpt2DetailRequest,
  GetIntroOpt2DetailResponse,
  UpdateIntroOpt2Request,
  UpdateIntroOpt2Response,
} from "../../types/intro/api";

export const getIntroOpt1 = async (id: string) => {
  const { data } = await ApiUtils.fetch<
    GetIntroOpt1Request,
    AxiosResponse<GetIntroOpt1Response>
  >(`${API_URL.getIntroOpt1Desc}/${id}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const createIntroOpt1 = async (
  placeId: string,
  createInfo: CreateIntroOpt1Request,
) => {
  const { data } = await ApiUtils.post<
    CreateIntroOpt1Request,
    AxiosResponse<CreateIntroOpt1Response>
  >(`${API_URL.createIntroOpt1Desc}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const updateIntroOpt1 = async (
  placeId: string,
  updateInfo: UpdateIntroOpt1Request,
) => {
  const { data } = await ApiUtils.patch<
    UpdateIntroOpt1Request,
    AxiosResponse<UpdateIntroOpt1Response>
  >(`${API_URL.getIntroOpt1Desc}/${placeId}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const getIntroOpt2 = async (placeId: string) => {
  try {
    const { data } = await ApiUtils.fetch<
      GetIntroOpt2Request,
      AxiosResponse<GetIntroOpt2Response>
    >(`${API_URL.getIntroOpt2}/${placeId}`);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
export const getIntroOpt2Detail = async (
  placeId: string,
  contentId: string,
) => {
  try {
    const { data } = await ApiUtils.fetch<
      GetIntroOpt2DetailRequest,
      AxiosResponse<GetIntroOpt2DetailResponse>
    >(`${API_URL.getIntroOpt2Detail}/${placeId}/${contentId}`);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
export const updateIntroOpt2 = async (updateInfo: UpdateIntroOpt2Request) => {
  const { data } = await ApiUtils.patch<
    UpdateIntroOpt2Request,
    AxiosResponse<UpdateIntroOpt2Response>
  >(
    `${API_URL.getIntroOpt1Desc}/${updateInfo.placeId}/${updateInfo.id}`,
    updateInfo,
  );

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    console.log(response);

    return response;
  }
};
