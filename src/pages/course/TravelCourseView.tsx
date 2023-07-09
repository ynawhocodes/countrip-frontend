import React from 'react'
import styled from 'styled-components'
import GoBackHeader from '../../components/common/GoBackHeader';
import SpotItem from '../../components/common/SpotItem';
import { StyledCommonFullHeigthWhiteWrap } from '../../styles/common';
import { colors } from '../../styles/variables'

const TravelCourseView = () => {
  return (
    <>
      <StyledCommonFullHeigthWhiteWrap paddingHorizontal={20}>
        <StyledHeaderContent/>
        <GoBackHeader/>
        <SpotItem/>
        <SpotItem/>
        <SpotItem/>
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