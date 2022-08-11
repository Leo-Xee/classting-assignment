import React, { useEffect } from "react";

import quizService from "@/services/quizService";
import QuizView from "@/components/QuizView";
import filter from "@/utils/filter";
import useQuizStore from "@/hooks/useQuizState";

function QuizPage() {
  const { count, difficulty, setQuizzes } = useQuizStore();

  useEffect(() => {
    const getQuizzes = async () => {
      const data = await quizService.getQuizzes(count, difficulty);
      setQuizzes(filter(data));
    };
    getQuizzes();
  }, [count, difficulty, setQuizzes]);

  return (
    <div>
      <QuizView />
    </div>
  );
}

export default QuizPage;
