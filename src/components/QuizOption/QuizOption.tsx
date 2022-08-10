import React, { useState } from "react";
import Input from "../common/Input";

import Selector from "../common/Selector";

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
    <div>
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
        placeholder="난이도를 선택해주세요."
      />
    </div>
  );
}

export default QuizOption;
