import React, { useState } from 'react'
import styled from 'styled-components'
import { StyledCommonBlackButton } from '../styles/common'
import { fontBold } from '../styles/font'
import { colors } from '../styles/variables'

const CompanionPicker = () => {
  return (
    <>
      <StyledTitle style={fontBold}>여행자 정보를 선택하세요</StyledTitle>
      <StyledContainer>
        <StyledItem>
          <StyledStage>대인(13세 이상)</StyledStage>
          <Calculator />
        </StyledItem>
        <StyledItem>
          <StyledStage>소아(13세 미만)</StyledStage>
          <Calculator />
        </StyledItem>
        <StyledItem>
          <StyledStage>대인(24개월 미만)</StyledStage>
          <Calculator />
        </StyledItem>
      </StyledContainer>
      <StyledCommonBlackButton>적용</StyledCommonBlackButton>
    </>
  )
}
export default CompanionPicker

const StyledTitle = styled.p`
  font-size: 20px;
`
const StyledContainer = styled.div`
  margin-bottom: 30px;
`
const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
`
const StyledStage = styled.p`
  font-size: 14px;
`

export const Calculator = () => {
  const [number, setNumber] = useState(0)

  const handleIncrement = () => {
    setNumber((prevNumber) => prevNumber + 1)
  }

  const handleDecrement = () => {
    if (number > 0) {
      setNumber((prevNumber) => prevNumber - 1)
    }
  }

  return (
    <StyledCalContainer>
      <StyledCalButton onClick={handleDecrement}>-</StyledCalButton>
      <p>{number}</p>
      <StyledCalButton onClick={handleIncrement}>+</StyledCalButton>
    </StyledCalContainer>
  )
}

const StyledCalContainer = styled.div`
  display: flex;
  align-items: center;
`
const StyledCalButton = styled.button`
  all: unset;
  padding: 10px;
  margin: 0 20px;
  height: 13px;
  background-color: ${colors.gray1};
  color: ${colors.gray3};
`
