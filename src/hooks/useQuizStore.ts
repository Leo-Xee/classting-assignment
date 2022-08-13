import { Quiz } from "api";
import create from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export type Difficulty = "Easy" | "Medium" | "Hard";

type QuizState = {
  isReadMode: boolean;
  startTime: number;
  endTime: number;
  count: number;
  difficulty: Difficulty;
  page: number;
  quizzes: Quiz[];
  setIsReadMode: (bool: boolean) => void;
  setStartTime: (time: number) => void;
  setEndTime: (time: number) => void;
  setCount: (cnt: number) => void;
  setDifficulty: (diff: Difficulty) => void;
  setPage: (pageNumber: number) => void;
  setQuizzes: (quizList: Quiz[]) => void;
  setAnswer: (id: number, answer: string) => void;
  resetAnswers: () => void;
  reset: () => void;
};

const useQuizStore = create<QuizState>()(
  devtools(
    immer((set) => ({
      isReadMode: false,
      startTime: 0,
      endTime: 0,
      count: 2,
      difficulty: "Easy",
      page: 0,
      quizzes: [],
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
      setCount: (cnt) =>
        set((state) => {
          state.count = cnt;
        }),
      setDifficulty: (diff) =>
        set((state) => {
          state.difficulty = diff;
        }),
      setPage: (pageNumber) =>
        set((state) => {
          state.page = pageNumber;
        }),
      setQuizzes: (quizList) =>
        set((state) => {
          state.quizzes = quizList;
        }),
      setAnswer: (id, answer) =>
        set((state) => {
          state.quizzes[id].selected_answer = answer;
        }),
      resetAnswers: () =>
        set((state) => {
          state.quizzes.forEach((quiz) => {
            quiz.selected_answer = null;
          });
        }),
      reset: () =>
        set({
          isReadMode: false,
          startTime: 0,
          endTime: 0,
          count: 2,
          difficulty: "Easy",
          page: 0,
          quizzes: [],
        }),
    })),
  ),
);

export default useQuizStore;
