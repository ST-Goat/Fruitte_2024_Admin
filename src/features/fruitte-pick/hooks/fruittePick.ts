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
  getTicketValue: (
    index: number,
  ) => { title: string; price: string | number } | undefined;
  setTicketValue: (
    index: number,
    value: { title: string; price: string | number },
  ) => void;
  removeTicket: (index: number) => void;
  getOptionValue: (
    index: number,
  ) => { title: string; price: string | number } | undefined;
  setOptionValue: (
    index: number,
    value: { title: string; price: string | number },
  ) => void;
  removeOption: (index: number) => void;
  getProgramValue: (
    index: number,
  ) => { title: string; img: string; description: string } | undefined;
  setProgramValue: (
    index: number,
    value: { title: string; img: string; description: string },
  ) => void;
  removeProgram: (index: number) => void;
}
export const useFruittePickIntroCreateStore = create<FruittePickIntroCreate>(
  (set, get) => ({
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
    getTicketValue: (index: number) => {
      const tickets = get().ticket; // 현재 ticket 배열 가져오기
      return tickets[index] ?? undefined; // 해당 인덱스 값 반환 (범위를 벗어나면 undefined)
    },
    setTicketValue: (index: number, value) => {
      const tickets = get().ticket; // 현재 ticket 배열 가져오기
      const updatedTickets = [...tickets]; // tickets 배열 복사
      updatedTickets[index] = value; // 해당 인덱스 값 변경
      set({ ticket: updatedTickets });
    },
    removeTicket: (index: number) => {
      const tickets = get().ticket; // 현재 티켓 배열 가져오기
      const updatedTickets = tickets.filter((_, i) => i !== index); // 해당 인덱스의 티켓 제거
      set({ ticket: updatedTickets }); // 상태 업데이트
    },
    getOptionValue: (index: number) => {
      const options = get().option; // 현재 ticket 배열 가져오기
      return options[index] ?? undefined; // 해당 인덱스 값 반환 (범위를 벗어나면 undefined)
    },
    setOptionValue: (index: number, value) => {
      const options = get().option; // 현재 ticket 배열 가져오기
      const updatedOptions = [...options]; // tickets 배열 복사
      updatedOptions[index] = value; // 해당 인덱스 값 변경
      set({ option: updatedOptions });
    },
    removeOption: (index: number) => {
      const options = get().option; // 현재 티켓 배열 가져오기
      const updatedOptions = options.filter((_, i) => i !== index); // 해당 인덱스의 티켓 제거
      set({ option: updatedOptions }); // 상태 업데이트
    },
    getProgramValue: (index: number) => {
      const programs = get().program; // 현재 ticket 배열 가져오기
      return programs[index] ?? undefined; // 해당 인덱스 값 반환 (범위를 벗어나면 undefined)
    },
    setProgramValue: (index: number, value) => {
      const programs = get().program; // 현재 ticket 배열 가져오기
      const updatedPrograms = [...programs]; // tickets 배열 복사
      updatedPrograms[index] = value; // 해당 인덱스 값 변경
      set({ program: updatedPrograms });
    },
    removeProgram: (index: number) => {
      const programs = get().program; // 현재 티켓 배열 가져오기
      const updatedPrograms = programs.filter((_, i) => i !== index); // 해당 인덱스의 티켓 제거
      set({ program: updatedPrograms }); // 상태 업데이트
    },
  }),
);

interface TicketDetail {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  setTitle: (title: string) => void;
  price: string;
  setPrice: (price: string) => void;
  reset: () => void;
  setValue: ({ title, price }: { title: string; price: string }) => void;
  getFromIndex: (index: number) => void;
  mode: "create" | "update";
  setMode: (mode: "create" | "update") => void;
  index: number;
  setIndex: (index: number) => void;
}
export const useTicketDetailStore = create<TicketDetail>((set, get) => ({
  open: false,
  setOpen: (open) => {
    get().reset();
    set({ open });
  },
  title: "",
  setTitle: (title) => set({ title }),
  price: "0",
  setPrice: (price) => set({ price }),
  reset: () => set({ open: false, title: "", price: "0", index: undefined }),
  setValue: ({ title, price }) => {
    set({ title, price });
  },
  getFromIndex: (index: number) => {
    const { title, price } = get();
    set({ title: title[index], price: price[index] });
  },
  mode: "create",
  setMode: (mode) => set({ mode }),
  index: 0,
  setIndex: (index) => set({ index }),
}));

interface OptionDetail {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  setTitle: (title: string) => void;
  price: string;
  setPrice: (price: string) => void;
  reset: () => void;
  setValue: ({ title, price }: { title: string; price: string }) => void;
  getFromIndex: (index: number) => void;
  mode: "create" | "update";
  setMode: (mode: "create" | "update") => void;
  index: number;
  setIndex: (index: number) => void;
}
export const useOptionDetailStore = create<OptionDetail>((set, get) => ({
  open: false,
  setOpen: (open) => {
    get().reset();
    set({ open });
  },
  title: "",
  setTitle: (title) => set({ title }),
  price: "0",
  setPrice: (price) => set({ price }),
  reset: () => set({ open: false, title: "", price: "0", index: undefined }),
  setValue: ({ title, price }) => {
    set({ title, price });
  },
  getFromIndex: (index: number) => {
    const { title, price } = get();
    set({ title: title[index], price: price[index] });
  },
  mode: "create",
  setMode: (mode) => set({ mode }),
  index: 0,
  setIndex: (index) => set({ index }),
}));

interface ProgramDetail {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  setTitle: (title: string) => void;
  img: string;
  setImg: (img: string) => void;
  description: string;
  setDescription: (description: string) => void;
  reset: () => void;
  setValue: ({
    title,
    img,
    description,
  }: {
    title: string;
    img: string;
    description: string;
  }) => void;
  getFromIndex: (index: number) => void;
  mode: "create" | "update";
  setMode: (mode: "create" | "update") => void;
  index: number;
  setIndex: (index: number) => void;
}
export const useProgramDetailStore = create<ProgramDetail>((set, get) => ({
  open: false,
  setOpen: (open) => {
    get().reset();
    set({ open });
  },
  title: "",
  setTitle: (title) => set({ title }),
  img: "0",
  setImg: (img) => set({ img }),
  description: "",
  setDescription: (description) => set({ description }),
  reset: () =>
    set({ open: false, title: "", img: "", description: "", index: undefined }),
  setValue: ({ title, img, description }) => {
    set({ title, img, description });
  },
  getFromIndex: (index: number) => {
    const { title, img, description } = get();
    set({
      title: title[index],
      img: img[index],
      description: description[index],
    });
  },
  mode: "create",
  setMode: (mode) => set({ mode }),
  index: 0,
  setIndex: (index) => set({ index }),
}));
