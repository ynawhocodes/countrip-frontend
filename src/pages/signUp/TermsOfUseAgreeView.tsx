import React from 'react'
import styled from 'styled-components'
import Checkbox from '../../components/common/Checkbox'
import {
  StyledCommonBlackBottomButton,
  StyledCommonWhiteWrap,
} from '../../styles/common'
import { StyledProgressBar, StyledTitle } from '../../styles/signUp-styles'
import { colors } from '../../styles/variables'
import { useNavigate, useLocation } from 'react-router-dom';
import GoBackHeader from '../../components/common/GoBackHeader'

const TermsOfUseAgreeView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userInfo = { ...location.state };

  const handleNext = () => {
    navigate('/signup/step3', {state: { userType: userInfo.type, isAgree: true}});
  };
  return (
    <>
      <GoBackHeader />
      <StyledCommonWhiteWrap>
        <StyledTitle>이용 약관</StyledTitle>
        <StyledProgressBar totalsteps={5} currentstep={2} />
        <StyledFlexWrap>
          <Checkbox />
          <StyledAgreeTitle>모두 확인, 동의합니다.</StyledAgreeTitle>
        </StyledFlexWrap>
        <hr style={{ backgroundColor: `${colors.gray1}` }} />
        <StyledFlexWrap>
          <Checkbox />
          <StyledContent>서비스 이용약관 (필수)</StyledContent>
        </StyledFlexWrap>
        <StyledFlexWrap>
          <Checkbox />
          <StyledContent>개인정보 처리방침 (필수)</StyledContent>
        </StyledFlexWrap>
      </StyledCommonWhiteWrap>
      <StyledCommonBlackBottomButton onClick={handleNext}>다음</StyledCommonBlackBottomButton>
    </>
  )
};
export default TermsOfUseAgreeView;

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
