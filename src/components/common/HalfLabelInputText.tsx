import React, { forwardRef, useRef, useImperativeHandle } from "react";
import styled from "styled-components";
import { colors } from "../../styles/variables";

export type HalfLabelInputTextTypes = {
  type?: string | undefined;
  name: string;
  value: any;
  label: string;
  placeholder?: string;
  isInValid: boolean;
  disabled?: boolean;
  onChangeInput(e: React.FormEvent<HTMLInputElement>): void;
};

export interface focusRef {
  [key: string]: () => void;
}

const HalfLabelInputText = forwardRef(
  (
    {
      type = "text",
      value,
      isInValid,
      name,
      label,
      placeholder,
      disabled,
      onChangeInput,
    }: HalfLabelInputTextTypes,
    ref?: any
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => ({
      ...ref.current,
      [name]: () => inputRef.current?.focus(),
    }));

    return (
      <>
        <StyledInputContainer isInValid={isInValid}>
          <StyledLabel>{label}</StyledLabel>
          <StyledInput
            ref={inputRef}
            type={type}
            value={value}
            name={name}
            disabled={disabled}
            placeholder={placeholder}
            onChange={onChangeInput}
            id={name}
          />
        </StyledInputContainer>
      </>
    );
  }
);
export default HalfLabelInputText;

const StyledInputContainer = styled.div<{ isInValid: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0;
  border-bottom: 1px solid
    ${({ isInValid }) => (isInValid ? `${colors.warning}` : `${colors.gray2}`)};
`;
const StyledLabel = styled.p`
  font-size: 12px;
  color: ${colors.gray4};
  width: 40%;
`;
const StyledInput = styled.input`
  all: unset;
  width: 100%;
  height: 45px;
  padding-left: 8px;
  border-radius: 4px;
  box-sizing: border-box;
  margin: 5px 0;
  text-align: right;

  &::placeholder {
    color: ${colors.gray2};
    font-size: 12px;
  }
  &:focus {
    outline: none;
  }
`;

// HalfLabelInputText.displayName = `inputText`;
