import ApiUtils from "@/lib/axiosInstanceAuth";
import { API_URL } from "@/constants/api";
import { AxiosResponse } from "axios";
import * as i from "../../types/orderPrice/api";

export const getOrderPriceOpt1 = async (placeId: string) => {
  try {
    const { data } = await ApiUtils.fetch<
      i.GetOrderPriceOpt1Request,
      AxiosResponse<i.GetOrderPriceOpt1Response>
    >(`${API_URL.getOrderPriceOpt1}/${placeId}`);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
export const getOrderPriceOpt1Detail = async (
  placeId: string,
  contentId: string,
) => {
  try {
    const { data } = await ApiUtils.fetch<
      i.GetOrderPriceOpt1DetailRequest,
      AxiosResponse<i.GetOrderPriceOpt1DetailResponse>
    >(`${API_URL.getOrderPriceOpt1Detail}/${placeId}/${contentId}`);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
export const updateOrderPriceOpt1 = async (
  updateInfo: i.UpdateOrderPriceOpt1Request,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateOrderPriceOpt1Request,
    AxiosResponse<i.UpdateOrderPriceOpt1Response>
  >(
    `${API_URL.updateOrderPriceOpt1}/${updateInfo.placeId}/${updateInfo.id}`,
    updateInfo,
  );

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const createOrderPriceOpt1 = async (
  placeId: string,
  createInfo: i.CreateOrderPriceOpt1Request,
) => {
  const { data } = await ApiUtils.post<
    i.CreateOrderPriceOpt1Request,
    AxiosResponse<i.CreateOrderPriceOpt1Response>
  >(`${API_URL.createOrderPriceOpt1}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const updateOrderPriceOpt1Step = async (
  placeId: string,
  updateInfo: i.UpdateOrderPriceOpt1StepRequest,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateOrderPriceOpt1StepRequest,
    AxiosResponse<i.UpdateOrderPriceOpt1StepResponse>
  >(`${API_URL.updateOrderPriceOpt1Step}/${placeId}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const deleteOrderPriceOpt1 = async (
  placeId: string,
  contentId: number,
) => {
  const { data } = await ApiUtils.patch<
    i.DeleteOrderPriceOpt1Request,
    AxiosResponse<i.DeleteOrderPriceOpt1Response>
  >(`${API_URL.deleteOrderPriceOpt1}/${placeId}/${contentId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getOrderPriceOpt2 = async (placeId: string) => {
  try {
    const { data } = await ApiUtils.fetch<
      i.GetOrderPriceOpt2Request,
      AxiosResponse<i.GetOrderPriceOpt2Response>
    >(`${API_URL.getOrderPriceOpt2}/${placeId}`);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
export const getOrderPriceOpt2Detail = async (
  placeId: string,
  contentId: string,
) => {
  try {
    const { data } = await ApiUtils.fetch<
      i.GetOrderPriceOpt2DetailRequest,
      AxiosResponse<i.GetOrderPriceOpt2DetailResponse>
    >(`${API_URL.getOrderPriceOpt2Detail}/${placeId}/${contentId}`);

    const { statusCode, msg, response } = data;

    if (statusCode === 200) {
      return response;
    }
  } catch (e) {
    throw e;
  }
};
export const updateOrderPriceOpt2 = async (
  updateInfo: i.UpdateOrderPriceOpt2Request,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateOrderPriceOpt2Request,
    AxiosResponse<i.UpdateOrderPriceOpt2Response>
  >(
    `${API_URL.updateOrderPriceOpt2}/${updateInfo.placeId}/${updateInfo.id}`,
    updateInfo,
  );

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const createOrderPriceOpt2 = async (
  placeId: string,
  createInfo: i.CreateOrderPriceOpt2Request,
) => {
  const { data } = await ApiUtils.post<
    i.CreateOrderPriceOpt2Request,
    AxiosResponse<i.CreateOrderPriceOpt2Response>
  >(`${API_URL.createOrderPriceOpt2}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const updateOrderPriceOpt2Step = async (
  placeId: string,
  updateInfo: i.UpdateOrderPriceOpt2StepRequest,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateOrderPriceOpt2StepRequest,
    AxiosResponse<i.UpdateOrderPriceOpt2StepResponse>
  >(`${API_URL.updateOrderPriceOpt2Step}/${placeId}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const deleteOrderPriceOpt2 = async (
  placeId: string,
  contentId: number,
) => {
  const { data } = await ApiUtils.patch<
    i.DeleteOrderPriceOpt2Request,
    AxiosResponse<i.DeleteOrderPriceOpt2Response>
  >(`${API_URL.deleteOrderPriceOpt2}/${placeId}/${contentId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getOrderPriceOpt3 = async (id: string) => {
  const { data } = await ApiUtils.fetch<
    i.GetOrderPriceOpt3Request,
    AxiosResponse<i.GetOrderPriceOpt3Response>
  >(`${API_URL.getOrderPriceOpt3}/${id}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const createOrderPriceOpt3 = async (
  placeId: string,
  createInfo: i.CreateOrderPriceOpt3Request,
) => {
  const { data } = await ApiUtils.post<
    i.CreateOrderPriceOpt3Request,
    AxiosResponse<i.CreateOrderPriceOpt3Response>
  >(`${API_URL.createOrderPriceOpt3}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
export const updateOrderPriceOpt3 = async (
  placeId: string,
  updateInfo: i.UpdateOrderPriceOpt3Request,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateOrderPriceOpt3Request,
    AxiosResponse<i.UpdateOrderPriceOpt3Response>
  >(`${API_URL.updateOrderPriceOpt3}/${placeId}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
