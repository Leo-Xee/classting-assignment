import styled from "@emotion/styled";
import { darken } from "polished";
import React from "react";

type Props = {
  children: React.ReactNode;
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  width?: string;
  styleType: "primary" | "border" | "text";
  mainColor?: string;
};

const ButtonBase = styled.button<Props>`
  width: ${({ width }) => width};
  height: 65px;
  border-radius: 10px;
  font-size: 2.4rem;
  font-weight: 500;

  background-color: ${({ styleType, mainColor }) => {
    if (styleType === "primary") return mainColor;
    return "#fff";
  }};

  color: ${({ styleType, mainColor }) => {
    if (styleType === "primary") return "#fff";
    return mainColor;
  }};

  border: ${({ styleType, mainColor }) => {
    if (styleType === "border") return `2px solid ${mainColor}`;
    return "unset";
  }};

  &:active {
    background-color: ${({ styleType, mainColor }) => {
      if (styleType === "primary") return darken(0.03, `${mainColor}`);
      return "unset";
    }};
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
  styleType,
  mainColor = "#00C896",
}: Props) {
  return (
    <ButtonBase
      type="button"
      onClick={onClick}
      disabled={disabled}
      width={width}
      styleType={styleType}
      mainColor={mainColor}
    >
      {children}
    </ButtonBase>
  );
}

export default Button;
