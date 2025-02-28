import { useQuery, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import * as hook from "../../hooks/placeIntro";
import * as api from "../../api/intro";
import * as i from "../../types/intro/api";
import { mode } from "@/constants/types";
import { useRouter } from "next/navigation";

export const useGetIntroOpt1 = (id: string) => {
  const setInfo = hook.usePlaceIntroOpt1DescStore(
    (state) => state.setDescription,
  );
  const setMode = hook.usePlaceIntroOpt1DescStore((state) => state.setMode);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getIntroOpt1", id],
    queryFn: async () => {
      const info = await api.getIntroOpt1(id);
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
  const { description, setAll } = hook.usePlaceIntroOpt1DescStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const createdInfo = await api.createIntroOpt1(placeId, {
        placeId,
        description,
      });
      return createdInfo;
    },
    onSuccess: (data) => {
      toast.success("최초설정이 완료되었습니다.");
      setAll(data?.description as string);
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateIntroOpt1 = () => {
  const { description, setAll } = hook.usePlaceIntroOpt1DescStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await api.updateIntroOpt1(placeId, {
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
  const setInfo = hook.usePlaceIntroOpt2Store((state) => state.setInfo);

  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ["getIntroOpt2", placeId],
    queryFn: async () => {
      const info = await api.getIntroOpt2(placeId);
      setInfo(info?.info as i.Opt2Info[]);
      return info;
    },
    enabled: !!placeId,
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess, refetch };
};
export const useGetIntroOpt2Detail = (placeId: string, contentId: string) => {
  const setDescription = hook.usePlaceIntroOpt2DetailStore(
    (state) => state.setDescription,
  );
  const setImages = hook.usePlaceIntroOpt2DetailStore(
    (state) => state.setImages,
  );

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getIntroOpt2Detail", placeId, contentId],
    queryFn: async () => {
      const info = await api.getIntroOpt2Detail(placeId, contentId);
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
  const { description, images, reset } = hook.usePlaceIntroOpt2CreateStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const createdInfo = await api.createIntroOpt2(placeId, {
        placeId,
        description: description,
        img: JSON.stringify(images),
      });
      return createdInfo;
    },
    onSuccess: (data) => {
      toast.success("컨텐츠가 생성되었습니다.");
      reset();
      router.push(`/place/detail/${data?.placeId}/intro/opt-2`);
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateIntroOpt2 = (data: i.Opt2Info) => {
  const { description, images, setDescription, setImages } =
    hook.usePlaceIntroOpt2DetailStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const updatedInfo = await api.updateIntroOpt2({
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
  const { info } = hook.usePlaceIntroOpt2Store();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await api.updateIntroOpt2Step(placeId, {
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
  const { info, setInfo } = hook.usePlaceIntroOpt2Store(); // info와 setInfo를 불러옵니다.

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const deletedInfo = await api.deleteIntroOpt2(placeId, contentId);
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
  const setInfo = hook.usePlaceIntroOpt3Store((state) => state.setInfo);

  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ["getIntroOpt3", placeId],
    queryFn: async () => {
      const info = await api.getIntroOpt3(placeId);
      setInfo(info as i.Opt3Info[]);
      return info;
    },
    enabled: !!placeId,
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess, refetch };
};
export const useGetIntroOpt3Detail = (placeId: string, contentId: string) => {
  const setDescription = hook.usePlaceIntroOpt3DetailStore(
    (state) => state.setDescription,
  );
  const setImages = hook.usePlaceIntroOpt3DetailStore(
    (state) => state.setImages,
  );

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getIntroOpt3Detail", placeId, contentId],
    queryFn: async () => {
      const info = await api.getIntroOpt3Detail(placeId, contentId);
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
  const { description, images, reset } = hook.usePlaceIntroOpt3CreateStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const createdInfo = await api.createIntroOpt3(placeId, {
        placeId,
        description: description,
        img: JSON.stringify(images),
      });
      return createdInfo;
    },
    onSuccess: (data) => {
      toast.success("컨텐츠가 생성되었습니다.");
      reset();
      router.push(`/place/detail/${data?.placeId}/intro/opt-3`);
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateIntroOpt3 = (data: i.Opt2Info) => {
  const { description, images, setDescription, setImages } =
    hook.usePlaceIntroOpt3DetailStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const updatedInfo = await api.updateIntroOpt3({
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
  const { info } = hook.usePlaceIntroOpt3Store();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await api.updateIntroOpt3Step(placeId, {
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
  const { info, setInfo } = hook.usePlaceIntroOpt3Store(); // info와 setInfo를 불러옵니다.

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const deletedInfo = await api.deleteIntroOpt3(placeId, contentId);
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
export const useGetIntroOpt4 = (id: string) => {
  const setInfo = hook.usePlaceIntroOpt4DescStore((state) => state.setAll);
  const setMode = hook.usePlaceIntroOpt4DescStore((state) => state.setMode);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getIntroOpt4", id],
    queryFn: async () => {
      const data = await api.getIntroOpt4(id);
      setMode(data?.mode as mode);

      if (data?.mode === "update") {
        // 배열을 줄바꿈된 문자열로 변환하여 저장
        setInfo(data?.info);
      }

      return data;
    },
    enabled: !!id,
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess };
};
export const useCreateIntroOpt4 = () => {
  const { description, setAll } = hook.usePlaceIntroOpt4DescStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const createdInfo = await api.createIntroOpt4(placeId, {
        placeId,
        description,
      });
      return createdInfo;
    },
    onSuccess: (data) => {
      toast.success("최초설정이 완료되었습니다.");
      setAll(data?.description as string);
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateIntroOpt4 = () => {
  const { description, setAll } = hook.usePlaceIntroOpt4DescStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await api.updateIntroOpt4(placeId, {
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

export const useGetIntroOpt5 = (placeId: string) => {
  const setInfo = hook.usePlaceIntroOpt5Store((state) => state.setInfo);

  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ["getIntroOpt5", placeId],
    queryFn: async () => {
      const info = await api.getIntroOpt5(placeId);

      setInfo(info as i.Opt5Info[]);
      return info;
    },
    enabled: !!placeId,
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess, refetch };
};
export const useGetIntroOpt5Detail = (placeId: string, contentId: string) => {
  const setTitle = hook.usePlaceIntroOpt5DetailStore((state) => state.setTitle);
  const setDescription = hook.usePlaceIntroOpt5DetailStore(
    (state) => state.setDescription,
  );
  const setImages = hook.usePlaceIntroOpt5DetailStore(
    (state) => state.setImages,
  );

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getIntroOpt5Detail", placeId, contentId],
    queryFn: async () => {
      const info = await api.getIntroOpt5Detail(placeId, contentId);
      setTitle(info?.title as string);
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
export const useCreateIntroOpt5 = () => {
  const router = useRouter();
  const { description, title, images, reset } = hook.usePlaceIntroOpt5CreateStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const createdInfo = await api.createIntroOpt5(placeId, {
        placeId,
        title,
        description,
        img: JSON.stringify(images),
      });

      return createdInfo;
    },
    onSuccess: (data) => {
      toast.success("컨텐츠가 생성되었습니다.");
      reset();
      router.push(`/place/detail/${data?.placeId}/intro/opt-5`);
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateIntroOpt5Step = () => {
  const { info } = hook.usePlaceIntroOpt5Store();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await api.updateIntroOpt5Step(placeId, {
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

export const useDeleteIntroOpt5 = (placeId: string, contentId: number) => {
  const { info, setInfo } = hook.usePlaceIntroOpt5Store(); // info와 setInfo를 불러옵니다.

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const deletedInfo = await api.deleteIntroOpt5(placeId, contentId);
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
export const useUpdateIntroOpt5 = (data: i.Opt5Info) => {
  const { description, images, setDescription, setImages, title } =
    hook.usePlaceIntroOpt5DetailStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const updatedInfo = await api.updateIntroOpt5({
        placeId: data?.placeId,
        id: data.id,
        step: data.step,
        title,
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

export const useGetIntroOpt6 = (placeId: string) => {
  const setInfo = hook.usePlaceIntroOpt6Store((state) => state.setInfo);

  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ["getIntroOpt6", placeId],
    queryFn: async () => {
      const info = await api.getIntroOpt6(placeId);

      console.log(info);

      setInfo(info as i.Opt6Info[]);
      return info;
    },
    enabled: !!placeId,
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess, refetch };
};
export const useGetIntroOpt6Detail = (placeId: string, contentId: string) => {
  const setTitle = hook.usePlaceIntroOpt6DetailStore((state) => state.setTitle);
  const setDescription = hook.usePlaceIntroOpt6DetailStore(
    (state) => state.setDescription,
  );
  const setImages = hook.usePlaceIntroOpt6DetailStore(
    (state) => state.setImages,
  );

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getIntroOpt6Detail", placeId, contentId],
    queryFn: async () => {
      const info = await api.getIntroOpt6Detail(placeId, contentId);
      setTitle(info?.title as string);
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
export const useCreateIntroOpt6 = () => {
  const router = useRouter();
  const { description, title, images, reset } = hook.usePlaceIntroOpt6CreateStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const createdInfo = await api.createIntroOpt6(placeId, {
        placeId,
        title,
        description,
        img: JSON.stringify(images),
      });

      return createdInfo;
    },
    onSuccess: (data) => {
      toast.success("컨텐츠가 생성되었습니다.");
      reset();
      router.push(`/place/detail/${data?.placeId}/intro/opt-6`);
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateIntroOpt6Step = () => {
  const { info } = hook.usePlaceIntroOpt6Store();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await api.updateIntroOpt6Step(placeId, {
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

export const useDeleteIntroOpt6 = (placeId: string, contentId: number) => {
  const { info, setInfo } = hook.usePlaceIntroOpt6Store(); // info와 setInfo를 불러옵니다.

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const deletedInfo = await api.deleteIntroOpt6(placeId, contentId);
      return deletedInfo;
    },
    onSuccess: () => {
      toast.success("해당 옵션이 삭제되었습니다.");

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
export const useUpdateIntroOpt6 = (data: i.Opt5Info) => {
  const { description, images, setDescription, setImages, title } =
    hook.usePlaceIntroOpt6DetailStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const updatedInfo = await api.updateIntroOpt6({
        placeId: data?.placeId,
        id: data.id,
        step: data.step,
        title,
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

export const useGetIntroOpt7 = (id: string) => {
  const setDescription = hook.usePlaceIntroOpt7Store(
    (state) => state.setDescription,
  );
  const setMode = hook.usePlaceIntroOpt7Store((state) => state.setMode);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getIntroOpt7", id],
    queryFn: async () => {
      const data = await api.getIntroOpt7(id);
      setMode(data?.mode as mode);

      if (data?.mode === "update") {
        setDescription((data?.info.description as string[]).join("\n"));
      }

      return data;
    },
    enabled: !!id,
    staleTime: 0,
    gcTime: 0,
  });
  return { data, isLoading, isError, isSuccess };
};
export const useCreateIntroOpt7 = () => {
  const { description, setDescription } = hook.usePlaceIntroOpt7Store();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const createdInfo = await api.createIntroOpt7(placeId, {
        placeId,
        description: JSON.stringify(description.split("\n")),
      });
      return createdInfo;
    },
    onSuccess: (data) => {
      toast.success("최초설정이 완료되었습니다.");
      setDescription(JSON.parse(data?.description as string).join("\n"));
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateIntroOpt7 = () => {
  const { description, setDescription } = hook.usePlaceIntroOpt7Store();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await api.updateIntroOpt7(placeId, {
        placeId,
        description: JSON.stringify(description.split("\n")),
      });
      return updatedInfo;
    },
    onSuccess: (data) => {
      toast.success("수정완료되었습니다");
      setDescription(JSON.parse(data?.description as string).join("\n"));
    },
  });

  return { mutate, isError, isPending };
};

export const useGetIntroOpt8 = (id: string) => {
  const { setMode, setTitle, setDescription, setImages } =
    hook.usePlaceIntroOpt8Store();

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getIntroOpt8", id],
    queryFn: async () => {
      const data = await api.getIntroOpt8(id);
      setMode(data?.mode as mode);

      if (data?.mode === "update") {
        setTitle(data?.info.title as string);
        setDescription(data?.info.description as string);
        setImages(data?.info.img as string[]);
      }

      return data;
    },
    enabled: !!id,
    staleTime: 0,
    gcTime: 0,
  });
  return { data, isLoading, isError, isSuccess };
};
export const useCreateIntroOpt8 = () => {
  const store = hook.usePlaceIntroOpt8Store();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const createdInfo = await api.createIntroOpt8(placeId, {
        placeId,
        title: store.title,
        description: store.description,
        img:
          store.images.length > 0
            ? JSON.stringify(store.images)
            : JSON.stringify([]),
      });
      return createdInfo;
    },
    onSuccess: (data) => {
      toast.success("최초설정이 완료되었습니다.");
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateIntroOpt8 = () => {
  const store = hook.usePlaceIntroOpt8Store();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await api.updateIntroOpt8(placeId, {
        placeId,
        description: store.description,
        title: store.title,
        img:
          store.images.length > 0
            ? JSON.stringify(store.images)
            : JSON.stringify([]),
      });
      return updatedInfo;
    },
    onSuccess: (data) => {
      toast.success("수정완료되었습니다");
    },
  });

  return { mutate, isError, isPending };
};
