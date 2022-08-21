import create from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type QuizState = {
  isReadMode: boolean;
  startTime: number;
  endTime: number;
  page: number;
  setIsReadMode: (bool: boolean) => void;
  setStartTime: (time: number) => void;
  setEndTime: (time: number) => void;
  setPage: (pageNumber: number) => void;
  startReadMode: () => void;
  resetQuiz: () => void;
};

const useQuizStore = create<QuizState>()(
  devtools(
    immer((set) => ({
      isReadMode: false,
      startTime: 0,
      endTime: 0,
      page: 0,
      setIsReadMode: (bool) =>
        set((state) => {
          state.isReadMode = bool;
        }),
      setStartTime: (time) =>
        set((state) => {
          state.startTime = time;
        }),
      setEndTime: (time) =>
        set((state) => {
          state.endTime = time;
        }),
      setPage: (pageNumber) =>
        set((state) => {
          state.page = pageNumber;
        }),
      startReadMode: () =>
        set((state) => {
          state.page = 0;
          state.isReadMode = true;
        }),
      resetQuiz: () =>
        set({
          isReadMode: false,
          startTime: 0,
          endTime: 0,
          page: 0,
        }),
    })),
  ),
);

export default useQuizStore;
