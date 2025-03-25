import { create } from "zustand";
import * as i from "../../types/session-ticket/api";
import * as fd from "@/lib/formatDate";
type mode = "create" | "update";

interface SessionTicketState {
  info: i.SessionTicketTable[];
  setInfo: (info: i.SessionTicketTable[]) => void;
  selectedRow: i.SessionTicketTable[];
  setSelectedRow: (selectedRow: i.SessionTicketTable[]) => void; // 배열로 변경
}

export const useSessionTicketStore = create<SessionTicketState>((set) => ({
  info: [],
  setInfo: (info) => set({ info }),
  selectedRow: [],
  setSelectedRow: (selectedRow) => set({ selectedRow }), // 상태를 배열로 처리
}));

interface SessionTicketPopupState {
  mode: mode;
  setMode: (mode: mode) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  id: number | undefined;
  setId: (id: number | undefined) => void;
  sessionId?: string;
  setSessionId: (sessionId: string) => void;
  ticketId: string;
  setTicketId: (ticketId: string) => void;
  maxSelectable: string;
  setMaxSelectable: (maxSelectable: string) => void;
  minRequired: string;
  setMinRequired: (minRequired: string) => void;
  stockThreshold: string;
  setStockThreshold: (stockThreshold: string) => void;
  totalStock: string;
  setTotalStock: (totalStock: string) => void;
  remainingStock: string;
  setRemainingStock: (remainingStock: string) => void;
  setValueForUpdate: (id: number, Sessions: i.SessionTicketTable[]) => void;
  setValueForCreate: () => void;
}

export const useSessionTicketPopupStore = create<SessionTicketPopupState>(
  (set, get) => ({
    mode: "create",
    setMode: (mode) => set({ mode }),
    open: false,
    setOpen: (open) => {
      set({ open });
    },
    id: undefined,
    setId: (id) => set({ id }),
    sessionId: "",
    setSessionId: (sessionId) => set({ sessionId }),
    ticketId: "",
    setTicketId: (ticketId) => set({ ticketId }),
    maxSelectable: "0",
    setMaxSelectable: (maxSelectable) => set({ maxSelectable }),
    minRequired: "0",
    setMinRequired: (minRequired) => set({ minRequired }),
    stockThreshold: "0",
    setStockThreshold: (stockThreshold) => set({ stockThreshold }),
    totalStock: "0",
    setTotalStock: (totalStock) => set({ totalStock }),
    remainingStock: "0",
    setRemainingStock: (remainingStock) => set({ remainingStock }),
    setValueForUpdate: (id, SessionTickets) => {
      const info = SessionTickets.find((item) => item.id === id);
      set({
        open: true,
        mode: "update",
        id: info?.id,
        sessionId: String(info?.sessionId),
        ticketId: String(info?.ticketId),
        maxSelectable: String(info?.maxSelectable),
        minRequired: String(info?.minRequired),
        stockThreshold: String(info?.stockThreshold),
        totalStock: String(info?.totalStock),
        remainingStock: String(info?.remainingStock),
      });
    },
    setValueForCreate: () => {
      set({
        open: true,
        mode: "create",
        id: undefined,
        sessionId: "",
        ticketId: "",
        maxSelectable: "0",
        minRequired: "0",
        stockThreshold: "0",
        totalStock: "0",
        remainingStock: "0",
      });
    },
  }),
);
