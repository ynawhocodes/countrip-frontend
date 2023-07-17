import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MagazineDto } from '../@types/Magazine';
import { fontRegular } from '../styles/font';
interface HorizontalScrollBoxListProps {
  datas: MagazineDto[]
}
interface HorizontalScrollBoxItemProps {
  data: MagazineDto
}
const HorizontalScrollBoxList = ({ datas }: HorizontalScrollBoxListProps) => {
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

const HorizontalScrollBoxItem = ({ data }: HorizontalScrollBoxItemProps) => {
  const navigate = useNavigate();

  return (
    <>
      <StyledBoxContainer onClick={() => navigate(`/magazine/${data.id}`)} imageUrl={data.imageUrl}>
        <StyledBoxTitle style={fontRegular}>{data.title}</StyledBoxTitle>
      </StyledBoxContainer>
    </>
  )
};

const StyledBoxContainer = styled.div<{ imageUrl: string}>`
  flex: 0 0 220px;
  position: relative;
  height: 300px;
  margin-right: 10px;
  border-radius: 20px;
  cursor: pointer;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    background: linear-gradient(to bottom right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1));
  }
`
const StyledBoxTitle = styled.p`
  position: absolute ;
  font-size: 15px;
  top: 10px;
  left: 20px;
  color: white;
`
