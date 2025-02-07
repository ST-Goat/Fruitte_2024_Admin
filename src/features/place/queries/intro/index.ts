import { useQuery, useMutation } from "@tanstack/react-query";
import { ResponseBody } from "@/constants/types";
import { toast } from "react-toastify";
import {
  usePlaceIntroOpt1DescStore,
  usePlaceIntroOpt2CreateStore,
  usePlaceIntroOpt2DetailStore,
  usePlaceIntroOpt2Store,
  usePlaceIntroOpt3CreateStore,
  usePlaceIntroOpt3DetailStore,
  usePlaceIntroOpt3Store,
} from "../../hooks/placeIntro";
import {
  createIntroOpt1,
  createIntroOpt2,
  createIntroOpt3,
  deleteIntroOpt2,
  deleteIntroOpt3,
  getIntroOpt1,
  getIntroOpt2,
  getIntroOpt2Detail,
  getIntroOpt3,
  getIntroOpt3Detail,
  updateIntroOpt1,
  updateIntroOpt2,
  updateIntroOpt2Step,
  updateIntroOpt3,
  updateIntroOpt3Step,
} from "../../api/intro";
import { mode } from "@/constants/types";
import { introOpt1, Opt2Info, Opt3Info } from "../../types/intro/api";
import { useRouter } from "next/navigation";
import { transform } from "next/dist/build/swc";
import { transformToIdStepSet } from "@/lib/transformToIdStepSet";

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

export const useGetIntroOpt2 = (placeId: string) => {
  const setInfo = usePlaceIntroOpt2Store((state) => state.setInfo);

  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ["getIntroOpt2", placeId],
    queryFn: async () => {
      const info = await getIntroOpt2(placeId);
      setInfo(info?.info as Opt2Info[]);
      return info;
    },
    enabled: !!placeId,
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess, refetch };
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

  return { data, isLoading, isError, isSuccess };
};
export const useCreateIntroOpt2 = () => {
  const router = useRouter();
  const { description, images } = usePlaceIntroOpt2CreateStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const createdInfo = await createIntroOpt2(placeId, {
        placeId,
        description: description,
        img: JSON.stringify(images),
      });
      return createdInfo;
    },
    onSuccess: (data) => {
      toast.success("컨텐츠가 생성되었습니다.");
      router.push(`/place/detail/${data?.placeId}/intro/opt-2`);
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateIntroOpt2 = (data: Opt2Info) => {
  const { description, images, setDescription, setImages } =
    usePlaceIntroOpt2DetailStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const updatedInfo = await updateIntroOpt2({
        placeId: data?.placeId,
        id: data.id,
        step: data.step,
        description,
        img: JSON.stringify(images),
      });

      return updatedInfo;
    },
    onSuccess: (data) => {
      setDescription(data?.description as string);
      setImages(data?.img as string[]);
      toast.success("수정완료되었습니다");
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateIntroOpt2Step = () => {
  const { info } = usePlaceIntroOpt2Store();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await updateIntroOpt2Step(placeId, {
        info,
      });

      return updatedInfo;
    },
    onSuccess: (data) => {
      toast.success("노출 우선순위가 수정되었습니다");
    },
  });

  return { mutate, isError, isPending };
};
export const useDeleteIntroOpt2 = (placeId: string, contentId: number) => {
  const { info, setInfo } = usePlaceIntroOpt2Store(); // info와 setInfo를 불러옵니다.

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const deletedInfo = await deleteIntroOpt2(placeId, contentId);
      return deletedInfo;
    },
    onSuccess: () => {
      toast.success("해당 컨텐츠가 삭제되었습니다.");

      // 기존 info를 필터링한 새로운 배열 생성
      const updatedInfo = info.filter((item) => item.id !== contentId);

      // 새로운 배열로 setInfo 호출
      setInfo(updatedInfo);
    },
    onError: (error) => {
      toast.error("삭제에 실패했습니다.");
    },
  });

  return { mutate, isError, isPending };
};

export const useGetIntroOpt3 = (placeId: string) => {
  const setInfo = usePlaceIntroOpt3Store((state) => state.setInfo);

  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ["getIntroOpt3", placeId],
    queryFn: async () => {
      const info = await getIntroOpt3(placeId);
      setInfo(info as Opt3Info[]);
      return info;
    },
    enabled: !!placeId,
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess, refetch };
};
export const useGetIntroOpt3Detail = (placeId: string, contentId: string) => {
  const setDescription = usePlaceIntroOpt3DetailStore(
    (state) => state.setDescription,
  );
  const setImages = usePlaceIntroOpt3DetailStore((state) => state.setImages);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getIntroOpt3Detail", placeId, contentId],
    queryFn: async () => {
      const info = await getIntroOpt3Detail(placeId, contentId);
      setDescription(info?.description as string);
      setImages(info?.img as string[]);
      return info;
    },
    enabled: !!contentId,
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess };
};
export const useCreateIntroOpt3 = () => {
  const router = useRouter();
  const { description, images } = usePlaceIntroOpt3CreateStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const createdInfo = await createIntroOpt3(placeId, {
        placeId,
        description: description,
        img: JSON.stringify(images),
      });
      return createdInfo;
    },
    onSuccess: (data) => {
      toast.success("컨텐츠가 생성되었습니다.");
      router.push(`/place/detail/${data?.placeId}/intro/opt-3`);
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateIntroOpt3 = (data: Opt2Info) => {
  const { description, images, setDescription, setImages } =
    usePlaceIntroOpt3DetailStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const updatedInfo = await updateIntroOpt3({
        placeId: data?.placeId,
        id: data.id,
        step: data.step,
        description,
        img: JSON.stringify(images),
      });

      return updatedInfo;
    },
    onSuccess: (data) => {
      setDescription(data?.description as string);
      setImages(data?.img as string[]);
      toast.success("수정완료되었습니다");
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateIntroOpt3Step = () => {
  const { info } = usePlaceIntroOpt3Store();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await updateIntroOpt3Step(placeId, {
        info,
      });

      return updatedInfo;
    },
    onSuccess: (data) => {
      toast.success("노출 우선순위가 수정되었습니다");
    },
  });

  return { mutate, isError, isPending };
};
export const useDeleteIntroOpt3 = (placeId: string, contentId: number) => {
  const { info, setInfo } = usePlaceIntroOpt3Store(); // info와 setInfo를 불러옵니다.

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const deletedInfo = await deleteIntroOpt3(placeId, contentId);
      return deletedInfo;
    },
    onSuccess: () => {
      toast.success("해당 컨텐츠가 삭제되었습니다.");

      // 기존 info를 필터링한 새로운 배열 생성
      const updatedInfo = info.filter((item) => item.id !== contentId);

      // 새로운 배열로 setInfo 호출
      setInfo(updatedInfo);
    },
    onError: (error) => {
      toast.error("삭제에 실패했습니다.");
    },
  });

  return { mutate, isError, isPending };
};
