import React, {useState} from 'react'
import styled from 'styled-components'
import { fontMedium, fontBold, fontRegular } from '../styles/font';
import { colors } from '../styles/variables';
import HorizontalScrollSquareBoxList from './HorizontalScrollSquareBoxList';

const StoredCourseItem = () => {
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
        </StyledItemContainer>
      </StyledContainer>
    </>
  )
};
export default StoredCourseItem;
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
  color: ${colors.gray4}
`