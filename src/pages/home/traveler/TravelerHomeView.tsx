import React, { useState, useEffect } from 'react'
import Tab, { TabView } from '../../../components/common/Tab'
import { StyledCommonFullHeigthWhiteWrap } from '../../../styles/common'
import Navigation from '../../../components/common/Navigation'
import MyPageIcon from '../../../assets/MyPageIcon'
import TitleWithIconHeader from '../../../components/common/TitleWithIconHeader'
import CourseSearch from '../../../components/CourseSearch'
import SideModal from '../../../components/common/SideModal'
import SpotDto from '../../../@types/SpotDto'
import { tabContents } from '../../../constants/feature'
import { fetchMagazineNowList } from '../../../api/travelerFeatureApi'
import checkResponseStatus from '../../../utils/statusUtil'
import { SUCCESS_STATUS_CODE } from '../../../config/status.code.config'


const TravelerHomeView = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  useEffect(() => {
    (async () => {
      const response = await fetchMagazineNowList();
      if (checkResponseStatus(response.status) === SUCCESS_STATUS_CODE) {
        console.log(response.data.data)
      }
    })();
  }, [])
  return (
    <>
      <TitleWithIconHeader title={"컨트립"} icon={<MyPageIcon style={{ marginRight: 20 }} onClick={openModal} />} />
      <StyledCommonFullHeigthWhiteWrap>
        <CourseSearch />
        <SideModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>ss</SideModal>
        <Tab items={['Now', '농촌 체험', '맛집', '관광지', '자연 경관']} activeTab={activeTab} handleTabClick={handleTabClick} />
        <TabView activeTab={activeTab}>{tabContents}</TabView>
      </StyledCommonFullHeigthWhiteWrap>
      <Navigation userType={'traveler'} initTabIndex={1} />
    </>
  )
};
export default TravelerHomeView;