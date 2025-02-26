import { ResponseBody } from "@/constants/types";

export type NoticeType =
  | "congratulation"
  | "announcement"
  | "notification"
  | "warning"
  | "security"
  | "star";

export interface Notice {
  step: number;
  id: number;
  type: NoticeType;
  title: string;
  content: string;
  exposed: boolean;
  date: Date;
}

export interface NoticeTable extends Omit<Notice, "content"> {}
