import ApiUtils from "@/lib/axiosInstanceAuth";
import { API_URL } from "@/constants/api";
import { AxiosResponse } from "axios";
import {
  CreatePlaceRequest,
  CreatePlaceResponse,
  GetInfoOpt1Request,
  GetInfoOpt1Response,
  UpdateInfoOpt1Request,
  UpdateInfoOpt1Response,
  GetInfoOpt3Request,
  GetInfoOpt3Response,
  CreateInfoOpt3Request,
  CreateInfoOpt3Response,
  UpdateInfoOpt3Request,
  UpdateInfoOpt3Response,
  GetInfoOpt4Request,
  GetInfoOpt4Response,
  CreateInfoOpt4Request,
  CreateInfoOpt4Response,
  UpdateInfoOpt4Request,
  UpdateInfoOpt4Response,
  GetInfoOpt5Request,
  GetInfoOpt5Response,
  CreateInfoOpt5Request,
  CreateInfoOpt5Response,
  UpdateInfoOpt5Request,
  UpdateInfoOpt5Response,
  GetInfoOpt6Request,
  GetInfoOpt6Response,
  infoOpt6,
  CreateInfoOpt6Request,
  CreateInfoOpt6Response,
  UpdateInfoOpt6Request,
  UpdateInfoOpt6Response,
} from "../types/api";
import { GetIntroOpt2Request, GetIntroOpt2Response } from "../types/intro/api";

export const createPlace = async (placeInfo: CreatePlaceRequest) => {
  const { data } = await ApiUtils.post<
    CreatePlaceRequest,
    AxiosResponse<CreatePlaceResponse>
  >(`${API_URL.getInfoOpt1}`, placeInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
  }
};

export const getInfoOpt1 = async (id: string) => {
  try {
    const { data } = await ApiUtils.fetch<
      GetInfoOpt1Request,
      AxiosResponse<GetInfoOpt1Response>
    >(`${API_URL.getInfoOpt1}/${id}`);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};

export const updateInfoOpt1 = async (
  id: string,
  updateInfo: UpdateInfoOpt1Request,
) => {
  const { data } = await ApiUtils.patch<
    UpdateInfoOpt1Request,
    AxiosResponse<UpdateInfoOpt1Response>
  >(`${API_URL.getInfoOpt1}/${id}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getInfoOpt3 = async (id: string) => {
  const { data } = await ApiUtils.fetch<
    GetInfoOpt3Request,
    AxiosResponse<GetInfoOpt3Response>
  >(`${API_URL.getInfoOpt3}/${id}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const createInfoOpt3 = async (
  placeId: string,
  createInfo: CreateInfoOpt3Request,
) => {
  const { data } = await ApiUtils.post<
    CreateInfoOpt3Request,
    AxiosResponse<CreateInfoOpt3Response>
  >(`${API_URL.getInfoOpt3}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const updateInfoOpt3 = async (
  placeId: string,
  updateInfo: UpdateInfoOpt3Request,
) => {
  const { data } = await ApiUtils.patch<
    UpdateInfoOpt3Request,
    AxiosResponse<UpdateInfoOpt3Response>
  >(`${API_URL.getInfoOpt3}/${placeId}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getInfoOpt4 = async (id: string) => {
  try {
    const { data } = await ApiUtils.fetch<
      GetInfoOpt4Request,
      AxiosResponse<GetInfoOpt4Response>
    >(`${API_URL.getInfoOpt4}/${id}`);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
export const createInfoOpt4 = async (
  placeId: string,
  createInfo: CreateInfoOpt4Request,
) => {
  try {
    const { data } = await ApiUtils.post<
      CreateInfoOpt4Request,
      AxiosResponse<CreateInfoOpt4Response>
    >(`${API_URL.getInfoOpt4}/${placeId}`, createInfo);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
export const updateInfoOpt4 = async (
  placeId: string,
  updateInfo: UpdateInfoOpt4Request,
) => {
  try {
    const { data } = await ApiUtils.patch<
      UpdateInfoOpt4Request,
      AxiosResponse<UpdateInfoOpt4Response>
    >(`${API_URL.getInfoOpt4}/${placeId}`, updateInfo);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};

export const getInfoOpt5 = async (placeId: string) => {
  try {
    const { data } = await ApiUtils.fetch<
      GetInfoOpt5Request,
      AxiosResponse<GetInfoOpt5Response>
    >(`${API_URL.getInfoOpt5}/${placeId}`);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
export const createInfoOpt5 = async (
  placeId: string,
  createInfo: CreateInfoOpt5Request,
) => {
  const { data } = await ApiUtils.post<
    CreateInfoOpt5Request,
    AxiosResponse<CreateInfoOpt5Response>
  >(`${API_URL.createInfoOpt5}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const updateInfoOpt5 = async (
  placeId: string,
  updateInfo: UpdateInfoOpt5Request,
) => {
  const { data } = await ApiUtils.patch<
    UpdateInfoOpt5Request,
    AxiosResponse<UpdateInfoOpt5Response>
  >(`${API_URL.getInfoOpt5}/${placeId}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getInfoOpt6 = async (placeId: string) => {
  try {
    const { data } = await ApiUtils.fetch<
      GetInfoOpt6Request,
      AxiosResponse<GetInfoOpt6Response>
    >(`${API_URL.getInfoOpt6}/${placeId}`);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
export const createInfoOpt6 = async (
  placeId: string,
  createInfo: CreateInfoOpt6Request,
) => {
  try {
    const { data } = await ApiUtils.post<
      CreateInfoOpt6Request,
      AxiosResponse<CreateInfoOpt6Response>
    >(`${API_URL.createInfoOpt6}/${placeId}`, createInfo);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
export const updateInfoOpt6 = async (
  placeId: string,
  updateInfo: UpdateInfoOpt6Request,
) => {
  try {
    const { data } = await ApiUtils.patch<
      UpdateInfoOpt6Request,
      AxiosResponse<UpdateInfoOpt6Response>
    >(`${API_URL.updateInfoOpt6}/${placeId}`, updateInfo);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
