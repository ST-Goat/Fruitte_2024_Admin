import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getInfoOpt1,
  updateInfoOpt1,
  getInfoOpt3,
  createInfoOpt3,
  updateInfoOpt3,
  getInfoOpt4,
  createInfoOpt4,
  updateInfoOpt4,
  getInfoOpt5,
  createInfoOpt5,
  updateInfoOpt5,
  getInfoOpt6,
  createInfoOpt6,
  updateInfoOpt6,
  getInfoOpt2,
  createInfoOpt2,
  updateInfoOpt2,
  getPartners,
  createPlace,
  deletePlace,
  getPlaceList,
} from "../api";
import {
  filterValidSections,
  usePlaceCreateStore,
  usePlaceInfoOpt1Store,
  usePlaceInfoOpt2Store,
  usePlaceInfoOpt3Store,
  usePlaceInfoOpt4Store,
  usePlaceInfoOpt5Store,
  usePlaceInfoOpt6Store,
} from "../hooks/placeInfo";
import {
  infoOpt1,
  InfoOpt2,
  infoOpt3,
  infoOpt4,
  infoOpt6,
  mode,
} from "../types/api";
import { ResponseBody } from "@/constants/types";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export const useGetPartners = () => {
  const { data, isLoading, isError, isSuccess, error } = useQuery({
    queryKey: ["getPartners"],
    queryFn: async () => {
      const info = await getPartners();

      return info;
    },
    staleTime: 0,
    gcTime: 0,
    retry: 2,
  });

  const typedError = error as ResponseBody<any> | null;

  return { data, isLoading, isError, error: typedError, isSuccess };
};

export const useGetPlaceList = () => {
  const { data, isLoading, isError, isSuccess, error } = useQuery({
    queryKey: ["getPlaceList"],
    queryFn: async () => {
      const info = await getPlaceList();

      return info;
    },
    staleTime: 0,
    gcTime: 0,
    retry: 2,
  });

  const typedError = error as ResponseBody<any> | null;

  return { data, isLoading, isError, error: typedError, isSuccess };
};

export const useCreatePlace = () => {
  const router = useRouter();
  const { title, partnerUsername } = usePlaceCreateStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const createdInfo = await createPlace({
        title,
        partnerUsername,
      });
      return createdInfo;
    },
    onSuccess: (data) => {
      toast.success("생성완료되었습니다.");
      router.push(`/place/detail/${data?.id}/info/opt-1`);
    },
  });

  return { mutate, isError, isPending };
};
export const useDeletePlace = (placeId: string) => {
  const router = useRouter();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const updatedInfo = await deletePlace(placeId);
      return updatedInfo;
    },
    onSuccess: (data) => {
      toast.error("해당 프로그램이 삭제되었습니다.");
      router.push(`/place`);
    },
  });

  return { mutate, isError, isPending };
};

export const useGetInfoOpt1 = (id: string) => {
  const set = usePlaceInfoOpt1Store((state) => state.setPlaceInfoOpt1);
  const reset = usePlaceInfoOpt1Store((state) => state.resetPlaceInfoOpt1);

  const { data, isLoading, isError, isSuccess, error } = useQuery({
    queryKey: ["getInfoOpt1", id],
    queryFn: async () => {
      reset();
      const info = await getInfoOpt1(id);

      if (!info) {
        throw { message: "No data found", statusCode: 404, response: {} };
      }

      set(info?.placeInfo as infoOpt1);
      return info;
    },
    enabled: !!id,
    staleTime: 0,
    gcTime: 0,
    retry: 2,
  });

  const typedError = error as ResponseBody<any> | null;

  return { data, isLoading, isError, error: typedError, isSuccess };
};
export const useUpdateInfoOpt1 = () => {
  const { setPlaceInfoOpt1, title, partnerUsername, openDateTime, openStatus } =
    usePlaceInfoOpt1Store();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (id: string) => {
      const updatedInfo = await updateInfoOpt1(id, {
        id,
        title,
        partnerUsername,
        openDateTime,
        openStatus,
      });
      return updatedInfo;
    },
    onSuccess: (data) => {
      toast.success("수정완료되었습니다.");
      setPlaceInfoOpt1(data as infoOpt1);
    },
  });

  return { mutate, isError, isPending };
};

