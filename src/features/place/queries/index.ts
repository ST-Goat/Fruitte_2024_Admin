import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getInfoOpt1,
  updateInfoOpt1,
  getInfoOpt3,
  createInfoOpt3,
  updateInfoOpt3,
} from "../api";
import {
  usePlaceInfoOpt1Store,
  usePlaceInfoOpt3Store,
} from "../hooks/placeInfo";
import { infoOpt1, infoOpt3, UpdateInfoOpt1Request, mode } from "../types/api";

export const useGetInfoOpt1 = (id: string) => {
  const setPlaceInfo = usePlaceInfoOpt1Store((state) => state.setPlaceInfoOpt1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getInfoOpt1", id],
    queryFn: async () => {
      const info = await getInfoOpt1(id);
      setPlaceInfo(info?.placeInfo as infoOpt1);
      return info;
    },
    enabled: !!id,
    staleTime: 0,
  });

  return { data, isLoading, isError };
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
      alert("수정완료되었습니다.");
      setPlaceInfoOpt1(data as infoOpt1);
    },
  });

  return { mutate, isError, isPending };
};

export const useGetInfoOpt3 = (id: string) => {
  const setInfo = usePlaceInfoOpt3Store((state) => state.setPlaceInfoOpt3);
  const setMode = usePlaceInfoOpt3Store((state) => state.setMode);

  const { data, isLoading, isError } = useQuery({
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
  });

  return { data, isLoading, isError };
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
      alert("수정완료되었습니다.");
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
    onSuccess: (data) => {
      alert("수정완료되었습니다.");
      setPlaceInfoOpt3(data as infoOpt3);
    },
  });

  return { mutate, isError, isPending };
};
