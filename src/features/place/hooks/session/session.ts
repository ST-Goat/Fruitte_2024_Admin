import { create } from "zustand";
import * as i from "../../types/session/api";
import * as fd from "@/lib/formatDate";
import moment from "moment";

type SessionDetail = {
  date: string;
  time: string;
  sessionMode: "ticket" | "session"; // sessionMode는 'ticket' 또는 'session'
  sessionTime: Date;
  totalStock?: string; // 'session' 모드일 때만 존재
  remainingStock?: string; // 'session' 모드일 때만 존재
};

interface SessionState {
  info: i.Session[];
  setInfo: (info: i.Session[]) => void;
  selectedRow: i.Session[];
  setSelectedRow: (selectedRow: i.Session[]) => void; // 배열로 변경
}

export const useSessionStore = create<SessionState>((set) => ({
  info: [
    {
      placeId: "2",
      id: 1,
      mode: "session",
      sessionDate: new Date(),
      sessionTime: new Date(),
      totalStock: 100,
      remainingStock: 100,
      exposed: true,
    },
    {
      placeId: "2",
      id: 2,
      mode: "ticket",
      sessionDate: new Date(),
      sessionTime: new Date(),
      totalStock: 0,
      remainingStock: 0,
      exposed: false,
    },
  ],
  setInfo: (info) => set({ info }),
  selectedRow: [],
  setSelectedRow: (selectedRow) => set({ selectedRow }), // 상태를 배열로 처리
}));

type mode = "create" | "update";

interface SessionPopupState {
  mode: mode;
  setMode: (mode: mode) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  id: number | undefined;
  setId: (id: number | undefined) => void;
  sessionMode: i.sesssionMode;
  setSessionMode: (sessionMode: i.sesssionMode) => void;
  sessionDate: Date;
  setSessionDate: (sessionDate: Date) => void;
  sessionTime: Date;
  setSessionTime: (sessionTime: Date) => void;
  totalStock: string;
  setTotalStock: (totalStock: string) => void;
  remainingStock: string;
  setRemainingStock: (remainingStock: string) => void;
  exposed: boolean;
  setExposed: (exposed: boolean) => void;
  setValueForUpdate: (id: number, Sessions: i.Session[]) => void;
  setValueForCreate: () => void;
}

export const useSessionPopupStore = create<SessionPopupState>((set, get) => ({
  mode: "create",
  setMode: (mode) => set({ mode }),
  open: false,
  setOpen: (open) => {
    set({ open });
  },
  id: undefined,
  setId: (id) => set({ id }),
  sessionMode: "session",
  setSessionMode: (sessionMode) => set({ sessionMode }),
  sessionDate: new Date(),
  setSessionDate: (sessionDate) => set({ sessionDate }),
  sessionTime: new Date(),
  setSessionTime: (sessionTime) => set({ sessionTime }),
  totalStock: "0",
  setTotalStock: (totalStock) => set({ totalStock }),
  remainingStock: "0",
  setRemainingStock: (remainingStock) => set({ remainingStock }),
  exposed: false,
  setExposed: (exposed) => set({ exposed }),
  setValueForUpdate: (id, Sessions) => {
    const info = Sessions.find((item) => item.id === id);
    console.log(info);

    set({
      open: true,
      mode: "update",
      id: info?.id,
      sessionMode: info?.mode,
      sessionDate: fd.formatStringDate(info?.sessionDate as Date),
      sessionTime: fd.formatStringTime(info?.sessionTime as Date),
      totalStock: String(info?.totalStock),
      remainingStock: String(info?.remainingStock),
      exposed: info?.exposed,
    });
  },
  setValueForCreate: () => {
    set({
      open: true,
      mode: "create",
      id: undefined,
      sessionMode: "ticket",
      sessionDate: new Date(),
      sessionTime: new Date(),
      totalStock: "0",
      remainingStock: "0",
    });
  },
}));

interface SessionMultipleCreatePopupState {
  mode: mode;
  setMode: (mode: mode) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  id: number | undefined;
  setId: (id: number | undefined) => void;
  sessionMode: i.sesssionMode;
  setSessionMode: (sessionMode: i.sesssionMode) => void;
  sessionStartDate: Date;
  setSessionStartDate: (sessionDate: Date) => void;
  sessionEndDate: Date;
  setSessionEndDate: (sessionDate: Date) => void;
  sessionTime: Date;
  setSessionTime: (sessionTime: Date) => void;
  sessionTimes: Date[];
  setSessionTimes: (sessionTime: Date) => void;
  deleteSessionTime: (sessionTime: Date) => void;
  totalStock: string;
  setTotalStock: (totalStock: string) => void;
  remainingStock: string;
  setRemainingStock: (remainingStock: string) => void;
  exposed: boolean;
  setExposed: (exposed: boolean) => void;
  setValueForCreate: () => void;
  selectedDays: string[]; // 선택된 요일 추가
  setSelectedDays: (selectedDay: string) => void; // 선택된 요일을 설정하는 함수 추가
  getSessionArray: (placeId: string) => i.CreateSessionRequest[];
}

