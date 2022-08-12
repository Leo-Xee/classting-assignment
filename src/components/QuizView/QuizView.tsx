import React, { useEffect, useState } from "react";

import useQuizStore from "@/hooks/useQuizStore";
import Button from "@/components/common/Button";
import ProgressBar from "../ProgressBar";
import * as S from "./QuizView.style";

function QuizView() {
  const [isSelected, setIsSelected] = useState(false);
  const { page, setPage, quizzes, setAnswer } = useQuizStore();

  useEffect(() => {
    setIsSelected(false);
  }, [page]);

  const handleClick = (choice: string) => {
    setIsSelected(true);
    setAnswer(page, choice);
  };

  const currentQuiz = quizzes[page];
  const answer = quizzes[page].correct_answer;
  const selected = quizzes[page].selected_answer;

  return (
    <S.Container>
      <S.QuizBox>
        <ProgressBar />
        <S.Question>{currentQuiz.question}</S.Question>
        <ul>
          {currentQuiz.choices.map((choice, idx) => (
            <li key={idx}>
              <S.Choice
                disabled={isSelected}
                isSelectedChoice={choice === selected}
                isAnswer={choice === answer}
                onClick={() => handleClick(choice)}
              >
                {choice}
              </S.Choice>
            </li>
          ))}
        </ul>
      </S.QuizBox>
      <Button disabled={!isSelected} onClick={() => setPage(page + 1)}>
        다음 문제로
      </Button>
    </S.Container>
  );
}

export default QuizView;
