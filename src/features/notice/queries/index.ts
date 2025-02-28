import { useQuery, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import * as hook from "../hooks/notice";
import * as api from "../api/index";
import * as i from "../types/api";
import { mode } from "@/constants/types";
import { useRouter } from "next/navigation";

export const useGetNotice = () => {
  const setNotices = hook.useNoticeStore((state) => state.setNotices);

  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ["getNotice"],
    queryFn: async () => {
      const notices = await api.getNotice();

      console.log(notices);
      

      setNotices(notices as i.Notice[]);
      return notices;
    },
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess, refetch };
};

export const useGetNoticeDetail = (noticeId: string) => {
  const setTitle = hook.useNoticeDetailStore((state) => state.setTitle);
  const setContent = hook.useNoticeDetailStore((state) => state.setContent);
  const setType = hook.useNoticeDetailStore((state) => state.setType);
  const setExposed = hook.useNoticeDetailStore((state) => state.setExposed);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getNoticeDetail", noticeId],
    queryFn: async () => {
      const notice = await api.getNoticeDetail(noticeId);
      setTitle(notice?.title as string);
      setContent(notice?.content as string);
      setType(notice?.type as i.NoticeType);
      setExposed(notice?.exposed as boolean);
      return notice;
    },
    enabled: !!noticeId,
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess };
};

export const useCreateNotice = () => {
  const router = useRouter();
  const { title, content, type, exposed } = hook.useNoticeCreateStore();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const createdNotice = await api.createNotice({
        title,
        content,
        type,
        exposed,
      });
      return createdNotice;
    },
    onSuccess: () => {
      toast.success("공지사항이 생성되었습니다.");
      router.push("/notice");
    },
  });

  return { mutate, isError, isPending };
};

export const useUpdateNotice = (notice: i.Notice) => {
  const { title, content, type, exposed } = hook.useNoticeDetailStore();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const updatedNotice = await api.updateNotice({
        id: notice.id,
        step: notice.step,
        title,
        content,
        type,
        exposed,
      });
      return updatedNotice;
    },
    onSuccess: () => {
      toast.success("공지사항이 수정되었습니다.");
    },
  });

  return { mutate, isError, isPending };
};

export const useUpdateNoticeStep = () => {
  const { notices } = hook.useNoticeStore();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const updatedNotices = await api.updateNoticeStep({
        notices,
      });
      return updatedNotices;
    },
    onSuccess: () => {
      toast.success("노출 우선순위가 수정되었습니다");
    },
  });

  return { mutate, isError, isPending };
};

export const useDeleteNotice = (noticeId: number) => {
  const { notices, setNotices } = hook.useNoticeStore();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async () => {
      const deletedNotice = await api.deleteNotice(noticeId);
      return deletedNotice;
    },
    onSuccess: () => {
      toast.success("공지사항이 삭제되었습니다.");
      const updatedNotices = notices.filter((notice) => notice.id !== noticeId);
      setNotices(updatedNotices);
    },
    onError: () => {
      toast.error("삭제에 실패했습니다.");
    },
  });

  return { mutate, isError, isPending };
};