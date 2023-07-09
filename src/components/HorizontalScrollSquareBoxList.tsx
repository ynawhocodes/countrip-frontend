import React from 'react';
import styled from 'styled-components';
import { fontRegular } from '../styles/font';

const HorizontalScrollSquareBoxList = () => {
  return (
    <StyledListContainer>
      <HorizontalScrollBoxItem />
      <HorizontalScrollBoxItem />
      <HorizontalScrollBoxItem />
      <HorizontalScrollBoxItem />
      <HorizontalScrollBoxItem />
      <HorizontalScrollBoxItem />
      <HorizontalScrollBoxItem />
      <HorizontalScrollBoxItem />
      <HorizontalScrollBoxItem />
      <HorizontalScrollBoxItem />
      <HorizontalScrollBoxItem />
      <HorizontalScrollBoxItem />
      <HorizontalScrollBoxItem />
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

const HorizontalScrollBoxItem = () => {
  return (
    <>
      <StyledBoxContainer>
        <StyledBoxTitle style={fontRegular}>호박소 계곡</StyledBoxTitle>
      </StyledBoxContainer>
    </>
  )
};

const StyledBoxContainer = styled.div`
  flex: 0 0 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  border-radius: 30%;
  background: linear-gradient(to bottom right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1));
  height: 60px;
`;

const StyledBoxTitle = styled.p`
  font-size: 12px;
  color: white;
  line-height: 12px;
  text-align: center;
`;
