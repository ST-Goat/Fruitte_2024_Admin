import { AxiosResponse } from "axios";
import ApiUtils from "@/lib/axiosInstanceAuth";
import * as i from "../types/api";
import { API_URL } from "@/constants/api";

export const getNotice = async () => {
  try {
    const { data } = await ApiUtils.fetch<
      i.GetNoticeRequest,
      AxiosResponse<i.GetNoticeResponse>
    >(API_URL.getNotice);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};

export const getNoticeDetail = async (noticeId: string) => {
  try {
    const { data } = await ApiUtils.fetch<
      i.GetNoticeDetailRequest,
      AxiosResponse<i.GetNoticeDetailResponse>
    >(`${API_URL.getNoticeDetail}/${noticeId}`);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};

export const createNotice = async (createInfo: i.CreateNoticeRequest) => {
  const { data } = await ApiUtils.post<
    i.CreateNoticeRequest,
    AxiosResponse<i.CreateNoticeResponse>
  >(API_URL.createNotice, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const updateNotice = async (updateInfo: i.UpdateNoticeRequest) => {
  const { data } = await ApiUtils.patch<
    i.UpdateNoticeRequest,
    AxiosResponse<i.UpdateNoticeResponse>
  >(`${API_URL.updateNotice}/${updateInfo.id}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const updateNoticeStep = async (updateInfo: i.UpdateNoticeStepRequest) => {
  const { data } = await ApiUtils.patch<
    i.UpdateNoticeStepRequest,
    AxiosResponse<i.UpdateNoticeStepResponse>
  >(API_URL.updateNoticeStep, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const deleteNotice = async (noticeId: number) => {
  const { data } = await ApiUtils.patch<
    i.DeleteNoticeRequest,
    AxiosResponse<i.DeleteNoticeResponse>
  >(`${API_URL.deleteNotice}/${noticeId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};