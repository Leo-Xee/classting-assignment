import styled from "@emotion/styled";

type ChoiceProps = {
  isAnswer: boolean;
  isSelectedChoice: boolean;
};

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const QuizBox = styled.div`
  padding-top: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;

  & ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const Question = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 220px;
  padding: 0 30px;
  background-color: #ade1aa;
  border-radius: 10px;
  font-size: 2.2rem;
`;

export const Choice = styled.button<ChoiceProps>`
  width: 100%;
  padding: 14px 6px;
  border-radius: 10px;
  font-size: 2rem;
  background-color: ${({ isAnswer, isSelectedChoice }) => {
    if (isSelectedChoice) {
      if (isAnswer) {
        return "#D4EDDB";
      }
      return "#F9D5DC";
    }
    return "#F4F4F4";
  }};
`;
