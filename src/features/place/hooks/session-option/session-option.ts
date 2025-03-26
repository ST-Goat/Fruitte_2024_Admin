import { create } from "zustand";
import * as i from "../../types/session-option/api";
import * as fd from "@/lib/formatDate";

type mode = "create" | "update";

interface SessionOptionState {
  info: i.SessionOptionTable[];
  setInfo: (info: i.SessionOptionTable[]) => void;
  selectedRow: i.SessionOptionTable[];
  setSelectedRow: (selectedRow: i.SessionOptionTable[]) => void; // 배열로 변경
}
export const useSessionOptionStore = create<SessionOptionState>((set) => ({
  info: [],
  setInfo: (info) => set({ info }),
  selectedRow: [],
  setSelectedRow: (selectedRow) => set({ selectedRow }), // 상태를 배열로 처리
}));

interface SessionOptionPopupState {
  mode: mode;
  setMode: (mode: mode) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  id: number | undefined;
  setId: (id: number | undefined) => void;
  sessionId?: string;
  setSessionId: (sessionId: string) => void;
  optionId: string;
  setOptionId: (optionId: string) => void;
  maxSelectable: string;
  setMaxSelectable: (maxSelectable: string) => void;
  minRequired: string;
  setMinRequired: (minRequired: string) => void;
  totalStock: string;
  setTotalStock: (totalStock: string) => void;
  remainingStock: string;
  setRemainingStock: (remainingStock: string) => void;
  setValueForUpdate: (id: number, Sessions: i.SessionOptionTable[]) => void;
  setValueForCreate: () => void;
}
export const useSessionOptionPopupStore = create<SessionOptionPopupState>(
  (set, get) => ({
    mode: "create",
    setMode: (mode) => set({ mode }),
    open: false,
    setOpen: (open) => {
      set({ open });
    },
    id: undefined,
    setId: (id) => set({ id }),
    sessionId: "",
    setSessionId: (sessionId) => set({ sessionId }),
    optionId: "",
    setOptionId: (optionId) => set({ optionId }),
    maxSelectable: "0",
    setMaxSelectable: (maxSelectable) => set({ maxSelectable }),
    minRequired: "0",
    setMinRequired: (minRequired) => set({ minRequired }),
    totalStock: "0",
    setTotalStock: (totalStock) => set({ totalStock }),
    remainingStock: "0",
    setRemainingStock: (remainingStock) => set({ remainingStock }),
    setValueForUpdate: (id, SessionOptions) => {
      const info = SessionOptions.find((item) => item.id === id);
      set({
        open: true,
        mode: "update",
        id: info?.id,
        sessionId: String(info?.sessionId),
        optionId: String(info?.optionId),
        maxSelectable: String(info?.maxSelectable),
        minRequired: String(info?.minRequired),
        totalStock: String(info?.totalStock),
        remainingStock: String(info?.remainingStock),
      });
    },
    setValueForCreate: () => {
      set({
        open: true,
        mode: "create",
        id: undefined,
        sessionId: "",
        optionId: "",
        maxSelectable: "0",
        minRequired: "0",
        totalStock: "0",
        remainingStock: "0",
      });
    },
  }),
);

interface SessionOptionStepState {
  sessionId: string;
  setSessionId: (sessionId: string) => void;
  info: i.SessionOptionTable[];
  setInfo: (info: i.SessionOptionTable[]) => void;
  setInfoStep: (id: number, step: 1 | -1) => void;
}
export const useSessionOptionStepStore = create<SessionOptionStepState>(
  (set, get) => ({
    sessionId: "",
    setSessionId: (sessionId) => set({ sessionId }),
    info: [],
    setInfo: (info) => set({ info }),
    setInfoStep: (id: number, step: 1 | -1) => {
      set((state) => {
        // 현재 객체를 앞으로 또는 뒤로 이동
        const currentIndex = state.info.findIndex((item) => item.id === id);
        if (currentIndex === -1) return state; // id가 없는 경우 처리

        const targetIndex = currentIndex + step;
        // 이동할 위치가 배열 범위를 벗어나면 이동하지 않음

        if (targetIndex < 0 || targetIndex >= state.info.length) return state;

        // 배열 재배치
        const updatedInfo = [...state.info];

        const [movedItem] = updatedInfo.splice(currentIndex, 1); // 현재 객체 제거
        updatedInfo.splice(targetIndex, 0, movedItem); // 새 위치에 삽입

        // 배열 순서에 따라 step 값 재설정
        const reorderedInfo = updatedInfo.map((item, index) => ({
          ...item,
          step: index + 1,
        }));

        return { info: reorderedInfo };
      });
    },
  }),
);
