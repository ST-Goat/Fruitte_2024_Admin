import { useQuery, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import * as hook from "../../hooks/placeNearby";
import * as api from "../../api/nearby";
import * as i from "../../types/nearby/api";
import { mode } from "@/constants/types";
import { useRouter } from "next/navigation";

export const useGetNearbyOpt1 = (placeId: string) => {
  const setInfo = hook.usePlaceNearbyOpt1Store((state) => state.setInfo);

  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ["getNearbyOpt1", placeId],
    queryFn: async () => {
      const info = await api.getNearbyOpt1(placeId);
      setInfo(info as i.NearbyOpt1[]);
      return info;
    },
    enabled: !!placeId,
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess, refetch };
};
export const useGetNearbyOpt1Detail = (placeId: string, id: string) => {
  const { setTitle, setInfo, setImages, setAddress, setLat, setLong, setUrl } =
    hook.usePlaceNearbyOpt1DetailStore();

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getNearbyOpt1Detail", placeId, id],
    queryFn: async () => {
      const info = await api.getNearbyOpt1Detail(placeId, id);
      setTitle(info?.title as string);
      setInfo(info?.info as string);
      setImages([info?.thumbnail as string] as string[]);
      setAddress(info?.address as string);
      setLat(String(info?.lat as number));
      setLong(String(info?.long as number));
      setUrl(info?.url as string);

      return info;
    },
    enabled: !!id,
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess };
};
export const useCreateNearbyOpt1 = () => {
  const router = useRouter();
  const { title, info, images, address, lat, long, url } =
    hook.usePlaceNearbyOpt1CreateStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const createdInfo = await api.createNearbyOpt1(placeId, {
        placeId,
        title,
        info,
        thumbnail: JSON.stringify(images[0]),
        address,
        lat: Number(lat),
        long: Number(long),
        url,
      });
      return createdInfo;
    },
    onSuccess: (data) => {
      toast.success("컨텐츠가 생성되었습니다.");
      router.push(`/place/detail/${data?.placeId}/nearby/opt-1`);
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateNearbyOpt1 = (data: i.NearbyOpt1) => {
  const {
    title,
    info,
    images,
    address,
    lat,
    long,
    url,
    setTitle,
    setInfo,
    setImages,
    setAddress,
    setLat,
    setLong,
    setUrl,
  } = hook.usePlaceNearbyOpt1DetailStore();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const updatedInfo = await api.updateNearbyOpt1({
        placeId: data?.placeId,
        id: data.id,
        step: data.step,
        title,
        thumbnail: JSON.stringify(images[0]),
        info,
        address,
        url,
        lat: Number(lat),
        long: Number(long),
      });

      return updatedInfo;
    },
    onSuccess: (data) => {
      setTitle(data?.title as string);
      setInfo(data?.info as string);
      setImages([data?.thumbnail as string] as string[]);
      setAddress(data?.address as string);
      setLat(String(data?.lat as number));
      setLong(String(data?.long as number));
      setUrl(data?.url as string);

      toast.success("수정완료되었습니다");
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateNearbyOpt1Step = () => {
  const { info } = hook.usePlaceNearbyOpt1Store();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await api.updateNearbyOpt1Step(placeId, {
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
export const useDeleteNearbyOpt1 = (placeId: string, id: number) => {
  const { info, setInfo } = hook.usePlaceNearbyOpt1Store(); // info와 setInfo를 불러옵니다.

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const deletedInfo = await api.deleteNearbyOpt1(placeId, id);
      return deletedInfo;
    },
    onSuccess: () => {
      toast.success("해당 컨텐츠가 삭제되었습니다.");

      // 기존 info를 필터링한 새로운 배열 생성
      const updatedInfo = info.filter((item) => item.id !== Number(id));

      // 새로운 배열로 setInfo 호출
      setInfo(updatedInfo);
    },
    onError: (error) => {
      toast.error("삭제에 실패했습니다.");
    },
  });

  return { mutate, isError, isPending };
};
