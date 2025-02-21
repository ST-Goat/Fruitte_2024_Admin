import ApiUtils from "@/lib/axiosInstanceAuth";
import { API_URL } from "@/constants/api";
import { AxiosResponse } from "axios";
import * as i from "../types/api";

export const updatePlaceInfoJson = async (placeId: string) => {
  const { data } = await ApiUtils.patch<
    i.UpdatePlaceInfoJsonRequest,
    AxiosResponse<i.UpdatePlaceInfoJsonResponse>
  >(`${API_URL.updatePlaceInfoJson}/${placeId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const getPartners = async () => {
  const { data } = await ApiUtils.fetch<
    i.GetPartnersRequest,
    AxiosResponse<i.GetPartnersResponse>
  >(`${API_URL.getPartners}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const getPlaceList = async () => {
  const { data } = await ApiUtils.fetch<
    i.GetPlaceListRequest,
    AxiosResponse<i.GetPlaceListResponse>
  >(`${API_URL.getPlaceList}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const createPlace = async (placeInfo: i.CreatePlaceRequest) => {
  const { data } = await ApiUtils.post<
    i.CreatePlaceRequest,
    AxiosResponse<i.CreatePlaceResponse>
  >(`${API_URL.createPlace}`, placeInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 201) {
    return response;
  }
};
export const deletePlace = async (placeId: string) => {
  const { data } = await ApiUtils.patch<
    i.DeletePlaceRequest,
    AxiosResponse<i.DeletePlaceResponse>
  >(`${API_URL.deletePlace}/${placeId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getInfoOpt1 = async (id: string) => {
  try {
    const { data } = await ApiUtils.fetch<
      i.GetInfoOpt1Request,
      AxiosResponse<i.GetInfoOpt1Response>
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
  updateInfo: i.UpdateInfoOpt1Request,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateInfoOpt1Request,
    AxiosResponse<i.UpdateInfoOpt1Response>
  >(`${API_URL.getInfoOpt1}/${id}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getInfoOpt2 = async (id: string) => {
  try {
    const { data } = await ApiUtils.fetch<
      i.GetInfoOpt2Request,
      AxiosResponse<i.GetInfoOpt2Response>
    >(`${API_URL.getInfoOpt2}/${id}`);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
export const createInfoOpt2 = async (
  id: string,
  createInfo: i.CreateInfoOpt2Request,
) => {
  const { data } = await ApiUtils.post<
    i.CreateInfoOpt2Request,
    AxiosResponse<i.CreateInfoOpt2Response>
  >(`${API_URL.createInfoOpt2}/${id}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const updateInfoOpt2 = async (
  id: string,
  updateInfo: i.UpdateInfoOpt2Request,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateInfoOpt2Request,
    AxiosResponse<i.UpdateInfoOpt2Response>
  >(`${API_URL.updateInfoOpt2}/${id}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getInfoOpt3 = async (id: string) => {
  const { data } = await ApiUtils.fetch<
    i.GetInfoOpt3Request,
    AxiosResponse<i.GetInfoOpt3Response>
  >(`${API_URL.getInfoOpt3}/${id}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const createInfoOpt3 = async (
  placeId: string,
  createInfo: i.CreateInfoOpt3Request,
) => {
  const { data } = await ApiUtils.post<
    i.CreateInfoOpt3Request,
    AxiosResponse<i.CreateInfoOpt3Response>
  >(`${API_URL.getInfoOpt3}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const updateInfoOpt3 = async (
  placeId: string,
  updateInfo: i.UpdateInfoOpt3Request,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateInfoOpt3Request,
    AxiosResponse<i.UpdateInfoOpt3Response>
  >(`${API_URL.getInfoOpt3}/${placeId}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getInfoOpt4 = async (id: string) => {
  try {
    const { data } = await ApiUtils.fetch<
      i.GetInfoOpt4Request,
      AxiosResponse<i.GetInfoOpt4Response>
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
  createInfo: i.CreateInfoOpt4Request,
) => {
  try {
    const { data } = await ApiUtils.post<
      i.CreateInfoOpt4Request,
      AxiosResponse<i.CreateInfoOpt4Response>
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
  updateInfo: i.UpdateInfoOpt4Request,
) => {
  try {
    const { data } = await ApiUtils.patch<
      i.UpdateInfoOpt4Request,
      AxiosResponse<i.UpdateInfoOpt4Response>
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
      i.GetInfoOpt5Request,
      AxiosResponse<i.GetInfoOpt5Response>
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
  createInfo: i.CreateInfoOpt5Request,
) => {
  const { data } = await ApiUtils.post<
    i.CreateInfoOpt5Request,
    AxiosResponse<i.CreateInfoOpt5Response>
  >(`${API_URL.createInfoOpt5}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const updateInfoOpt5 = async (
  placeId: string,
  updateInfo: i.UpdateInfoOpt5Request,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateInfoOpt5Request,
    AxiosResponse<i.UpdateInfoOpt5Response>
  >(`${API_URL.getInfoOpt5}/${placeId}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getInfoOpt6 = async (placeId: string) => {
  try {
    const { data } = await ApiUtils.fetch<
      i.GetInfoOpt6Request,
      AxiosResponse<i.GetInfoOpt6Response>
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
  createInfo: i.CreateInfoOpt6Request,
) => {
  try {
    const { data } = await ApiUtils.post<
      i.CreateInfoOpt6Request,
      AxiosResponse<i.CreateInfoOpt6Response>
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
  updateInfo: i.UpdateInfoOpt6Request,
) => {
  try {
    const { data } = await ApiUtils.patch<
      i.UpdateInfoOpt6Request,
      AxiosResponse<i.UpdateInfoOpt6Response>
    >(`${API_URL.updateInfoOpt6}/${placeId}`, updateInfo);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
