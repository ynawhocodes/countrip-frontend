import React from 'react'
import styled from 'styled-components'
import TitleWithIconHeader from '../../../components/common/TitleWithIconHeader'
import GuideScheduleTicket from '../../../components/GuideScheduleTicket'
import SectionTitle from '../../../components/SectionTitle'
import { StyledCommonFullHeigthWhiteWrap } from '../../../styles/common'
import { fontBold, fontMedium } from '../../../styles/font'
import { colors } from '../../../styles/variables'

const GuideHomeView = () => {
  return (
    <>
      <TitleWithIconHeader />
      <StyledCommonFullHeigthWhiteWrap paddingHorizontal={20}>
        <StyledGuideCalendar />
        <SectionTitle title="오늘의 가이딩 일정" isMore={true}/>
        <GuideScheduleTicket/>
        <GuideScheduleTicket/>
        <GuideScheduleTicket/>
      </StyledCommonFullHeigthWhiteWrap>
    </>
  )
}
export default GuideHomeView

const StyledGuideCalendar = styled.div`
  background-color: ${colors.gray1};
  height: 30%;
  border-radius: 30px;
`
