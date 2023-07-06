import React from 'react'
import styled from 'styled-components'
import Checkbox from '../../../components/common/Checkbox'
import Header from '../../../components/common/Header'
import {
  StyledCommonBlackBottomButton,
  StyledCommonWhiteWrap,
} from '../../../styles/common'
import { StyledProgressBar, StyledTitle } from '../../../styles/signUp-styles'
import { colors } from '../../../styles/variables'

const TermsOfUseAgreeView = () => {
  return (
    <>
      <Header />
      <StyledCommonWhiteWrap>
        <StyledTitle>이용 약관</StyledTitle>
        <StyledProgressBar totalSteps={5} currentStep={2} />
        <StyledFlexWrap>
          <Checkbox/>
          <StyledAgreeTitle>모두 확인, 동의합니다.</StyledAgreeTitle>
        </StyledFlexWrap>
        <hr style={{ backgroundColor: `${colors.gray1}` }} />
        <StyledFlexWrap>
          <Checkbox/>
          <StyledContent>서비스 이용약관 (필수)</StyledContent>
        </StyledFlexWrap>
        <StyledFlexWrap>
          <Checkbox/>
          <StyledContent>개인정보 처리방침 (필수)</StyledContent>
        </StyledFlexWrap>
      </StyledCommonWhiteWrap>
      <StyledCommonBlackBottomButton>다음</StyledCommonBlackBottomButton>
    </>
  )
}
export default TermsOfUseAgreeView

const StyledAgreeTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
`
const StyledContent = styled.p`
  font-size: 16px;
  line-height: 13px;
`
const StyledFlexWrap = styled.div`
  display: flex;
  align-items: center;
`
