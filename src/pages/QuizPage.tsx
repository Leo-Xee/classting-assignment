import React from "react";

import useSWR from "swr";
import quizService from "@/services/quizService";
import QuizView from "@/components/QuizView";
import useQuizStore from "@/hooks/useQuizState";
import ResultView from "@/components/ResultView";
import filter from "@/utils/filter";

function QuizPage() {
  const { count, page, difficulty, setQuizzes } = useQuizStore();
  const { isValidating } = useSWR(
    "quiz",
    () => quizService.getQuizzes(count, difficulty),
    { onSuccess: (data) => setQuizzes(filter(data)), revalidateOnFocus: false },
  );

  const isQuizzing = count >= page;

  if (isValidating) return <div>Loading</div>;

  return <div>{isQuizzing ? <QuizView /> : <ResultView />}</div>;
}

export default QuizPage;
