import React from "react";
import styled from "styled-components";
import { fontRegular } from "../styles/font";
import { useNavigate } from "react-router-dom";
import { MagazineDto } from "../@types/Magazine";

interface SquareBoxItemProps {
  data: MagazineDto;
}
const SquareBoxItem = ({ data }: SquareBoxItemProps) => {
  const navigate = useNavigate();

  const handleNext = (id: number) => {
    navigate(`/magazine/${id}`);
  };
  return (
    <StyledWrap>
      <StyledBoxContainer
        onClick={() => handleNext(data.id)}
        imageUrl={data.imageUrl}
      ></StyledBoxContainer>
      <StyledBoxTitle style={fontRegular}>{data.title}</StyledBoxTitle>
    </StyledWrap>
  );
};
export default SquareBoxItem;

const StyledWrap = styled.div`
  width: calc(50% - 5px);
`;
const StyledBoxContainer = styled.div<{ imageUrl: string }>`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 20px;
  cursor: pointer;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
`;
const StyledBoxTitle = styled.p`
  font-size: 12px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 10px 0;
`;
