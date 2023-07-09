import React from 'react'
import styled from 'styled-components'
import HorizontalScrollBoxList from '../../../components/HorizontalScrollBoxList'
import Header from '../../../components/common/Header'
import Tab from '../../../components/common/Tab'
import { StyledCommonFullHeigthWhiteWrap } from '../../../styles/common'
import { colors } from '../../../styles/variables'
import RectangleBoxItem from '../../../components/RectangleBoxItem'
import { fontBold } from '../../../styles/font'
import SectionTitle from '../../../components/SectionTitle'
import Navigation from '../../../components/common/Navigation'
const TravelerHomeView = () => {
  return (
    <>
      <Header />
      <StyledCommonFullHeigthWhiteWrap>
        <StyledSearchContainer />
        <Tab items={['Now', '농촌 체험', '맛집', '관광지', '자연 경관']} />
        <SectionTitle title="지금 당장 가야하는 여행지 Top 10" paddingHorizontal={20}/>
        <HorizontalScrollBoxList/>
        <SectionTitle title="경험하기 좋은 농촌 체험" isMore={true} paddingHorizontal={20}/>
        <RectangleBoxItem margin={20}/>
        <RectangleBoxItem margin={20}/>
        <RectangleBoxItem margin={20}/>
      </StyledCommonFullHeigthWhiteWrap>
      <Navigation userType={'traveler'} />
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