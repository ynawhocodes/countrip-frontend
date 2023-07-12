import React, {useState} from 'react'
import Tab, { TabView } from '../../../components/common/Tab'
import { StyledCommonFullHeigthWhiteWrap } from '../../../styles/common'
import Navigation from '../../../components/common/Navigation'
import MyPageIcon from '../../../assets/MyPageIcon'
import TitleWithIconHeader from '../../../components/common/TitleWithIconHeader'
import { tabContents } from '../../../constants/feature'
import CourseSearch from '../../../components/CourseSearch'
import SideModal from '../../../components/common/SideModal'

const TravelerHomeView = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <TitleWithIconHeader title={"컨트립"} icon={<MyPageIcon style={{ marginRight: 20 }} onClick={openModal} />} />
      <StyledCommonFullHeigthWhiteWrap>
        <CourseSearch />
        <SideModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>ss</SideModal>
        <Tab items={['Now', '농촌 체험', '맛집', '관광지', '자연 경관']} activeTab={activeTab} handleTabClick={handleTabClick} />
        <TabView activeTab={activeTab}>{tabContents}</TabView>
      </StyledCommonFullHeigthWhiteWrap>
      <Navigation userType={'traveler'}/>
    </>
  )
};
export default TravelerHomeView;