import { useQuery, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import * as hook from "../../hooks/orderPrice";
import * as api from "../../api/orderPrice";
import * as i from "../../types/orderPrice/api";
import { mode } from "@/constants/types";
import { useRouter } from "next/navigation";

export const useGetOrderPriceOpt1 = (placeId: string) => {
  const setInfo = hook.usePlaceOrderPriceOpt1Store((state) => state.setInfo);

  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ["getOrderPriceOpt1", placeId],
    queryFn: async () => {
      const info = await api.getOrderPriceOpt1(placeId);

      setInfo(info as i.Opt1Info[]);
      return info;
    },
    enabled: !!placeId,
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess, refetch };
};
export const useGetOrderPriceOpt1Detail = (placeId: string, id: string) => {
  const { setTitle, setPrice } = hook.usePlaceOrderPriceOpt1DetailStore();

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["useGetOrderPriceOpt1Detail", placeId, id],
    queryFn: async () => {
      const info = await api.getOrderPriceOpt1Detail(placeId, id);
      setTitle(info?.title as string);
      setPrice(String(info?.price as number));
      return info;
    },
    enabled: !!id,
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess };
};
export const useCreateOrderPriceOpt1 = () => {
  const router = useRouter();
  const { title, price } = hook.usePlaceOrderPriceOpt1CreateStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const createdInfo = await api.createOrderPriceOpt1(placeId, {
        placeId,
        title,
        price: Number(price),
      });
      return createdInfo;
    },
    onSuccess: (data) => {
      toast.success("티켓이 생성되었습니다.");
      router.push(`/place/detail/${data?.placeId}/orderPrice/opt-1`);
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateOrderPriceOpt1 = (data: i.Opt1Info) => {
  const { title, price, setTitle, setPrice } =
    hook.usePlaceOrderPriceOpt1DetailStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const updatedInfo = await api.updateOrderPriceOpt1({
        placeId: data?.placeId,
        id: data.id,
        step: data.step,
        title,
        price: Number(price),
      });
      return updatedInfo;
    },
    onSuccess: (data) => {
      setTitle(data?.title as string);
      setPrice(String(data?.price as number));
      toast.success("수정완료되었습니다");
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateOrderPriceOpt1Step = () => {
  const { info } = hook.usePlaceOrderPriceOpt1Store();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await api.updateOrderPriceOpt1Step(placeId, {
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
export const useDeleteOrderPriceOpt1 = (placeId: string, contentId: number) => {
  const { info, setInfo } = hook.usePlaceOrderPriceOpt1Store(); // info와 setInfo를 불러옵니다.

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const deletedInfo = await api.deleteOrderPriceOpt1(placeId, contentId);
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

export const useGetOrderPriceOpt2 = (placeId: string) => {
  const setInfo = hook.usePlaceOrderPriceOpt2Store((state) => state.setInfo);

  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ["getOrderPriceOpt2", placeId],
    queryFn: async () => {
      const info = await api.getOrderPriceOpt2(placeId);

      setInfo(info as i.Opt2Info[]);
      return info;
    },
    enabled: !!placeId,
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess, refetch };
};
export const useGetOrderPriceOpt2Detail = (placeId: string, id: string) => {
  const { setTitle, setPrice } = hook.usePlaceOrderPriceOpt2DetailStore();

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["useGetOrderPriceOpt2Detail", placeId, id],
    queryFn: async () => {
      const info = await api.getOrderPriceOpt2Detail(placeId, id);
      setTitle(info?.title as string);
      setPrice(String(info?.price as number));
      return info;
    },
    enabled: !!id,
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess };
};
export const useCreateOrderPriceOpt2 = () => {
  const router = useRouter();
  const { title, price } = hook.usePlaceOrderPriceOpt2CreateStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const createdInfo = await api.createOrderPriceOpt2(placeId, {
        placeId,
        title,
        price: Number(price),
      });
      return createdInfo;
    },
    onSuccess: (data) => {
      toast.success("티켓이 생성되었습니다.");
      router.push(`/place/detail/${data?.placeId}/orderPrice/opt-2`);
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateOrderPriceOpt2 = (data: i.Opt1Info) => {
  const { title, price, setTitle, setPrice } =
    hook.usePlaceOrderPriceOpt2DetailStore();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const updatedInfo = await api.updateOrderPriceOpt2({
        placeId: data?.placeId,
        id: data.id,
        step: data.step,
        title,
        price: Number(price),
      });
      return updatedInfo;
    },
    onSuccess: (data) => {
      setTitle(data?.title as string);
      setPrice(String(data?.price as number));
      toast.success("수정완료되었습니다");
    },
  });

  return { mutate, isError, isPending };
};
export const useUpdateOrderPriceOpt2Step = () => {
  const { info } = hook.usePlaceOrderPriceOpt2Store();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await api.updateOrderPriceOpt2Step(placeId, {
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
export const useDeleteOrderPriceOpt2 = (placeId: string, contentId: number) => {
  const { info, setInfo } = hook.usePlaceOrderPriceOpt2Store(); // info와 setInfo를 불러옵니다.

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const deletedInfo = await api.deleteOrderPriceOpt2(placeId, contentId);
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

export const useGetOrderPriceOpt3 = (id: string) => {
  const setInfo = hook.usePlaceOrderPriceOpt3Store(
    (state) => state.setDescription,
  );
  const setMode = hook.usePlaceOrderPriceOpt3Store((state) => state.setMode);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getOrderPriceOpt3", id],
    queryFn: async () => {
      const info = await api.getOrderPriceOpt3(id);
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
export const useCreateOrderPriceOpt3 = () => {
  const { description, setAll } = hook.usePlaceOrderPriceOpt3Store();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const createdInfo = await api.createOrderPriceOpt3(placeId, {
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
export const useUpdateOrderPriceOpt3 = () => {
  const { description, setAll } = hook.usePlaceOrderPriceOpt3Store();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (placeId: string) => {
      const updatedInfo = await api.updateOrderPriceOpt3(placeId, {
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
