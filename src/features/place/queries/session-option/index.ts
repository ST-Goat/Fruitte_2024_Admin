import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import * as hook from "../../hooks/session-option/session-option";
import * as api from "../../api/session-option";
import * as i from "../../types/session-option/api";
import * as fd from "@/lib/formatDate";

export const useGetSessionOptions = (placeId: string) => {
  const { setInfo } = hook.useSessionOptionStore();

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getSessionOptions"],
    queryFn: async () => {
      const info = await api.getSessionOptions(placeId);
      setInfo(info as i.SessionOptionTable[]);
      return info;
    },
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess };
};

export const useGetSessionOptionsBySessionId = () => {
  const { setInfo, sessionId } = hook.useSessionOptionStepStore();

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getSessionOptionsBySessionId", sessionId],
    queryFn: async () => {
      const info = await api.getSessionOptionsBySessionId(sessionId);
      setInfo(info as i.SessionOptionTable[]);
      return info;
    },
    staleTime: 0,
    gcTime: 0,
    enabled: !!sessionId,
  });

  return { data, isLoading, isError, isSuccess };
};

export const useCreateSessionOption = (placeId: string) => {
  const queryClient = useQueryClient();
  const {
    sessionId,
    optionId,
    maxSelectable,
    minRequired,
    totalStock,
    remainingStock,
  } = hook.useSessionOptionPopupStore();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const createdInfo = await api.createSessionOption(placeId, {
        sessionId: Number(sessionId),
        optionId: Number(optionId),
        maxSelectable: Number(maxSelectable),
        minRequired: Number(minRequired),
        totalStock: Number(totalStock),
        remainingStock: Number(remainingStock),
      });
      return createdInfo;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["getSessionOptions"] });
      toast.success("회차-티켓 생성이 완료되었습니다.");
    },
  });

  return { mutate, isError, isPending };
};

export const useUpdateSessionOption = (id: number, placeId: string) => {
  const queryClient = useQueryClient();
  const {
    sessionId,
    optionId,
    maxSelectable,
    minRequired,
    totalStock,
    remainingStock,
  } = hook.useSessionOptionPopupStore();
  const { info: SessionOptions } = hook.useSessionOptionStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const info = SessionOptions.find((item) => item.id === id);
      const updatedInfo = await api.updateSessionOption(id, {
        id: info?.id as number,
        sessionId: Number(sessionId),
        optionId: Number(optionId),
        step: info?.step as number,
        maxSelectable: Number(maxSelectable),
        minRequired: Number(minRequired),
        totalStock: Number(totalStock),
        remainingStock: Number(remainingStock),
      });

      return updatedInfo;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["getSessionOptions"] });
      toast.success("회차-티켓 수정이 완료되었습니다.");
    },
  });

  return { mutate, isError, isPending };
};

export const useDeleteSessionOption = (id: number) => {
  const queryClient = useQueryClient();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const deletedInfo = await api.deleteSessionOption(id);
      return deletedInfo;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getSessionOptions"] });
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

export const useGetOptionsForSelector = (placeId: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getOptionsForSelector"],
    queryFn: async () => {
      const info = await api.getOptionsForSelector(placeId);
      return info;
    },
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess };
};

export const useGetSessionsForOptionStepSelector = (placeId: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getSessionsForOptionStepSelector"],
    queryFn: async () => {
      const info = await api.getSessionsForOptionStepSelector(placeId);
      return info;
    },
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess };
};

export const useUpdateSessionOptionsStep = () => {
  const { info, sessionId } = hook.useSessionOptionStepStore();
  const queryClient = useQueryClient();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const sessionOptions = info.map((item) => {
        return {
          id: item.id,
          sessionId: item.sessionId,
          optionId: item.optionId,
          step: item.step,
          maxSelectable: item.maxSelectable,
          minRequired: item.minRequired,
          totalStock: item.totalStock,
          remainingStock: item.remainingStock,
        };
      });

      const updatedInfo = await api.updateSessionOptionStep(
        placeId,
        sessionOptions,
      );

      return updatedInfo;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["getSessionOptionsBySessionId", sessionId],
      });
      toast.success("노출 우선순위가 수정되었습니다");
    },
  });

  return { mutate, isError, isPending };
};
