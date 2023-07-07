import React from 'react'
import styled from 'styled-components'
import Header from '../../components/common/Header';
import SpotItem from '../../components/common/SpotItem';
import { StyledCommonFullHeigthWhiteWrap } from '../../styles/common';
import { colors } from '../../styles/variables'

const TravelCourseView = () => {
  return (
    <>
      <StyledCommonFullHeigthWhiteWrap>
        <StyledHeaderContent/>
        <Header />
        <SpotItem/>

      </StyledCommonFullHeigthWhiteWrap>
    </>
  )
};
export default TravelCourseView;

const StyledHeaderContent = styled.div`
  /* TODO: 헤더에 컨텐츠 넣을지 따로 뺄지 고민 */
  height: 100px;
  background-color: ${colors.gray2};
`