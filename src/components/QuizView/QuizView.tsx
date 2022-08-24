import React, { useEffect, useState } from "react";

import useQuizStore from "@/hooks/useQuizStore";
import Button from "@/components/common/Button";
import ProgressBar from "../ProgressBar";
import * as S from "./QuizView.style";
import useOptionStore from "@/hooks/useOptionStore";
import getCurrentQuiz from "@/utils/getCurrentQuiz";

function QuizView() {
  const [isSelected, setIsSelected] = useState(false);

  const { count, quizzes, setAnswer } = useOptionStore();
  const { page, setPage, setStartTime, setEndTime, isReadMode } = useQuizStore();

  const { question, choices, correctAnswer, selectedAnswer } = getCurrentQuiz(page, quizzes);

  useEffect(() => {
    if (page === 0 && !isReadMode) setStartTime(Date.now());
    setIsSelected(false);
  }, [page, setStartTime, isReadMode]);

  const isLastQuiz = page === count - 1;

  const handleClick = (choice: string) => {
    if (isLastQuiz) setEndTime(Date.now());
    setIsSelected(true);
    setAnswer(page, choice);
  };

  return (
    <S.Container>
      <S.QuizBox>
        <ProgressBar />
        <S.Question aria-labelledby="퀴즈 문제">{question}</S.Question>
        <ul>
          {choices.map((choice, idx) => (
            <li key={idx} aria-labelledby={`${idx + 1}번 선택지`}>
              <S.Choice
                disabled={isReadMode ? true : isSelected}
                isSelectedChoice={choice === selectedAnswer}
                isAnswer={choice === correctAnswer}
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
