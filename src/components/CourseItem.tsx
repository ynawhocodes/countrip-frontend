import React from 'react'
import styled from 'styled-components'
import CourseDto from '../@types/CourseDto'
import { fontRegular, fontBold, fontMedium } from '../styles/font'
import { colors } from '../styles/variables'
import HorizontalScrollSquareBoxList from './HorizontalScrollSquareBoxList'

interface CourseItemProps {
  hasPriceInfo?: boolean;
  data: CourseDto;
}
const CourseItem = ({ hasPriceInfo = true, data }: CourseItemProps) => {
  return (
    <StyledCourseContainer>
      <StyledTitle style={fontBold}>{data.title}</StyledTitle>
      <StyledGuideInfo style={fontRegular}>{data.guideName}</StyledGuideInfo>
      <HorizontalScrollSquareBoxList datas={data.spots} />
      {hasPriceInfo && <StyledInfoWrap>
        <StyledPrice style={fontMedium}>예상 금액</StyledPrice>
        <StyledPriceValue style={fontMedium}>70000</StyledPriceValue>
      </StyledInfoWrap>}
    </StyledCourseContainer>
  )
};
export default CourseItem;

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
  margin-bottom: 25px;
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
