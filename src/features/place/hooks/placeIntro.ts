import { create } from "zustand";
import { toast } from "react-toastify";
import { mode } from "../types/api";
import { Opt2Info } from "../types/intro/api";

interface PlaceIntroOpt1DescState {
  description: string;
  mode: mode;
  setDescription: (description: string) => void;
  setMode: (mode: mode) => void;
  setAll: (description: PlaceIntroOpt1DescState["description"]) => void;
}
export const usePlaceIntroOpt1DescStore = create<PlaceIntroOpt1DescState>(
  (set) => ({
    description: "",
    mode: "create",
    setDescription: (description: string) => set({ description }),
    setMode: (mode: mode) => set({ mode }),
    setAll: (description) =>
      set({
        description,
      }),
  }),
);

interface PlaceIntroOpt2State {
  info: Opt2Info[];
  setInfo: (info: Opt2Info[]) => void;
  setInfoStep: (id: number, step: 1 | -1) => void;
}
export const usePlaceIntroOpt2Store = create<PlaceIntroOpt2State>((set) => ({
  info: [
    {
      id: 1,
      step: 1,
      description: "1번설명",
      img: [""],
    },
    {
      id: 2,
      step: 2,
      description: "2번설명",
      img: [""],
    },
    {
      id: 3,
      step: 3,
      description: "2번설명",
      img: [""],
    },
  ],
  setInfo: (info: Opt2Info[]) => {
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
}));

interface PlaceIntroOpt2CreateState {
  description: string;
  setDescription: (description: string) => void;
  images: string[];
  setImages: (images: string[]) => void;
  setImageStep: (index: number, step: 1 | -1) => void;
  removeImage: (index: number) => void;
}
export const usePlaceIntroOpt2CreateStore = create<PlaceIntroOpt2CreateState>(
  (set) => ({
    description: "",
    setDescription: (description: string) => {
      set({ description });
    },
    images: [],
    setImages: (images: string[]) => {
      set({ images });
    },
    setImageStep: (index: number, step: 1 | -1) => {
      set((state) => {
        const currentImages = [...state.images];

        // 유효한 index인지 확인
        if (index < 0 || index >= currentImages.length) {
          console.warn("Invalid index for image step adjustment");
          return state;
        }

        // 이동할 새 위치 계산
        const newIndex = index + step;

        // 이동 대상이 배열 범위를 벗어난 경우 처리하지 않음
        if (newIndex < 0 || newIndex >= currentImages.length) {
          console.warn("Step adjustment out of bounds");
          return state;
        }

        // 이미지 위치 변경
        const [movedImage] = currentImages.splice(index, 1); // 선택된 이미지를 제거
        currentImages.splice(newIndex, 0, movedImage); // 새 위치에 삽입

        return { images: currentImages };
      });
    },
    removeImage: (index: number) => {
      set((state) => {
        const currentImages = [...state.images];

        // 유효한 index인지 확인
        if (index < 0 || index >= currentImages.length) {
          console.warn("Invalid index for removing image");
          return state;
        }

        // 해당 이미지를 제거
        currentImages.splice(index, 1);

        return { images: currentImages };
      });
    },
  }),
);

interface PlaceIntroOpt2DetailState {
  description: string;
  setDescription: (description: string) => void;
  images: string[];
  setImages: (images: string[]) => void;
  setImageStep: (index: number, step: 1 | -1) => void;
  removeImage: (index: number) => void;
}
export const usePlaceIntroOpt2DetailStore = create<PlaceIntroOpt2DetailState>(
  (set) => ({
    description: "",
    setDescription: (description: string) => {
      set({ description });
    },
    images: [],
    setImages: (images: string[]) => {
      set({ images });
    },
    setImageStep: (index: number, step: 1 | -1) => {
      set((state) => {
        const currentImages = [...state.images];

        // 유효한 index인지 확인
        if (index < 0 || index >= currentImages.length) {
          console.warn("Invalid index for image step adjustment");
          return state;
        }

        // 이동할 새 위치 계산
        const newIndex = index + step;

        // 이동 대상이 배열 범위를 벗어난 경우 처리하지 않음
        if (newIndex < 0 || newIndex >= currentImages.length) {
          console.warn("Step adjustment out of bounds");
          return state;
        }

        // 이미지 위치 변경
        const [movedImage] = currentImages.splice(index, 1); // 선택된 이미지를 제거
        currentImages.splice(newIndex, 0, movedImage); // 새 위치에 삽입

        return { images: currentImages };
      });
    },
    removeImage: (index: number) => {
      set((state) => {
        const currentImages = [...state.images];

        // 유효한 index인지 확인
        if (index < 0 || index >= currentImages.length) {
          console.warn("Invalid index for removing image");
          return state;
        }

        // 해당 이미지를 제거
        currentImages.splice(index, 1);

        return { images: currentImages };
      });
    },
  }),
);
