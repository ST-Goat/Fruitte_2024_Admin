import { useQuery, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import * as hook from "../../hooks/placeSchedule";
import * as api from "../../api/schedule";
import * as i from "../../types/schedule/api";
import { mode } from "@/constants/types";
import { useRouter } from "next/navigation";

export const useGetScheduleOpt1 = (id: string) => {
  const setMode = hook.usePlaceScheduleOpt1Store((state) => state.setMode);
  const setTotalTime = hook.usePlaceScheduleOpt1Store(
    (state) => state.setTotalTime,
  );
  const setRainyProceeding = hook.usePlaceScheduleOpt1Store(
    (state) => state.setRainyProceeding,
  );
  const setDateAndTime = hook.usePlaceScheduleOpt1Store(
    (state) => state.setDateAndTime,
  );

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getScheduleOpt1", id],
    queryFn: async () => {
      const info = await api.getScheduleOpt1(id);
      setMode(info?.mode as mode);

      if (info?.mode === "update") {
        setTotalTime(String(info?.info.totalTime) as string);
        setRainyProceeding(info?.info.rainyProceeding as boolean);
        setDateAndTime(String(info?.info.dateAndTime) as string);
      }

      return info;
    },
    enabled: !!id,
    staleTime: 0,
    gcTime: 0,
  });
  return { data, isLoading, isError, isSuccess };
};
export const useCreateScheduleOpt1 = () => {
  const {
    totalTime,
    dateAndTime,
    rainyProceeding,
    setTotalTime,
    setDateAndTime,
    setRainyProceeding,
  } = hook.usePlaceScheduleOpt1Store();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const createdInfo = await api.createScheduleOpt1(placeId, {
        placeId,
        totalTime: Number(totalTime),
        dateAndTime: JSON.stringify(dateAndTime.split("\n")),
        rainyProceeding,
      });
      return createdInfo;
    },
    onSuccess: (data) => {
      setTotalTime(String(data?.info?.totalTime) as string);
      setDateAndTime(JSON.parse(data?.info?.dateAndTime as string).join("\n"));
      setRainyProceeding(data?.info?.rainyProceeding as boolean);
      toast.success("최초설정이 완료되었습니다.");
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateScheduleOpt1 = () => {
  const {
    totalTime,
    dateAndTime,
    rainyProceeding,
    setTotalTime,
    setDateAndTime,
    setRainyProceeding,
  } = hook.usePlaceScheduleOpt1Store();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await api.updateScheduleOpt1(placeId, {
        placeId,
        totalTime: Number(totalTime),
        dateAndTime,
        rainyProceeding,
      });
      return updatedInfo;
    },
    onSuccess: (data) => {
      setTotalTime(String(data?.info?.totalTime) as string);
      setDateAndTime(data?.info?.dateAndTime as string);
      setRainyProceeding(data?.info?.rainyProceeding as boolean);
      toast.success("수정완료되었습니다");
    },
  });

  return { mutate, isError, isPending };
};

