import { create } from "zustand";
import * as i from "../../types/ticket/api";

type mode = "create" | "update";

interface TicketPopupState {
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
  setValueForUpdate: (id: number, tickets: i.Ticket[]) => void;
  setValueForCreate: () => void;
}

export const useTicketPopupStore = create<TicketPopupState>((set, get) => ({
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
  setValueForUpdate: (id, tickets) => {
    const info = tickets.find((item) => item.id === id);
    set({
      open: true,
      mode: "update",
      id: info?.id,
      title: info?.title,
      price: String(info?.price),
    });
  },
  setValueForCreate: () => {
    set({
      open: true,
      mode: "create",
      id: undefined,
      title: "",
      price: "0",
    });
  },
}));

interface TicketState {
  info: i.Ticket[];
  setInfo: (info: i.Ticket[]) => void;
}

export const useTicketStore = create<TicketState>((set) => ({
  info: [
    {
      placeId: "2",
      id: 1,
      title: "티켓명1",
      price: 1000,
    },
    {
      placeId: "2",
      id: 2,
      title: "티켓명2",
      price: 1000,
    },
  ],
  setInfo: (info) => set({ info }),
}));
