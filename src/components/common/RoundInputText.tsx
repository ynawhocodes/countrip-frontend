import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import styled from 'styled-components'
import { colors } from '../../styles/variables'

export type RoundInputTypes = {
  type?: string | undefined;
  name: string;
  value: string;
  text: string;
  placeholder?: string;
  isInValid: boolean;
  disabled?: boolean;
  onChangeInput(e: React.FormEvent<HTMLInputElement>): void;
};

export interface RoundfocusRef {
  [key: string]: () => void;
}

const RoundInputText = forwardRef(({
  type = 'text',
  value,
  isInValid,
  name,
  text,
  placeholder,
  disabled,
  onChangeInput,
}: RoundInputTypes,
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
export default RoundInputText;

const StyledInput = styled.input<{ isInValid: boolean }>`
  width: 100%;
  height: 50px;
  padding-left: 8px;
  border: 1px solid ${({ isInValid }) => (isInValid ? `${colors.warning}` : `${colors.gray1}`)};
  border-radius: 4px;
  box-sizing: border-box;
  margin: 5px 0;
`;

RoundInputText.displayName = `RoundinputText`;