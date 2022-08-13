import styled from "@emotion/styled";
import { darken } from "polished";
import React, { CSSProperties } from "react";

type Props = CSSProperties & {
  children: React.ReactNode;
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

const ButtonBase = styled.button<Props>`
  width: ${({ width }) => width};
  height: 65px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 10px;
  font-size: 2.4rem;
  font-weight: 900;
  color: ${({ color }) => color};

  &:active {
    background-color: ${({ backgroundColor }) =>
      darken(0.03, `${backgroundColor}`)};
  }

  &:disabled {
    background-color: #ced4da;
  }
`;

function Button({
  children,
  onClick,
  disabled,
  width = "100%",
  color = "#fff",
  backgroundColor = "#00C896",
}: Props) {
  return (
    <ButtonBase
      type="button"
      onClick={onClick}
      disabled={disabled}
      width={width}
      color={color}
      backgroundColor={backgroundColor}
    >
      {children}
    </ButtonBase>
  );
}

export default Button;
