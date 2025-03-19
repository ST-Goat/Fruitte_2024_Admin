import { ResponseBody } from "@/constants/types";

export interface Option {
  placeId: string;
  id: number;
  title: string;
  price: number;
  isRequired: boolean;
}

export interface GetOptionsRequest {}
export interface GetOptionsResponse extends ResponseBody<Option[]> {}

export interface GetOptionRequest {}
export interface GetOptionResponse extends ResponseBody<Option> {}

export interface CreateOptionRequest extends Omit<Option, "id"> {}
export interface CreateOptionResponse extends ResponseBody<Option> {}

export interface UpdateOptionRequest extends Option {}
export interface UpdateOptionResponse extends ResponseBody<Option> {}

export interface DeleteOptionRequest {}
export interface DeleteOptionResponse extends ResponseBody<{}> {}
