import { Difficulty } from "@/hooks/useQuizState";
import fetcher from "@/utils/fetcher";

const quizService = {
  getQuizzes: async (count: number, difficulty: Difficulty) => {
    const data = await fetcher(
      "get",
      `?amount=${count}&difficulty=${difficulty.toLowerCase()}&type=multiple`,
    );
    return data;
  },
};

export default quizService;