export const useGetScheduleOpt2 = (placeId: string) => {
  const setInfo = hook.usePlaceScheduleOpt2Store((state) => state.setInfo);

  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ["getScheduleOpt2", placeId],
    queryFn: async () => {
      const info = await api.getScheduleOpt2(placeId);

      setInfo(info as i.Opt2Info[]);
      return info;
    },
    enabled: !!placeId,
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess, refetch };
};
export const useGetScheduleOpt2Detail = (
  placeId: string,
  contentId: string,
) => {
  const { setTitle, setDescription, setTime, setNotices } =
    hook.usePlaceScheduleOpt2DetailStore();

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getScheduleOpt2Detail", placeId, contentId],
    queryFn: async () => {
      const info = await api.getScheduleOpt2Detail(placeId, contentId);

      setTitle(info?.title as string);
      setDescription(info?.description as string);
      setTime(String(info?.time as number));
      setNotices((info?.notices as string[]).join("\n"));
      return info;
    },
    enabled: !!contentId,
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess };
};
export const useCreateScheduleOpt2 = () => {
  const router = useRouter();
  const { description, title, time, notices } =
    hook.usePlaceScheduleOpt2CreateStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const createdInfo = await api.createScheduleOpt2(placeId, {
        placeId,
        title,
        description,
        time: Number(time),
        notices: JSON.stringify(notices?.split("\n")),
      });

      return createdInfo;
    },
    onSuccess: (data) => {
      toast.success("컨텐츠가 생성되었습니다.");
      router.push(`/place/detail/${data?.placeId}/schedule/opt-2`);
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateScheduleOpt2Step = () => {
  const { info } = hook.usePlaceScheduleOpt2Store();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await api.updateScheduleOpt2Step(placeId, {
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

export const useDeleteScheduleOpt2 = (placeId: string, contentId: number) => {
  const { info, setInfo } = hook.usePlaceScheduleOpt2Store(); // info와 setInfo를 불러옵니다.

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const deletedInfo = await api.deleteScheduleOpt2(placeId, contentId);
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
export const useUpdateScheduleOpt2 = (data: i.Opt2Info) => {
  const {
    description,
    setDescription,
    title,
    setTitle,
    time,
    setTime,
    notices,
    setNotices,
  } = hook.usePlaceScheduleOpt2DetailStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const updatedInfo = await api.updateScheduleOpt2({
        placeId: data?.placeId,
        id: data.id,
        step: data.step,
        title,
        description,
        time: Number(time),
        notices: JSON.stringify(notices?.split("\n")),
      });

      return updatedInfo;
    },
    onSuccess: (data) => {
      setDescription(data?.description as string);
      setTitle(data?.title as string);
      setTime(String(data?.time as number));
      setNotices((data?.notices as string[]).join("\n"));
      toast.success("수정완료되었습니다");
    },
  });

  return { mutate, isError, isPending };
};
export const useGetScheduleOpt3 = (id: string) => {
  const { setMode, setAddress, setLat, setLong, setRegion, setPlaceText } =
    hook.usePlaceScheduleOpt3Store();

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getScheduleOpt3", id],
    queryFn: async () => {
      const info = await api.getScheduleOpt3(id);
      setMode(info?.mode as mode);

      if (info?.mode === "update") {
        setPlaceText(info?.info.placeText as string);
        setRegion(info?.info.region as string);
        setAddress(info?.info.address as string);
        setLat(String(info?.info.lat) as string);
        setLong(String(info?.info.long) as string);
      }

      return info;
    },
    enabled: !!id,
    staleTime: 0,
    gcTime: 0,
  });
  return { data, isLoading, isError, isSuccess };
};
export const useCreateScheduleOpt3 = () => {
  const {
    placeText,
    region,
    address,
    lat,
    long,
    setPlaceText,
    setRegion,
    setAddress,
    setLat,
    setLong,
  } = hook.usePlaceScheduleOpt3Store();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const createdInfo = await api.createScheduleOpt3(placeId, {
        placeId,
        placeText: placeText,
        region: region,
        address: address,
        lat: Number(lat),
        long: Number(long),
      });
      return createdInfo;
    },
    onSuccess: (data) => {
      setPlaceText(data?.info?.placeText as string);
      setRegion(data?.info?.region as string);
      setAddress(data?.info?.address as string);
      setLat(String(data?.info?.lat) as string);
      setLong(String(data?.info?.long) as string);
      toast.success("최초설정이 완료되었습니다.");
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateScheduleOpt3 = () => {
  const {
    placeText,
    region,
    address,
    lat,
    long,
    setPlaceText,
    setRegion,
    setAddress,
    setLat,
    setLong,
  } = hook.usePlaceScheduleOpt3Store();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await api.updateScheduleOpt3(placeId, {
        placeId,
        placeText: placeText,
        region: region,
        address: address,
        lat: Number(lat),
        long: Number(long),
      });
      return updatedInfo;
    },
    onSuccess: (data) => {
      setPlaceText(data?.info?.placeText as string);
      setRegion(data?.info?.region as string);
      setAddress(data?.info?.address as string);
      setLat(String(data?.info?.lat) as string);
      setLong(String(data?.info?.long) as string);
      toast.success("수정완료되었습니다");
    },
  });

  return { mutate, isError, isPending };
};
export const useGetScheduleOpt4 = (id: string) => {
  const { setMode, setDescription, setImages } =
    hook.usePlaceScheduleOpt4Store();
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getScheduleOpt4", id],
    queryFn: async () => {
      const data = await api.getScheduleOpt4(id);
      setMode(data?.mode as mode);

      if (data?.mode === "update") {
        setDescription((data?.info.description as string[]).join("\n"));
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
export const useCreateScheduleOpt4 = () => {
  const { description, setDescription, images, setImages } =
    hook.usePlaceScheduleOpt4Store();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const createdInfo = await api.createScheduleOpt4(placeId, {
        placeId,
        description: JSON.stringify(description.split("\n")),
        img: JSON.stringify(images),
      });
      return createdInfo;
    },
    onSuccess: (data) => {
      toast.success("최초설정이 완료되었습니다.");
      setDescription(JSON.parse(data?.description as string).join("\n"));
      setImages(data?.img as string[]);
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateScheduleOpt4 = () => {
  const { description, setDescription, images, setImages } =
    hook.usePlaceScheduleOpt4Store();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await api.updateScheduleOpt4(placeId, {
        placeId,
        description: JSON.stringify(description.split("\n")),
        img: JSON.stringify(images),
      });
      return updatedInfo;
    },
    onSuccess: (data) => {
      toast.success("수정완료되었습니다");
      setDescription(JSON.parse(data?.description as string).join("\n"));
      setImages(data?.img as string[]);
    },
  });

  return { mutate, isError, isPending };
};

export const useGetScheduleOpt5 = (id: string) => {
  const { setMode, setDescription, setImages } =
    hook.usePlaceScheduleOpt5Store();
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getScheduleOpt5", id],
    queryFn: async () => {
      const data = await api.getScheduleOpt5(id);
      setMode(data?.mode as mode);

      if (data?.mode === "update") {
        setDescription((data?.info.description as string[]).join("\n"));
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
export const useCreateScheduleOpt5 = () => {
  const { description, setDescription, images, setImages } =
    hook.usePlaceScheduleOpt5Store();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const createdInfo = await api.createScheduleOpt5(placeId, {
        placeId,
        description: JSON.stringify(description.split("\n")),
        img: JSON.stringify(images),
      });
      return createdInfo;
    },
    onSuccess: (data) => {
      toast.success("최초설정이 완료되었습니다.");
      setDescription(JSON.parse(data?.description as string).join("\n"));
      setImages(data?.img as string[]);
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateScheduleOpt5 = () => {
  const { description, setDescription, images, setImages } =
    hook.usePlaceScheduleOpt5Store();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await api.updateScheduleOpt5(placeId, {
        placeId,
        description: JSON.stringify(description.split("\n")),
        img: JSON.stringify(images),
      });
      return updatedInfo;
    },
    onSuccess: (data) => {
      toast.success("수정완료되었습니다");
      setDescription(JSON.parse(data?.description as string).join("\n"));
      setImages(data?.img as string[]);
    },
  });

  return { mutate, isError, isPending };
};

export const useGetScheduleOpt6 = (id: string) => {
  const setDescription = hook.usePlaceScheduleOpt6Store(
    (state) => state.setDescription,
  );
  const setMode = hook.usePlaceScheduleOpt6Store((state) => state.setMode);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getIntroOpt7", id],
    queryFn: async () => {
      const data = await api.getScheduleOpt6(id);
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
export const useCreateScheduleOpt6 = () => {
  const { description, setDescription } = hook.usePlaceScheduleOpt6Store();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const createdInfo = await api.createScheduleOpt6(placeId, {
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
export const useUpdateScheduleOpt6 = () => {
  const { description, setDescription } = hook.usePlaceScheduleOpt6Store();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await api.updateScheduleOpt6(placeId, {
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
