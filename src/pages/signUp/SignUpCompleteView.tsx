import React from 'react'
import styled from 'styled-components'
import { StyledCommonBlackBottomButton, StyledCommonColumnPostitionOuterWrap, StyledCommonGreenLightWrap } from '../../styles/common';
import { colors } from '../../styles/variables'

const SignUpCompleteView = () => {
  return (
    <>
      <StyledCommonGreenLightWrap>
        <StyledCommonColumnPostitionOuterWrap>
        <div className="Title">회원가입 완료!</div>
      </StyledCommonColumnPostitionOuterWrap>
      </StyledCommonGreenLightWrap>
      <StyledCommonBlackBottomButton>로그인하러 가기</StyledCommonBlackBottomButton>
    </>
  )

};
export default SignUpCompleteView;