export const useSessionMultipleCreatePopupStore =
  create<SessionMultipleCreatePopupState>((set, get) => ({
    mode: "create",
    setMode: (mode) => set({ mode }),
    open: false,
    setOpen: (open) => {
      set({ open });
    },
    id: undefined,
    setId: (id) => set({ id }),
    sessionMode: "ticket",
    setSessionMode: (sessionMode) => set({ sessionMode }),
    sessionStartDate: new Date(),
    setSessionStartDate: (sessionStartDate) => set({ sessionStartDate }),
    sessionEndDate: new Date(),
    setSessionEndDate: (sessionEndDate) => set({ sessionEndDate }),
    sessionTime: new Date(),
    setSessionTime: (sessionTime) => set({ sessionTime }),
    sessionTimes: [],
    setSessionTimes: (sessionTime) => {
      const sessionTimes = get().sessionTimes;
      if (!sessionTimes.some((time) => time === sessionTime)) {
        set({ sessionTimes: [...sessionTimes, sessionTime] });
      }
    },
    deleteSessionTime: (sessionTime) => {
      const sessionTimes = get().sessionTimes;
      set({
        sessionTimes: sessionTimes.filter((time) => time !== sessionTime),
      });
    },
    selectedDays: [],
    setSelectedDays: (selectedDay) => {
      const selectedDays = get().selectedDays;
      if (!selectedDays.some((day) => day === selectedDay)) {
        set({ selectedDays: [...selectedDays, selectedDay] });
      } else {
        set({
          selectedDays: selectedDays.filter((day) => day !== selectedDay),
        });
      }
    },
    totalStock: "0",
    setTotalStock: (totalStock) => set({ totalStock }),
    remainingStock: "0",
    setRemainingStock: (remainingStock) => set({ remainingStock }),
    exposed: false,
    setExposed: (exposed) => set({ exposed }),
    setValueForCreate: () => {
      set({
        open: true,
        mode: "create",
        id: undefined,
        sessionMode: "ticket",
        sessionStartDate: new Date(),
        sessionEndDate: new Date(),
        sessionTime: new Date(),
        sessionTimes: [],
        totalStock: "0",
        remainingStock: "0",
      });
    },
    getSessionArray: (placeId) => {
      const {
        sessionStartDate,
        sessionEndDate,
        sessionTimes,
        selectedDays,
        sessionMode,
        totalStock,
        remainingStock,
        exposed,
      } = get();

      if (sessionTimes?.length === 0 || selectedDays?.length === 0) {
        return [];
      }

      // 시작일과 종료일 사이 날짜 구하기
      const dateArray = [];
      const startDate = moment(sessionStartDate);
      const endDate = moment(sessionEndDate);

      // 시작일을 포함하여 종료일까지 반복하며 날짜 배열 생성
      let currentDate = startDate.clone();
      while (currentDate.isSameOrBefore(endDate, "day")) {
        dateArray.push(currentDate.clone()); // 날짜 추가
        currentDate.add(1, "day"); // 하루씩 더함
      }

      // 요일에 해당하는 날짜 필터링
      const daysOfWeek: Record<string, number> = {
        mon: 1,
        tue: 2,
        wed: 3,
        thu: 4,
        fri: 5,
        sat: 6,
        sun: 0,
      };

      const filteredDates = dateArray?.filter((date) => {
        const dayOfWeek = date?.day(); // moment에서 요일을 숫자로 가져옵니다.
        return selectedDays?.some((day) => daysOfWeek[day] === dayOfWeek);
      });

      // 날짜와 시간을 조합하여 세션 배열 생성
      const sessionArray = filteredDates.flatMap((date) => {
        return sessionTimes.map((sessionTime) => {
          const formattedDate = date.format("YYYY-MM-DD"); // "yyyy-mm-dd" 형식으로 변환
          const formattedTime = moment(sessionTime).format("HH:mm"); // "HH:mm" 형식으로 변환

          const sessionDetail = {
            mode: sessionMode,
            placeId,
            sessionDate: formattedDate,
            sessionTime: formattedTime,
            totalStock: 0,
            remainingStock: 0,
            exposed,
          };

          if (sessionMode === "session") {
            // 회차 모드일 경우 총재고와 남은재고 추가
            sessionDetail["totalStock"] = Number(totalStock);
            sessionDetail["remainingStock"] = Number(remainingStock);
          }

          return sessionDetail;
        });
      });

      return sessionArray;
    },
  }));
