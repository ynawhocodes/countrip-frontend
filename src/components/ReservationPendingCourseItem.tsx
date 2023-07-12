import React, {useState} from 'react'
import styled from 'styled-components'
import { StyledCommonBlackButton } from '../styles/common';
import { fontMedium, fontBold, fontRegular } from '../styles/font';
import { colors } from '../styles/variables';
import CenterModal from './CenterModal';
import HorizontalScrollSquareBoxList from './HorizontalScrollSquareBoxList';

interface CenterModalProps {
  isOpen: boolean;
  setIsOpen: any;
}
const ReservationPendingCourseItem = ({ isOpen, setIsOpen}: CenterModalProps) => {
  return (
    <>
      <StyledContainer>
        <StyledDate style={fontMedium}>07.20 목</StyledDate>
        <StyledItemContainer>
          <StyledTitle style={fontBold}>박물관을 포함한 자연 경관</StyledTitle>
          <HorizontalScrollSquareBoxList />
          <hr style={{ backgroundColor: `${colors.gray1}`, marginTop: 20, marginBottom: 20 }} />
          <StyledTitle style={fontBold}>예약자</StyledTitle>
          <StyledContent style={fontRegular}>숨겨진 맛집 소개해주세요.</StyledContent>
          <hr style={{ backgroundColor: `${colors.gray1}`, marginTop: 20, marginBottom: 20 }} />
          <StyledTitle style={fontBold}>요청사항</StyledTitle>
          <StyledContent style={fontRegular}>숨겨진 맛집 소개해주세요.</StyledContent>
          <StyledButtonWrap>
            <StyledButton>수락</StyledButton>
            <StyledButton style={{ marginLeft: 15 }} onClick={() => setIsOpen(!isOpen)}>취소</StyledButton>
          </StyledButtonWrap>
        </StyledItemContainer>
      </StyledContainer>
    </>
  )
};
export default ReservationPendingCourseItem;
const StyledContainer = styled.div`
  padding: 0 20px;
`
const StyledDate = styled.p`
  font-size: 14px;
`
const StyledItemContainer = styled.div`
  background-color: ${colors.gray1};
  padding: 20px;
  border-radius: 20px;
`
const StyledTitle = styled.h1`
  font-size: 18px;
  margin: 0 0 15px 0;
`
const StyledContent = styled.p`
  font-size: 12px;
  color: ${colors.gray4};
`
const StyledButtonWrap = styled.div`
  display: flex;
  margin-top: 30px;
`
const StyledButton = styled(StyledCommonBlackButton)`
  height: 40px;
  border-radius: 15px;
  font-size: 12px;
` 