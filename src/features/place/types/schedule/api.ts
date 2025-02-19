import { ResponseBody } from "@/constants/types";
import { mode } from "../api";

export interface ScheduleOpt1 {
  totalTime: number;
  dateAndTime: string;
  rainyProceeding: boolean;
}
export interface GetScheduleOpt1Request {}
export interface GetScheduleOpt1Response
  extends ResponseBody<{
    mode: mode;
    info: ScheduleOpt1;
  }> {}
export interface CreateScheduleOpt1Request extends ScheduleOpt1 {
  placeId: string;
}
export interface CreateScheduleOpt1Response
  extends ResponseBody<{
    mode: mode;
    info: ScheduleOpt1;
  }> {}
export interface UpdateScheduleOpt1Request extends ScheduleOpt1 {
  placeId: string;
}
export interface UpdateScheduleOpt1Response
  extends ResponseBody<{
    mode: mode;
    info: ScheduleOpt1;
  }> {}

export interface Opt2Info {
  placeId: string;
  id: number;
  step: number;
  title: string;
  description: string;
  time: number;
  notices: string[];
}
export interface GetScheduleOpt2Request {}
export interface GetScheduleOpt2Response extends ResponseBody<Opt2Info[]> {}
export interface GetScheduleOpt2DetailRequest {}
export interface GetScheduleOpt2DetailResponse extends ResponseBody<Opt2Info> {}
export interface CreateScheduleOpt2Request
  extends Omit<Opt2Info, "id" | "step" | "notices"> {
  placeId: string;
  notices: string;
}
export interface CreateScheduleOpt2Response extends ResponseBody<Opt2Info> {}
export interface UpdateScheduleOpt2Request
  extends Omit<Opt2Info, "id" | "placeId" | "notices"> {
  placeId: string;
  id: number;
  notices: string;
}
export interface UpdateScheduleOpt2Response extends ResponseBody<Opt2Info> {}
export interface DeleteScheduleOpt2Request {}
export interface DeleteScheduleOpt2Response extends ResponseBody<{}> {}
export interface UpdateScheduleOpt2StepRequest {
  info: Opt2Info[];
}
export interface UpdateScheduleOpt2StepResponse
  extends ResponseBody<Opt2Info[]> {}

export interface ScheduleOpt3 {
  placeText: string;
  region: string;
  address: string;
  lat: string;
  long: string;
}
export interface GetScheduleOpt3Request {}
export interface GetScheduleOpt3Response
  extends ResponseBody<{
    mode: mode;
    info: ScheduleOpt3;
  }> {}
export interface CreateScheduleOpt3Request
  extends Omit<ScheduleOpt3, "lat" | "long"> {
  placeId: string;
  lat: number;
  long: number;
}
export interface CreateScheduleOpt3Response
  extends ResponseBody<{
    mode: mode;
    info: ScheduleOpt3;
  }> {}
export interface UpdateScheduleOpt3Request
  extends Omit<ScheduleOpt3, "lat" | "long"> {
  placeId: string;
  lat: number;
  long: number;
}
export interface UpdateScheduleOpt3Response
  extends ResponseBody<{
    mode: mode;
    info: ScheduleOpt3;
  }> {}

export interface Opt4Info {
  description: string;
  img: string[];
}
export interface GetScheduleOpt4Request {}
export interface GetScheduleOpt4Response
  extends ResponseBody<{
    mode: mode;
    info: { description: string[]; img: string[] };
  }> {}
export interface CreateScheduleOpt4Request extends Omit<Opt4Info, "img"> {
  placeId: string;
  img: string;
}
export interface CreateScheduleOpt4Response extends ResponseBody<Opt4Info> {
  placeId: string;
}
export interface UpdateScheduleOpt4Request extends Omit<Opt4Info, "img"> {
  placeId: string;
  img: string;
}
export interface UpdateScheduleOpt4Response extends ResponseBody<Opt4Info> {
  placeId: string;
}

export interface Opt5Info {
  description: string;
  img: string[];
}
export interface GetScheduleOpt5Request {}
export interface GetScheduleOpt5Response
  extends ResponseBody<{
    mode: mode;
    info: { description: string[]; img: string[] };
  }> {}
export interface CreateScheduleOpt5Request extends Omit<Opt5Info, "img"> {
  placeId: string;
  img: string;
}
export interface CreateScheduleOpt5Response extends ResponseBody<Opt4Info> {
  placeId: string;
}
export interface UpdateScheduleOpt5Request extends Omit<Opt5Info, "img"> {
  placeId: string;
  img: string;
}
export interface UpdateScheduleOpt5Response extends ResponseBody<Opt5Info> {
  placeId: string;
}

export interface Opt6Info {
  description: string;
}
export interface GetScheduleOpt6Request {}
export interface GetScheduleOpt6Response
  extends ResponseBody<{
    mode: mode;
    info: { description: string[] };
  }> {}
export interface CreateScheduleOpt6Request extends Opt6Info {
  placeId: string;
}
export interface CreateScheduleOpt6Response
  extends ResponseBody<CreateScheduleOpt6Request> {}
export interface UpdateScheduleOpt6Request extends Opt6Info {
  placeId: string;
}
export interface UpdateScheduleOpt6Response
  extends ResponseBody<UpdateScheduleOpt6Request> {}
