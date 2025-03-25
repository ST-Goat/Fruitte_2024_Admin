import { ResponseBody } from "@/constants/types";

export interface SessionTicket {
  id: number;
  sessionId: number;
  ticketId: number;
  step: number;
  maxSelectable: number;
  minRequired: number;
  stockThreshold: number;
  totalStock: number;
  remainingStock: number;
}

export interface SessionTicketTable extends SessionTicket {
  ticket: string;
  sessionDate: Date;
  sessionTime: Date;
}

export interface GetSessionTicketsRequest {}
export interface GetSessionTicketsResponse
  extends ResponseBody<SessionTicket[]> {}

export interface GetSessionTicketRequest {}
export interface GetSessionTicketResponse extends ResponseBody<SessionTicket> {}

export interface CreateSessionTicketRequest
  extends Omit<SessionTicket, "id" | "step"> {}
export interface CreateSessionTicketResponse
  extends ResponseBody<SessionTicket> {}

export interface UpdateSessionTicketRequest extends SessionTicket {}
export interface UpdateSessionTicketResponse
  extends ResponseBody<SessionTicket> {}

export interface DeleteSessionTicketRequest {}
export interface DeleteSessionTicketResponse extends ResponseBody<{}> {}

export interface GetSessionsForSelectorRequest {}
export interface GetSessionsForSelectorResponse
  extends ResponseBody<
    { id: string; sessionTime: string; sessionDate: string }[]
  > {}

export interface GetTicketsForSelectorRequest {}
export interface GetTicketsForSelectorResponse
  extends ResponseBody<{ id: string; title: string }[]> {}
