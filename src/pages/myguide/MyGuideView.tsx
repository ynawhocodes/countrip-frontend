import React, {useState} from 'react'
import MyPageIcon from "../../assets/MyPageIcon";
import CenterModal from '../../components/CenterModal';
import Navigation from '../../components/common/Navigation';
import SideModal from '../../components/common/SideModal';
import Tab, { TabView } from '../../components/common/Tab';
import TitleWithIconHeader from "../../components/common/TitleWithIconHeader";
import ReservationPendingCourseItem from '../../components/ReservationPendingCourseItem';
import StoredCourseItem from '../../components/StoredCourseItem';
import { StyledCommonFullHeigthWhiteWrap } from '../../styles/common';

const MyGuideView = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // TODO: isCenterModalOpen 전역 상태 관리
  const [isCenterModalOpen, setIsCenterModalOpen] = useState(false);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const tabContents = [(<><StoredCourseItem></StoredCourseItem></>), (<><ReservationPendingCourseItem isOpen={isCenterModalOpen} setIsOpen={setIsCenterModalOpen}></ReservationPendingCourseItem></>)]
  return (
    <>
      <TitleWithIconHeader title="내 가이드" icon={<MyPageIcon style={{ marginRight: 20 }} onClick={openModal} />}></TitleWithIconHeader>
      <SideModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>ss</SideModal>
      <StyledCommonFullHeigthWhiteWrap>
        <Tab items={['가이딩 일정', '예약 신청']} activeTab={activeTab} handleTabClick={handleTabClick} />
        <TabView activeTab={activeTab}>{tabContents}</TabView>
        <CenterModal isOpen={isCenterModalOpen} setIsOpen={setIsCenterModalOpen}>s</CenterModal>
      </StyledCommonFullHeigthWhiteWrap>
      <Navigation userType='guide' initTabIndex={0}></Navigation>
    </>
  )
};
export default MyGuideView;
