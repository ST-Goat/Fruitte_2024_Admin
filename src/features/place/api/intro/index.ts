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
