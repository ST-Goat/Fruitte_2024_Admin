import { useQuery, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import * as hook from "../../hooks/option/option";
import * as api from "../../api/option";
import * as i from "../../types/option/api";
import { useRouter } from "next/navigation";

export const useGetOptions = (placeId: string) => {
  const { setInfo } = hook.useOptionStore();

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getOptions"],
    queryFn: async () => {
      const info = await api.getOptions(placeId);
      setInfo(info as i.Option[]);
      return info;
    },
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess };
};

export const useCreateOption = (placeId: string) => {
  const { title, price, isRequired, setOpen } = hook.useOptionPopupStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const createdInfo = await api.createOption(placeId, {
        placeId,
        title,
        price: Number(price),
        isRequired,
      });
      return createdInfo;
    },
    onSuccess: (data) => {
      toast.success("티켓 생성이 완료되었습니다.");
      setOpen(false);
    },
  });

  return { mutate, isError, isPending };
};

export const useUpdateOption = (id: number, placeId: string) => {
  const { title, price, isRequired } = hook.useOptionPopupStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const updatedInfo = await api.updateOption(id, {
        placeId,
        id,
        title,
        price: Number(price),
        isRequired,
      });
      return updatedInfo;
    },
    onSuccess: (data) => {
      toast.success("티켓 수정이 완료되었습니다.");
    },
  });

  return { mutate, isError, isPending };
};

export const useDeleteOption = (id: number) => {
  const { info, setInfo } = hook.useOptionStore(); // info와 setInfo를 불러옵니다.

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const deletedInfo = await api.deleteOption(id);
      return deletedInfo;
    },
    onSuccess: () => {
      toast.success("티켓 삭제완료");

      // 기존 info를 필터링한 새로운 배열 생성
      const updatedInfo = info.filter((item) => item.id !== id);

      // 새로운 배열로 setInfo 호출
      setInfo(updatedInfo);
    },
    onError: (error) => {
      toast.error("삭제에 실패했습니다.");
    },
  });

  return { mutate, isError, isPending };
};
