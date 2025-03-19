import { create } from "zustand";
import * as i from "../../types/option/api";

type mode = "create" | "update";

interface OptionPopupState {
  mode: mode;
  setMode: (mode: mode) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  id: number | undefined;
  setId: (id: number | undefined) => void;
  title: string;
  setTitle: (title: string) => void;
  price: string;
  setPrice: (price: string) => void;
  isRequired: boolean;
  setIsRequired: (isRequired: boolean) => void;
  setValueForUpdate: (id: number, Options: i.Option[]) => void;
  setValueForCreate: () => void;
}

export const useOptionPopupStore = create<OptionPopupState>((set, get) => ({
  mode: "create",
  setMode: (mode) => set({ mode }),
  open: false,
  setOpen: (open) => {
    set({ open });
  },
  id: undefined,
  setId: (id) => set({ id }),
  title: "",
  setTitle: (title) => set({ title }),
  price: "0",
  setPrice: (price) => set({ price }),
  isRequired: false,
  setIsRequired: (isRequired) => set({ isRequired }),
  setValueForUpdate: (id, Options) => {
    const info = Options.find((item) => item.id === id);
    set({
      open: true,
      mode: "update",
      id: info?.id,
      title: info?.title,
      price: String(info?.price),
      isRequired: info?.isRequired == true,
    });
  },
  setValueForCreate: () => {
    set({
      open: true,
      mode: "create",
      id: undefined,
      title: "",
      price: "0",
      isRequired: false,
    });
  },
}));

interface OptionState {
  info: i.Option[];
  setInfo: (info: i.Option[]) => void;
}

export const useOptionStore = create<OptionState>((set) => ({
  info: [
    {
      placeId: "2",
      id: 1,
      title: "옵션명1",
      price: 1000,
      isRequired: true,
    },
    {
      placeId: "2",
      id: 2,
      title: "옵션명2",
      price: 1000,
      isRequired: false,
    },
  ],
  setInfo: (info) => set({ info }),
}));
