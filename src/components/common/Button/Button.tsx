import styled from "@emotion/styled";
import { darken, lighten } from "polished";
import React from "react";

type Props = {
  children: React.ReactNode;
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  bgColor?: string;
  disabled?: boolean;
};

const ButtonBase = styled.button<Pick<Props, "bgColor">>`
  width: 100%;
  height: 70px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 10px;
  font-size: 2.4rem;
  font-weight: 900;
  color: #fff;

  &:hover {
    background-color: ${({ bgColor }) => lighten(0.03, `${bgColor}`)};
  }

  &:active {
    background-color: ${({ bgColor }) => darken(0.03, `${bgColor}`)};
  }

  &:disabled {
    background-color: #ced4da;
  }
`;

function Button({ children, onClick, disabled, bgColor = "#00C896" }: Props) {
  return (
    <ButtonBase
      type="button"
      onClick={onClick}
      disabled={disabled}
      bgColor={bgColor}
    >
      {children}
    </ButtonBase>
  );
}

export default Button;
