import React from 'react';
import styled from 'styled-components';
import { fontRegular } from '../styles/font';
import { useNavigate } from 'react-router-dom';
import { MagazineDto } from '../@types/Magazine';

interface RectangleBoxItemProps {
  marginHorizontal?: number;
  data: MagazineDto
}
const RectangleBoxItem = ({ marginHorizontal, data }: RectangleBoxItemProps) => {
  const navigate = useNavigate();

  const handleNext = (id: number) => {
    navigate(`/magazine/${id}`);
  };
  return (
    <>
      <StyledBoxContainer marginHorizontal={marginHorizontal} onClick={() => handleNext(data.id)} imageUrl={data.imageUrl}>
        <StyledBoxTitle style={fontRegular}>{data.title}</StyledBoxTitle>
        <StyledDescription style={fontRegular}>{data.description}</StyledDescription>
      </StyledBoxContainer>
    </>
  )
};
export default RectangleBoxItem;

const StyledBoxContainer = styled.div<{ imageUrl: string,  marginHorizontal?: number }>`

  flex: 0 0 220px;
  position: relative;
  height: 200px;
  margin-right: 10px;
  border-radius: 20px;
  margin: ${({ marginHorizontal } ) => marginHorizontal ? `10px  ${marginHorizontal}px;` : `10px 0px`};
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
  bottom: 35px;
  left: 20px;
  color: white;
`
const StyledDescription = styled.p`
  position: absolute ;
  font-size: 15px;
  bottom: 10px;
  left: 20px;
  color: white;
`
