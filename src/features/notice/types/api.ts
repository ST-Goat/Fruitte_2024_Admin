import { ResponseBody } from "@/constants/types";

export type NoticeType =
  | "congratulation"
  | "announcement" 
  | "notification"
  | "warning"
  | "security"
  | "star"

export interface Notice {
  step: number;
  id: number;
  type: NoticeType;
  title: string;
  content: string;
  exposed: boolean;
  date: Date;
}

export interface NoticeTable extends Omit<Notice, "content"> {
}

export interface GetNoticeRequest {}
export interface GetNoticeResponse extends ResponseBody<Notice[]> {}

export interface GetNoticeDetailRequest {}
export interface GetNoticeDetailResponse extends ResponseBody<Notice> {}

export interface CreateNoticeRequest extends Omit<Notice, "id" | "step" | "date"> {}
export interface CreateNoticeResponse extends ResponseBody<Notice> {}

export interface UpdateNoticeRequest extends Omit<Notice, "date"> {}
export interface UpdateNoticeResponse extends ResponseBody<Notice> {}

export interface DeleteNoticeRequest {}
export interface DeleteNoticeResponse extends ResponseBody<{}> {}

export interface UpdateNoticeStepRequest {
  notices: Notice[];
}
export interface UpdateNoticeStepResponse extends ResponseBody<Notice[]> {}
