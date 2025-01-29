import { ResponseBody } from "@/constants/types";

export interface introOpt1 {
  description: string;
}
export interface GetIntroOpt1Request {}
export interface GetIntroOpt1Response
  extends ResponseBody<{
    mode: "create" | "update";
    info: introOpt1;
  }> {}
export interface CreateIntroOpt1Request extends introOpt1 {
  placeId: string;
}
export interface CreateIntroOpt1Response
  extends ResponseBody<CreateIntroOpt1Request> {}
export interface UpdateIntroOpt1Request extends introOpt1 {
  placeId: string;
}
export interface UpdateIntroOpt1Response
  extends ResponseBody<UpdateIntroOpt1Request> {}
