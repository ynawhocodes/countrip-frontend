import React from 'react'
import styled from 'styled-components'
import { fontRegular, fontBold, fontMedium } from '../styles/font'
import { colors } from '../styles/variables'
import HorizontalScrollSquareBoxList from './HorizontalScrollSquareBoxList'

const CourseItem = () => {
  return (
    <StyledCourseContainer>
      <StyledTitle style={fontBold}>박물관을 포함한 자연 경관</StyledTitle>
        <StyledGuideInfo style={fontRegular}>양파링 가이드님</StyledGuideInfo>
      <HorizontalScrollSquareBoxList />
      <StyledInfoWrap>
        <StyledPrice style={fontMedium}>예상 금액</StyledPrice>
        <StyledPriceValue style={fontMedium}>70000</StyledPriceValue>
      </StyledInfoWrap>
    </StyledCourseContainer>
  )
}

export default CourseItem

const StyledCourseContainer = styled.div`
  padding: 30px 0;
  padding-left: 20px;
  border-bottom: ${colors.gray1} 1px solid;
`
const StyledTitle = styled.p`
  font-size: 16px;
  margin: 0;
`
const StyledInfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyledGuideInfo = styled.p`
  color: ${colors.gray2};
  font-size: 12px;
  line-height: 12px;
`
// 모두 가이드 미포함으로 변경되어 가이드 포함 태그가 사라짐
// const StyledWithGuideTag = styled.div`
//   background-color: ${colors.gray1};
//   color: ${colors.gray3};
//   width: auto;
//   font-size: 10px;
//   padding: 3px 5px;
//   border-radius: 10px;
//   margin-left: 5px;
//   &::after {
//     content: '가이드 포함';
//   }
// `
const StyledPrice = styled.p`
  font-size: 12px;
`
const StyledPriceValue = styled.p`
  font-size: 14px;
  margin-right: 20px;
  &::before {
    content: '₩ ';
  }
  &::after {
    content: '원';
  }
`
