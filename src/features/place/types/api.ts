import { ResponseBody } from "@/constants/types";
import { extend } from "dayjs";

export interface CreatePlaceRequest {
  partnerUsername: string;
  placeTitle: string;
}
export interface CreatePlaceResponse extends ResponseBody<{}> {}
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
export type mode = "create" | "update";
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
