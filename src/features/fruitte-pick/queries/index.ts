import { useQuery, useMutation } from "@tanstack/react-query";
import * as hook from "../hooks/fruittePick";
import * as api from "../api/index";
import * as i from "../types/api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export const useGetFruittePicks = () => {
  const { setFruittePicks } = hook.useFruittePicksStore();
  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ["getFruittePicks"],
    queryFn: async () => {
      const fruittePicks = await api.getFruittePicks();
      setFruittePicks(fruittePicks as i.FruittePick[]);

      return fruittePicks;
    },
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess, refetch };
};

export const useGetFruittePick = (id: string) => {
  const {
    setThumbnail,
    setTitle,
    setWriter,
    setPrologue,
    setPrologueImg,
    setExposed,
    setExposedTime,
  } = hook.useFruittePickDetailStore();

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getFruittePick", id],
    queryFn: async () => {
      const info = await api.getFruittePick(id);
      setThumbnail([info?.thumbnail as string]);
      setTitle(info?.title as string);
      setWriter(info?.writer as string);
      setPrologue(info?.prologue as string);
      setPrologueImg([info?.prologueImg as string]);
      setExposed(info?.exposed as boolean);
      setExposedTime(info?.exposedTime as Date);
      return info;
    },
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess };
};

export const useFruittePickCreate = () => {
  const router = useRouter();
  const {
    thumbnail,
    title,
    writer,
    prologue,
    prologueImg,
    exposed,
    exposedTime,
  } = hook.useFruittePickCreateStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const createdInfo = await api.createFruittePick({
        thumbnail: thumbnail[0],
        title,
        writer,
        prologue,
        prologueImg: prologueImg[0],
        exposed,
        exposedTime,
      });
      return createdInfo;
    },
    onSuccess: (data) => {
      toast.success("프룻 PICK 생성이 완료되었습니다.");
      router.push("/fruitte-pick");
    },
  });

  return { mutate, isError, isPending };
};

export const useFruittePickUpdateStore = (info: i.FruittePick) => {
  const {
    thumbnail,
    title,
    writer,
    prologue,
    prologueImg,
    exposed,
    exposedTime,
  } = hook.useFruittePickDetailStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const updatedInfo = await api.updateFruittePick({
        id: info.id,
        step: info.step,
        thumbnail: thumbnail[0],
        title,
        writer,
        prologue,
        prologueImg: prologueImg[0],
        exposed,
        exposedTime,
      });
      return updatedInfo;
    },
    onSuccess: (data) => {
      toast.success("프룻 PICK 수정이 완료되었습니다.");
    },
  });

  return { mutate, isError, isPending };
};

export const useRemoveFruittePick = (id: number) => {
  const { fruittePicks, setFruittePicks } = hook.useFruittePicksStore(); // info와 setInfo를 불러옵니다.

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const deletedInfo = await api.removeFruittePick(id);
      return deletedInfo;
    },
    onSuccess: () => {
      toast.success("프룻 PICK 삭제완료");

      // 기존 info를 필터링한 새로운 배열 생성
      const updatedInfo = fruittePicks.filter((item) => item.id !== id);

      // 새로운 배열로 setInfo 호출
      setFruittePicks(updatedInfo);
    },
    onError: (error) => {
      toast.error("삭제에 실패했습니다.");
    },
  });

  return { mutate, isError, isPending };
};

export const useUpdateFruittePickStep = () => {
  const { fruittePicks } = hook.useFruittePicksStore();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const updatedFruittePicks = await api.updateFruittePickStep(fruittePicks);

      toast.success("공개우선순위가 수정되었습니다");

      return updatedFruittePicks;
    },
    onError: (error) => {
      toast.error("수정에 실패했습니다.");
    },
  });

  return { mutate, isError, isPending };
};

export const useGetExposedFruittePicks = () => {
  const { setFruittePicks } = hook.useFruittePicksStore();

  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ["getExposedFruittePicks"],
    queryFn: async () => {
      const fruittePicks = await api.getExposedAllFruittePicks();
      setFruittePicks(fruittePicks as i.FruittePick[]);
      return fruittePicks;
    },
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess, refetch };
};

export const useGetFruittePickIntroList = (pickId: string) => {
  const { setFruittePickIntros } = hook.useFruittePickIntroStore();

  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ["getFruittePickIntroList"],
    queryFn: async () => {
      const fruittePickIntros = await api.getFruittePickIntroList(pickId);
      setFruittePickIntros(fruittePickIntros as i.FruittePickIntro[]);
      return fruittePickIntros;
    },
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess, refetch };
};
