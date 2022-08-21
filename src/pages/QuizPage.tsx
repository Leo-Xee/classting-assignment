import React from "react";

import QuizView from "@/components/QuizView";
import useQuizStore from "@/hooks/useQuizStore";
import ResultView from "@/components/ResultView";
import Spinner from "@/components/common/Spinner";
import useGetQuizzes from "@/hooks/useGetQuizzes";

function QuizPage() {
  const { count, page, difficulty } = useQuizStore();
  const { isValidating } = useGetQuizzes(count, difficulty);

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
