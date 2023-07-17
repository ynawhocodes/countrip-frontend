import React from 'react'
import styled from 'styled-components'
import GoBackHeader from '../../components/common/GoBackHeader'
import SpotItem from '../../components/common/SpotItem'
import { StyledCommonFullHeigthWhiteWrap } from '../../styles/common'
import { colors } from '../../styles/variables'
import { useParams } from 'react-router-dom';
import { magazineRuralExperienceDetailData } from '../../assets/sample/magazine/magazineData'
import { fontMedium } from '../../styles/font'

const TravelSpotView = () => {
  const { id } = useParams();
  const data = magazineRuralExperienceDetailData[Number(id) - 1];
  const InfoTitleList = ['기간', '주소', '가격', '전화번호', '홈페이지']
  const InfoKeyList = [data.date, data.address, data.price, data.telephone, data.homepage]
  return (
    <>
      <GoBackHeader title={data.title} />
      <StyledCommonFullHeigthWhiteWrap paddingHorizontal={20}>
        <StyledContainer>
          <StyledTitle style={fontMedium}>기본 정보</StyledTitle>
          <img
            src={data.imageUrl}
            alt="My Image"
            style={{ width: '100%', height: 'auto', borderRadius: 20 }}
          />
          <StyledInfoContainer>
            {InfoTitleList.map((infoTitle, index) => (
              <StyledInfoItemContainer key={index}>
                <StyledInfoTitle style={fontMedium}>
                  {infoTitle}
                </StyledInfoTitle>
                <StyledInfoContent style={fontMedium}>
                  {InfoKeyList[index]}
                </StyledInfoContent>
              </StyledInfoItemContainer>
            ))}
          </StyledInfoContainer>
        </StyledContainer>
      </StyledCommonFullHeigthWhiteWrap>
    </>
  )
}
export default TravelSpotView


const StyledContainer = styled.div`
  padding-top: 10px;
`
const StyledTitle = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
`
const StyledInfoContainer = styled.div`
  padding: 15px 0 15px 0;
`
const StyledInfoItemContainer = styled.div`
  display: flex;
  height: 30px;
`
const StyledInfoTitle = styled.p`
  font-size: 12px;
  color: ${colors.gray4};
  width: 90px;
`
const StyledInfoContent = styled.p`
  font-size: 12px;
  color: ${colors.gray3};
`