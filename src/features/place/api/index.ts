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
} from "../types/api";

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
  const { data } = await ApiUtils.fetch<
    GetInfoOpt1Request,
    AxiosResponse<GetInfoOpt1Response>
  >(`${API_URL.getInfoOpt1}/${id}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
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
