declare module "api" {
  export type QuizResponse = {
    response_code: number;
    results: {
      category: string;
      type: string;
      difficulty: string;
      question: string;
      correct_answer: string;
      incorrect_answers: string[];
    }[];
  };

  export type Quiz = {
    category: string;
    question: string;
    choices: string[];
    correctAnswer: string;
    selectedAnswer: string | null;
  };
}
