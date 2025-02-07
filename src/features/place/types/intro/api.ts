import { ResponseBody } from "@/constants/types";
import { mode } from "../api";
import { IdStepSet } from "@/lib/transformToIdStepSet";

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
export interface CreateIntroOpt2Request
  extends Omit<Opt2Info, "id" | "step" | "img"> {
  img: string;
}
export interface CreateIntroOpt2Response extends ResponseBody<Opt2Info> {}
export interface UpdateIntroOpt2Request extends Omit<Opt2Info, "img"> {
  img: string;
}
export interface UpdateIntroOpt2Response extends ResponseBody<Opt2Info> {}
export interface DeleteIntroOpt2Request {}
export interface DeleteIntroOpt2Response extends ResponseBody<{}> {}
export interface UpdateIntroOpt2StepRequest {
  info: Opt2Info[];
}
export interface UpdateIntroOpt2StepResponse extends ResponseBody<Opt2Info[]> {}

export interface Opt3Info {
  placeId: string;
  id: number;
  step: number;
  description: string;
  img: string[];
}
export interface GetIntroOpt3Request {}
export interface GetIntroOpt3Response extends ResponseBody<Opt3Info[]> {}
export interface GetIntroOpt3DetailRequest {}
export interface GetIntroOpt3DetailResponse extends ResponseBody<Opt3Info> {}
export interface CreateIntroOpt3Request
  extends Omit<Opt2Info, "id" | "step" | "img"> {
  img: string;
}
export interface CreateIntroOpt3Response extends ResponseBody<Opt3Info> {}
export interface UpdateIntroOpt3Request extends Omit<Opt3Info, "img"> {
  img: string;
}
export interface UpdateIntroOpt3Response extends ResponseBody<Opt3Info> {}
export interface DeleteIntroOpt3Request {}
export interface DeleteIntroOpt3Response extends ResponseBody<{}> {}
export interface UpdateIntroOpt3StepRequest {
  info: Opt3Info[];
}
export interface UpdateIntroOpt3StepResponse extends ResponseBody<Opt3Info[]> {}
