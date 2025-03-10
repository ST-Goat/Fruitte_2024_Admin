import { create } from "zustand";
import { TabSlice, TabSliceState } from "./slices/TabSlice";

export const useExampleStore = create<TabSliceState>()((...a) => ({
  ...TabSlice(...a),
}));
