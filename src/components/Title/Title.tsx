import React from "react";

import styled from "@emotion/styled";
import Logo from "@/assets/logo.png";

const Heading = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-size: 4rem;
  font-weight: 900;

  & img {
    width: 100px;
    height: 100px;
  }
`;

function Title() {
  return (
    <Heading>
      <img src={Logo} alt="클래스팅 로고" />
      클래스팅 퀴즈
    </Heading>
  );
}

export default Title;
