import styled from "@emotion/styled";
import React, { useState } from "react";

import Input from "../common/Input";
import Selector from "../common/Selector";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function QuizOption() {
  const [number, setNumber] = useState(2);
  const [selected, setSelected] = useState("");

  const difficulties = ["Easy", "Medium", "Hard"];

  const onSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: 유효성 검사 추가
    setNumber(Number(e.target.value));
  };

  return (
    <Container>
      <Input
        type="number"
        label="문제 개수"
        value={number}
        min={2}
        max={50}
        onChange={onInputHandler}
      />
      <Selector
        label="문제 난이도"
        options={difficulties}
        value={selected}
        onChange={onSelectHandler}
      />
    </Container>
  );
}

export default QuizOption;
