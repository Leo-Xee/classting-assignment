import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

type Props = {
  label: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const LabelBase = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 2rem;
  font-weight: 900;
`;
export const InputBase = css`
  width: 100%;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
`;

const Label = styled.label`
  ${LabelBase};

  & select {
    ${InputBase};
    appearance: none;
  }
`;

function Selector({ label, options, value, onChange }: Props) {
  return (
    <Label htmlFor={label}>
      {label}
      <select id={label} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Label>
  );
}

export default Selector;
