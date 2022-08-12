import React from "react";

import useSWR from "swr";
import quizService from "@/services/quizService";
import QuizView from "@/components/QuizView";
import useQuizStore from "@/hooks/useQuizStore";
import ResultView from "@/components/ResultView";
import filter from "@/utils/filter";
import Spinner from "@/components/common/Spinner";

function QuizPage() {
  const { count, page, difficulty, setQuizzes } = useQuizStore();
  const { isValidating } = useSWR(
    "quiz",
    () => quizService.getQuizzes(count, difficulty),
    { onSuccess: (data) => setQuizzes(filter(data)), revalidateOnFocus: false },
  );

  const isQuizzing = count !== page;

  return (
    <>
      {isValidating ? (
        <Spinner />
      ) : (
        <>{isQuizzing ? <QuizView /> : <ResultView />}</>
      )}
    </>
  );
}

export default QuizPage;
