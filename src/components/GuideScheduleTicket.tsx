import React from 'react'
import styled from 'styled-components'
import { TodayGuideScheduleDto } from '../@types/GuideDto'
import { fontBold, fontMedium } from '../styles/font'
import { colors } from '../styles/variables'

interface GuideScheduleTicketProps {
  data: TodayGuideScheduleDto
}
const GuideScheduleTicket = ({ data }: GuideScheduleTicketProps) => {
  return (
    <>
      <StyledTicketWrap>
        <StyledGradient />
        <StyledOverlay>
          <StyledTicketTitle style={fontMedium}>
            {data.courseTitle}
          </StyledTicketTitle>
          <StyledInfoWrap>
            <StyledTravelerName>{data.travelerName}</StyledTravelerName>
            <StyledTravelerNum>{data.totalTravelerCount}</StyledTravelerNum>
          </StyledInfoWrap>
        </StyledOverlay>
      </StyledTicketWrap>
    </>
  )
};
export default GuideScheduleTicket;

const StyledTicketWrap = styled.div`
  position: relative;
  height: 100px;
  width: 100%;
  margin-bottom: 10px;
`
const StyledGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${colors.gray1};
  height: 100px;
  border-radius: 25px;
  background-image: linear-gradient(
    to bottom,
    ${colors.green} 5px,
    transparent 80px
  );
  width: 100%;
`
const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${colors.gray1};
  height: 100px;
  z-index: 1;
  height: 100px;
  width: calc(100% - 20px);
  border-radius: 0 25px 25px 0;
`
const StyledTicketTitle = styled.p`
  font-size: 16px;
  margin-left: 20px;
`
const StyledInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`
const StyledTravelerName = styled.p`
  font-size: 12px;
  &::before {
    content: '예약자: ';
  }
`
const StyledTravelerNum = styled.p`
  font-size: 12px;
  &::before {
    content: '총: ';
  }
  &::after {
    content: '명';
  }
`
