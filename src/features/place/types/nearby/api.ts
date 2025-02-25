import { ResponseBody } from "@/constants/types";

export interface NearbyOpt1 {
  placeId: string;
  id: number;
  step: number;
  title: string;
  thumbnail: string;
  info: string;
  url: string;
  address: string;
  long: number;
  lat: number;
}
export interface GetNearbyOpt1Request {}
export interface GetNearbyOpt1Response extends ResponseBody<NearbyOpt1[]> {}
export interface GetNearbyOpt1DetailRequest {}
export interface GetNearbyOpt1DetailResponse
  extends ResponseBody<{
    info: NearbyOpt1;
  }> {}
export interface CreateNearbyOpt1Request
  extends Omit<NearbyOpt1, "id" | "step" | "thumbnail"> {
  thumbnail: string;
}
export interface CreateNearbyOpt1Response extends ResponseBody<NearbyOpt1> {}
export interface UpdateNearbyOpt1Request extends Omit<NearbyOpt1, "thumbnail"> {
  thumbnail: string;
}
export interface UpdateNearbyOpt1Response extends ResponseBody<NearbyOpt1> {}
export interface DeleteNearbyOpt1Request {}
export interface DeleteNearbyOpt1Response extends ResponseBody<{}> {}
export interface UpdateNearbyOpt1StepRequest {
  info: NearbyOpt1[];
}
export interface UpdateNearbyOpt1StepResponse
  extends ResponseBody<NearbyOpt1[]> {}
