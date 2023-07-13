import React from 'react';
import styled from 'styled-components';
import { SpotSquareImageDto } from '../@types/GuideDto';
import { fontRegular } from '../styles/font';

interface HorizontalScrollSquareBoxListProps {
  datas: SpotSquareImageDto[];
}
const HorizontalScrollSquareBoxList = ({ datas }: HorizontalScrollSquareBoxListProps) => {
  return (
    <StyledListContainer>
      {datas.map((data, index) => (<HorizontalScrollBoxItem key={index} data={data}/>))}
    </StyledListContainer>
  );
};

export default HorizontalScrollSquareBoxList;

const StyledListContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 0 10px 0 0;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

interface HorizontalScrollBoxItemProps {
  data: SpotSquareImageDto
}
const HorizontalScrollBoxItem = ({ data }: HorizontalScrollBoxItemProps) => {
  return (
    <>
      <StyledBoxContainer imageUrl={data.imageUrl}>
        <StyledBoxTitle style={fontRegular}>{data.title}</StyledBoxTitle>
      </StyledBoxContainer>
    </>
  )
};
const StyledBoxContainer = styled.div<{ imageUrl: string }>`
  flex: 0 0 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  border-radius: 30%;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  height: 60px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 30%;
    background: linear-gradient(to bottom right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1));
  }
`
const StyledBoxTitle = styled.p`
  font-size: 12px;
  color: white;
  line-height: 12px;
  text-align: center;
  z-index: 1;
`;