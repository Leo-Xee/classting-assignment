import { Quiz } from "api";

const calcResult = (quizData: Quiz[]) => {
  let win = 0;
  let lose = 0;

  quizData.forEach((quiz) => {
    if (quiz.correctAnswer === quiz.selectedAnswer) {
      win += 1;
    } else {
      lose += 1;
    }
  });
  return { win, lose };
};

export default calcResult;
