import styled from "@emotion/styled";

export const Container = styled.div<{ width: string }>`
  position: relative;
  width: ${({ width }) => width};
`;

export const Percent = styled.div`
  position: absolute;
  font-size: 2.2rem;
  font-weight: 900;
  top: 45%;
  left: 40%;
`;
