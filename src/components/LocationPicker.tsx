import React, { useEffect, useState } from 'react'
import Tab, { TabView } from './common/Tab'
import { fontBold } from '../styles/font'
import styled from 'styled-components'
import LocationList from './LocationList'
import LocationDto from '../@types/LocationDto'
import { StyledCommonBlackButton } from '../styles/common'
interface PickerProps {
  isOpen?: boolean;
  // TODO: handleClose 정확히 하기
  handleClose?: any;
}
const LocationPicker = ({isOpen, handleClose}: PickerProps) => {
  const [activeTab, setActiveTab] = useState(1)
  const [location, setLocation] = useState<LocationDto[]>(testList);

  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }

  useEffect(() => { }, []);

  const locationList = location?.map( item => item.name );
  const locationTabContentDatas = location.map(item => item.cities.map(item => item.name))
  const locationTabContents = location.map((_, index) => (<LocationList key={index} datas={locationTabContentDatas[index]} />))

  return (
    <>
      <StyledTitle style={fontBold}>지역을 선택하세요</StyledTitle>
      <Tab
        items={locationList}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      />
      <TabView activeTab={activeTab}>{locationTabContents}</TabView>
      {/* <StyledCommonBlackButton onClick={handleClose}>완료</StyledCommonBlackButton> */}
    </>
  )
}
export default LocationPicker

const StyledTitle = styled.p`
  font-size: 20px;
`

const testList = [{
  "id": 1,
  "name": "서울",
  "cities": [
    {
      "id": 1,
      "name": "서울시"
    },
    {
      "id": 18,
      "name": "강남구"
    },
    {
      "id": 19,
      "name": "강동구"
    },
    {
      "id": 20,
      "name": "강북구"
    },
    {
      "id": 21,
      "name": "강서구"
    },
    {
      "id": 22,
      "name": "관악구"
    },
    {
      "id": 23,
      "name": "광진구"
    }
  ]},
  {
  "id": 2,
  "name": "경기도",
  "cities": [
    {
      "id": 18,
      "name": "강남구"
    },
    {
      "id": 19,
      "name": "강동구"
    },
    {
      "id": 20,
      "name": "강북구"
    },
    {
      "id": 21,
      "name": "강서구"
    },
    {
      "id": 22,
      "name": "관악구"
    },
    {
      "id": 23,
      "name": "광진구"
    }
  ]}    
]