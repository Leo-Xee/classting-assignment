import styled from "@emotion/styled";
import React from "react";
import { InputBase, LabelBase } from "../Selector/Selector";

type Props = {
  type: string;
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
};

const Label = styled.label`
  ${LabelBase};

  & input {
    ${InputBase};
  }
`;

function Input({ type, label, value, onChange, ...props }: Props) {
  return (
    <Label htmlFor={label}>
      {label}
      <input id={label} type={type} value={value} onChange={onChange} {...props} />
    </Label>
  );
}

export default Input;
