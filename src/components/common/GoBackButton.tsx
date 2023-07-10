import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const GoBackButton = (props: any) => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }
  return (
    <StyledIconContainer onClick={goBack}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
      >
        <path
          stroke="#191919"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m15 18-6-6 6-6"
        />
      </svg>
    </StyledIconContainer>
  )
};
export default GoBackButton;

const StyledIconContainer = styled.div`
  position: relative;
  margin-left: 20px;
  height: 24px;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 35px;
    height: 35px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }
  &:hover::after {
    opacity: 1;
  }
  &:active::after {
    opacity: 0.5;
  }
`