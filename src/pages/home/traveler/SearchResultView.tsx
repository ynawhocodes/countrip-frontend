import React from 'react'
import styled from 'styled-components'
import Filter from '../../../components/common/Filter';
import GoBackHeader from '../../../components/common/GoBackHeader';
import CourseItem from '../../../components/CourseItem';
import { StyledCommonFullHeigthWhiteWrap } from '../../../styles/common';

const SearchResultView = () => {
  const filterTypeList = ['가이드 포함', '농촌 체험', '맛집', '관광지', '자연 경관', '가이드 포함', '농촌 체험', '맛집', '관광지', '자연 경관']
  return (
    <>
      <GoBackHeader />
      <StyledCommonFullHeigthWhiteWrap>
        <Filter items={filterTypeList} />
        <CourseItem/>
        <CourseItem/>
        <CourseItem />
      </StyledCommonFullHeigthWhiteWrap>
    </>
  )
};
export default SearchResultView;