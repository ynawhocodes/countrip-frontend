import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import styled from 'styled-components'
import { colors } from '../../styles/variables'

export type InputTypes = {
  type?: string | undefined;
  name: string;
  value: string;
  text: string;
  placeholder?: string;
  isInValid: boolean;
  disabled?: boolean;
  onChangeInput(e: React.FormEvent<HTMLInputElement>): void;
};

export interface focusRef {
  [key: string]: () => void;
}

const InputText = forwardRef(({
  type = 'text',
  value,
  isInValid,
  name,
  text,
  placeholder,
  disabled,
  onChangeInput,
}: InputTypes,
  ref?: any,) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => ({ ...ref.current, [name]: () => inputRef.current?.focus() }));

  return (
    <>
        <StyledInput
          ref={inputRef}
          type={type}
          value={value}
          name={name}
          isInValid={isInValid}
          disabled={disabled}
          placeholder={placeholder || text}
          onChange={onChangeInput}
          id={name}
        />
    </>
  )
});
export default InputText;


const StyledInput = styled.input<{ isInValid: boolean }>`
  width: 100%;
  height: 50px;
  padding-left: 8px;
  border: 0;
  border-bottom: 1px solid ${({ isInValid }) => (isInValid ? `${colors.warning}` : `${colors.gray2}`)};
  border-radius: 4px;
  box-sizing: border-box;
  margin: 5px 0;

  &:focus {
    outline: none;
  }
`;

InputText.displayName = `inputText`;