export const useGetInfoOpt2 = (id: string) => {
  const { setMainImgSrc, setSliderImgsSrc, setMode } = usePlaceInfoOpt2Store();

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getInfoOpt2", id],
    queryFn: async () => {
      const info = await getInfoOpt2(id);
      setMode(info?.mode as mode);
      console.log(info);

      if (info?.mode === "update") {
        setMainImgSrc([info?.info.mainImgSrc as string]);
        setSliderImgsSrc(info?.info.sliderImgsSrc as string[]);
      }

      return info;
    },
    enabled: !!id,
    staleTime: 0,
    gcTime: 0,
  });
  return { data, isLoading, isError, isSuccess };
};
export const useCreateInfoOpt2 = () => {
  const { mainImgSrc, sliderImgsSrc, setMainImgSrc, setSliderImgsSrc } =
    usePlaceInfoOpt2Store();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await createInfoOpt2(placeId, {
        placeId,
        sliderImgsSrc: JSON.stringify(sliderImgsSrc),
        mainImgSrc: mainImgSrc[0],
      });
      return updatedInfo;
    },
    onSuccess: (data) => {
      toast.success("최초설정이 완료되었습니다.");
      setMainImgSrc([data?.mainImgSrc as string]);
      setSliderImgsSrc(data?.sliderImgsSrc as string[]);
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateInfoOpt2 = () => {
  const { mainImgSrc, sliderImgsSrc, setMainImgSrc, setSliderImgsSrc } =
    usePlaceInfoOpt2Store();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await updateInfoOpt2(placeId, {
        placeId,
        sliderImgsSrc: JSON.stringify(sliderImgsSrc),
        mainImgSrc: mainImgSrc[0],
      });
      return updatedInfo;
    },
    onSuccess: (data) => {
      toast.success("수정완료되었습니다.");
    },
  });

  return { mutate, isError, isPending };
};

export const useGetInfoOpt3 = (id: string) => {
  const setInfo = usePlaceInfoOpt3Store((state) => state.setPlaceInfoOpt3);
  const setMode = usePlaceInfoOpt3Store((state) => state.setMode);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getInfoOpt3", id],
    queryFn: async () => {
      const info = await getInfoOpt3(id);
      setMode(info?.mode as mode);

      if (info?.mode === "update") {
        setInfo(info?.info as infoOpt3);
      }

      return info;
    },
    enabled: !!id,
    staleTime: 0,
    gcTime: 0,
  });
  return { data, isLoading, isError, isSuccess };
};
export const useCreateInfoOpt3 = () => {
  const {
    progressTime,
    indoorStatus,
    minimumPrice,
    pricePerPerson,
    youtubeLink,
    setPlaceInfoOpt3,
  } = usePlaceInfoOpt3Store();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await createInfoOpt3(placeId, {
        placeId,
        progressTime,
        indoorStatus,
        minimumPrice,
        pricePerPerson,
        youtubeLink,
      });
      return updatedInfo;
    },
    onSuccess: (data) => {
      toast.success("수정완료되었습니다.");
      setPlaceInfoOpt3(data as infoOpt3);
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateInfoOpt3 = () => {
  const {
    progressTime,
    indoorStatus,
    minimumPrice,
    pricePerPerson,
    youtubeLink,
    setPlaceInfoOpt3,
  } = usePlaceInfoOpt3Store();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await updateInfoOpt3(placeId, {
        placeId,
        progressTime,
        indoorStatus,
        minimumPrice,
        pricePerPerson,
        youtubeLink,
      });
      return updatedInfo;
    },
    onSuccess: async (data) => {
      toast.success("수정완료되었습니다.");
      setPlaceInfoOpt3(data as infoOpt3);
    },
  });

  return { mutate, isError, isPending };
};

