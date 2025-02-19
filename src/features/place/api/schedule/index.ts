import ApiUtils from "@/lib/axiosInstanceAuth";
import { API_URL } from "@/constants/api";
import { AxiosResponse } from "axios";
import * as i from "../../types/schedule/api";

export const getScheduleOpt1 = async (placeId: string) => {
  const { data } = await ApiUtils.fetch<
    i.GetScheduleOpt1Request,
    AxiosResponse<i.GetScheduleOpt1Response>
  >(`${API_URL.getScheduleOpt1}/${placeId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const createScheduleOpt1 = async (
  placeId: string,
  createInfo: i.CreateScheduleOpt1Request,
) => {
  const { data } = await ApiUtils.post<
    i.CreateScheduleOpt1Request,
    AxiosResponse<i.CreateScheduleOpt1Response>
  >(`${API_URL.createScheduleOpt1}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const updateScheduleOpt1 = async (
  placeId: string,
  updateInfo: i.UpdateScheduleOpt1Request,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateScheduleOpt1Request,
    AxiosResponse<i.UpdateScheduleOpt1Response>
  >(`${API_URL.updateScheduleOpt1}/${placeId}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getScheduleOpt2 = async (placeId: string) => {
  try {
    const { data } = await ApiUtils.fetch<
      i.GetScheduleOpt2Request,
      AxiosResponse<i.GetScheduleOpt2Response>
    >(`${API_URL.getScheduleOpt2}/${placeId}`);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
export const getScheduleOpt2Detail = async (
  placeId: string,
  contentId: string,
) => {
  try {
    const { data } = await ApiUtils.fetch<
      i.GetScheduleOpt2DetailRequest,
      AxiosResponse<i.GetScheduleOpt2DetailResponse>
    >(`${API_URL.getScheduleOpt2Detail}/${placeId}/${contentId}`);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
export const createScheduleOpt2 = async (
  placeId: string,
  createInfo: i.CreateScheduleOpt2Request,
) => {
  try {
    const { data } = await ApiUtils.post<
      i.CreateScheduleOpt2Request,
      AxiosResponse<i.CreateScheduleOpt2Response>
    >(`${API_URL.createScheduleOpt2}/${placeId}`, createInfo);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
export const updateScheduleOpt2Step = async (
  placeId: string,
  updateInfo: i.UpdateScheduleOpt2StepRequest,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateScheduleOpt2StepRequest,
    AxiosResponse<i.UpdateScheduleOpt2StepResponse>
  >(`${API_URL.updateScheduleOpt2Step}/${placeId}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const deleteScheduleOpt2 = async (placeId: string, optionId: number) => {
  const { data } = await ApiUtils.patch<
    i.DeleteScheduleOpt2Request,
    AxiosResponse<i.DeleteScheduleOpt2Response>
  >(`${API_URL.deleteScheduleOpt2}/${placeId}/${optionId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const updateScheduleOpt2 = async (
  updateInfo: i.UpdateScheduleOpt2Request,
) => {
  try {
    const { data } = await ApiUtils.patch<
      i.UpdateScheduleOpt2Request,
      AxiosResponse<i.UpdateScheduleOpt2Response>
    >(
      `${API_URL.updateScheduleOpt2}/${updateInfo.placeId}/${updateInfo.id}`,
      updateInfo,
    );

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};

export const getScheduleOpt3 = async (placeId: string) => {
  const { data } = await ApiUtils.fetch<
    i.GetScheduleOpt3Request,
    AxiosResponse<i.GetScheduleOpt3Response>
  >(`${API_URL.getScheduleOpt3}/${placeId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const createScheduleOpt3 = async (
  placeId: string,
  createInfo: i.CreateScheduleOpt3Request,
) => {
  const { data } = await ApiUtils.post<
    i.CreateScheduleOpt3Request,
    AxiosResponse<i.CreateScheduleOpt3Response>
  >(`${API_URL.createScheduleOpt3}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const updateScheduleOpt3 = async (
  placeId: string,
  updateInfo: i.UpdateScheduleOpt3Request,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateScheduleOpt3Request,
    AxiosResponse<i.UpdateScheduleOpt3Response>
  >(`${API_URL.updateScheduleOpt3}/${placeId}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getScheduleOpt4 = async (id: string) => {
  const { data } = await ApiUtils.fetch<
    i.GetScheduleOpt4Request,
    AxiosResponse<i.GetScheduleOpt4Response>
  >(`${API_URL.getScheduleOpt4}/${id}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    console.log(response);

    return response;
  }
};
export const createScheduleOpt4 = async (
  placeId: string,
  createInfo: i.CreateScheduleOpt4Request,
) => {
  const { data } = await ApiUtils.post<
    i.CreateScheduleOpt4Request,
    AxiosResponse<i.CreateScheduleOpt4Response>
  >(`${API_URL.createScheduleOpt4}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const updateScheduleOpt4 = async (
  placeId: string,
  updateInfo: i.UpdateScheduleOpt4Request,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateScheduleOpt4Request,
    AxiosResponse<i.UpdateScheduleOpt4Response>
  >(`${API_URL.updateScheduleOpt4}/${placeId}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getScheduleOpt5 = async (id: string) => {
  const { data } = await ApiUtils.fetch<
    i.GetScheduleOpt5Request,
    AxiosResponse<i.GetScheduleOpt5Response>
  >(`${API_URL.getScheduleOpt5}/${id}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    console.log(response);

    return response;
  }
};
export const createScheduleOpt5 = async (
  placeId: string,
  createInfo: i.CreateScheduleOpt5Request,
) => {
  const { data } = await ApiUtils.post<
    i.CreateScheduleOpt5Request,
    AxiosResponse<i.CreateScheduleOpt5Response>
  >(`${API_URL.createScheduleOpt5}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const updateScheduleOpt5 = async (
  placeId: string,
  updateInfo: i.UpdateScheduleOpt5Request,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateScheduleOpt5Request,
    AxiosResponse<i.UpdateScheduleOpt5Response>
  >(`${API_URL.updateScheduleOpt5}/${placeId}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getScheduleOpt6 = async (id: string) => {
  const { data } = await ApiUtils.fetch<
    i.GetScheduleOpt6Request,
    AxiosResponse<i.GetScheduleOpt6Response>
  >(`${API_URL.getScheduleOpt6}/${id}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    console.log(response);

    return response;
  }
};
export const createScheduleOpt6 = async (
  placeId: string,
  createInfo: i.CreateScheduleOpt6Request,
) => {
  const { data } = await ApiUtils.post<
    i.CreateScheduleOpt6Request,
    AxiosResponse<i.CreateScheduleOpt6Response>
  >(`${API_URL.createScheduleOpt6}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const updateScheduleOpt6 = async (
  placeId: string,
  updateInfo: i.UpdateScheduleOpt6Request,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateScheduleOpt6Request,
    AxiosResponse<i.UpdateScheduleOpt6Response>
  >(`${API_URL.updateScheduleOpt6}/${placeId}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
