import React, { useState } from 'react'
import Tab, { TabView } from './common/Tab'
import { fontBold } from '../styles/font'
import styled from 'styled-components'
import LocationList from './LocationList'

const LocationPicker = () => {
  const [activeTab, setActiveTab] = useState(1)

  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }
  return (
    <>
      <StyledTitle style={fontBold}>지역을 선택하세요</StyledTitle>
      <Tab
        items={['서울', '경기', '인천', '강원', '대전', '충북', '충남', '부산']}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      />
      <TabView activeTab={activeTab}>{locationTabContents}</TabView>
      

    </>
  )
}
export default LocationPicker

const StyledTitle = styled.p`
  font-size: 20px;
`

const locationList = ['강원도 전체', '강릉시', '고성군', '동해시'];
const locationTabContents = [(<LocationList datas={locationList} />), (<LocationList datas={locationList} />), (<LocationList datas={locationList} />)];