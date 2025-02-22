import ApiUtils from "@/lib/axiosInstanceAuth";
import { API_URL } from "@/constants/api";
import { AxiosResponse } from "axios";
import * as i from "../../types/intro/api";

export const getIntroOpt1 = async (id: string) => {
  const { data } = await ApiUtils.fetch<
    i.GetIntroOpt1Request,
    AxiosResponse<i.GetIntroOpt1Response>
  >(`${API_URL.getIntroOpt1Desc}/${id}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const createIntroOpt1 = async (
  placeId: string,
  createInfo: i.CreateIntroOpt1Request,
) => {
  const { data } = await ApiUtils.post<
    i.CreateIntroOpt1Request,
    AxiosResponse<i.CreateIntroOpt1Response>
  >(`${API_URL.createIntroOpt1Desc}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const updateIntroOpt1 = async (
  placeId: string,
  updateInfo: i.UpdateIntroOpt1Request,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateIntroOpt1Request,
    AxiosResponse<i.UpdateIntroOpt1Response>
  >(`${API_URL.updateIntroOpt1Desc}/${placeId}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const getIntroOpt2 = async (placeId: string) => {
  try {
    const { data } = await ApiUtils.fetch<
      i.GetIntroOpt2Request,
      AxiosResponse<i.GetIntroOpt2Response>
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
      i.GetIntroOpt2DetailRequest,
      AxiosResponse<i.GetIntroOpt2DetailResponse>
    >(`${API_URL.getIntroOpt2Detail}/${placeId}/${contentId}`);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
export const updateIntroOpt2 = async (updateInfo: i.UpdateIntroOpt2Request) => {
  const { data } = await ApiUtils.patch<
    i.UpdateIntroOpt2Request,
    AxiosResponse<i.UpdateIntroOpt2Response>
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
  createInfo: i.CreateIntroOpt2Request,
) => {
  const { data } = await ApiUtils.post<
    i.CreateIntroOpt2Request,
    AxiosResponse<i.CreateIntroOpt2Response>
  >(`${API_URL.createIntroOpt2}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const updateIntroOpt2Step = async (
  placeId: string,
  updateInfo: i.UpdateIntroOpt2StepRequest,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateIntroOpt2StepRequest,
    AxiosResponse<i.UpdateIntroOpt2StepResponse>
  >(`${API_URL.updateIntroOpt2Step}/${placeId}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const deleteIntroOpt2 = async (placeId: string, contentId: number) => {
  const { data } = await ApiUtils.patch<
    i.DeleteIntroOpt2Request,
    AxiosResponse<i.DeleteIntroOpt2Response>
  >(`${API_URL.deleteIntroOpt2}/${placeId}/${contentId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getIntroOpt3 = async (placeId: string) => {
  try {
    const { data } = await ApiUtils.fetch<
      i.GetIntroOpt3Request,
      AxiosResponse<i.GetIntroOpt3Response>
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
      i.GetIntroOpt3DetailRequest,
      AxiosResponse<i.GetIntroOpt3DetailResponse>
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
  createInfo: i.CreateIntroOpt3Request,
) => {
  const { data } = await ApiUtils.post<
    i.CreateIntroOpt2Request,
    AxiosResponse<i.CreateIntroOpt3Response>
  >(`${API_URL.createIntroOpt3}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const updateIntroOpt3 = async (updateInfo: i.UpdateIntroOpt3Request) => {
  const { data } = await ApiUtils.patch<
    i.UpdateIntroOpt3Request,
    AxiosResponse<i.UpdateIntroOpt3Response>
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
  updateInfo: i.UpdateIntroOpt3StepRequest,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateIntroOpt3StepRequest,
    AxiosResponse<i.UpdateIntroOpt3StepResponse>
  >(`${API_URL.updateIntroOpt3Step}/${placeId}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const deleteIntroOpt3 = async (placeId: string, contentId: number) => {
  const { data } = await ApiUtils.patch<
    i.DeleteIntroOpt3Request,
    AxiosResponse<i.DeleteIntroOpt3Response>
  >(`${API_URL.deleteIntroOpt3}/${placeId}/${contentId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getIntroOpt4 = async (placeId: string) => {
  const { data } = await ApiUtils.fetch<
    i.GetIntroOpt4Request,
    AxiosResponse<i.GetIntroOpt4Response>
  >(`${API_URL.getIntroOpt4}/${placeId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const createIntroOpt4 = async (
  placeId: string,
  createInfo: i.CreateIntroOpt4Request,
) => {
  const { data } = await ApiUtils.post<
    i.CreateIntroOpt4Request,
    AxiosResponse<i.CreateIntroOpt4Response>
  >(`${API_URL.createIntroOpt4}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const updateIntroOpt4 = async (
  placeId: string,
  updateInfo: i.UpdateIntroOpt4Request,
) => {
  try {
    const { data } = await ApiUtils.patch<
      i.UpdateIntroOpt4Request,
      AxiosResponse<i.UpdateIntroOpt4Response>
    >(`${API_URL.updateIntroOpt4}/${placeId}`, updateInfo);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};

export const getIntroOpt5 = async (placeId: string) => {
  try {
    const { data } = await ApiUtils.fetch<
      i.GetIntroOpt5Request,
      AxiosResponse<i.GetIntroOpt5Response>
    >(`${API_URL.getIntroOpt5}/${placeId}`);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
export const getIntroOpt5Detail = async (
  placeId: string,
  contentId: string,
) => {
  try {
    const { data } = await ApiUtils.fetch<
      i.GetIntroOpt5DetailRequest,
      AxiosResponse<i.GetIntroOpt5DetailResponse>
    >(`${API_URL.getIntroOpt5Detail}/${placeId}/${contentId}`);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
export const createIntroOpt5 = async (
  placeId: string,
  createInfo: i.CreateIntroOpt5Request,
) => {
  try {
    const { data } = await ApiUtils.post<
      i.CreateIntroOpt5Request,
      AxiosResponse<i.CreateIntroOpt5Response>
    >(`${API_URL.createIntroOpt5}/${placeId}`, createInfo);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
export const updateIntroOpt5Step = async (
  placeId: string,
  updateInfo: i.UpdateIntroOpt5StepRequest,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateIntroOpt5StepRequest,
    AxiosResponse<i.UpdateIntroOpt5StepResponse>
  >(`${API_URL.updateIntroOpt5Step}/${placeId}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const deleteIntroOpt5 = async (placeId: string, contentId: number) => {
  const { data } = await ApiUtils.patch<
    i.DeleteIntroOpt5Request,
    AxiosResponse<i.DeleteIntroOpt5Response>
  >(`${API_URL.deleteIntroOpt5}/${placeId}/${contentId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const updateIntroOpt5 = async (updateInfo: i.UpdateIntroOpt5Request) => {
  try {
    const { data } = await ApiUtils.patch<
      i.UpdateIntroOpt5Request,
      AxiosResponse<i.UpdateIntroOpt5Response>
    >(
      `${API_URL.updateIntroOpt5}/${updateInfo.placeId}/${updateInfo.id}`,
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

export const getIntroOpt6 = async (placeId: string) => {
  try {
    const { data } = await ApiUtils.fetch<
      i.GetIntroOpt6Request,
      AxiosResponse<i.GetIntroOpt6Response>
    >(`${API_URL.getIntroOpt6}/${placeId}`);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
export const getIntroOpt6Detail = async (placeId: string, optionId: string) => {
  try {
    const { data } = await ApiUtils.fetch<
      i.GetIntroOpt6DetailRequest,
      AxiosResponse<i.GetIntroOpt6DetailResponse>
    >(`${API_URL.getIntroOpt6Detail}/${placeId}/${optionId}`);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
export const createIntroOpt6 = async (
  placeId: string,
  createInfo: i.CreateIntroOpt5Request,
) => {
  try {
    const { data } = await ApiUtils.post<
      i.CreateIntroOpt6Request,
      AxiosResponse<i.CreateIntroOpt6Response>
    >(`${API_URL.createIntroOpt6}/${placeId}`, createInfo);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
export const updateIntroOpt6Step = async (
  placeId: string,
  updateInfo: i.UpdateIntroOpt5StepRequest,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateIntroOpt6StepRequest,
    AxiosResponse<i.UpdateIntroOpt6StepResponse>
  >(`${API_URL.updateIntroOpt6Step}/${placeId}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const deleteIntroOpt6 = async (placeId: string, optionId: number) => {
  const { data } = await ApiUtils.patch<
    i.DeleteIntroOpt6Request,
    AxiosResponse<i.DeleteIntroOpt6Response>
  >(`${API_URL.deleteIntroOpt6}/${placeId}/${optionId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const updateIntroOpt6 = async (updateInfo: i.UpdateIntroOpt5Request) => {
  try {
    const { data } = await ApiUtils.patch<
      i.UpdateIntroOpt6Request,
      AxiosResponse<i.UpdateIntroOpt6Response>
    >(
      `${API_URL.updateIntroOpt6}/${updateInfo.placeId}/${updateInfo.id}`,
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

export const getIntroOpt7 = async (id: string) => {
  const { data } = await ApiUtils.fetch<
    i.GetIntroOpt7Request,
    AxiosResponse<i.GetIntroOpt7Response>
  >(`${API_URL.getIntroOpt7}/${id}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    console.log(response);

    return response;
  }
};
export const createIntroOpt7 = async (
  placeId: string,
  createInfo: i.CreateIntroOpt1Request,
) => {
  const { data } = await ApiUtils.post<
    i.CreateIntroOpt1Request,
    AxiosResponse<i.CreateIntroOpt1Response>
  >(`${API_URL.createIntroOpt7}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const updateIntroOpt7 = async (
  placeId: string,
  updateInfo: i.UpdateIntroOpt1Request,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateIntroOpt1Request,
    AxiosResponse<i.UpdateIntroOpt1Response>
  >(`${API_URL.getIntroOpt7}/${placeId}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getIntroOpt8 = async (id: string) => {
  const { data } = await ApiUtils.fetch<
    i.GetIntroOpt8Request,
    AxiosResponse<i.GetIntroOpt8Response>
  >(`${API_URL.getIntroOpt8}/${id}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    console.log(response);

    return response;
  }
};
export const createIntroOpt8 = async (
  placeId: string,
  createInfo: i.CreateIntroOpt8Request,
) => {
  const { data } = await ApiUtils.post<
    i.CreateIntroOpt8Request,
    AxiosResponse<i.CreateIntroOpt8Response>
  >(`${API_URL.createIntroOpt8}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const updateIntroOpt8 = async (
  placeId: string,
  updateInfo: i.UpdateIntroOpt8Request,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateIntroOpt8Request,
    AxiosResponse<i.UpdateIntroOpt8Response>
  >(`${API_URL.updateIntroOpt8}/${placeId}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
