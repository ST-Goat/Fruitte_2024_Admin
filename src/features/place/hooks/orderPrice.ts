import { create } from "zustand";
import { mode } from "../types/api";
import { toast } from "react-toastify";
import * as i from "../types/orderPrice/api";

interface PlaceOrderPriceOpt1State {
  info: i.Opt1Info[];
  setInfo: (info: i.Opt1Info[]) => void;
  setInfoStep: (id: number, step: 1 | -1) => void;
}
export const usePlaceOrderPriceOpt1Store = create<PlaceOrderPriceOpt1State>(
  (set) => ({
    info: [],
    setInfo: (info: i.Opt1Info[]) => {
      set({ info });
    },
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
interface PlaceOrderPriceOpt1CreateState {
  title: string;
  setTitle: (title: string) => void;
  price: string;
  setPrice: (price: string) => void;
  reset: () => void;
}
export const usePlaceOrderPriceOpt1CreateStore = create<PlaceOrderPriceOpt1CreateState>(
  (set) => ({
    title: "",
    setTitle: (title: string) => {
      set({ title });
    },
    price: "",
    setPrice: (price: string) => {
      set({ price });
    },
    reset: () => set({ title: "", price: "" }),
  }),
);
interface PlaceOrderPriceOpt1DetailState {
  title: string;
  setTitle: (title: string) => void;
  price: string;
  setPrice: (price: string) => void;
}
export const usePlaceOrderPriceOpt1DetailStore =
  create<PlaceOrderPriceOpt1DetailState>((set) => ({
    title: "",
    setTitle: (title: string) => {
      set({ title });
    },
    price: "",
    setPrice: (price: string) => {
      set({ price });
    },
  }));

interface PlaceOrderPriceOpt2State {
  info: i.Opt2Info[];
  setInfo: (info: i.Opt2Info[]) => void;
  setInfoStep: (id: number, step: 1 | -1) => void;
}
export const usePlaceOrderPriceOpt2Store = create<PlaceOrderPriceOpt2State>(
  (set) => ({
    info: [],
    setInfo: (info: i.Opt2Info[]) => {
      set({ info });
    },
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
interface PlaceOrderPriceOpt2CreateState {
  title: string;
  setTitle: (title: string) => void;
  price: string;
  setPrice: (price: string) => void;
  reset: () => void;
}
export const usePlaceOrderPriceOpt2CreateStore = create<PlaceOrderPriceOpt2CreateState>(
  (set) => ({
    title: "",
    setTitle: (title: string) => {
      set({ title });
    },
    price: "",
    setPrice: (price: string) => {
      set({ price });
    },
    reset: () => set({ title: "", price: "" }),
  }),
);
interface PlaceOrderPriceOpt2DetailState {
  title: string;
  setTitle: (title: string) => void;
  price: string;
  setPrice: (price: string) => void;
}
export const usePlaceOrderPriceOpt2DetailStore =
  create<PlaceOrderPriceOpt2DetailState>((set) => ({
    title: "",
    setTitle: (title: string) => {
      set({ title });
    },
    price: "",
    setPrice: (price: string) => {
      set({ price });
    },
  }));
interface PlaceOrderPriceOpt3State {
  description: string;
  mode: mode;
  setDescription: (description: string) => void;
  setMode: (mode: mode) => void;
  setAll: (description: PlaceOrderPriceOpt3State["description"]) => void;
  reset: () => void;
}
export const usePlaceOrderPriceOpt3Store = create<PlaceOrderPriceOpt3State>(
  (set) => ({
    description: "",
    mode: "create",
    setDescription: (description: string) => set({ description }),
    setMode: (mode: mode) => set({ mode }),
    setAll: (description) =>
      set({
        description,
      }),
    reset: () => set({ description: "", mode: "create" }),
  }),
);
