import useSWR from "swr";

import useOptionStore, { Difficulty } from "@/hooks/useOptionStore";
import quizService from "@/services/quizService";
import filter from "@/utils/filter";

function useGetQuizzes(count: number, difficulty: Difficulty) {
  const { setQuizzes } = useOptionStore();

  const { isValidating } = useSWR(
    "quiz",
    () => quizService.getQuizzes(count, difficulty),
    { onSuccess: (data) => setQuizzes(filter(data)), revalidateOnFocus: false },
  );

  return { isValidating };
}

export default useGetQuizzes;
