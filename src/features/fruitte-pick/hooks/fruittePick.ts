import { create } from "zustand";
import * as i from "../types/api";

interface FruittePicksState {
  fruittePicks: i.FruittePick[];
  setFruittePicks: (fruittePicks: i.FruittePick[]) => void;
  setFruittePickStep: (id: number, step: 1 | -1) => void;
}

export const useFruittePicksStore = create<FruittePicksState>((set) => ({
  fruittePicks: [],
  setFruittePicks: (fruittePicks: i.FruittePick[]) => {
    set({ fruittePicks });
  },
  setFruittePickStep: (id: number, step: 1 | -1) => {
    set((state) => {
      // 현재 객체를 앞으로 또는 뒤로 이동
      const currentIndex = state.fruittePicks.findIndex(
        (item) => item.id === id,
      );
      if (currentIndex === -1) return state; // id가 없는 경우 처리

      const targetIndex = currentIndex + step;
      // 이동할 위치가 배열 범위를 벗어나면 이동하지 않음

      if (targetIndex < 0 || targetIndex >= state.fruittePicks.length)
        return state;

      // 배열 재배치
      const updatedInfo = [...state.fruittePicks];

      const [movedItem] = updatedInfo.splice(currentIndex, 1); // 현재 객체 제거
      updatedInfo.splice(targetIndex, 0, movedItem); // 새 위치에 삽입

      // 배열 순서에 따라 step 값 재설정
      const reorderedInfo = updatedInfo.map((item, index) => ({
        ...item,
        step: index + 1,
      }));

      return { fruittePicks: reorderedInfo };
    });
  },
}));

interface FruittePickCreateState {
  thumbnail: string[];
  title: string;
  writer: string;
  prologue: string;
  prologueImg: string[];
  exposed: boolean;
  exposedTime: Date;
  setThumbnail: (thumbnail: string[]) => void;
  setTitle: (title: string) => void;
  setWriter: (writer: string) => void;
  setPrologue: (prologue: string) => void;
  setPrologueImg: (prologueImg: string[]) => void;
  setExposed: (exposed: boolean) => void;
  setExposedTime: (exposedTime: Date) => void;
  removePrologueImage: (index: number) => void;
  removeThumbnailImage: (index: number) => void;
}

export const useFruittePickCreateStore = create<FruittePickCreateState>(
  (set) => ({
    thumbnail: [],
    title: "",
    writer: "",
    prologue: "",
    prologueImg: [],
    exposed: false,
    exposedTime: new Date(),
    setThumbnail: (thumbnail: string[]) => set({ thumbnail }),
    setTitle: (title: string) => set({ title }),
    setWriter: (writer: string) => set({ writer }),
    setPrologue: (prologue: string) => set({ prologue }),
    setPrologueImg: (prologueImg: string[]) => set({ prologueImg }),
    setExposed: (exposed: boolean) => set({ exposed }),
    setExposedTime: (exposedTime: Date) => set({ exposedTime }),
    removePrologueImage: (index: number) => {
      set((state) => {
        const currentImages = [...state.prologueImg];

        // 유효한 index인지 확인
        if (index < 0 || index >= currentImages.length) {
          console.warn("Invalid index for removing image");
          return state;
        }

        // 해당 이미지를 제거
        currentImages.splice(index, 1);

        return { prologueImg: currentImages };
      });
    },
    removeThumbnailImage: (index: number) => {
      set((state) => {
        const currentImages = [...state.thumbnail];

        // 유효한 index인지 확인
        if (index < 0 || index >= currentImages.length) {
          console.warn("Invalid index for removing image");
          return state;
        }

        // 해당 이미지를 제거
        currentImages.splice(index, 1);

        return { thumbnail: currentImages };
      });
    },
  }),
);

interface FruittePickDetailState {
  thumbnail: string[];
  title: string;
  writer: string;
  prologue: string;
  prologueImg: string[];
  exposed: boolean;
  exposedTime: Date;
  setThumbnail: (thumbnail: string[]) => void;
  setTitle: (title: string) => void;
  setWriter: (writer: string) => void;
  setPrologue: (prologue: string) => void;
  setPrologueImg: (prologueImg: string[]) => void;
  setExposed: (exposed: boolean) => void;
  setExposedTime: (exposedTime: Date) => void;
  removePrologueImage: (index: number) => void;
  removeThumbnailImage: (index: number) => void;
}

