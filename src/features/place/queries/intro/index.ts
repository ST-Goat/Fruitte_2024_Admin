import { useQuery, useMutation } from "@tanstack/react-query";
import { ResponseBody } from "@/constants/types";
import { toast } from "react-toastify";
import {
  usePlaceIntroOpt1DescStore,
  usePlaceIntroOpt2DetailStore,
  usePlaceIntroOpt2Store,
} from "../../hooks/placeIntro";
import {
  createIntroOpt1,
  getIntroOpt1,
  getIntroOpt2,
  getIntroOpt2Detail,
  updateIntroOpt1,
  updateIntroOpt2,
} from "../../api/intro";
import { mode } from "@/constants/types";
import { introOpt1, Opt2Info } from "../../types/intro/api";

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

export const useGetIntroOpt2 = (id: string) => {
  const setInfo = usePlaceIntroOpt2Store((state) => state.setInfo);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getIntroOpt2", id],
    queryFn: async () => {
      const info = await getIntroOpt2(id);
      setInfo(info?.info as Opt2Info[]);
      return info;
    },
    enabled: !!id,
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess };
};
export const useGetIntroOpt2Detail = (placeId: string, contentId: string) => {
  const setDescription = usePlaceIntroOpt2DetailStore(
    (state) => state.setDescription,
  );
  const setImages = usePlaceIntroOpt2DetailStore((state) => state.setImages);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getIntroOpt2Detail", placeId, contentId],
    queryFn: async () => {
      const info = await getIntroOpt2Detail(placeId, contentId);
      setDescription(info?.info.description as string);
      setImages(info?.info.img as string[]);
      return info?.info;
    },
    enabled: !!contentId,
    staleTime: 0,
    gcTime: 0,
  });

  console.log(data);

  return { data, isLoading, isError, isSuccess };
};
export const useCreateIntroOpt2 = () => {
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
export const useUpdateIntroOpt2 = (data: Opt2Info) => {
  const { description, images, setDescription, setImages } =
    usePlaceIntroOpt2DetailStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await updateIntroOpt2({
        placeId: data?.placeId,
        id: data.id,
        step: data.step,
        description,
        img: images,
      });
      return updatedInfo;
    },
    onSuccess: (data) => {
      toast.success("수정완료되었습니다");
      setDescription(data?.description as string);
      setImages(data?.img as string[]);
    },
  });

  return { mutate, isError, isPending };
};
