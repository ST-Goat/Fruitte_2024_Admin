import { create } from "zustand";
import { mode, infoOpt4, infoOpt6 } from "../types/api";
import { toast } from "react-toastify";

interface PlaceCreateState {
  title: string;
  setTitle: (title: string) => void;
  partnerUsername: string;
  setPartnerUsername: (partnerUsername: string) => void;
}

export const usePlaceCreateStore = create<PlaceCreateState>((set) => ({
  title: "",
  setTitle: (title) => set({ title }),
  partnerUsername: "",
  setPartnerUsername: (partnerUsername) => set({ partnerUsername }),
}));

interface PlaceInfoOpt1State {
  title: string;
  partnerUsername: string;
  openDateTime: Date;
  openStatus: boolean;
  setTitle: (title: string) => void;
  setPartnerUsername: (username: string) => void;
  setOpenDateTime: (date: Date) => void;
  setOpenStatus: (status: boolean) => void;
  setPlaceInfoOpt1: (data: {
    title: string;
    partnerUsername: string;
    openDateTime: Date;
    openStatus: boolean;
  }) => void;
  resetPlaceInfoOpt1: () => void;
}
export const usePlaceInfoOpt1Store = create<PlaceInfoOpt1State>((set) => ({
  title: "",
  partnerUsername: "",
  openDateTime: new Date(),
  openStatus: false,
  setTitle: (title: string) => set({ title }),
  setPartnerUsername: (username: string) => set({ partnerUsername: username }),
  setOpenDateTime: (date: Date) => set({ openDateTime: date }),
  setOpenStatus: (status: boolean) => set({ openStatus: status }),
  setPlaceInfoOpt1: ({ title, partnerUsername, openDateTime, openStatus }) =>
    set({ title, partnerUsername, openDateTime, openStatus }),
  resetPlaceInfoOpt1: () =>
    set({
      title: "",
      partnerUsername: "",
      openDateTime: new Date(),
      openStatus: false,
    }),
}));

interface PlaceInfoOpt2State {
  mode: mode;
  setMode: (mode: mode) => void;
  mainImgSrc: string[];
  setMainImgSrc: (mainImgSrc: string[]) => void;
  removeMainImgSrc: (index: number) => void;
  sliderImgsSrc: string[];
  setSliderImgsSrc: (images: string[]) => void;
  setSliderImgsSrcStep: (index: number, step: 1 | -1) => void;
  removeSliderImgsSrc: (index: number) => void;
}

export const usePlaceInfoOpt2Store = create<PlaceInfoOpt2State>((set) => ({
  mode: "create",
  setMode: (mode: mode) => set({ mode }),
  mainImgSrc: [],
  setMainImgSrc: (mainImgSrc: string[]) => {
    set({ mainImgSrc });
  },
  removeMainImgSrc: (index: number) => {
    set((state) => {
      const currentImages = [...state.mainImgSrc];

      // 유효한 index인지 확인
      if (index < 0 || index >= currentImages.length) {
        console.warn("Invalid index for removing image");
        return state;
      }

      // 해당 이미지를 제거
      currentImages.splice(index, 1);

      return { sliderImgsSrc: currentImages };
    });
  },
  sliderImgsSrc: [],
  setSliderImgsSrc: (sliderImgsSrc: string[]) => {
    set({ sliderImgsSrc });
  },
  setSliderImgsSrcStep: (index: number, step: 1 | -1) => {
    set((state) => {
      const currentImages = [...state.sliderImgsSrc];

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

      return { sliderImgsSrc: currentImages };
    });
  },
  removeSliderImgsSrc: (index: number) => {
    set((state) => {
      const currentImages = [...state.sliderImgsSrc];

      // 유효한 index인지 확인
      if (index < 0 || index >= currentImages.length) {
        console.warn("Invalid index for removing image");
        return state;
      }

      // 해당 이미지를 제거
      currentImages.splice(index, 1);

      return { sliderImgsSrc: currentImages };
    });
  },
}));

interface PlaceInfoOpt3State {
  mode: mode;
  progressTime: string;
  indoorStatus: boolean;
  minimumPrice: string;
  pricePerPerson: string;
  youtubeLink: string;
  setMode: (mode: mode) => void;
  setProgressTime: (time: string) => void;
  setIndoorStatus: (status: boolean) => void;
  setMinimumPrice: (price: string) => void;
  setPricePerPerson: (price: string) => void;
  setYoutubeLink: (link: string) => void;
  setPlaceInfoOpt3: (data: {
    progressTime: string;
    indoorStatus: boolean;
    minimumPrice: string;
    pricePerPerson: string;
    youtubeLink: string;
  }) => void;
}
export const usePlaceInfoOpt3Store = create<PlaceInfoOpt3State>((set) => ({
  mode: "create",
  progressTime: "0",
  indoorStatus: false,
  minimumPrice: "0",
  pricePerPerson: "0",
  youtubeLink: "",
  setMode: (mode: PlaceInfoOpt3State["mode"]) => set({ mode }),
  setProgressTime: (time: string) => set({ progressTime: time }),
  setIndoorStatus: (status: boolean) => set({ indoorStatus: status }),
  setMinimumPrice: (price: string) => set({ minimumPrice: price }),
  setPricePerPerson: (price: string) => set({ pricePerPerson: price }),
  setYoutubeLink: (link: string) => set({ youtubeLink: link }),
  setPlaceInfoOpt3: ({
    progressTime,
    indoorStatus,
    minimumPrice,
    pricePerPerson,
    youtubeLink,
  }) =>
    set({
      progressTime,
      indoorStatus,
      minimumPrice,
      pricePerPerson,
      youtubeLink,
    }),
}));

