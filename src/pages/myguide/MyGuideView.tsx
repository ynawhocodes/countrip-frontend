import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { GuideScheduleDto } from '../../@types/GuideDto';
import { CancelReason } from '../../@types/ReservationDto';
import { fetchCancleReservationReasons, fetchGuideReservationList, fetchGuideSchedule } from '../../api/featureApi';
import MyPageIcon from "../../assets/MyPageIcon";
import CenterModal from '../../components/CenterModal';
import Navigation from '../../components/common/Navigation';
import SideModal from '../../components/common/SideModal';
import Tab, { TabView } from '../../components/common/Tab';
import TitleWithIconHeader from "../../components/common/TitleWithIconHeader";
import ReservationPendingCourseItem from '../../components/ReservationPendingCourseItem';
import StoredCourseItem from '../../components/StoredCourseItem';
import { SUCCESS_STATUS_CODE } from '../../config/status.code.config';
import { StyledCommonButton, StyledCommonFullHeigthWhiteWrap, StyledCommonGrayBorderWhiteButton } from '../../styles/common';
import { colors } from '../../styles/variables';
import checkResponseStatus from '../../utils/statusUtil';
import { fontBold, fontRegular } from '../../styles/font';

const MyGuideView = () => {
  const location = useLocation();
  const locationState = { ...location.state };
  const [activeTab, setActiveTab] = useState(locationState.initTabIndex | 0);
  const [activeButton, setActiveButton] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // TODO: isCenterModalOpen 전역 상태 관리
  const [isCenterModalOpen, setIsCenterModalOpen] = useState(false);
  const [guideSchedule, setGuideSchedule] = useState<GuideScheduleDto[]>([]);
  const [guideReservations, setGuideReservations] = useState<GuideScheduleDto[]>([]);
  const [cancleReasons, setCancleReasons] = useState<CancelReason[]>([]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  useEffect(() => {
    (async () => {
      const response = await fetchGuideSchedule();
      if (checkResponseStatus(response.status) === SUCCESS_STATUS_CODE) {
        setGuideSchedule(response.data.data)
      }
    })();
    (async () => {
      const response = await fetchGuideReservationList();
      if (checkResponseStatus(response.status) === SUCCESS_STATUS_CODE) {
        setGuideReservations(response.data.data)
      }
    })();
    (async () => {
      const response = await fetchCancleReservationReasons();
      if (checkResponseStatus(response.status) === SUCCESS_STATUS_CODE) {
        setCancleReasons(response.data.data)
      }
    })();
  }, [])
  const tabContents = [(<><StoredCourseItem datas={guideSchedule}></StoredCourseItem></>), (<><ReservationPendingCourseItem datas={guideReservations} isOpen={isCenterModalOpen} setIsOpen={setIsCenterModalOpen}></ReservationPendingCourseItem></>)]
  return (
    <>
      <TitleWithIconHeader title="내 가이드" icon={<MyPageIcon style={{ marginRight: 20 }} onClick={openModal} />}></TitleWithIconHeader>
      <SideModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>ss</SideModal>
      <StyledCommonFullHeigthWhiteWrap>
        <Tab items={['가이딩 일정', '예약 신청']} activeTab={activeTab} handleTabClick={handleTabClick} />
        <TabView activeTab={activeTab}>{tabContents}</TabView>
        <CenterModal isOpen={isCenterModalOpen} setIsOpen={setIsCenterModalOpen}><div><StyledModalTitle style={fontBold}>취소 사유</StyledModalTitle><div>{cancleReasons.map((reason, index) => <StyledButton key={index} active={index === activeButton } style={fontRegular} onClick={() => setActiveButton(index)}>{reason?.reason}</StyledButton>)}</div></div></CenterModal>
      </StyledCommonFullHeigthWhiteWrap>
      <Navigation userType='guide' initTabIndex={0}></Navigation>
    </>
  )
};
export default MyGuideView;

const StyledButton = styled(StyledCommonButton)<{active: boolean}>`
  margin: 5px;
  width: 45%;
  color:${({active}) => active ? 'white' : `${colors.gray2}` };
  background-color: ${({active}) => active ? `${colors.gray5}` : 'white' };
  font-size: 14px;
  border: 1.5px ${colors.gray2} solid;
  &:hover {
    background-color: ${colors.gray5};
    border: 1.5px ${colors.gray5} solid;
    color: white;
  }
`;
const StyledModalTitle = styled.p`
  font-size: 16px;
  text-align: center;
`