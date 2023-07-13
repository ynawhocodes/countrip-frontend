import React from 'react'
import styled from 'styled-components'
import GoBackHeader from '../../components/common/GoBackHeader';
import SpotItem from '../../components/common/SpotItem';
import { StyledCommonFullHeigthWhiteWrap } from '../../styles/common';
import { colors } from '../../styles/variables'

const TravelSpotView = () => {
  return (
    <>
      <StyledCommonFullHeigthWhiteWrap paddingHorizontal={20}>
        <StyledHeaderContent/>
        <GoBackHeader/>
        {/* <SpotItem/>
        <SpotItem/>
        <SpotItem/>
        <SpotItem/> */}
      </StyledCommonFullHeigthWhiteWrap>
    </>
  )
};
export default TravelSpotView;

const StyledHeaderContent = styled.div`
  height: 100px;
  background-color: ${colors.gray2};
`