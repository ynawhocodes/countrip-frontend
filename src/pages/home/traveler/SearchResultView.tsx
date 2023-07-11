import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Filter from '../../../components/common/Filter';
import GoBackHeader from '../../../components/common/GoBackHeader';
import CourseItem from '../../../components/CourseItem';
import { StyledCommonFullHeigthWhiteWrap } from '../../../styles/common';

const SearchResultView = () => {
  const filterTypeList = ['가이드 포함', '농촌 체험', '맛집', '관광지', '자연 경관', '가이드 포함', '농촌 체험', '맛집', '관광지', '자연 경관']
  const navigate = useNavigate();
  
  const goToPage = (id: number) => {
    navigate(`/course/${id}`)
  };
  
  return (
    <>
      <GoBackHeader />
      <StyledCommonFullHeigthWhiteWrap>
        <Filter items={filterTypeList} />
        <div onClick={() => goToPage(2)}>
          <CourseItem/>
        </div>
        <CourseItem/>
        <CourseItem />
      </StyledCommonFullHeigthWhiteWrap>
    </>
  )
};
export default SearchResultView;