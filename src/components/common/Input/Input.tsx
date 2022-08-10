import styled from "@emotion/styled";
import React from "react";

type Props = {
  type: string;
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
};

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 2rem;
  font-weight: 900;

  & input {
    width: 100%;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
  }
`;

function Input({ type, label, value, onChange, ...props }: Props) {
  return (
    <Label htmlFor={label}>
      {label}
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
    </Label>
  );
}

export default Input;
