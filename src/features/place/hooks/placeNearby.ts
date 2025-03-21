import { create } from "zustand";
import { mode } from "../types/api";
import * as i from "../types/nearby/api";

interface PlaceNearbyOpt1State {
  info: i.NearbyOpt1[];
  setInfo: (info: i.NearbyOpt1[]) => void;
  setInfoStep: (id: number, step: 1 | -1) => void;
}
export const usePlaceNearbyOpt1Store = create<PlaceNearbyOpt1State>((set) => ({
  info: [],
  setInfo: (info: i.NearbyOpt1[]) => {
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
interface PlaceNearbyOpt1CreateState {
  title: string;
  setTitle: (title: string) => void;
  info: string;
  setInfo: (info: string) => void;
  url: string;
  setUrl: (url: string) => void;
  address: string;
  setAddress: (address: string) => void;
  long: string;
  setLong: (long: string) => void;
  lat: string;
  setLat: (lat: string) => void;
  recommend: boolean;
  setRecommend: (recommend: boolean) => void;
  images: string[];
  setImages: (images: string[]) => void;
  setImageStep: (index: number, step: 1 | -1) => void;
  removeImage: (index: number) => void;
}
export const usePlaceNearbyOpt1CreateStore = create<PlaceNearbyOpt1CreateState>(
  (set) => ({
    title: "",
    setTitle: (title: string) => set({ title }),

    info: "",
    setInfo: (info: string) => set({ info }),

    url: "",
    setUrl: (url: string) => set({ url }),

    address: "",
    setAddress: (address: string) => set({ address }),

    long: "127.06131101128099",
    setLong: (long: string) => set({ long }),

    lat: "37.547742858806956",
    setLat: (lat: string) => set({ lat }),

    recommend: false,
    setRecommend: (recommend: boolean) => set({ recommend }),

    images: [],
    setImages: (images: string[]) => set({ images }),

    setImageStep: (index: number, step: 1 | -1) => {
      set((state) => {
        const currentImages = [...state.images];

        if (index < 0 || index >= currentImages.length) {
          console.warn("Invalid index for image step adjustment");
          return state;
        }

        const newIndex = index + step;
        if (newIndex < 0 || newIndex >= currentImages.length) {
          console.warn("Step adjustment out of bounds");
          return state;
        }

        const [movedImage] = currentImages.splice(index, 1);
        currentImages.splice(newIndex, 0, movedImage);

        return { images: currentImages };
      });
    },

    removeImage: (index: number) => {
      set((state) => {
        const currentImages = [...state.images];

        if (index < 0 || index >= currentImages.length) {
          console.warn("Invalid index for removing image");
          return state;
        }

        currentImages.splice(index, 1);
        return { images: currentImages };
      });
    },
  }),
);

interface PlaceNearbyOpt1DetailState {
  title: string;
  setTitle: (title: string) => void;

  info: string;
  setInfo: (info: string) => void;
  url: string;
  setUrl: (url: string) => void;
  address: string;
  setAddress: (address: string) => void;
  long: string;
  setLong: (long: string) => void;
  lat: string;
  setLat: (lat: string) => void;
  recommend: boolean;
  setRecommend: (recommend: boolean) => void;
  images: string[];
  setImages: (images: string[]) => void;
  setImageStep: (index: number, step: 1 | -1) => void;
  removeImage: (index: number) => void;
}
export const usePlaceNearbyOpt1DetailStore = create<PlaceNearbyOpt1DetailState>(
  (set) => ({
    title: "",
    setTitle: (title: string) => set({ title }),

    info: "",
    setInfo: (info: string) => set({ info }),

    url: "",
    setUrl: (url: string) => set({ url }),

    address: "",
    setAddress: (address: string) => set({ address }),

    long: "0",
    setLong: (long: string) => set({ long }),

    lat: "0",
    setLat: (lat: string) => set({ lat }),
    recommend: false,
    setRecommend: (recommend: boolean) => set({ recommend }),
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
