import { useQuery, useMutation } from "@tanstack/react-query";
import { ResponseBody } from "@/constants/types";
import { toast } from "react-toastify";
import { usePlaceIntroOpt1DescStore } from "../../hooks/placeIntro";
import {
  createIntroOpt1,
  getIntroOpt1,
  updateIntroOpt1,
} from "../../api/intro";
import { mode } from "@/constants/types";
import { introOpt1 } from "../../types/intro/api";

export const useGetIntroOpt1 = (id: string) => {
  const setInfo = usePlaceIntroOpt1DescStore((state) => state.setDescription);
  const setMode = usePlaceIntroOpt1DescStore((state) => state.setMode);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getIntroOpt1", id],
    queryFn: async () => {
      const info = await getIntroOpt1(id);
      setMode(info?.mode as mode);

      if (info?.mode === "update") {
        setInfo(info?.info.description as string);
      }

      return info;
    },
    enabled: !!id,
    staleTime: 0,
    gcTime: 0,
  });
  return { data, isLoading, isError, isSuccess };
};
export const useCreateIntroOpt1 = () => {
  const { description, setAll } = usePlaceIntroOpt1DescStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await createIntroOpt1(placeId, {
        placeId,
        description,
      });
      return updatedInfo;
    },
    onSuccess: (data) => {
      toast.success("최초설정이 완료되었습니다.");
      setAll(data?.description as string);
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateIntroOpt1 = () => {
  const { description, setAll } = usePlaceIntroOpt1DescStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await updateIntroOpt1(placeId, {
        placeId,
        description,
      });
      return updatedInfo;
    },
    onSuccess: (data) => {
      toast.success("수정완료되었습니다");
      setAll(data?.description as string);
    },
  });

  return { mutate, isError, isPending };
};
