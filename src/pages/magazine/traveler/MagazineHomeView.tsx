import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Tab, { TabView } from '../../../components/common/Tab'
import { StyledCommonFullHeigthWhiteWrap } from '../../../styles/common'
import Navigation from '../../../components/common/Navigation'
import TitleWithIconHeader from '../../../components/common/TitleWithIconHeader'
import { tabContents } from '../../../constants/feature'
import SearchIcon from '../../../assets/SearchIcon'

const MagazineHomeView = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
 
  return (
    <>
      <TitleWithIconHeader title={"매거진"} icon={<SearchIcon style={{marginRight: 20}} onClick={() => navigate('/magazine/search')}/> } />
      <StyledCommonFullHeigthWhiteWrap>
        <Tab items={['Now', '농촌 체험', '맛집', '관광지', '자연 경관']} activeTab={activeTab} handleTabClick={handleTabClick} />
        <TabView activeTab={activeTab}>{tabContents}</TabView>
      </StyledCommonFullHeigthWhiteWrap>
      <Navigation userType={'traveler'} initTabIndex={0} />
    </>
  )
};
export default MagazineHomeView;
