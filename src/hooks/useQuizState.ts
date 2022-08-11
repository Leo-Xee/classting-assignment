import { Quiz } from "api";
import create from "zustand";
import { devtools } from "zustand/middleware";

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
};

const useQuizStore = create<QuizState>()(
  devtools((set) => ({
    count: 2,
    difficulty: "Easy",
    page: 1,
    quizzes: [],
    setCount: (cnt) => set((state) => ({ ...state, count: cnt })),
    setDifficulty: (diff) => set((state) => ({ ...state, difficulty: diff })),
    setPage: (pg) => set((state) => ({ ...state, page: pg })),
    setQuizzes: (q) => set((state) => ({ ...state, quizzes: [...q] })),
  })),
);

export default useQuizStore;
