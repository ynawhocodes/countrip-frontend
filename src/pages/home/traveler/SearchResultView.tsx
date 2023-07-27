import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Filter from "../../../components/common/Filter";
import GoBackHeader from "../../../components/common/GoBackHeader";
import CourseItem from "../../../components/CourseItem";
import { StyledCommonFullHeigthWhiteWrap } from "../../../styles/common";
import { colors } from "../../../styles/variables";
import { fontRegular, fontBold, fontMedium } from "../../../styles/font";
import HorizontalScrollSquareBoxList from "../../../components/HorizontalScrollSquareBoxList";
import CourseDto from "../../../@types/CourseDto";
import { fetchMyCourseList } from "../../../api/guideFeatureApi";
import checkResponseStatus from "../../../utils/statusUtil";
import { SUCCESS_STATUS_CODE } from "../../../config/status.code.config";
import {
  fetchCourseSearchResult,
  fetchMagazineNowList,
} from "../../../api/travelerFeatureApi";
import LoadingSpinner from "../../../components/common/LoadingSpinner";

const SearchResultView = () => {
  const [loading, setLoading] = useState(false);
  const [courseInfo, setCourseInfo] = useState<CourseDto[]>([]);
  const filterTypeList = [
    "가이드 포함",
    "농촌 체험",
    "맛집",
    "관광지",
    "자연 경관",
  ];
  const navigate = useNavigate();

  const goToPage = (id: number) => {
    navigate(`/course/${id}`);
  };
  // useEffect(() => {
  //   (async () => {
  //     setLoading(true);
  //     const response = await fetchCourseSearchResult({cityId: 9, travelDate: '2023-07-28', adultCount: 2, childCount: 2, babyCount: 1}, 2);
  //     if (checkResponseStatus(response.status) === SUCCESS_STATUS_CODE) {
  //       setCourseInfo(response.data.data)
  //     }
  //     setLoading(false);
  //   })();
  // }, [])
  const data = {
    title: "박물관을 포함한 자연 경관",
    guideName: "양복자 가이드님",
    spots: [
      {
        title: "오죽헌",
        imageUrl:
          "https://hyeinisfree.s3.ap-northeast-2.amazonaws.com/spotImages/2023-07-13/ae47fd52-b874-4c6f-b96d-b94d5a586400.png",
      },
    ],
  };
  const hasPriceInfo = true;
  console.log(courseInfo);
  return (
    <>
      {loading && <LoadingSpinner />}
      <GoBackHeader title="강릉시" firstInfo="7월 28일" secondInfo="성인 1명" />
      {courseInfo.length !== 0 ? (
        <StyledCommonFullHeigthWhiteWrap>
          <Filter items={filterTypeList} />
          <div onClick={() => goToPage(2)}>
            {courseInfo.map((data, index) => (
              <CourseItem key={index} data={data}></CourseItem>
            ))}
          </div>
        </StyledCommonFullHeigthWhiteWrap>
      ) : (
        <>
          {" "}
          <StyledCommonFullHeigthWhiteWrap>
            <Filter items={filterTypeList} />
            <div onClick={() => navigate("/trip/2")}>
              <StyledCourseContainer>
                <StyledTitle style={fontBold}>{data.title}</StyledTitle>
                <StyledGuideInfo style={fontRegular}>
                  {data.guideName}
                </StyledGuideInfo>
                <HorizontalScrollSquareBoxList datas={data.spots} />
                {hasPriceInfo && (
                  <StyledInfoWrap>
                    <StyledPrice style={fontMedium}>예상 금액</StyledPrice>
                    <StyledPriceValue style={fontMedium}>
                      70000
                    </StyledPriceValue>
                  </StyledInfoWrap>
                )}
              </StyledCourseContainer>
            </div>
          </StyledCommonFullHeigthWhiteWrap>
        </>
      )}
    </>
  );
};
export default SearchResultView;

const StyledCourseContainer = styled.div`
  padding: 30px 0;
  padding-left: 20px;
  border-bottom: ${colors.gray1} 1px solid;
`;
const StyledTitle = styled.p`
  font-size: 16px;
  margin: 0;
`;
const StyledInfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledGuideInfo = styled.p`
  color: ${colors.gray2};
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 25px;
`;
// 모두 가이드 미포함으로 변경되어 가이드 포함 태그가 사라짐
// const StyledWithGuideTag = styled.div`
//   background-color: ${colors.gray1};
//   color: ${colors.gray3};
//   width: auto;
//   font-size: 10px;
//   padding: 3px 5px;
//   border-radius: 10px;
//   margin-left: 5px;
//   &::after {
//     content: '가이드 포함';
//   }
// `
const StyledPrice = styled.p`
  font-size: 12px;
`;
const StyledPriceValue = styled.p`
  font-size: 14px;
  margin-right: 20px;
  &::before {
    content: "₩ ";
  }
  &::after {
    content: "원";
  }
`;
