import { Quiz, QuizResponse } from "api";

const shuffle = (arr: string[]): string[] => {
  const shuffled = [];

  while (arr.length > 0) {
    const random = Math.floor(Math.random() * arr.length);
    const spliceArray = arr.splice(random, 1);
    const value = spliceArray[0];
    shuffled.push(value);
  }

  return shuffled;
};

const filter = (data: QuizResponse): Quiz[] => {
  const quizzes = data.results.map((quiz) => ({
    category: quiz.category,
    question: quiz.question,
    choices: shuffle([...quiz.incorrect_answers, quiz.correct_answer]),
    correct_answer: quiz.correct_answer,
    selected_answer: null,
  }));
  return quizzes;
};

export default filter;
