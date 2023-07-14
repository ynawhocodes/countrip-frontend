import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Checkbox from '../../components/common/Checkbox'
import {
  StyledCommonBlackBottomButton,
  StyledCommonHr,
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
  const [isFirstChecked, setIsFirstChecked] = useState(false);
  const [isSecondChecked, setIsSecondChecked] = useState(false);
  const [isAllChecked, setIsAllChecked] = useState(false);

  const handleNext = () => {
    if(isAllChecked)
      navigate('/signup/step3', {state: { userType: userInfo.type}});
  };
  const handleFirstCheckboxChange = () => {
    setIsFirstChecked(!isFirstChecked);
    setIsAllChecked(isSecondChecked && !isFirstChecked);
  };

  const handleSecondCheckboxChange = () => {
    setIsSecondChecked(!isSecondChecked);
    setIsAllChecked(isFirstChecked && !isSecondChecked);
  };

  const handleAllCheckboxChange = () => {
    setIsAllChecked(!isAllChecked);
    setIsFirstChecked(!isAllChecked);
    setIsSecondChecked(!isAllChecked);
  };
  
  return (
    <>
      <GoBackHeader />
      <StyledCommonWhiteWrap>
        <StyledTitle>이용 약관</StyledTitle>
        <StyledProgressBar totalsteps={5} currentstep={2} />
        <StyledFlexWrap>
          <Checkbox isChecked={isAllChecked} onChange={handleAllCheckboxChange} />
          <StyledAgreeTitle>모두 확인, 동의합니다.</StyledAgreeTitle>
        </StyledFlexWrap>
        <StyledCommonHr/>
        <StyledFlexWrap>
          <Checkbox isChecked={isFirstChecked} onChange={handleFirstCheckboxChange}/>
          <StyledContent onClick={() => navigate('/signup/step2/detail')}>서비스 이용약관 (필수)</StyledContent>
        </StyledFlexWrap>
        <StyledFlexWrap>
          <Checkbox isChecked={isSecondChecked} onChange={handleSecondCheckboxChange}/>
          <StyledContent onClick={() => navigate('/signup/step2/detail')}>개인정보 처리방침 (필수)</StyledContent>
        </StyledFlexWrap>
      </StyledCommonWhiteWrap>
      <StyledButton active={isAllChecked} onClick={handleNext}>다음</StyledButton>
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
const StyledButton = styled(StyledCommonBlackBottomButton)<{active: boolean}>`
  color:${({active}) => active ? 'white' : `${colors.gray1}` };
  background-color: ${({active}) => active ? `${colors.gray5}` : `${colors.gray2}`};
`
