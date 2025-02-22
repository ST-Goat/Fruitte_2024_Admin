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

export interface introOpt4 {
  description: string;
}
export interface GetIntroOpt4Request {}
export interface GetIntroOpt4Response
  extends ResponseBody<{
    mode: mode;
    info: string;
  }> {}
export interface CreateIntroOpt4Request extends introOpt4 {
  placeId: string;
}
export interface CreateIntroOpt4Response
  extends ResponseBody<{ placeId: string; description: string }> {}
export interface UpdateIntroOpt4Request extends introOpt4 {
  placeId: string;
}
export interface UpdateIntroOpt4Response
  extends ResponseBody<{ placeId: string; description: string }> {}

export interface Opt5Info {
  placeId: string;
  id: number;
  step: number;
  title: string;
  description: string;
  img: string[];
}
export interface GetIntroOpt5Request {}
export interface GetIntroOpt5Response extends ResponseBody<Opt5Info[]> {}
export interface GetIntroOpt5DetailRequest {}
export interface GetIntroOpt5DetailResponse extends ResponseBody<Opt5Info> {}
export interface CreateIntroOpt5Request
  extends Omit<Opt5Info, "id" | "step" | "img"> {
  placeId: string;
  img: string;
}
export interface CreateIntroOpt5Response extends ResponseBody<Opt5Info> {}
export interface UpdateIntroOpt5Request
  extends Omit<Opt5Info, "id" | "placeId" | "img"> {
  placeId: string;
  id: number;
  img: string;
}
export interface UpdateIntroOpt5Response extends ResponseBody<Opt5Info> {}
export interface DeleteIntroOpt5Request {}
export interface DeleteIntroOpt5Response extends ResponseBody<{}> {}
export interface UpdateIntroOpt5StepRequest {
  info: Opt5Info[];
}
export interface UpdateIntroOpt5StepResponse extends ResponseBody<Opt5Info[]> {}

export interface Opt6Info {
  placeId: string;
  id: number;
  step: number;
  title: string;
  description: string;
  img: string[];
}
export interface GetIntroOpt6Request {}
export interface GetIntroOpt6Response extends ResponseBody<Opt6Info[]> {}
export interface GetIntroOpt6DetailRequest {}
export interface GetIntroOpt6DetailResponse extends ResponseBody<Opt6Info> {}
export interface CreateIntroOpt6Request
  extends Omit<Opt6Info, "id" | "step" | "img"> {
  placeId: string;
  img: string;
}
export interface CreateIntroOpt6Response extends ResponseBody<Opt6Info> {}
export interface UpdateIntroOpt6Request
  extends Omit<Opt6Info, "id" | "placeId" | "img"> {
  placeId: string;
  id: number;
  img: string;
}
export interface UpdateIntroOpt6Response extends ResponseBody<Opt6Info> {}
export interface DeleteIntroOpt6Request {}
export interface DeleteIntroOpt6Response extends ResponseBody<{}> {}
export interface UpdateIntroOpt6StepRequest {
  info: Opt6Info[];
}
export interface UpdateIntroOpt6StepResponse extends ResponseBody<Opt6Info[]> {}

export interface introOpt7 {
  description: string;
}
export interface GetIntroOpt7Request {}
export interface GetIntroOpt7Response
  extends ResponseBody<{
    mode: mode;
    info: { description: string[] };
  }> {}
export interface CreateIntroOpt7Request extends introOpt7 {
  placeId: string;
}
export interface CreateIntroOpt7Response
  extends ResponseBody<CreateIntroOpt7Request> {}
export interface UpdateIntroOpt7Request extends introOpt7 {
  placeId: string;
}
export interface UpdateIntroOpt7Response
  extends ResponseBody<UpdateIntroOpt7Request> {}

export interface introOpt8 {
  title: string;
  description: string;
  img: string[];
}
export interface GetIntroOpt8Request {}
export interface GetIntroOpt8Response
  extends ResponseBody<{
    mode: mode;
    info: introOpt8;
  }> {}
export interface CreateIntroOpt8Request extends Omit<introOpt8, "img"> {
  placeId: string;
  img: string;
}
export interface CreateIntroOpt8Response extends ResponseBody<introOpt8> {}
export interface UpdateIntroOpt8Request extends Omit<introOpt8, "img"> {
  placeId: string;
  img: string;
}
export interface UpdateIntroOpt8Response extends ResponseBody<introOpt8> {}
