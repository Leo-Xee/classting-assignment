import React from "react";

import * as S from "./Spnner.style";

function Spinner() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Spin>
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="spin-dot" />
          ))}
        </S.Spin>
        <S.Message>문제를 불러오는 중이예요..</S.Message>
      </S.Container>
    </S.Wrapper>
  );
}

export default Spinner;
