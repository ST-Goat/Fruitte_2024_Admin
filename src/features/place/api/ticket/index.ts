import ApiUtils from "@/lib/axiosInstanceAuth";
import { API_URL } from "@/constants/api";
import { AxiosResponse } from "axios";
import * as i from "../../types/ticket/api";

export const getTickets = async (placeId: string) => {
  const { data } = await ApiUtils.fetch<
    i.GetTicketsRequest,
    AxiosResponse<i.GetTicketsResponse>
  >(`${API_URL.getTickets}/${placeId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const createTicket = async (
  placeId: string,
  createInfo: i.CreateTicketRequest,
) => {
  const { data } = await ApiUtils.post<
    i.CreateTicketRequest,
    AxiosResponse<i.CreateTicketResponse>
  >(`${API_URL.createTicket}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const updateTicket = async (
  id: number,
  updateInfo: i.UpdateTicketRequest,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateTicketRequest,
    AxiosResponse<i.UpdateTicketResponse>
  >(`${API_URL.updateTicket}/${id}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const deleteTicket = async (id: number) => {
  const { data } = await ApiUtils.patch<
    i.DeleteTicketRequest,
    AxiosResponse<i.DeleteTicketResponse>
  >(`${API_URL.deleteTicket}/${id}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
