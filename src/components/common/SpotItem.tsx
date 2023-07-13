import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/variables'
import { fontMedium } from '../../styles/font'
import { SpotDetailDto } from '../../@types/CourseDto';

interface SpotItemProps {
  data: SpotDetailDto;
  index: number;
}
const SpotItem = ({ data, index }: SpotItemProps) => {
  // GUIDE) 내 코스에서 상세 눌렀을 경우
  const InfoTitleList = ['주소', '전화번호', '홈페이지']
  const InfoKeyList = [data.address, data.telephone, data.homepage]
  return (
    <>
      <StyledContainer>
        <StyledTitle style={fontMedium}>{index + 1}. {data.title}</StyledTitle>
        <StyledBoxContainer imageUrl={data.imageUrl} />
        <StyledInfoContainer>
          {InfoTitleList.map((infoTitle, index) => (
            <StyledInfoItemContainer key={index}>
              <StyledInfoTitle style={fontMedium}>
                {infoTitle}
              </StyledInfoTitle>
              <StyledInfoContent style={fontMedium}>{InfoKeyList[index]}</StyledInfoContent>
            </StyledInfoItemContainer>
          ))}
        </StyledInfoContainer>
        <StyledContent>{data.description}</StyledContent>
      </StyledContainer>
    </>
  )
};
export default SpotItem;

const StyledContainer = styled.div`
  padding-top: 10px;
`
const StyledTitle = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
`
const StyledBoxContainer = styled.div<{
  marginHorizontal?: number;
  imageUrl: string;
}>
`
  height: 200px;
  border-radius: 20px;
  background: linear-gradient(to bottom right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1));
  margin: ${({ marginHorizontal }) => marginHorizontal ? `10px  ${marginHorizontal}px;` : `10px 0px`};
  background-image: url(${({ imageUrl }) => imageUrl});
  position: relative;
`;
const StyledContent = styled.p`
  font-size: 12px;
  white-space: pre-wrap;
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

const text = `1963년 보물 제165호로 지정된 오죽헌은 우리나라 대표 어머니상신사임당(1504∼1551)과 그의 아들 율곡 이이(1536∼1584)가 태어난 유서 깊은 곳이다. 집 주위에 까마귀처럼 검은 대나무가 많아 율곡의 이종사촌 권처균이 자신의 호를 오죽헌이라 지은 데서 비롯된 ‘오죽헌’이라고 불린다.

1963년 보물 제165호로 지정된 오죽헌은 우리나라 대표 어머니상 신사임당(1504∼1551)과 그의 아들 율곡 이이(1536∼1584)가 태어난 유서 깊은곳이다. 집 주위에 까마귀처럼 검은 대나무가 많아 율곡의 이종사촌 권처균이 자신의 호를 오죽헌이라 지은 데서 비롯된 ‘오죽헌’이라고 불린다.`
