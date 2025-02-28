import { create } from "zustand";
import * as i from "../types/api";

interface NoticeState {
  notices: i.Notice[];
  setNotices: (notices: i.Notice[]) => void;
  setNoticeStep: (id: number, step: 1 | -1) => void;
}

export const useNoticeStore = create<NoticeState>((set) => ({
  notices: [],
  setNotices: (notices: i.Notice[]) => {
    set({ notices });
  },
  setNoticeStep: (id: number, step: 1 | -1) => {
    set((state) => {
      const currentIndex = state.notices.findIndex((item) => item.id === id);
      if (currentIndex === -1) return state;

      const targetIndex = currentIndex + step;
      if (targetIndex < 0 || targetIndex >= state.notices.length) return state;

      const updatedNotices = [...state.notices];
      const [movedItem] = updatedNotices.splice(currentIndex, 1);
      updatedNotices.splice(targetIndex, 0, movedItem);

      const reorderedNotices = updatedNotices.map((item, index) => ({
        ...item,
        step: index + 1,
      }));

      return { notices: reorderedNotices };
    });
  },
}));

interface NoticeCreateState {
  title: string;
  content: string;
  type: i.NoticeType;
  exposed: boolean;
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
  setType: (type: i.NoticeType) => void;
  setExposed: (exposed: boolean) => void;
}

export const useNoticeCreateStore = create<NoticeCreateState>((set) => ({
  title: "",
  content: "",
  type: "notification",
  exposed: false,
  setTitle: (title: string) => set({ title }),
  setContent: (content: string) => set({ content }),
  setType: (type: i.NoticeType) => set({ type }),
  setExposed: (exposed: boolean) => set({ exposed }),
}));

interface NoticeDetailState {
  title: string;
  content: string;
  type: i.NoticeType;
  exposed: boolean;
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
  setType: (type: i.NoticeType) => void;
  setExposed: (exposed: boolean) => void;
}

export const useNoticeDetailStore = create<NoticeDetailState>((set) => ({
  title: "",
  content: "",
  type: "notification",
  exposed: false,
  setTitle: (title: string) => set({ title }),
  setContent: (content: string) => set({ content }),
  setType: (type: i.NoticeType) => set({ type }),
  setExposed: (exposed: boolean) => set({ exposed }),
}));