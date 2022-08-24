import { Quiz } from "api";

const getCurrentQuiz = (currentPage: number, quizzes: Quiz[]) => {
  const { question, choices, correctAnswer, selectedAnswer, category } = quizzes[currentPage];

  return {
    question,
    choices,
    correctAnswer,
    selectedAnswer,
    category,
  };
};

export default getCurrentQuiz;
