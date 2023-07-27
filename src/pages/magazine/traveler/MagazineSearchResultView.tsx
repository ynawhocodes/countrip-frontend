import React, { useState } from "react";
import Tab, { TabView } from "../../../components/common/Tab";
import { StyledCommonFullHeigthWhiteWrap } from "../../../styles/common";
import Navigation from "../../../components/common/Navigation";
import { tabContentsWithoutNow } from "../../../constants/feature";
import GoBackHeader from "../../../components/common/GoBackHeader";
import { useLocation } from "react-router-dom";

const MagazineSearchResultView = () => {
  const location = useLocation();
  const searchInfo = { ...location.state };
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <GoBackHeader title={searchInfo.search} />
      <StyledCommonFullHeigthWhiteWrap>
        <Tab
          items={["농촌 체험", "맛집", "관광지", "자연 경관"]}
          activeTab={activeTab}
          handleTabClick={handleTabClick}
        />
        <TabView activeTab={activeTab}>{tabContentsWithoutNow}</TabView>
      </StyledCommonFullHeigthWhiteWrap>
      <Navigation userType={"traveler"} initTabIndex={0} />
    </>
  );
};
export default MagazineSearchResultView;
