import React, {useState} from 'react'
import styled from 'styled-components'
import { GuideScheduleDto } from '../@types/GuideDto';
import { StyledCommonHr } from '../styles/common';
import { fontMedium, fontBold, fontRegular } from '../styles/font';
import { colors } from '../styles/variables';
import { formatPeriodDate } from '../utils/dateUtil';
import formatPhoneNumber from '../utils/stringUtil';
import HorizontalScrollSquareBoxList from './HorizontalScrollSquareBoxList';
import { isEmptyArray } from '../utils/emptyUtil';
import EmptyStatus from './common/EmptyStatus';

interface BookedCourseItemProps {
  datas?: GuideScheduleDto[];
}
const BookedCourseItem = ({ datas }: BookedCourseItemProps) => {
  return (
    <>
      {/* {isEmptyArray(datas) && <EmptyStatus>확정된 예약이 없습니다.</EmptyStatus>} */}
      <StyledEmptyStatus/>
      {/* {datas?.map(data => (
        <StyledContainer>
          <StyledDate style={fontMedium}>{formatPeriodDate(data?.travelDate)}</StyledDate>
          {data.reservations?.map((reservation) => ( <StyledItemContainer>
            <StyledTitle style={fontBold}>{reservation?.courseTitle}</StyledTitle>
            <HorizontalScrollSquareBoxList datas={reservation?.spots} />
            <StyledCommonHr/>
            <StyledTitle style={fontBold}>예약자</StyledTitle>
            <StyledFlexInfoWrap>
              <StyledContent style={fontRegular}>{reservation?.travelerName}</StyledContent>
              <StyledContent style={fontRegular}>({formatPhoneNumber(reservation?.travelerPhone)})</StyledContent>
            </StyledFlexInfoWrap>
            <StyledFlexCountWrap>
              <StyledContent style={fontRegular}>대인: {reservation?.adultCount}</StyledContent>
              <StyledContent style={fontRegular}>소인: {reservation?.childCount}</StyledContent>
              <StyledContent style={fontRegular}>유아: {reservation?.babyCount}</StyledContent>
            </StyledFlexCountWrap>
            <StyledCommonHr/>
            <StyledTitle style={fontBold}>요청사항</StyledTitle>
            <StyledContent style={fontRegular}>{reservation?.requestMessage}</StyledContent>
          </StyledItemContainer>
          ))}
        </StyledContainer>
      ))
      } */}
    </>
  )
};
export default BookedCourseItem;
const StyledContainer = styled.div`
  padding: 0 20px;
`
const StyledDate = styled.p`
  font-size: 14px;
`
const StyledItemContainer = styled.div`
  background-color: ${colors.gray1};
  padding: 30px 20px;
  border-radius: 20px;
  margin-bottom: 20px;
`
const StyledTitle = styled.h1`
  font-size: 18px;
  margin: 0 0 10px 0;
`
const StyledContent = styled.p`
  font-size: 12px;
  margin: 0;
  color: ${colors.gray4};
`
const StyledFlexInfoWrap = styled.div`
 display: flex;
 align-items: center;
 margin-bottom: 5px;
 & > :nth-child(1) {
  margin-right: 10px;
 }
`
const StyledFlexCountWrap = styled.div`
 display: flex;
 align-items: center;
 & > :nth-child(1), & > :nth-child(2) {
  margin-right: 10px;
 }
 & > ::after {
  content: '명';
  margin-right: 10px;
 }
`
const StyledEmptyStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.gray2};
  height: 100px;
  font-size: 14px;
  border-radius: 25px;
  &::after {
    content: '확정된 예약이 없습니다.';
  }
`