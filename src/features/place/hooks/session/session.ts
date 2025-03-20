import { create } from "zustand";
import * as i from "../../types/session/api";

interface SessionState {
  info: i.Session[];
  setInfo: (info: i.Session[]) => void;
  selectedRow: i.Session[];
  setSelectedRow: (selectedRow: i.Session[]) => void; // 배열로 변경
}

export const useSessionStore = create<SessionState>((set) => ({
  info: [
    {
      placeId: "2",
      id: 1,
      mode: "session",
      sessionDate: new Date(),
      sessionTime: new Date(),
      totalStock: 100,
      remainingStock: 100,
      exposed: true,
    },
    {
      placeId: "2",
      id: 2,
      mode: "ticket",
      sessionDate: new Date(),
      sessionTime: new Date(),
      totalStock: 0,
      remainingStock: 0,
      exposed: false,
    },
  ],
  setInfo: (info) => set({ info }),
  selectedRow: [],
  setSelectedRow: (selectedRow) => set({ selectedRow }), // 상태를 배열로 처리
}));

type mode = "create" | "update";

interface SessionPopupState {
  mode: mode;
  setMode: (mode: mode) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  id: number | undefined;
  setId: (id: number | undefined) => void;
  sessionMode: i.sesssionMode;
  setSessionMode: (sessionMode: i.sesssionMode) => void;
  sessionDate: Date;
  setSessionDate: (sessionDate: Date) => void;
  sessionTime: Date;
  setSessionTime: (sessionTime: Date) => void;
  totalStock: string;
  setTotalStock: (totalStock: string) => void;
  remainingStock: string;
  setRemainingStock: (remainingStock: string) => void;
  exposed: boolean;
  setExposed: (exposed: boolean) => void;
  setValueForUpdate: (id: number, Sessions: i.Session[]) => void;
  setValueForCreate: () => void;
}

export const useSessionPopupStore = create<SessionPopupState>((set, get) => ({
  mode: "create",
  setMode: (mode) => set({ mode }),
  open: false,
  setOpen: (open) => {
    set({ open });
  },
  id: undefined,
  setId: (id) => set({ id }),
  sessionMode: "session",
  setSessionMode: (sessionMode) => set({ sessionMode }),
  sessionDate: new Date(),
  setSessionDate: (sessionDate) => set({ sessionDate }),
  sessionTime: new Date(),
  setSessionTime: (sessionTime) => set({ sessionTime }),
  totalStock: "0",
  setTotalStock: (totalStock) => set({ totalStock }),
  remainingStock: "0",
  setRemainingStock: (remainingStock) => set({ remainingStock }),
  exposed: false,
  setExposed: (exposed) => set({ exposed }),
  setValueForUpdate: (id, Sessions) => {
    const info = Sessions.find((item) => item.id === id);
    set({
      open: true,
      mode: "update",
      id: info?.id,
    });
  },
  setValueForCreate: () => {
    set({
      open: true,
      mode: "create",
      id: undefined,
      sessionMode: "ticket",
      sessionDate: new Date(),
      sessionTime: new Date(),
      totalStock: "0",
      remainingStock: "0",
    });
  },
}));
