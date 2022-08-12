import { Quiz } from "api";
import create from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export type Difficulty = "Easy" | "Medium" | "Hard";

type QuizState = {
  count: number;
  difficulty: Difficulty;
  page: number;
  quizzes: Quiz[];
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
      count: 2,
      difficulty: "Easy",
      page: 0,
      quizzes: [],
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
      reset: () => set({ count: 2, difficulty: "Easy", page: 0, quizzes: [] }),
    })),
  ),
);

export default useQuizStore;