export type restroomStatus = "traditional" | "flush" | "none";
export type parkingStatus = "perfection" | "narrow" | "disable";
export type rainStatus = "progress" | "raincoat" | "disable";
interface PlaceInfoOpt4State extends infoOpt4 {
  mode: mode;
  setMode: (mode: mode) => void;
  setRestroom: (status: restroomStatus) => void;
  setParking: (status: parkingStatus) => void;
  setBabycar: (status: boolean) => void;
  setPet: (status: boolean) => void;
  setFood: (status: boolean) => void;
  setRain: (status: rainStatus) => void;
  reset: () => void;
  setAll: (data: infoOpt4) => void;
  getAll: () => infoOpt4;
}
export const usePlaceInfoOpt4Store = create<PlaceInfoOpt4State>((set, get) => ({
  mode: "create",
  setMode: (mode: mode) => set({ mode }),
  restroom: "none",
  setRestroom: (status: "traditional" | "flush" | "none") =>
    set({ restroom: status }),
  babycar: false,
  pet: false,
  food: false,
  parking: "disable",
  setParking: (status: parkingStatus) => set({ parking: status }),
  rain: "disable",
  setBabycar: (status: boolean) => set({ babycar: status }),
  setPet: (status: boolean) => set({ pet: status }),
  setFood: (status: boolean) => set({ food: status }),
  setRain: (status: rainStatus) => set({ rain: status }),
  reset: () =>
    set({
      mode: "create",
      restroom: "none",
      parking: "disable",
      babycar: false,
      pet: false,
      food: false,
      rain: "disable",
    }),
  setAll: (data) =>
    set({
      restroom: data.restroom,
      parking: data.parking,
      babycar: data.babycar,
      pet: data.pet,
      food: data.food,
      rain: data.rain,
    }),
  getAll: () => {
    return get();
  },
}));

const validSections = [
  "픽킹체험",
  "요리체험",
  "미술놀이",
  "몸놀이",
  "물놀이",
  "흙놀이",
  "자유시간",
  "피크닉",
  "바베큐",
];
const isValidSection = (section: string): boolean => {
  return validSections.includes(section);
};
export const filterValidSections = (sections: string[]): string[] => {
  return sections.filter((section) => validSections.includes(section));
};
interface PlaceInfoOpt5State {
  mode: mode;
  setMode: (mode: mode) => void;
  sections: string[];
  setSections: (section: string) => void;
  setInitialSections: (sections: string[]) => void;
  getAll: () => string[];
  setAll: (data: string[]) => void;
}
export const usePlaceInfoOpt5Store = create<PlaceInfoOpt5State>((set, get) => ({
  mode: "create",
  setMode: (mode: mode) => set({ mode }),
  sections: [],
  setSections: (section: string) => {
    const { sections } = get();

    if (!isValidSection(section)) {
      toast.error("포함할 수 없는 구분항목입니다.");
      return;
    }

    if (sections.includes(section)) {
      set({ sections: sections.filter((s) => s !== section) });
    } else {
      set({ sections: [...sections, section] });
    }
  },
  setInitialSections: (sections: string[]) => {
    const { sections: initialSections } = get();

    if (initialSections.length === 0) {
      set({ sections: filterValidSections(sections) });
    }
  },
  getAll: () => {
    return get().sections;
  },
  setAll: (data) => {
    set({ sections: data });
  },
}));

interface PlaceInfoOpt6State {
  mode: mode;
  fruitte: boolean;
  new: boolean;
  eco: boolean;
  setMode: (mode: mode) => void;
  setFruitte: (status: boolean) => void;
  setNew: (status: boolean) => void;
  setEco: (status: boolean) => void;
  setAll: (data: infoOpt6) => void;
  getAll: () => infoOpt6;
}
export const usePlaceInfoOpt6Store = create<PlaceInfoOpt6State>((set, get) => ({
  mode: "create",
  fruitte: false,
  new: false,
  eco: false,
  setMode: (mode) => set({ mode }),
  setFruitte: (status: boolean) => set({ fruitte: status }),
  setNew: (status: boolean) => set({ new: status }),
  setEco: (status: boolean) => set({ eco: status }),
  setAll: (data) =>
    set({
      fruitte: data.fruitte,
      new: data.new,
      eco: data.eco,
    }),
  getAll: () => {
    const { fruitte, eco } = get();
    const newStatus = get().new;
    return { fruitte, eco, new: newStatus };
  },
}));
