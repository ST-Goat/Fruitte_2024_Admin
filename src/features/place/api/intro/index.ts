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
  CreateIntroOpt2Request,
  CreateIntroOpt2Response,
  UpdateIntroOpt2StepRequest,
  UpdateIntroOpt2StepResponse,
  DeleteIntroOpt2Request,
  DeleteIntroOpt2Response,
  GetIntroOpt3Request,
  GetIntroOpt3Response,
  CreateIntroOpt3Request,
  CreateIntroOpt3Response,
  UpdateIntroOpt3Request,
  UpdateIntroOpt3Response,
  GetIntroOpt3DetailRequest,
  GetIntroOpt3DetailResponse,
  UpdateIntroOpt3StepRequest,
  UpdateIntroOpt3StepResponse,
  DeleteIntroOpt3Request,
  DeleteIntroOpt3Response,
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
    `${API_URL.updateIntroOpt2}/${updateInfo.placeId}/${updateInfo.id}`,
    updateInfo,
  );

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const createIntroOpt2 = async (
  placeId: string,
  createInfo: CreateIntroOpt2Request,
) => {
  const { data } = await ApiUtils.post<
    CreateIntroOpt2Request,
    AxiosResponse<CreateIntroOpt2Response>
  >(`${API_URL.createIntroOpt2}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const updateIntroOpt2Step = async (
  placeId: string,
  updateInfo: UpdateIntroOpt2StepRequest,
) => {
  const { data } = await ApiUtils.patch<
    UpdateIntroOpt2StepRequest,
    AxiosResponse<UpdateIntroOpt2StepResponse>
  >(`${API_URL.updateIntroOpt2Step}/${placeId}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const deleteIntroOpt2 = async (placeId: string, contentId: number) => {
  const { data } = await ApiUtils.patch<
    DeleteIntroOpt2Request,
    AxiosResponse<DeleteIntroOpt2Response>
  >(`${API_URL.deleteIntroOpt2}/${placeId}/${contentId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getIntroOpt3 = async (placeId: string) => {
  try {
    const { data } = await ApiUtils.fetch<
      GetIntroOpt3Request,
      AxiosResponse<GetIntroOpt3Response>
    >(`${API_URL.getIntroOpt3}/${placeId}`);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
export const getIntroOpt3Detail = async (
  placeId: string,
  contentId: string,
) => {
  try {
    const { data } = await ApiUtils.fetch<
      GetIntroOpt3DetailRequest,
      AxiosResponse<GetIntroOpt3DetailResponse>
    >(`${API_URL.getIntroOpt3Detail}/${placeId}/${contentId}`);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
export const createIntroOpt3 = async (
  placeId: string,
  createInfo: CreateIntroOpt3Request,
) => {
  const { data } = await ApiUtils.post<
    CreateIntroOpt2Request,
    AxiosResponse<CreateIntroOpt3Response>
  >(`${API_URL.createIntroOpt3}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const updateIntroOpt3 = async (updateInfo: UpdateIntroOpt3Request) => {
  const { data } = await ApiUtils.patch<
    UpdateIntroOpt3Request,
    AxiosResponse<UpdateIntroOpt3Response>
  >(
    `${API_URL.updateIntroOpt3}/${updateInfo.placeId}/${updateInfo.id}`,
    updateInfo,
  );

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const updateIntroOpt3Step = async (
  placeId: string,
  updateInfo: UpdateIntroOpt3StepRequest,
) => {
  const { data } = await ApiUtils.patch<
    UpdateIntroOpt3StepRequest,
    AxiosResponse<UpdateIntroOpt3StepResponse>
  >(`${API_URL.updateIntroOpt3Step}/${placeId}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const deleteIntroOpt3 = async (placeId: string, contentId: number) => {
  const { data } = await ApiUtils.patch<
    DeleteIntroOpt3Request,
    AxiosResponse<DeleteIntroOpt3Response>
  >(`${API_URL.deleteIntroOpt3}/${placeId}/${contentId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
