import ApiUtils from "@/lib/axiosInstanceAuth";
import * as i from "../types/api";
import { API_URL } from "@/constants/api";
import { AxiosResponse } from "axios";

export const getFruittePicks = async () => {
  const { data } = await ApiUtils.fetch<
    i.getFruittePicksRequest,
    AxiosResponse<i.getFruittePicksResponse>
  >(API_URL.getFruittePicks);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getFruittePick = async (id: string) => {
  const { data } = await ApiUtils.fetch<
    i.getFruittePickRequest,
    AxiosResponse<i.getFruittePickResponse>
  >(`${API_URL.getFruittePick}/${id}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const createFruittePick = async (
  createInfo: i.createFruittePickRequest,
) => {
  const { data } = await ApiUtils.post<
    i.createFruittePickRequest,
    AxiosResponse<i.createFruittePickResponse>
  >(API_URL.createFruittePicks, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 201) {
    return response;
  }
};

export const updateFruittePick = async (
  updateInfo: i.updateFruittePickRequest,
) => {
  const { data } = await ApiUtils.patch<
    i.updateFruittePickRequest,
    AxiosResponse<i.updateFruittePickResponse>
  >(`${API_URL.updateFruittePicks}/${updateInfo.id}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const removeFruittePick = async (id: number) => {
  const { data } = await ApiUtils.patch<
    i.deleteFruittePickRequest,
    AxiosResponse<i.deleteFruittePickResponse>
  >(`${API_URL.deleteFruittePicks}/${id}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 204) {
    return response;
  }
};

export const updateFruittePickStep = async (
  updateInfo: i.updateFruittePickStepRequest,
) => {
  const { data } = await ApiUtils.patch<
    i.updateFruittePickStepRequest,
    AxiosResponse<i.updateFruittePickStepResponse>
  >(`${API_URL.updateFruittePickStep}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getExposedAllFruittePicks = async () => {
  const { data } = await ApiUtils.fetch<
    i.getFruittePicksRequest,
    AxiosResponse<i.getFruittePicksResponse>
  >(`${API_URL.getFruittePicksExposed}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getFruittePickIntroList = async (pickId: string) => {
  const { data } = await ApiUtils.fetch<
    i.getFruittePickIntroListRequest,
    AxiosResponse<i.getFruittePickIntroResponse>
  >(`${API_URL.getFruittePickIntroList}/${pickId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getFruittePickIntro = async (pickId: string, id: string) => {
  const { data } = await ApiUtils.fetch<
    i.getFruittePickIntroRequest,
    AxiosResponse<i.getFruittePickIntroDetailResponse>
  >(`${API_URL.getFruittePickIntro}/${pickId}/${id}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const createFruittePickIntro = async (
  createInfo: i.createFruittePickIntroRequest,
) => {
  const { data } = await ApiUtils.post<
    i.createFruittePickIntroRequest,
    AxiosResponse<i.createFruittePickIntroResponse>
  >(`${API_URL.createFruittePickIntro}/${createInfo.pickId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const updateFruittePickIntro = async (
  updateInfo: i.updateFruittePickIntroRequest,
) => {
  const { data } = await ApiUtils.patch<
    i.updateFruittePickIntroRequest,
    AxiosResponse<i.updateFruittePickIntroResponse>
  >(
    `${API_URL.updateFruittePickIntro}/${updateInfo.pickId}/${updateInfo.id}`,
    updateInfo,
  );

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const updateFruittePickIntroStep = async (
  pickId: string,
  updateInfo: i.updateFruittePickIntroStepRequest,
) => {
  const { data } = await ApiUtils.patch<
    i.updateFruittePickIntroStepRequest,
    AxiosResponse<i.updateFruittePickIntroStepResponse>
  >(`${API_URL.updateFruittePickIntroStep}/${pickId}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const deleteFruittePickIntro = async (id: number) => {
  const { data } = await ApiUtils.patch<
    i.deleteFruittePickIntroRequest,
    AxiosResponse<i.deleteFruittePickIntroResponse>
  >(`${API_URL.deleteFruittePickIntro}/${id}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 204) {
    return response;
  }
};
