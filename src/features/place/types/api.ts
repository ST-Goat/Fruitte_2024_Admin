import { ResponseBody } from "@/constants/types";

export type mode = "create" | "update";

export interface PlaceInfo {
  id: number;
  title: string;
  partnerUsername: string;
  openStatus: boolean;
  openDateTime: Date;
}

export interface UpdatePlaceInfoJsonRequest {}
export interface UpdatePlaceInfoJsonResponse extends ResponseBody<{}> {}

export interface GetPlaceListRequest {}
export interface GetPlaceListResponse extends ResponseBody<PlaceInfo[]> {}

export interface GetPartnersRequest {}
export interface GetPartnersResponse
  extends ResponseBody<{ username: string; nickname: string }[]> {}

export interface CreatePlaceRequest {
  partnerUsername: string;
  title: string;
}
export interface CreatePlaceResponse extends ResponseBody<{ id: string }> {}

export interface DeletePlaceRequest {}
export interface DeletePlaceResponse extends ResponseBody<{}> {}

export interface infoOpt1 {
  title: string;
  partnerUsername: string;
  openDateTime: Date;
  openStatus: boolean;
}
export interface GetInfoOpt1Request {}
export interface GetInfoOpt1Response
  extends ResponseBody<{
    placeInfo: infoOpt1;
    partners: { username: string; nickname: string }[];
  }> {}
export interface UpdateInfoOpt1Request {
  id: string;
  title: string;
  partnerUsername: string;
  openDateTime: Date;
  openStatus: boolean;
}
export interface UpdateInfoOpt1Response
  extends ResponseBody<UpdateInfoOpt1Request> {}
export interface RemoveInfoOpt1Request {}
export interface RemoveInfoOpt1Response extends ResponseBody<{}> {}

export interface InfoOpt2 {
  placeId: string;
  mainImgSrc: string;
  sliderImgsSrc: string[];
}
export interface GetInfoOpt2Request {}
export interface GetInfoOpt2Response
  extends ResponseBody<{ mode: mode; info: InfoOpt2 }> {}
export interface CreateInfoOpt2Request extends Omit<InfoOpt2, "sliderImgsSrc"> {
  sliderImgsSrc: string;
}
export interface CreateInfoOpt2Response extends ResponseBody<InfoOpt2> {}
export interface UpdateInfoOpt2Request extends Omit<InfoOpt2, "sliderImgsSrc"> {
  sliderImgsSrc: string;
}
export interface UpdateInfoOpt2Response extends ResponseBody<InfoOpt2> {}

export interface infoOpt3 {
  progressTime: string;
  indoorStatus: boolean;
  minimumPrice: string;
  pricePerPerson: string;
  youtubeLink: string;
}
export interface GetInfoOpt3Request {}
export interface GetInfoOpt3Response
  extends ResponseBody<{
    mode: "create" | "update";
    info: infoOpt3;
  }> {}
export interface CreateInfoOpt3Request extends infoOpt3 {
  placeId: string;
}
export interface CreateInfoOpt3Response
  extends ResponseBody<UpdateInfoOpt3Request> {}
export interface UpdateInfoOpt3Request extends infoOpt3 {
  placeId: string;
}
export interface UpdateInfoOpt3Response
  extends ResponseBody<UpdateInfoOpt3Request> {}

export type restroomStatus = "traditional" | "flush" | "none";
export type parkingStatus = "perfection" | "narrow" | "disable";
export type rainStatus = "progress" | "raincoat" | "disable";
export interface infoOpt4 {
  restroom: restroomStatus;
  parking: parkingStatus;
  babycar: boolean;
  pet: boolean;
  food: boolean;
  rain: rainStatus;
}
export interface GetInfoOpt4Request {}
export interface GetInfoOpt4Response
  extends ResponseBody<{
    mode: "create" | "update";
    info: infoOpt4;
  }> {}
export interface CreateInfoOpt4Request extends infoOpt4 {
  placeId: string;
}
export interface CreateInfoOpt4Response
  extends ResponseBody<UpdateInfoOpt4Request> {}
export interface UpdateInfoOpt4Request extends infoOpt4 {
  placeId: string;
}
export interface UpdateInfoOpt4Response
  extends ResponseBody<UpdateInfoOpt4Request> {}

export interface GetInfoOpt5Request {}
export interface GetInfoOpt5Response
  extends ResponseBody<{
    mode: "create" | "update";
    info: {
      placeId: number;
      sections: string[];
    };
  }> {}
export interface CreateInfoOpt5Request {
  sections: string;
  placeId: string;
}
export interface CreateInfoOpt5Response
  extends ResponseBody<{ placeId: string; sections: string[] }> {}
export interface UpdateInfoOpt5Request {
  sections: string;
  placeId: string;
}
export interface UpdateInfoOpt5Response
  extends ResponseBody<{ placeId: string; sections: string[] }> {}

export interface infoOpt6 {
  fruitte: boolean;
  new: boolean;
  eco: boolean;
}
export interface GetInfoOpt6Request {}
export interface GetInfoOpt6Response
  extends ResponseBody<{
    mode: "create" | "update";
    info: infoOpt6;
  }> {}
export interface CreateInfoOpt6Request extends infoOpt6 {
  placeId: string;
}
export interface CreateInfoOpt6Response
  extends ResponseBody<CreateInfoOpt6Request> {}
export interface UpdateInfoOpt6Request extends infoOpt6 {
  placeId: string;
}
export interface UpdateInfoOpt6Response
  extends ResponseBody<UpdateInfoOpt6Request> {}
