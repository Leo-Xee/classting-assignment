import React, { useEffect } from "react";

import quizService from "@/services/quizService";
import QuizView from "@/components/QuizView";
import filter from "@/utils/filter";
import useQuizStore from "@/hooks/useQuizState";
import ResultView from "@/components/ResultView";

function QuizPage() {
  const { count, page, difficulty, setQuizzes } = useQuizStore();

  useEffect(() => {
    const getQuizzes = async () => {
      const data = await quizService.getQuizzes(count, difficulty);
      setQuizzes(filter(data));
    };
    getQuizzes();
  }, [count, difficulty, setQuizzes]);

  const isQuizzing = count >= page;

  return <div>{isQuizzing ? <QuizView /> : <ResultView />}</div>;
}

export default QuizPage;