export const useGetInfoOpt4 = (id: string) => {
  const setInfo = usePlaceInfoOpt4Store((state) => state.setAll);
  const setMode = usePlaceInfoOpt4Store((state) => state.setMode);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getInfoOpt4", id],
    queryFn: async () => {
      const info = await getInfoOpt4(id);
      setMode(info?.mode as mode);

      if (info?.mode === "update") {
        setInfo(info?.info as infoOpt4);
      }

      return info;
    },
    enabled: !!id,
    staleTime: 0,
    gcTime: 0,
  });
  return { data, isLoading, isError, isSuccess };
};
export const useCreateInfoOpt4 = () => {
  const { getAll, setAll } = usePlaceInfoOpt4Store();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      console.log(placeId);

      const updatedInfo = await createInfoOpt4(placeId, {
        placeId,
        ...getAll(),
      });
      return updatedInfo;
    },
    onSuccess: (data) => {
      toast.success("최초설정이 완료되었습니다.");
      setAll(data as infoOpt4);
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateInfoOpt4 = () => {
  const { getAll, setAll } = usePlaceInfoOpt4Store();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await updateInfoOpt4(placeId, {
        placeId,
        ...getAll(),
      });
      return updatedInfo;
    },
    onSuccess: (data) => {
      toast.success("수정완료되었습니다.");
      setAll(data as infoOpt4);
    },
  });

  return { mutate, isError, isPending };
};

export const useGetInfoOpt5 = (id: string) => {
  const setInfo = usePlaceInfoOpt5Store((state) => state.setInitialSections);
  const setMode = usePlaceInfoOpt5Store((state) => state.setMode);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getInfoOpt5", id],
    queryFn: async () => {
      const res = await getInfoOpt5(id);

      setMode(res?.mode as mode);

      if (res?.mode === "update") {
        setInfo(res?.info.sections as string[]);
      }

      return res;
    },
    enabled: !!id,
    staleTime: 0,
    gcTime: 0,
  });
  return { data, isLoading, isError, isSuccess };
};
export const useCreateInfoOpt5 = () => {
  const { getAll, setAll } = usePlaceInfoOpt5Store();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await createInfoOpt5(placeId, {
        sections: JSON.stringify(getAll()),
        placeId,
      });
      return updatedInfo;
    },
    onSuccess: (data) => {
      console.log(data);

      setAll(data?.sections as string[]);
      toast.success("수정완료되었습니다.");
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateInfoOpt5 = () => {
  const { getAll, setAll } = usePlaceInfoOpt5Store();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await updateInfoOpt5(placeId, {
        sections: JSON.stringify(getAll()),
        placeId,
      });
      return updatedInfo;
    },
    onSuccess: (data) => {
      console.log(data);

      setAll(data?.sections as string[]);
      toast.success("수정완료되었습니다.");
    },
  });

  return { mutate, isError, isPending };
};

export const useGetInfoOpt6 = (id: string) => {
  const setInfo = usePlaceInfoOpt6Store((state) => state.setAll);
  const setMode = usePlaceInfoOpt6Store((state) => state.setMode);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getInfoOpt6", id],
    queryFn: async () => {
      const info = await getInfoOpt6(id);
      setMode(info?.mode as mode);

      if (info?.mode === "update") {
        setInfo(info?.info as infoOpt6);
      }

      return info;
    },
    enabled: !!id,
    staleTime: 0,
    gcTime: 0,
  });
  return { data, isLoading, isError, isSuccess };
};
export const useCreateInfoOpt6 = () => {
  const { getAll, setAll } = usePlaceInfoOpt6Store();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await createInfoOpt6(placeId, {
        placeId,
        ...getAll(),
      });
      return updatedInfo;
    },
    onSuccess: (data) => {
      toast.success("최초설정이 완료되었습니다.");
      setAll(data as infoOpt6);
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateInfoOpt6 = () => {
  const { getAll, setAll } = usePlaceInfoOpt6Store();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await updateInfoOpt6(placeId, {
        placeId,
        ...getAll(),
      });
      return updatedInfo;
    },
    onSuccess: (data) => {
      toast.success("수정완료되었습니다.");
      setAll(data as infoOpt6);
    },
  });

  return { mutate, isError, isPending };
};
