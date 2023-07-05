import React, { useState, useRef } from 'react'
import {
  StyledCommonBlackButton,
  StyledCommonGreenLightWrap,
  StyledCommonFlexContainer,
  StyledCommonColumnPostitionOuterWrap,
  StyledCommonColumnPostitionInnerWrap,
} from '../../styles/common'
import styled from 'styled-components'
import { colors } from '../../styles/variables'
import InputText, { focusRef } from '../../components/common/InputText'

export const SignIn = () => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  })
  const passwordRef = useRef<focusRef>(null)
  const onChangeInput = () => {}
  return (
    <StyledCommonGreenLightWrap>
      <StyledCommonColumnPostitionOuterWrap>
        <div className="Title">Welcome!</div>
        <StyledCommonColumnPostitionInnerWrap top={'30%'} position={'relative'}>
          <StyledFolderContainer>
            <StyledFolderSelectTypeContainer>
              여행러
            </StyledFolderSelectTypeContainer>
            <StyledFolderUnselectTypeContainer>
              가이드
            </StyledFolderUnselectTypeContainer>
            <InputText
              ref={passwordRef}
              type="id"
              isInValid={false}
              value={userInfo.username}
              name="username"
              text="아이디"
              onChangeInput={onChangeInput}
            />
            <InputText
              ref={passwordRef}
              type="password"
              isInValid={false}
              value={userInfo.password}
              name="password"
              text="비밀번호"
              onChangeInput={onChangeInput}
            />
            <StyledCommonFlexContainer justify='space-between'>
              <StyledButton>회원가입</StyledButton>
              <StyledButton>아이디/비밀번호 찾기</StyledButton>
            </StyledCommonFlexContainer>
          </StyledFolderContainer>
          <StyledCommonBlackButton>로그인</StyledCommonBlackButton>
        </StyledCommonColumnPostitionInnerWrap>
      </StyledCommonColumnPostitionOuterWrap>
    </StyledCommonGreenLightWrap>
  )
}

const StyledFolderContainer = styled.div`
  position: relative;
  padding: 20px;
  margin-bottom: 30px;
  background-color: white;
  border-radius: 20px;
  text-align: center;
  padding: 20% 20px;
  z-index: 10;
`
const StyledFolderTypeContainer = styled.div`
  position: absolute;
  top: -50px;
  height: 21%;
  width: 50%;
  font-size: 14px;
  font-weight: 700;
  z-index: 1;
  line-height: 5rem;
`
const StyledFolderUnselectTypeContainer = styled(StyledFolderTypeContainer)`
  background-color: ${colors.gray1};
  color: ${colors.gray2};
  left: 50%;
  border-radius: 20px 20px 0 20px;

`
const StyledFolderSelectTypeContainer = styled(StyledFolderTypeContainer)`
  background-color: white;
  left: 0;
  border-radius: 20px 20px 0 0px;
`
const StyledButton = styled.button`
  all: unset;
  font-size: 12px;
  color: ${colors.gray5};
  margin-top: 10px;
  padding: 0 5px;
  `