import React from 'react'
import styled from 'styled-components'
import Header from '../../components/common/Header'
import { colors } from '../../styles/variables'
import {
  StyledCommonBlackButton,
  StyledCommonGrayBorderWhiteButton,
  StyledCommonWhiteWrap,
  StyledCommonBlackBottomButton,
} from '../../styles/common'
import { StyledProgressBar, StyledTitle } from '../../styles/signUp-styles'

const SelectUserTypeView = () => {

  return (
    <>
      <Header />
      <StyledCommonWhiteWrap>
        <StyledTitle>컨트립이 처음이시군요!</StyledTitle>
        <StyledProgressBar totalSteps={5} currentStep={1} />
        <StyledContent>어떤 목적으로 이용하시나요?</StyledContent>
        <StyledCommonBlackButton style={{ marginBottom: 10 }}>
          일반 사용자
        </StyledCommonBlackButton>
        <StyledCommonGrayBorderWhiteButton>
          가이드
        </StyledCommonGrayBorderWhiteButton>
      </StyledCommonWhiteWrap>
      <StyledCommonBlackBottomButton>다음</StyledCommonBlackBottomButton>
    </>
  )
}
export default SelectUserTypeView

const StyledContent = styled.p`
  margin-bottom: 5%;
  font-size: 16px;
`
