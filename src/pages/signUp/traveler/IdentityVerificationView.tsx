import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import Header from '../../../components/common/Header';
import RoundInputText, { RoundfocusRef } from '../../../components/common/RoundInputText';
import { StyledCommonWhiteWrap } from '../../../styles/common';
import { StyledProgressBar, StyledTitle } from '../../../styles/signUp-styles';
import { colors } from '../../../styles/variables'

const IdentityVerificationView = () => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  })
  const passwordRef = useRef<RoundfocusRef>(null)
  const onChangeInput = () => { }
  return (
    <>
      <Header />
      <StyledCommonWhiteWrap>
        <StyledTitle>휴대폰 본인인증</StyledTitle>
        <StyledProgressBar totalSteps={5} currentStep={3} />
        <StyledContent>회원 정보 확인과 안전한 사용을 위해 본인확인이 필요합니다!</StyledContent>
        <RoundInputText
          ref={passwordRef}
          type="id"
          isInValid={false}
          value={userInfo.username}
          name="username"
          text="아이디"
          onChangeInput={onChangeInput} />
      </StyledCommonWhiteWrap>
    </>
  )
};
export default IdentityVerificationView;

const StyledContent = styled.p`
  font-size: 14px;
`