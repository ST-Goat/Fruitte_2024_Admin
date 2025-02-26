import { StateCreator } from "zustand";

export interface TabSliceState {
  tabMode: "이용예정" | "이용완료" | "취소내역";
  setTabMode: (tabMode: TabSliceState["tabMode"]) => void;
}

export const TabSlice: StateCreator<TabSliceState, [], [], TabSliceState> = (
  set,
) => ({
  tabMode: "이용예정",
  setTabMode: (tabMode) => set({ tabMode }),
});
