import React from "react";

import styled from "@emotion/styled";
import useQuizStore from "@/hooks/useQuizStore";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-size: 2rem;
  font-weight: 900;
`;

const ProgressContainer = styled.div`
  width: 100%;
  height: 10px;
  background-color: #e5e5e5;
  border-radius: 4px;
`;

const Progress = styled.div<{ percent: number }>`
  width: ${({ percent }) => `${percent}%`};
  height: 10px;
  background-color: #00c896;
  border-radius: 4px;
  transition: 1s ease;
`;

function ProgressBar() {
  const { page, count } = useQuizStore();

  const percent = (page / count) * 100;

  return (
    <Container aria-label="퀴즈 진행상태">
      {page} / {count}
      <ProgressContainer>
        <Progress percent={percent} />
      </ProgressContainer>
    </Container>
  );
}

export default ProgressBar;
