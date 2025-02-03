import { ResponseBody } from "@/constants/types";
import { mode } from "../api";

export interface introOpt1 {
  description: string;
}
export interface GetIntroOpt1Request {}
export interface GetIntroOpt1Response
  extends ResponseBody<{
    mode: mode;
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

export interface Opt2Info {
  placeId: string;
  id: number;
  step: number;
  description: string;
  img: string[];
}
export interface GetIntroOpt2Request {}
export interface GetIntroOpt2Response
  extends ResponseBody<{
    info: Opt2Info[];
  }> {}
export interface GetIntroOpt2DetailRequest {}
export interface GetIntroOpt2DetailResponse
  extends ResponseBody<{
    info: Opt2Info;
  }> {}
export interface UpdateIntroOpt2Request extends Opt2Info {
  placeId: string;
}
export interface UpdateIntroOpt2Response
  extends ResponseBody<UpdateIntroOpt2Request> {}
