import { create } from "zustand";
import { mode } from "../types/api";
import * as i from "../types/intro/api";

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
  info: i.Opt2Info[];
  setInfo: (info: i.Opt2Info[]) => void;
  setInfoStep: (id: number, step: 1 | -1) => void;
}
export const usePlaceIntroOpt2Store = create<PlaceIntroOpt2State>((set) => ({
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

interface PlaceIntroOpt3State {
  info: i.Opt2Info[];
  setInfo: (info: i.Opt3Info[]) => void;
  setInfoStep: (id: number, step: 1 | -1) => void;
}
export const usePlaceIntroOpt3Store = create<PlaceIntroOpt3State>((set) => ({
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
}));
interface PlaceIntroOpt3CreateState {
  description: string;
  setDescription: (description: string) => void;
  images: string[];
  setImages: (images: string[]) => void;
  setImageStep: (index: number, step: 1 | -1) => void;
  removeImage: (index: number) => void;
}
export const usePlaceIntroOpt3CreateStore = create<PlaceIntroOpt3CreateState>(
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
interface PlaceIntroOpt3DetailState {
  description: string;
  setDescription: (description: string) => void;
  images: string[];
  setImages: (images: string[]) => void;
  setImageStep: (index: number, step: 1 | -1) => void;
  removeImage: (index: number) => void;
}
export const usePlaceIntroOpt3DetailStore = create<PlaceIntroOpt3DetailState>(
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

interface PlaceIntroOpt4DescState {
  description: string;
  mode: mode;
  setDescription: (description: string) => void;
  setMode: (mode: mode) => void;
  setAll: (description: PlaceIntroOpt4DescState["description"]) => void;
}
export const usePlaceIntroOpt4DescStore = create<PlaceIntroOpt4DescState>(
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

interface PlaceIntroOpt5State {
  info: i.Opt5Info[];
  setInfo: (info: i.Opt5Info[]) => void;
  setInfoStep: (id: number, step: 1 | -1) => void;
}
export const usePlaceIntroOpt5Store = create<PlaceIntroOpt5State>((set) => ({
  info: [],
  setInfo: (info: i.Opt5Info[]) => {
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

interface PlaceIntroOpt5CreateState {
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  images: string[];
  setImages: (images: string[]) => void;
  setImageStep: (index: number, step: 1 | -1) => void;
  removeImage: (index: number) => void;
}
export const usePlaceIntroOpt5CreateStore = create<PlaceIntroOpt5CreateState>(
  (set) => ({
    title: "",
    setTitle: (title: string) => {
      set({ title });
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
interface PlaceIntroOpt5DetailState {
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  images: string[];
  setImages: (images: string[]) => void;
  setImageStep: (index: number, step: 1 | -1) => void;
  removeImage: (index: number) => void;
}
export const usePlaceIntroOpt5DetailStore = create<PlaceIntroOpt5DetailState>(
  (set) => ({
    title: "",
    setTitle: (title: string) => {
      set({ title });
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

interface PlaceIntroOpt6State {
  info: i.Opt6Info[];
  setInfo: (info: i.Opt6Info[]) => void;
  setInfoStep: (id: number, step: 1 | -1) => void;
}
export const usePlaceIntroOpt6Store = create<PlaceIntroOpt6State>((set) => ({
  info: [],
  setInfo: (info: i.Opt6Info[]) => {
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

interface PlaceIntroOpt6CreateState {
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  images: string[];
  setImages: (images: string[]) => void;
  setImageStep: (index: number, step: 1 | -1) => void;
  removeImage: (index: number) => void;
}
export const usePlaceIntroOpt6CreateStore = create<PlaceIntroOpt6CreateState>(
  (set) => ({
    title: "",
    setTitle: (title: string) => {
      set({ title });
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
interface PlaceIntroOpt6DetailState {
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  images: string[];
  setImages: (images: string[]) => void;
  setImageStep: (index: number, step: 1 | -1) => void;
  removeImage: (index: number) => void;
}
export const usePlaceIntroOpt6DetailStore = create<PlaceIntroOpt6DetailState>(
  (set) => ({
    title: "",
    setTitle: (title: string) => {
      set({ title });
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

interface usePlaceIntroOpt7State {
  description: string;
  setDescription: (description: string) => void;
  mode: mode;
  setMode: (mode: mode) => void;
}

export const usePlaceIntroOpt7Store = create<usePlaceIntroOpt7State>((set) => ({
  description: "",
  setDescription: (description: string) => {
    set({ description });
  },
  mode: "create",
  setMode: (mode: mode) => {
    set({ mode });
  },
}));
