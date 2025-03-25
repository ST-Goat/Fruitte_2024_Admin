import { ResponseBody } from "@/constants/types";

export type sesssionMode = "session" | "ticket";

export interface Session {
  id: number;
  mode: sesssionMode;
  placeId: string;
  sessionDate: Date;
  sessionTime: Date;
  totalStock?: number;
  remainingStock?: number;
  exposed: boolean;
}

export interface SessionTable extends Omit<Session, "placeId"> {
  selection: boolean;
}

export interface GetSessionsRequest {}
export interface GetSessionsResponse extends ResponseBody<Session[]> {}

export interface CreateSessionRequest
  extends Omit<Session, "id" | "sessionDate" | "sessionTime"> {
  sessionDate: string;
  sessionTime: string;
}
export interface CreateSessionResponse extends ResponseBody<Session> {}

export interface CreateMultipleSessionRequest
  extends Array<CreateSessionRequest> {}
export interface CreateMultipleSessionResponse extends ResponseBody<Session> {}

export interface UpdateSessionRequest
  extends Omit<Session, "sessionDate" | "sessionTime"> {
  sessionDate: string;
  sessionTime: string;
}
export interface UpdateSessionResponse extends ResponseBody<Session> {}

export interface DeleteSessionRequest {}
export interface DeleteSessionResponse extends ResponseBody<{}> {}
