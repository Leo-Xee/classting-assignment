import { Quiz } from "api";
import create from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export type Difficulty = "Easy" | "Medium" | "Hard";

type QuizState = {
  startTime: number;
  endTime: number;
  count: number;
  difficulty: Difficulty;
  page: number;
  quizzes: Quiz[];
  setStartTime: (time: number) => void;
  setEndTime: (time: number) => void;
  setCount: (cnt: number) => void;
  setDifficulty: (diff: Difficulty) => void;
  setPage: (pg: number) => void;
  setQuizzes: (q: Quiz[]) => void;
  setAnswer: (id: number, ans: string) => void;
  reset: () => void;
};

const useQuizStore = create<QuizState>()(
  devtools(
    immer((set) => ({
      startTime: 0,
      endTime: 0,
      count: 2,
      difficulty: "Easy",
      page: 0,
      quizzes: [],
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
      setPage: (pg) =>
        set((state) => {
          state.page = pg;
        }),
      setQuizzes: (q) =>
        set((state) => {
          state.quizzes = q;
        }),
      setAnswer: (id, ans) =>
        set((state) => {
          state.quizzes[id].selected_answer = ans;
        }),
      reset: () =>
        set({
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
