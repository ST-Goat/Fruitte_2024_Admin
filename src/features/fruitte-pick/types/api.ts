import { ResponseBody } from "@/constants/types";

export interface FruittePick {
  id: number;
  step: number;
  thumbnail: string;
  writer: string;
  title: string;
  prologue: string;
  prologueImg: string;
  exposed: boolean;
  exposedTime: Date;
}

export interface FruittePickTable
  extends Omit<FruittePick, "thumbnail" | "prologue" | "prologueImg"> {}

export interface getFruittePicksRequest {}
export interface getFruittePicksResponse extends ResponseBody<FruittePick[]> {}

export interface getFruittePickRequest
  extends Omit<FruittePick, "thumbnail" | "prologueImg"> {
  thumbnail: string;
  prologueImg: string;
}
export interface getFruittePickResponse
  extends ResponseBody<getFruittePickRequest> {}

export interface createFruittePickRequest
  extends Omit<FruittePick, "id" | "thumbnail" | "prologueImg" | "step"> {
  thumbnail: string;
  prologueImg: string;
}
export interface createFruittePickResponse extends ResponseBody<FruittePick> {}

export interface updateFruittePickRequest
  extends Omit<FruittePick, "id" | "thumbnail" | "prologueImg"> {
  id: number;
  thumbnail: string;
  prologueImg: string;
}
export interface updateFruittePickResponse
  extends ResponseBody<updateFruittePickRequest> {}

export interface deleteFruittePickRequest {}
export interface deleteFruittePickResponse extends ResponseBody<{}> {}

export interface updateFruittePickStepRequest extends Array<FruittePick> {}
export interface updateFruittePickStepResponse
  extends ResponseBody<FruittePick[]> {}

export interface FruittePickIntro {
  pickId: number;
  id: number;
  step: number;
  placeId: number;
  title: string;
  prologue: string;
  ticket: Ticket[];
  option: Option[];
  program: Program[];
  exposed: boolean;
  date: Date;
}

export interface Ticket {
  title: string;
  price: number | string;
}
export interface Option {
  title: string;
  price: number | string;
}
export interface Program {
  title: string;
  img: string;
  description: string;
}

export interface FruittePickIntroTable
  extends Omit<
    FruittePickIntro,
    "prologue" | "prologueImg" | "ticket" | "option" | "program"
  > {}

export interface getFruittePickIntroListRequest {}
export interface getFruittePickIntroResponse
  extends ResponseBody<FruittePickIntro[]> {}

export interface getFruittePickIntroRequest {}
export interface getFruittePickIntroDetailResponse
  extends ResponseBody<FruittePickIntro> {}

export interface createFruittePickIntroRequest
  extends Omit<
    FruittePickIntro,
    "id" | "step" | "date" | "ticket" | "option" | "program"
  > {
  ticket: string;
  option: string;
  program: string;
}
export interface createFruittePickIntroResponse
  extends ResponseBody<FruittePickIntro> {}

export interface updateFruittePickIntroRequest
  extends Omit<FruittePickIntro, "ticket" | "option" | "program" | "date"> {
  ticket: string;
  option: string;
  program: string;
}
export interface updateFruittePickIntroResponse
  extends ResponseBody<FruittePickIntro> {}

export interface deleteFruittePickIntroRequest {}
export interface deleteFruittePickIntroResponse extends ResponseBody<{}> {}

export interface updateFruittePickIntroStepRequest
  extends Array<FruittePickIntro> {}
export interface updateFruittePickIntroStepResponse
  extends ResponseBody<FruittePickIntro[]> {}
