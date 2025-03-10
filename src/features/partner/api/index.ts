import ApiUtils from "@/lib/axiosInstanceAuth";
import { API_URL } from "@/constants/api";
import { AxiosResponse } from "axios";
import * as i from "../types/api";

export const getPartnerList = async () => {
  const { data } = await ApiUtils.fetch<
    i.getPartnerListRequest,
    AxiosResponse<i.getPartnerListResponse>
  >("/event/list");

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
