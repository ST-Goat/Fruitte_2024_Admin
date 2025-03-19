import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import * as hook from "../../hooks/ticket/ticket";
import * as api from "../../api/ticket";
import * as i from "../../types/ticket/api";
import { useRouter } from "next/navigation";

export const useGetTickets = (placeId: string) => {
  const { setInfo } = hook.useTicketStore();

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getTickets"],
    queryFn: async () => {
      const info = await api.getTickets(placeId);
      setInfo(info as i.Ticket[]);
      return info;
    },
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess };
};

export const useCreateTicket = (placeId: string) => {
  const queryClient = useQueryClient();
  const { title, price, setOpen } = hook.useTicketPopupStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const createdInfo = await api.createTicket(placeId, {
        placeId,
        title,
        price: Number(price),
      });
      return createdInfo;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["getTickets"] });
      toast.success("티켓 생성이 완료되었습니다.");
      setOpen(false);
    },
  });

  return { mutate, isError, isPending };
};

export const useUpdateTicket = (id: number, placeId: string) => {
  const queryClient = useQueryClient();
  const { title, price, setOpen } = hook.useTicketPopupStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const updatedInfo = await api.updateTicket(id, {
        placeId,
        id,
        title,
        price: Number(price),
      });

      return updatedInfo;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["getTickets"] });
      toast.success("티켓 수정이 완료되었습니다.");
    },
  });

  return { mutate, isError, isPending };
};

export const useDeleteTicket = (id: number) => {
  const { info, setInfo } = hook.useTicketStore(); // info와 setInfo를 불러옵니다.
  const queryClient = useQueryClient();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const deletedInfo = await api.deleteTicket(id);
      return deletedInfo;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getTickets"] });
      toast.success("티켓 삭제완료");
    },
    onError: (error) => {
      toast.error("삭제에 실패했습니다.");
    },
  });

  return { mutate, isError, isPending };
};
