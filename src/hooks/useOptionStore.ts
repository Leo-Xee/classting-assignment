import { Quiz } from "api";
import create from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export type Difficulty = "Easy" | "Medium" | "Hard";

type OptionState = {
  count: number;
  difficulty: Difficulty;
  quizzes: Quiz[];
  setCount: (cnt: number) => void;
  setDifficulty: (diff: Difficulty) => void;
  setQuizzes: (quizList: Quiz[]) => void;
  setAnswer: (id: number, answer: string) => void;
  resetSelectedAnswers: () => void;
  resetOption: () => void;
};

const useOptionStore = create<OptionState>()(
  devtools(
    immer((set) => ({
      count: 2,
      difficulty: "Easy",
      quizzes: [],
      setCount: (cnt) =>
        set((state) => {
          state.count = cnt;
        }),
      setDifficulty: (diff) =>
        set((state) => {
          state.difficulty = diff;
        }),
      setQuizzes: (quizList) =>
        set((state) => {
          state.quizzes = quizList;
        }),
      setAnswer: (id, answer) =>
        set((state) => {
          state.quizzes[id].selected_answer = answer;
        }),
      resetSelectedAnswers: () =>
        set((state) => {
          state.quizzes.forEach((quiz) => {
            quiz.selected_answer = null;
          });
        }),
      resetOption: () =>
        set({
          count: 2,
          difficulty: "Easy",
          quizzes: [],
        }),
    })),
  ),
);

export default useOptionStore;
