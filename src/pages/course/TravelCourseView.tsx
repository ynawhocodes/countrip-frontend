import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import GoBackHeader from '../../components/common/GoBackHeader';
import SpotItem from '../../components/common/SpotItem';
import { StyledCommonFullHeigthWhiteWrap, StyledCommonHr } from '../../styles/common';
import { colors } from '../../styles/variables'
import { useParams } from 'react-router-dom';
import { fetchCourse } from '../../api/featureApi';
import checkResponseStatus from '../../utils/statusUtil';
import { SUCCESS_STATUS_CODE } from '../../config/status.code.config';
import { CourseDetailDto } from '../../@types/CourseDto';
import { fontBold, fontRegular } from '../../styles/font'

const TravelCourseView = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState<CourseDetailDto>();

  useEffect(() => {
    (async () => {
      const response = await fetchCourse(Number(courseId));
      if (checkResponseStatus(response.status) === SUCCESS_STATUS_CODE) {
        setCourse(response.data.data)
      }
    })();
  }, [])
  
  return (
    <>
      <StyledCommonFullHeigthWhiteWrap paddingHorizontal={20}>
        <>
          <GoBackHeader/>
          <StyledHeaderContainer>
            <StyledTite style={fontBold}>{course?.title}</StyledTite>
            <StyledContent style={fontRegular}>{course?.guideName}</StyledContent>
          </StyledHeaderContainer>
          <StyledCommonHr/>
          {course && course.spots.map((spot, index) => (<SpotItem key={index} data={spot} index={index} />))}
        </>
      </StyledCommonFullHeigthWhiteWrap>
    </>
  )
};
export default TravelCourseView;

const StyledHeaderContainer = styled.div`
  /* TODO: 헤더에 컨텐츠 넣을지 따로 뺄지 고민 */
  padding: 10px 0;
`
const StyledTite = styled.p`
  font-size: 20px;
`
const StyledContent = styled.p`
  font-size: 12px;
  &::after {
    content: ' 가이드님';
  }
`