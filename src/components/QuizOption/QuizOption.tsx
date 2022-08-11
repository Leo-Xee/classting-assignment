import styled from "@emotion/styled";
import React from "react";

import useQuizStore, { Difficulty } from "@/hooks/useQuizState";
import Input from "../common/Input";
import Selector from "../common/Selector";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function QuizOption() {
  const { count, setCount, difficulty, setDifficulty } = useQuizStore();
  const difficulties = ["Easy", "Medium", "Hard"];

  const onSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(e.target.value as Difficulty);
  };

  const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(e.target.value));
  };

  return (
    <Container>
      <Input
        type="number"
        label="문제 개수"
        value={count}
        min={2}
        max={50}
        onChange={onInputHandler}
      />
      <Selector
        label="문제 난이도"
        options={difficulties}
        value={difficulty}
        onChange={onSelectHandler}
      />
    </Container>
  );
}

export default QuizOption;
