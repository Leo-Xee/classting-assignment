import { QuizResponse } from "api";
import { Difficulty } from "@/hooks/useQuizStore";
import fetcher from "@/utils/fetcher";

const quizService = {
  getQuizzes: async (count: number, difficulty: Difficulty) => {
    const data = await fetcher<QuizResponse>(
      "get",
      `?amount=${count}&difficulty=${difficulty.toLowerCase()}&type=multiple`,
    );
    return data;
  },
};

export default quizService;
