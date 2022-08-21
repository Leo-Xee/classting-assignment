import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/common/Button";
import useQuizStore from "@/hooks/useQuizStore";
import * as S from "./ResultView.style";
import Chart from "@/components/Chart";
import calcResult from "@/utils/calcResult";
import useOptionStore from "@/hooks/useOptionStore";

function ResultView() {
  const navigate = useNavigate();
  const { startTime, endTime, startReadMode, resetQuiz } = useQuizStore();
  const { quizzes, resetSelectedAnswers } = useOptionStore();

  const { win, lose } = calcResult(quizzes);
  const duration = ((endTime - startTime) / 1000).toFixed(1);

  const handleRestart = () => {
    resetQuiz();
    resetSelectedAnswers();
  };

  const handleReadMode = () => {
    startReadMode();
  };

  const handleReset = () => {
    navigate("/");
    resetQuiz();
  };

  return (
    <S.Container>
      <S.Heading>퀴즈 결과</S.Heading>
      <S.DashBoard>
        <Chart width="220px" result={[win, lose]} />
        <S.Answer>
          <S.Content>
            <S.Label>맞힌 문제</S.Label>
            <S.Value>{win}개</S.Value>
          </S.Content>
          <S.Content>
            <S.Label>틀린 문제</S.Label>
            <S.Value>{lose}개</S.Value>
          </S.Content>
        </S.Answer>
        <S.Content>
          <S.Label>퀴즈 풀이에 걸린 시간</S.Label>
          <S.Value>{duration}초</S.Value>
        </S.Content>
        <Button width="50%" styleType="text" onClick={handleRestart}>
          다시하기
        </Button>
      </S.DashBoard>
      <S.ButtonContainer>
        <Button
          width="calc(50% - 5px)"
          styleType="border"
          onClick={handleReadMode}
        >
          오답노트
        </Button>
        <Button
          width="calc(50% - 5px)"
          styleType="primary"
          onClick={handleReset}
        >
          홈으로
        </Button>
      </S.ButtonContainer>
    </S.Container>
  );
}

export default ResultView;
