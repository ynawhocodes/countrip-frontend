import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SpotDto from '../@types/SpotDto';
import { fontRegular } from '../styles/font';
interface SpotsType {
  datas: SpotDto[]
}
interface SpotType {
  data: SpotDto
}
const HorizontalScrollBoxList = ({ datas }: SpotsType) => {
  return (
    <StyledListContainer>
      {datas.map((item, index) => <HorizontalScrollBoxItem key={index} data={item} />)}
    </StyledListContainer>
  );
};

export default HorizontalScrollBoxList;

const StyledListContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 0 10px 0 20px;
  height: 25%;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const HorizontalScrollBoxItem = ({ data }: SpotType) => {
  const navigate = useNavigate();

  return (
    <>
      <StyledBoxContainer onClick={() => navigate(`/magazine/${data.postId}`)}>
        <StyledBoxTitle style={fontRegular}>{data.title}</StyledBoxTitle>
      </StyledBoxContainer>
    </>
  )
};

const StyledBoxContainer = styled.div`
  flex: 0 0 220px;
  position: relative;
  margin-right: 10px;
  border-radius: 10%;
  background: linear-gradient(to bottom right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1));
`;
const StyledBoxTitle = styled.p`
  position: absolute ;
  font-size: 15px;
  top: 10px;
  left: 20px;
  color: white;
`
