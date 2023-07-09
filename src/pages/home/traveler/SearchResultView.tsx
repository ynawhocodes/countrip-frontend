import React from 'react'
import styled from 'styled-components'
import Filter from '../../../components/common/Filter';
import Header from '../../../components/common/Header';
import ModalBottom from '../../../components/common/ModalBottom';
import CourseItem from '../../../components/CourseItem';
import HorizontalScrollSquareBoxList from '../../../components/HorizontalScrollSquareBoxList';
import { StyledCommonFullHeigthWhiteWrap } from '../../../styles/common';
import { colors } from '../../../styles/variables'

const SearchResultView = () => {
  const filterTypeList = ['가이드 포함', '농촌 체험', '맛집', '관광지', '자연 경관','가이드 포함', '농촌 체험', '맛집', '관광지', '자연 경관']
  return (
    <>
      <Header />
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