import React, { useState, useEffect } from 'react'
import MyPageIcon from '../../assets/MyPageIcon';
import BookedCourseItem from '../../components/BookedCourseItem';
import Navigation from "../../components/common/Navigation";
import SideModal from "../../components/common/SideModal";
import Tab, { TabView } from "../../components/common/Tab";
import TitleWithIconHeader from "../../components/common/TitleWithIconHeader";
import SelectedCourseItem from '../../components/SelectedCourseItem';
import { StyledCommonFullHeigthWhiteWrap } from "../../styles/common";

const MyTripView = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  const tabContents = [(<><BookedCourseItem></BookedCourseItem></>), (<><SelectedCourseItem></SelectedCourseItem></>)]

  return (
    <>
      <TitleWithIconHeader title="내 여행" icon={<MyPageIcon style={{ marginRight: 20 }} onClick={openModal} />}></TitleWithIconHeader>
      <SideModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>ss</SideModal>
      <StyledCommonFullHeigthWhiteWrap>
        <Tab items={['여행 일정', '담은 일정']} activeTab={activeTab} handleTabClick={handleTabClick} />
        <TabView activeTab={activeTab}>{tabContents}</TabView>
      </StyledCommonFullHeigthWhiteWrap>
      <Navigation userType='traveler' initTabIndex={2}></Navigation>
    </>
  )
};
export default MyTripView;