export const useFruittePickDetailStore = create<FruittePickDetailState>(
  (set) => ({
    thumbnail: [],
    title: "",
    writer: "",
    prologue: "",
    prologueImg: [],
    exposed: false,
    exposedTime: new Date(),
    setThumbnail: (thumbnail: string[]) => set({ thumbnail }),
    setTitle: (title: string) => set({ title }),
    setWriter: (writer: string) => set({ writer }),
    setPrologue: (prologue: string) => set({ prologue }),
    setPrologueImg: (prologueImg: string[]) => set({ prologueImg }),
    setExposed: (exposed: boolean) => set({ exposed }),
    setExposedTime: (exposedTime: Date) => set({ exposedTime }),
    removePrologueImage: (index: number) => {
      set((state) => {
        const currentImages = [...state.prologueImg];

        // 유효한 index인지 확인
        if (index < 0 || index >= currentImages.length) {
          console.warn("Invalid index for removing image");
          return state;
        }

        // 해당 이미지를 제거
        currentImages.splice(index, 1);

        return { prologueImg: currentImages };
      });
    },
    removeThumbnailImage: (index: number) => {
      set((state) => {
        const currentImages = [...state.thumbnail];

        // 유효한 index인지 확인
        if (index < 0 || index >= currentImages.length) {
          console.warn("Invalid index for removing image");
          return state;
        }

        // 해당 이미지를 제거
        currentImages.splice(index, 1);

        return { thumbnail: currentImages };
      });
    },
  }),
);

interface FruittePickIntroState {
  fruittePickIntros: i.FruittePickIntro[];
  setFruittePickIntros: (fruittePickIntros: i.FruittePickIntro[]) => void;
  setFruittePickIntroStep: (id: number, step: 1 | -1) => void;
}
export const useFruittePickIntroStore = create<FruittePickIntroState>(
  (set) => ({
    fruittePickIntros: [],
    setFruittePickIntros: (fruittePickIntros: i.FruittePickIntro[]) => {
      set({ fruittePickIntros });
    },
    setFruittePickIntroStep: (id: number, step: 1 | -1) => {
      set((state) => {
        // 현재 객체를 앞으로 또는 뒤로 이동
        const currentIndex = state.fruittePickIntros.findIndex(
          (item) => item.id === id,
        );
        if (currentIndex === -1) return state; // id가 없는 경우 처리

        const targetIndex = currentIndex + step;
        // 이동할 위치가 배열 범위를 벗어나면 이동하지 않음

        if (targetIndex < 0 || targetIndex >= state.fruittePickIntros.length)
          return state;

        // 배열 재배치
        const updatedInfo = [...state.fruittePickIntros];

        const [movedItem] = updatedInfo.splice(currentIndex, 1); // 현재 객체 제거
        updatedInfo.splice(targetIndex, 0, movedItem); // 새 위치에 삽입

        // 배열 순서에 따라 step 값 재설정
        const reorderedInfo = updatedInfo.map((item, index) => ({
          ...item,
          step: index + 1,
        }));

        return { fruittePickIntros: reorderedInfo };
      });
    },
  }),
);

interface FruittePickIntroCreate {
  placeId: string;
  setPlaceId: (placeId: string) => void;
  title: string;
  setTitle: (title: string) => void;
  prologue: string;
  setPrologue: (prologue: string) => void;
  ticket: i.Ticket[];
  setTicket: (ticket: i.Ticket[]) => void;
  option: i.Option[];
  setOption: (option: i.Option[]) => void;
  program: i.Program[];
  setProgram: (program: i.Program[]) => void;
  exposed: boolean;
  setExposed: (exposed: boolean) => void;
}
export const useFruittePickIntroCreateStore = create<FruittePickIntroCreate>(
  (set) => ({
    placeId: "",
    setPlaceId: (placeId) => set({ placeId }),
    title: "",
    setTitle: (title) => set({ title }),
    prologue: "",
    setPrologue: (prologue) => set({ prologue }),
    ticket: [],
    setTicket: (ticket) => set({ ticket }),
    option: [],
    setOption: (option) => set({ option }),
    program: [],
    setProgram: (program) => set({ program }),
    exposed: false,
    setExposed: (exposed) => set({ exposed }),
  }),
);
