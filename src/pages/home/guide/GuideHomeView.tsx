import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { fontRegular } from '../../../styles/font';
import { TodayGuideScheduleDto } from '../../../@types/GuideDto'
import { fetchGuideHomeInfo, fetchGuideTodaySchedule } from '../../../api/featureApi'
import MyPageIcon from '../../../assets/MyPageIcon'
import Navigation from '../../../components/common/Navigation'
import ReadOnlyCalendar from '../../../components/common/ReadOnlyCalendar'
import SideModal from '../../../components/common/SideModal'
import TitleWithIconHeader from '../../../components/common/TitleWithIconHeader'
import GuideScheduleTicket from '../../../components/GuideScheduleTicket'
import SectionTitle from '../../../components/SectionTitle'
import { SUCCESS_STATUS_CODE } from '../../../config/status.code.config'
import { StyledCommonFullHeigthWhiteWrap } from '../../../styles/common'
import { fontMedium } from '../../../styles/font'
import { colors } from '../../../styles/variables'
import checkResponseStatus from '../../../utils/statusUtil'

const GuideHomeView = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(1);
  const [hasAlert, setHasAlert] = useState(false);
  const [guideSchedule, setGuideSchedule] = useState<TodayGuideScheduleDto[]>([]);
  const isEmptyStatus = guideSchedule.length === 0
  const openModal = () => {
    setIsModalOpen(true);
  };
  // TODO: 함수명 변경
  const goToPage = () => {
    navigate('/myguide', { state: { initTabIndex: 1 } });
    setTabIndex(0);
  }
  const goToPageByGuideScheduleTicket = (id: number) => {
    navigate(`/course/${id}`);
  }
  const goToPageByhasMore = () => {
    navigate('/myguide', { state: { initTabIndex: 0 } });
    setTabIndex(0);
  }
  useEffect(() => {
    (async () => {
      const response = await fetchGuideHomeInfo();
      if (checkResponseStatus(response.status) === SUCCESS_STATUS_CODE) {
        setHasAlert(response.data.data.existUncheckedReservation)
      }
    })();
    (async () => {
      const response = await fetchGuideTodaySchedule();
      if (checkResponseStatus(response.status) === SUCCESS_STATUS_CODE) {
        setGuideSchedule(response.data.data)
      }
    })();
  }, [])

  return (
    <>
      <SideModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>ss</SideModal>
      <TitleWithIconHeader title={"컨트립"} icon={<MyPageIcon style={{ marginRight: 20 }} onClick={openModal}/>}/>
      <StyledCommonFullHeigthWhiteWrap paddingHorizontal={20}>
        {hasAlert && <StyledAlertItem style={fontMedium} onClick={goToPage} />}
        <ReadOnlyCalendar datas={dummyDateDatas} />
        <SectionTitle title="오늘의 가이딩 일정" hasMore={true} onClickMore={goToPageByhasMore} />
        {isEmptyStatus ? <StyledTicketEmptyStatus style={fontRegular}/> : guideSchedule?.map((item) => (<div onClick={()=> goToPageByGuideScheduleTicket(item.courseId)} key={item.courseId}><GuideScheduleTicket data={item}/></div>))}
      </StyledCommonFullHeigthWhiteWrap>
      <Navigation userType={'guide'} initTabIndex={tabIndex} />
    </>
  )
};
export default GuideHomeView;

const dummyDateDatas = ['2023-07-19', '2023-07-30', '2023-08-03']

const StyledAlertItem = styled.div`
  display: flex;
  height: 52px;
  border-radius: 20px;
  background-color: ${colors.warning};
  align-items: center;
  color: white;
  font-size: 14px;
  padding-left: 20px;
  margin-bottom: 20px;
  &::after {
    content: '아직 확인하지 않은 예약이 있습니다!';
  }
`
const StyledTicketEmptyStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.gray1};
  color: ${colors.gray2};
  height: 100px;
  font-size: 14px;
  border-radius: 25px;
  &::after {
    content: '오늘의 가이딩 일정이 없습니다.';
  }
`