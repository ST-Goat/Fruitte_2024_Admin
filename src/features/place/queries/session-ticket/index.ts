import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import * as hook from "../../hooks/session-ticket/session-ticket";
import * as api from "../../api/session-ticket";
import * as i from "../../types/session-ticket/api";
import * as fd from "@/lib/formatDate";

export const useGetSessionTickets = (placeId: string) => {
  const { setInfo } = hook.useSessionTicketStore();

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getSessionTickets"],
    queryFn: async () => {
      const info = await api.getSessionTickets(placeId);
      setInfo(info as i.SessionTicketTable[]);
      return info;
    },
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess };
};

export const useGetSessionTicketsBySessionId = () => {
  const { setInfo, sessionId } = hook.useSessionTicketStepStore();

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getSessionTicketsBySessionId", sessionId],
    queryFn: async () => {
      const info = await api.getSessionTicketsBySessionId(sessionId);
      setInfo(info as i.SessionTicketTable[]);
      return info;
    },
    staleTime: 0,
    gcTime: 0,
    enabled: !!sessionId,
  });

  return { data, isLoading, isError, isSuccess };
};

export const useCreateSessionTicket = (placeId: string) => {
  const queryClient = useQueryClient();
  const {
    sessionId,
    ticketId,
    maxSelectable,
    minRequired,
    stockThreshold,
    totalStock,
    remainingStock,
  } = hook.useSessionTicketPopupStore();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const createdInfo = await api.createSessionTicket(placeId, {
        sessionId: Number(sessionId),
        ticketId: Number(ticketId),
        maxSelectable: Number(maxSelectable),
        minRequired: Number(minRequired),
        stockThreshold: Number(stockThreshold),
        totalStock: Number(totalStock),
        remainingStock: Number(remainingStock),
      });
      return createdInfo;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["getSessionTickets"] });
      toast.success("회차-티켓 생성이 완료되었습니다.");
    },
  });

  return { mutate, isError, isPending };
};

export const useUpdateSessionTicket = (id: number, placeId: string) => {
  const queryClient = useQueryClient();
  const {
    sessionId,
    ticketId,
    maxSelectable,
    minRequired,
    stockThreshold,
    totalStock,
    remainingStock,
  } = hook.useSessionTicketPopupStore();
  const { info: SessionTickets } = hook.useSessionTicketStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const info = SessionTickets.find((item) => item.id === id);
      const updatedInfo = await api.updateSessionTicket(id, {
        id: info?.id as number,
        sessionId: Number(sessionId),
        ticketId: Number(ticketId),
        step: info?.step as number,
        maxSelectable: Number(maxSelectable),
        minRequired: Number(minRequired),
        stockThreshold: Number(stockThreshold),
        totalStock: Number(totalStock),
        remainingStock: Number(remainingStock),
      });

      return updatedInfo;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["getSessionTickets"] });
      toast.success("회차-티켓 수정이 완료되었습니다.");
    },
  });

  return { mutate, isError, isPending };
};

export const useDeleteSessionTicket = (id: number) => {
  const queryClient = useQueryClient();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const deletedInfo = await api.deleteSessionTicket(id);
      return deletedInfo;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getSessionTickets"] });
      toast.success("회차-티켓 삭제완료");
    },
    onError: (error) => {
      toast.error("삭제에 실패했습니다.");
    },
  });

  return { mutate, isError, isPending };
};

export const useGetSessionsForSelector = (placeId: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getSessionsForSelector"],
    queryFn: async () => {
      const info = await api.getSessionsForSelector(placeId);
      return info;
    },
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess };
};

export const useGetTicketsForSelector = (placeId: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getTicketsForSelector"],
    queryFn: async () => {
      const info = await api.getTicketsForSelector(placeId);
      return info;
    },
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess };
};

export const useGetSessionsForStepSelector = (placeId: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getSessionsForStepSelector"],
    queryFn: async () => {
      const info = await api.getSessionsForStepSelector(placeId);
      return info;
    },
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess };
};

export const useUpdateSessionTicketsStep = () => {
  const { info, sessionId } = hook.useSessionTicketStepStore();
  const queryClient = useQueryClient();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const sessionTickets = info.map((item) => {
        return {
          id: item.id,
          sessionId: item.sessionId,
          ticketId: item.ticketId,
          step: item.step,
          maxSelectable: item.maxSelectable,
          minRequired: item.minRequired,
          stockThreshold: item.stockThreshold,
          totalStock: item.totalStock,
          remainingStock: item.remainingStock,
        };
      });

      const updatedInfo = await api.updateSessionTicketStep(
        placeId,
        sessionTickets,
      );

      return updatedInfo;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["getSessionTicketsBySessionId", sessionId],
      });
      toast.success("노출 우선순위가 수정되었습니다");
    },
  });

  return { mutate, isError, isPending };
};
