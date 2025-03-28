import { create } from "zustand";
import { mode } from "../types/api";
import * as i from "../types/schedule/api";

interface PlaceScheduleOpt1State {
  mode: mode;
  setMode: (mode: mode) => void;
  totalTime: string;
  setTotalTime: (totalTime: string) => void;
  dateAndTime: string;
  setDateAndTime: (dateAndTime: string) => void;
  rainyProceeding: boolean;
  setRainyProceeding: (rainyProceeding: boolean) => void;
}
export const usePlaceScheduleOpt1Store = create<PlaceScheduleOpt1State>(
  (set) => ({
    mode: "create",
    setMode: (mode: mode) => set({ mode }),
    totalTime: "",
    setTotalTime: (totalTime: string) => set({ totalTime }),
    dateAndTime: "",
    setDateAndTime: (dateAndTime: string) => set({ dateAndTime }),
    rainyProceeding: false,
    setRainyProceeding: (rainyProceeding: boolean) =>
      set({ rainyProceeding: rainyProceeding }),
  }),
);

interface PlaceScheduleOpt2State {
  info: i.Opt2Info[];
  setInfo: (info: i.Opt2Info[]) => void;
  setInfoStep: (id: number, step: 1 | -1) => void;
}
export const usePlaceScheduleOpt2Store = create<PlaceScheduleOpt2State>(
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
interface PlaceScheduleOpt2CreateState {
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  time: string;
  setTime: (time: string) => void;
  notices: string;
  setNotices: (notices: string) => void;
  reset: () => void;
}
export const usePlaceScheduleOpt2CreateStore =
  create<PlaceScheduleOpt2CreateState>((set) => ({
    title: "",
    setTitle: (title: string) => {
      set({ title });
    },
    description: "",
    setDescription: (description: string) => {
      set({ description });
    },
    time: "",
    setTime: (time: string) => {
      set({ time });
    },
    notices: "",
    setNotices: (notices: string) => {
      set({ notices });
    },
    reset: () => set({ title: "", description: "", time: "", notices: "" }),
  }));
interface PlaceScheduleOpt2DetailState {
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  time: string;
  setTime: (time: string) => void;
  notices: string;
  setNotices: (notices: string) => void;
}
export const usePlaceScheduleOpt2DetailStore =
  create<PlaceScheduleOpt2DetailState>((set) => ({
    title: "",
    setTitle: (title: string) => {
      set({ title });
    },
    description: "",
    setDescription: (description: string) => {
      set({ description });
    },
    time: "",
    setTime: (time: string) => {
      set({ time });
    },
    notices: "",
    setNotices: (notices: string) => {
      set({ notices });
    },
  }));

interface PlaceScheduleOpt3State {
  mode: mode;
  setMode: (mode: mode) => void;
  placeText: string;
  setPlaceText: (plaplaceTextce: string) => void;
  region: string;
  setRegion: (region: string) => void;
  address: string;
  setAddress: (address: string) => void;
  lat: string;
  setLat: (lat: string) => void;
  long: string;
  setLong: (long: string) => void;
}
export const usePlaceScheduleOpt3Store = create<PlaceScheduleOpt3State>(
  (set) => ({
    mode: "create",
    setMode: (mode: mode) => set({ mode }),
    placeText: "",
    setPlaceText: (placeText: string) => {
      set({ placeText });
    },
    region: "",
    setRegion: (region: string) => {
      set({ region });
    },
    address: "",
    setAddress: (address: string) => {
      set({ address });
    },
    lat: "",
    setLat: (lat: string) => {
      set({ lat });
    },
    long: "",
    setLong: (long: string) => {
      set({ long });
    },
  }),
);

interface PlaceScheduleOpt4State {
  mode: mode;
  setMode: (mode: mode) => void;
  description: string;
  setDescription: (description: string) => void;
  images: string[];
  setImages: (images: string[]) => void;
  setImageStep: (index: number, step: 1 | -1) => void;
  removeImage: (index: number) => void;
}
export const usePlaceScheduleOpt4Store = create<PlaceScheduleOpt4State>(
  (set) => ({
    mode: "create",
    setMode: (mode: mode) => {
      set({ mode });
    },
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

interface PlaceScheduleOpt5State {
  mode: mode;
  setMode: (mode: mode) => void;
  description: string;
  setDescription: (description: string) => void;
  images: string[];
  setImages: (images: string[]) => void;
  setImageStep: (index: number, step: 1 | -1) => void;
  removeImage: (index: number) => void;
}
export const usePlaceScheduleOpt5Store = create<PlaceScheduleOpt5State>(
  (set) => ({
    mode: "create",
    setMode: (mode: mode) => {
      set({ mode });
    },
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

interface usePlaceScheduleOpt6State {
  description: string;
  setDescription: (description: string) => void;
  mode: mode;
  setMode: (mode: mode) => void;
}

export const usePlaceScheduleOpt6Store = create<usePlaceScheduleOpt6State>(
  (set) => ({
    description: "",
    setDescription: (description: string) => {
      set({ description });
    },
    mode: "create",
    setMode: (mode: mode) => {
      set({ mode });
    },
  }),
);
