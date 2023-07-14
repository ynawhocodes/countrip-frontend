import React, { useState } from 'react'
import styled from 'styled-components'
import {
  StyledCommonBlackButton,
  StyledCommonGrayBorderWhiteButton,
  StyledCommonWhiteWrap,
  StyledCommonBlackBottomButton,
} from '../../styles/common'
import { StyledProgressBar, StyledTitle } from '../../styles/signUp-styles'
import { useNavigate } from 'react-router-dom';
import GoBackHeader from '../../components/common/GoBackHeader'
import { USER_TYPE } from '../../constants';
import { colors } from '../../styles/variables';

const SelectUserTypeView = () => {
  const navigate = useNavigate();
  const [userType, setType] = useState('');
  const [isActive, setIsActive] = useState(false);
  const handleNext = () => {
    navigate('/signup/step2', { state: { userType: userType} });
  };

  // const handleButton = () => {
  //   set
  // }

  return (
    <>
      <GoBackHeader />
      <StyledCommonWhiteWrap>
        <StyledTitle>컨트립이 처음이시군요!</StyledTitle>
        <StyledProgressBar totalsteps={5} currentstep={1} />
        <StyledContent>어떤 목적으로 이용하시나요?</StyledContent>
        <StyledButton active={userType === USER_TYPE.TRAVELER} style={{ marginBottom: 10 }} onClick={() => setType(USER_TYPE.TRAVELER)}>
          일반 사용자
        </StyledButton>
        <StyledButton active={userType === USER_TYPE.GUIDE} onClick={() => setType(USER_TYPE.GUIDE)}>
          가이드
        </StyledButton>
      </StyledCommonWhiteWrap>
      <StyledCommonBlackBottomButton onClick={handleNext}>다음</StyledCommonBlackBottomButton>
    </>
  )
}
export default SelectUserTypeView

const StyledContent = styled.p`
  margin-bottom: 5%;
  font-size: 16px;
`
const StyledButton = styled(StyledCommonBlackButton)<{active: boolean}>`
color:${({active}) => active ? 'white' : `${colors.gray5}` };
background-color: ${({active}) => active ? `${colors.gray5}` : 'white' };
font-size: 12px;
border: 1.5px ${colors.gray2} solid;
&:hover {
  background-color: ${colors.gray5};
  border: 1.5px ${colors.gray5} solid;
  color: white;
}
`;