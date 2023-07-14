import React from 'react'
import styled from 'styled-components'
import { StyledCommonBlackBottomButton, StyledCommonColumnPostitionOuterWrap, StyledCommonGreenLightWrap } from '../../styles/common';
import { colors } from '../../styles/variables'
import { useNavigate } from 'react-router-dom';

const SignUpCompleteView = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/');
  };
  return (
    <>
      <StyledCommonGreenLightWrap>
        <StyledCommonColumnPostitionOuterWrap>
        <div className="Title">회원가입 완료!</div>
      </StyledCommonColumnPostitionOuterWrap>
      </StyledCommonGreenLightWrap>
      <StyledCommonBlackBottomButton onClick={handleNext}>로그인하러 가기</StyledCommonBlackBottomButton>
    </>
  )

};
export default SignUpCompleteView;