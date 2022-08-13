import React, { useEffect, useState } from "react";

import useQuizStore from "@/hooks/useQuizStore";
import Button from "@/components/common/Button";
import ProgressBar from "../ProgressBar";
import * as S from "./QuizView.style";

function QuizView() {
  const [isSelected, setIsSelected] = useState(false);
  const {
    count,
    page,
    setPage,
    quizzes,
    setAnswer,
    setStartTime,
    setEndTime,
    isReadMode,
  } = useQuizStore();

  useEffect(() => {
    if (page === 0 && !isReadMode) setStartTime(Date.now());
    setIsSelected(false);
  }, [page, setStartTime, isReadMode]);

  const currentQuiz = quizzes[page];
  const answer = quizzes[page].correct_answer;
  const selected = quizzes[page].selected_answer;
  const isLastQuiz = page === count - 1;

  const handleClick = (choice: string) => {
    setIsSelected(true);
    setAnswer(page, choice);
    if (isLastQuiz) setEndTime(Date.now());
  };

  return (
    <S.Container>
      <S.QuizBox>
        <ProgressBar />
        <S.Question>{currentQuiz.question}</S.Question>
        <ul>
          {currentQuiz.choices.map((choice, idx) => (
            <li key={idx}>
              <S.Choice
                disabled={isReadMode ? true : isSelected}
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
      <Button
        styleType="primary"
        disabled={isReadMode ? false : !isSelected}
        onClick={() => setPage(page + 1)}
      >
        {isLastQuiz ? "결과 보기" : "다음 문제"}
      </Button>
    </S.Container>
  );
}

export default QuizView;
