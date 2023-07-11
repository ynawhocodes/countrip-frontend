import React, { useState } from 'react'
import Calendar from './common/Calendar'
import { fontBold } from '../styles/font'
import styled from 'styled-components'
import { StyledCommonBlackButton } from '../styles/common'

const DatePicker = () => {
  const [date, setDate] = useState<Date>(new Date())

  const handleDate = (newDate: Date) => setDate(newDate)

  const formatDate = (date: Date): string => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()]

    return `${year}년 ${month}월 ${day}일 (${dayOfWeek}요일)`
  }
  return (
    <>
      <StyledCalendarWrap>
        <div>
          <StyledTitle style={fontBold}>날짜를 선택하세요</StyledTitle>
          <Calendar selected={date} setSelected={setDate} />
        </div>
      </StyledCalendarWrap>
      <StyledFooter>{formatDate(date)}</StyledFooter>
      <StyledCommonBlackButton>날짜 선택</StyledCommonBlackButton>
    </>
  )
};
export default DatePicker;

const StyledTitle = styled.p`
  font-size: 20px;
`
const StyledCalendarWrap = styled.div`
  display: flex;
  justify-content: center;
  height: 500px;
`
const StyledFooter = styled.p`
  text-align: center;
`