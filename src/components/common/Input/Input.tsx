import styled from "@emotion/styled";
import React, { useId, ClassAttributes, InputHTMLAttributes } from "react";

import { InputBase, LabelBase } from "../Selector/Selector";

type InputProps = ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>;

type Props = InputProps & {
  label: string;
};

const Label = styled.label`
  ${LabelBase};

  & input {
    ${InputBase};
  }
`;

function Input({ type, label, value, onChange, ...props }: Props) {
  const id = useId();

  return (
    <Label htmlFor={id}>
      {label}
      <input id={id} type={type} value={value} onChange={onChange} {...props} />
    </Label>
  );
}

export default Input;
