import { ResponseBody } from "@/constants/types";

export interface Ticket {
  placeId: string;
  id: number;
  title: string;
  price: number;
}

export interface GetTicketsRequest {}
export interface GetTicketsResponse extends ResponseBody<Ticket[]> {}

export interface GetTicketRequest {}
export interface GetTicketResponse extends ResponseBody<Ticket> {}

export interface CreateTicketRequest extends Omit<Ticket, "id"> {}
export interface CreateTicketResponse extends ResponseBody<Ticket> {}

export interface UpdateTicketRequest extends Ticket {}
export interface UpdateTicketResponse extends ResponseBody<Ticket> {}

export interface DeleteTicketRequest {}
export interface DeleteTicketResponse extends ResponseBody<{}> {}
