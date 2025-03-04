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
      // 현재 객체를 앞으로 또는 뒤로 이동
      const currentIndex = state.notices.findIndex((item) => item.id === id);
      if (currentIndex === -1) return state; // id가 없는 경우 처리

      const targetIndex = currentIndex + step;
      // 이동할 위치가 배열 범위를 벗어나면 이동하지 않음

      if (targetIndex < 0 || targetIndex >= state.notices.length) return state;

      // 배열 재배치
      const updatedInfo = [...state.notices];

      const [movedItem] = updatedInfo.splice(currentIndex, 1); // 현재 객체 제거
      updatedInfo.splice(targetIndex, 0, movedItem); // 새 위치에 삽입

      // 배열 순서에 따라 step 값 재설정
      const reorderedInfo = updatedInfo.map((item, index) => ({
        ...item,
        step: index + 1,
      }));

      return { notices: reorderedInfo };
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
