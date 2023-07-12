import React, { useState } from 'react'
import styled from 'styled-components'
import MyPageIcon from '../../../assets/MyPageIcon'
import Navigation from '../../../components/common/Navigation'
import ReadOnlyCalendar from '../../../components/common/ReadOnlyCalendar'
import SideModal from '../../../components/common/SideModal'
import TitleWithIconHeader from '../../../components/common/TitleWithIconHeader'
import GuideScheduleTicket from '../../../components/GuideScheduleTicket'
import SectionTitle from '../../../components/SectionTitle'
import { StyledCommonFullHeigthWhiteWrap } from '../../../styles/common'
import { fontBold, fontMedium } from '../../../styles/font'
import { colors } from '../../../styles/variables'

const GuideHomeView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <TitleWithIconHeader title={"컨트립"} icon={<MyPageIcon style={{ marginRight: 20 }} onClick={openModal} />} />
      <StyledCommonFullHeigthWhiteWrap paddingHorizontal={20}>
      <SideModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>ss</SideModal>
      <ReadOnlyCalendar />
      <SectionTitle title="오늘의 가이딩 일정" isMore={true}/>
      <GuideScheduleTicket/>
      <GuideScheduleTicket/>
      <GuideScheduleTicket/>
      </StyledCommonFullHeigthWhiteWrap>
      <Navigation userType={'guide'}/>
    </>
  )
}
export default GuideHomeView

const StyledGuideCalendar = styled.div`
  background-color: ${colors.gray1};
  height: 30%;
  border-radius: 30px;
`