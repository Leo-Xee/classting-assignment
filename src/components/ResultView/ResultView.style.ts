import styled from "@emotion/styled";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h1`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 4rem;
  font-weight: 900;
`;

export const DashBoard = styled.div`
  flex: 8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Answer = styled.div`
  display: flex;
  gap: 50px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.div`
  font-size: 2.4rem;
  font-weight: 900;
`;

export const Value = styled.div`
  font-size: 3rem;
  font-weight: 900;
`;

export const ButtonContainer = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: space-between;
`;
