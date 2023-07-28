import React, { useState, useEffect } from "react";
import Tab, { TabView } from "../../../components/common/Tab";
import {
  StyledCommonFullHeigthWhiteWrap,
  StyledCommonItemsPerRowContainer,
} from "../../../styles/common";
import Navigation from "../../../components/common/Navigation";
import MyPageIcon from "../../../assets/MyPageIcon";
import TitleWithIconHeader from "../../../components/common/TitleWithIconHeader";
import CourseSearch from "../../../components/CourseSearch";
import SideModal from "../../../components/common/SideModal";
import SpotDto from "../../../@types/SpotDto";
import { tabContents } from "../../../constants/feature";
import {
  fetchMagazineFarmExperienceList,
  fetchMagazineLandscapeList,
  fetchMagazineNowList,
  fetchMagazineRestaurantList,
  fetchMagazineTouristAttractionList,
} from "../../../api/travelerFeatureApi";
import checkResponseStatus from "../../../utils/statusUtil";
import { SUCCESS_STATUS_CODE } from "../../../config/status.code.config";
import { MagazineDto } from "../../../@types/Magazine";
import SectionTitle from "../../../components/SectionTitle";
import HorizontalScrollBoxList from "../../../components/HorizontalScrollBoxList";
import RectangleBoxItem from "../../../components/RectangleBoxItem";
import {
  magazineNowData,
  magazineRestaurantData,
  magazineRuralExperienceData,
  magazineTouristData,
} from "../../../assets/sample/magazine/magazineData";
import SquareBoxItem from "../../../components/SquareBoxItem";
import LoadingSpinner from "../../../components/common/LoadingSpinner";

const TravelerHomeView = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [now, setNow] = useState<MagazineDto[]>([]);
  const [farmExperience, setFarmExperience] = useState<MagazineDto[]>([]);
  const [restaurant, setRestaurant] = useState<MagazineDto[]>([]);
  const [touristAttraction, setTouristAttraction] = useState<MagazineDto[]>([]);
  const [landscape, setLandscape] = useState<MagazineDto[]>([]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetchMagazineNowList();
      if (checkResponseStatus(response.status) === SUCCESS_STATUS_CODE) {
        setNow(response.data.data);
      }
      setLoading(false);
    })();
    (async () => {
      setLoading(true);
      const response1 = await fetchMagazineFarmExperienceList();
      if (checkResponseStatus(response1.status) === SUCCESS_STATUS_CODE) {
        setFarmExperience(response1.data.data);
      }
      const response2 = await fetchMagazineRestaurantList();
      if (checkResponseStatus(response2.status) === SUCCESS_STATUS_CODE) {
        setRestaurant(response2.data.data);
      }
      setLoading(false);
    })();
    (async () => {
      setLoading(true);
      const response = await fetchMagazineTouristAttractionList();
      if (checkResponseStatus(response.status) === SUCCESS_STATUS_CODE) {
        setTouristAttraction(response.data.data);
      }
      setLoading(false);
    })();
    (async () => {
      setLoading(true);
      const response = await fetchMagazineLandscapeList();
      if (checkResponseStatus(response.status) === SUCCESS_STATUS_CODE) {
        setLandscape(response.data.data);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <>
      {loading && <LoadingSpinner />}
      <TitleWithIconHeader
        title={"컨트립"}
        icon={<MyPageIcon style={{ marginRight: 20 }} onClick={openModal} />}
      />
      <StyledCommonFullHeigthWhiteWrap>
        <CourseSearch />
        <SideModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          ss
        </SideModal>
        <Tab
          items={["Now", "농촌 체험", "맛집", "관광지", "자연 경관"]}
          activeTab={activeTab}
          handleTabClick={handleTabClick}
        />
        <TabView activeTab={activeTab}>
          {[
            // Now
            <>
              <SectionTitle
                title="지금 당장 가야하는 여행지 Top 10"
                paddingHorizontal={20}
              />
              <HorizontalScrollBoxList datas={magazineNowData} />
              <SectionTitle
                title="경험하기 좋은 농촌 체험"
                paddingHorizontal={20}
              />
              {magazineRuralExperienceData.map((data, index) => (
                <RectangleBoxItem
                  key={index}
                  marginHorizontal={20}
                  data={data}
                />
              ))}
            </>,
            // 농촌 체험
            <>
              {magazineRuralExperienceData.map((data, index) => (
                <RectangleBoxItem
                  key={index}
                  marginHorizontal={20}
                  data={data}
                />
              ))}
            </>,
            // 맛집
            <>
              <StyledCommonItemsPerRowContainer>
                {magazineRestaurantData.map((data, index) => (
                  <SquareBoxItem key={index} data={data} />
                ))}
              </StyledCommonItemsPerRowContainer>
            </>,
            // 관광지
            <>
              <StyledCommonItemsPerRowContainer>
                {magazineTouristData.map((data, index) => (
                  <SquareBoxItem key={index} data={data} />
                ))}
              </StyledCommonItemsPerRowContainer>
            </>,
            // 자연 경관
            <>
              <StyledCommonItemsPerRowContainer>
                {landscape.map((data, index) => (
                  <SquareBoxItem key={index} data={data} />
                ))}
              </StyledCommonItemsPerRowContainer>
            </>,
          ]}
        </TabView>
      </StyledCommonFullHeigthWhiteWrap>
      <Navigation userType={"traveler"} initTabIndex={1} />
    </>
  );
};
export default TravelerHomeView;
