import React from "react";
import useSWR from "swr";
import quizService from "@/services/quizService";
import useQuizStore, { Difficulty } from "./useQuizStore";
import filter from "@/utils/filter";

function useGetQuizzes(count: number, difficulty: Difficulty) {
  const { setQuizzes } = useQuizStore();

  const { isValidating } = useSWR(
    "quiz",
    () => quizService.getQuizzes(count, difficulty),
    { onSuccess: (data) => setQuizzes(filter(data)), revalidateOnFocus: false },
  );

  return { isValidating };
}

export default useGetQuizzes;
