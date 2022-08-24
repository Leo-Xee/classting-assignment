import styled from "@emotion/styled";

export const Container = styled.div<{ width: string }>`
  position: relative;
  width: ${({ width }) => width};
`;

export const Percent = styled.div`
  position: absolute;
  width: 70px;
  text-align: center;
  font-size: 2.4rem;
  font-weight: 900;
  top: 45%;
  left: calc(50% - 35px);
`;
