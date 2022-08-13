import { Quiz } from "api";

const calcResult = (quizData: Quiz[]) => {
  let win = 0;
  let lose = 0;

  quizData.forEach((quiz) => {
    if (quiz.correct_answer === quiz.selected_answer) {
      win += 1;
    }
    lose += 1;
  });
  return { win, lose };
};

export default calcResult;
