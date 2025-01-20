import { create } from "zustand";

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

interface PlaceInfoOpt3State {
  mode: "create" | "update";
  progressTime: string;
  indoorStatus: boolean;
  minimumPrice: string;
  pricePerPerson: string;
  youtubeLink: string;
  setMode: (mode: PlaceInfoOpt3State["mode"]) => void;
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
  progressTime: "",
  indoorStatus: false,
  minimumPrice: "",
  pricePerPerson: "",
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
interface PlaceInfoOpt4State {
  restroomStatus: restroomStatus;
  setRestroomStatus: (status: restroomStatus) => void;
  parkingStatus: parkingStatus;
  setParkingStatus: (status: parkingStatus) => void;
  babycarStatus: boolean;
  petStatus: boolean;
  foodStatus: boolean;
  rainStatus: rainStatus;
  setBabycarStatus: (status: boolean) => void;
  setPetStatus: (status: boolean) => void;
  setFoodStatus: (status: boolean) => void;
  setRainStatus: (status: rainStatus) => void;
}

export const usePlaceInfoOpt4Store = create<PlaceInfoOpt4State>((set) => ({
  restroomStatus: "none",
  setRestroomStatus: (status: "traditional" | "flush" | "none") =>
    set({ restroomStatus: status }),
  babycarStatus: false,
  petStatus: false,
  foodStatus: false,
  parkingStatus: "disable",
  setParkingStatus: (status: parkingStatus) => set({ parkingStatus: status }),
  rainStatus: "disable",
  setBabycarStatus: (status: boolean) => set({ babycarStatus: status }),
  setPetStatus: (status: boolean) => set({ petStatus: status }),
  setFoodStatus: (status: boolean) => set({ foodStatus: status }),
  setRainStatus: (status: rainStatus) => set({ rainStatus: status }),
}));

interface PlaceInfoOpt5State {
  sections: string[];
  setSections: (section: string) => void;
}

export const usePlaceInfoOpt5Store = create<PlaceInfoOpt5State>((set, get) => ({
  sections: [],
  setSections: (section: string) => {
    const { sections } = get();
    if (sections.includes(section)) {
      set({ sections: sections.filter((s) => s !== section) });
    } else {
      set({ sections: [...sections, section] });
    }
  },
}));
