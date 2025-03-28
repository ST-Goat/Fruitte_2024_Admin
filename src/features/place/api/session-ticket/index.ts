import ApiUtils from "@/lib/axiosInstanceAuth";
import { API_URL } from "@/constants/api";
import { AxiosResponse } from "axios";
import * as i from "../../types/session-ticket/api";

export const getSessionTickets = async (placeId: string) => {
  const { data } = await ApiUtils.fetch<
    i.GetSessionTicketsRequest,
    AxiosResponse<i.GetSessionTicketsResponse>
  >(`${API_URL.getSessionTickets}/${placeId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getSessionTicketsBySessionId = async (sessionId: string) => {
  const { data } = await ApiUtils.fetch<
    i.GetSessionTicketsRequest,
    AxiosResponse<i.GetSessionTicketsResponse>
  >(`${API_URL.getSessionTicketsBySessionId}/${sessionId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const createSessionTicket = async (
  placeId: string,
  createInfo: i.CreateSessionTicketRequest,
) => {
  const { data } = await ApiUtils.post<
    i.CreateSessionTicketRequest,
    AxiosResponse<i.CreateSessionTicketResponse>
  >(`${API_URL.createSessionTicket}/${placeId}`, createInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const updateSessionTicket = async (
  id: number,
  updateInfo: i.UpdateSessionTicketRequest,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateSessionTicketRequest,
    AxiosResponse<i.UpdateSessionTicketResponse>
  >(`${API_URL.updateSessionTicket}/${id}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const deleteSessionTicket = async (id: number) => {
  const { data } = await ApiUtils.patch<
    i.DeleteSessionTicketRequest,
    AxiosResponse<i.DeleteSessionTicketResponse>
  >(`${API_URL.deleteSessionTicket}/${id}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getSessionsForSelector = async (placeId: string) => {
  const { data } = await ApiUtils.fetch<
    i.GetSessionsForSelectorRequest,
    AxiosResponse<i.GetSessionsForSelectorResponse>
  >(`${API_URL.getSessionsForSelector}/${placeId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getSessionsForStepSelector = async (placeId: string) => {
  const { data } = await ApiUtils.fetch<
    i.GetSessionsForStepSelectorRequest,
    AxiosResponse<i.GetSessionsForStepSelectorResponse>
  >(`${API_URL.getSessionsForStepSelector}/${placeId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const getTicketsForSelector = async (placeId: string) => {
  const { data } = await ApiUtils.fetch<
    i.GetTicketsForSelectorRequest,
    AxiosResponse<i.GetTicketsForSelectorResponse>
  >(`${API_URL.getTicketsForSelector}/${placeId}`);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};

export const updateSessionTicketStep = async (
  placeId: string,
  updateInfo: i.UpdateSessionTicketStepRequest,
) => {
  const { data } = await ApiUtils.patch<
    i.UpdateSessionTicketStepRequest,
    AxiosResponse<i.UpdateSessionTicketStepResponse>
  >(`${API_URL.updateSessionTicketStep}/${placeId}`, updateInfo);

  const { statusCode, msg, response } = data;

  if (statusCode === 200) {
    return response;
  }
};
