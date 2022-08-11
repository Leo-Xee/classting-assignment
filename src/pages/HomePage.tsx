import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import Button from "@/components/common/Button";
import Title from "@/components/Title";
import QuizOption from "@/components/QuizOption";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  & h1 {
    flex: 7;
    display: flex;
    justify-content: center;
  }
`;

const Control = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

function HomePage() {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/quiz");
  };

  return (
    <Container>
      <Title />
      <Control>
        <QuizOption />
        <Button onClick={onClickHandler}>시작하기</Button>
      </Control>
    </Container>
  );
}

export default HomePage;
