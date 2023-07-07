import React from 'react'
import styled from 'styled-components'
import HorizontalScrollBoxList from '../../../components/HorizontalScrollBoxList'
import Header from '../../../components/common/Header'
import Tab from '../../../components/common/Tab'
import { StyledCommonFullHeigthWhiteWrap } from '../../../styles/common'
import { colors } from '../../../styles/variables'
import RectangleBoxItem from '../../../components/RectangleBoxItem'
import { fontBold } from '../../../styles/font'
const TravelerHomeView = () => {
  return (
    <>
      <Header />
      <StyledCommonFullHeigthWhiteWrap>
        <StyledSearchContainer />
        <Tab items={['Now', '농촌 체험', '맛집', '관광지', '자연 경관']} />
        <StyledSectionTitle style={fontBold}>지금 당장 가야하는 여행지 Top 10</StyledSectionTitle>
        <HorizontalScrollBoxList/>
        <StyledSectionTitle style={fontBold}>경험하기 좋은 농촌 체험</StyledSectionTitle>
        <RectangleBoxItem/>
        <RectangleBoxItem/>
        <RectangleBoxItem/>
      </StyledCommonFullHeigthWhiteWrap>
    </>
  )
};
export default TravelerHomeView;

const StyledSearchContainer = styled.div`
  margin: 0 20px;
  background-color: ${colors.gray1};
  height: 30%;
  border-radius: 30px;
`
const StyledSectionTitle = styled.p`
  margin: 18px 20px;
  font-size: 18px;
`
