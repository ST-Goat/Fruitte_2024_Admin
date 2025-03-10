import { ResponseBody } from "@/constants/types";

export interface getPartnerListRequest {}
export interface getPartnerListResponse
  extends ResponseBody<{ username: string; nickname: string }[]> {}
