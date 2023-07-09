import React from 'react';
import styled from 'styled-components';
import { fontRegular } from '../styles/font';

const HorizontalScrollBoxList = () => {
  return (
    <StyledListContainer>
      <HorizontalScrollBoxItem />
      <HorizontalScrollBoxItem />
      <HorizontalScrollBoxItem />
      <HorizontalScrollBoxItem />
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
