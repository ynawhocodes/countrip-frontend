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
import { useNavigate } from 'react-router-dom'
import { guideLogin, travelerLogin } from '../../api/authApi'
import { USER_TYPE } from '../../constants'

const SignInView = () => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  });
  const passwordRef = useRef<focusRef>(null);
  const [isValid, setIsValid] = useState(true);
  const [userType, setUserType] = useState('TRAVELER');
  const navigate = useNavigate();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget
    setUserInfo((currVal) => ({
      ...currVal,
      [name]: value,
    }))
  };
  // TODO: 함수 구조 바꾸기
  const onClickLogin = async () => {
    if (userType == USER_TYPE.TRAVELER) {
      const response = await travelerLogin(userInfo);
      if (response) {
        navigate('/home');
        window.location.reload();
      }
      else {
        setIsValid(false);
      }
    }
    else if (userType === USER_TYPE.GUIDE) {
      const response = await guideLogin(userInfo);
      if (response) {
        navigate('/home');
        window.location.reload();
      }
      else {
        setIsValid(false);
      }
    }
    else {
      setIsValid(false);
    }
  };
  const handleUserType = (type: string) => {
    setUserType(type)
  }

  return (
    <StyledCommonGreenLightWrap>
      <StyledCommonColumnPostitionOuterWrap>
        <div className="Title">Welcome!</div>
        <StyledCommonColumnPostitionInnerWrap top={'30%'} position={'relative'}>
          <StyledFolderContainer>
            <StyledFolderSelectTypeContainer active={userType === USER_TYPE.TRAVELER} onClick={() => handleUserType(USER_TYPE.TRAVELER)}>
              여행러
            </StyledFolderSelectTypeContainer>
            <StyledFolderUnselectTypeContainer active={userType === USER_TYPE.GUIDE} onClick={() => handleUserType(USER_TYPE.GUIDE)}>
              가이드
            </StyledFolderUnselectTypeContainer>
            {!isValid && <StyledNotice>로그인 정보가 일치하지 않습니다.</StyledNotice>}
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
            <StyledCommonFlexContainer justify="space-between">
              <StyledButton>회원가입</StyledButton>
              <StyledButton>아이디/비밀번호 찾기</StyledButton>
            </StyledCommonFlexContainer>
          </StyledFolderContainer>
          <StyledCommonBlackButton onClick={onClickLogin}>
            로그인
          </StyledCommonBlackButton>
        </StyledCommonColumnPostitionInnerWrap>
      </StyledCommonColumnPostitionOuterWrap>
    </StyledCommonGreenLightWrap>
  )
};
export default SignInView;

const StyledFolderContainer = styled.div`
  position: relative;
  padding: 20px;
  margin-bottom: 30px;
  background-color: white;
  border-radius: 20px;
  text-align: center;
  padding: 85px 20px;
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
  line-height: 4rem;
`
const StyledFolderUnselectTypeContainer = styled(StyledFolderTypeContainer) <{ active: boolean }>`
  background-color: ${({ active }) => active ? `white` : `${colors.gray1}`};
  color:  ${({ active }) => active ? `black` : `${colors.gray2}`};
  left: 50%;
  border-radius: 20px 20px 0 20px;
  cursor: pointer;
`
const StyledFolderSelectTypeContainer = styled(StyledFolderTypeContainer)<{active: boolean}>`
  background-color: ${({ active }) => active ? `white` : `${colors.gray1}`};
  color:  ${({ active }) => active ? `black` : `${colors.gray2}`};
  left: 0;
  border-radius: 20px 20px 20px 0;
  cursor: pointer;
`
const StyledButton = styled.button`
  all: unset;
  font-size: 12px;
  color: ${colors.gray5};
  margin-top: 10px;
  padding: 0 5px;
`
const StyledNotice = styled.p`
  font-size: 12px;
  color: ${colors.warning};
  margin-bottom: 40px;
`