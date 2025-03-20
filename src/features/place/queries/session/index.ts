import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import * as hook from "../../hooks/session/session";
import * as api from "../../api/session";
import * as i from "../../types/session/api";
import * as fd from "@/lib/formatDate";

export const useGetSessions = (placeId: string) => {
  const { setInfo } = hook.useSessionStore();

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getSessions"],
    queryFn: async () => {
      const info = await api.getSessions(placeId);
      setInfo(info as i.Session[]);
      return info;
    },
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess };
};

export const useCreateSession = (placeId: string) => {
  const queryClient = useQueryClient();
  const {
    sessionMode,
    sessionDate,
    sessionTime,
    totalStock,
    remainingStock,
    exposed,
    setOpen,
  } = hook.useSessionPopupStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const createdInfo = await api.createSession(placeId, {
        placeId,
        mode: sessionMode,
        sessionDate: fd.formatDate(sessionDate),
        sessionTime: fd.formatTime(sessionTime),
        totalStock: Number(totalStock),
        remainingStock: Number(remainingStock),
        exposed,
      });
      return createdInfo;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["getSessions"] });
      toast.success("회차 생성이 완료되었습니다.");
      setOpen(false);
    },
  });

  return { mutate, isError, isPending };
};
