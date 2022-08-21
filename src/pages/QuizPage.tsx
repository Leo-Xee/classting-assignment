import React from "react";

import QuizView from "@/components/QuizView";
import useQuizStore from "@/hooks/useQuizStore";
import ResultView from "@/components/ResultView";
import Spinner from "@/components/common/Spinner";
import useGetQuizzes from "@/hooks/useGetQuizzes";
import useOptionStore from "@/hooks/useOptionStore";

function QuizPage() {
  const { page } = useQuizStore();
  const { count, difficulty } = useOptionStore();
  const { isValidating } = useGetQuizzes(count, difficulty);

  if (isValidating) return <Spinner />;

  const isQuizzing = count !== page;

  return isQuizzing ? <QuizView /> : <ResultView />;
}

export default QuizPage;
