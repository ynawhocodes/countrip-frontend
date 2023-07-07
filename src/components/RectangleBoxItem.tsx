import React from 'react';
import styled from 'styled-components';
import { fontRegular } from '../styles/font';
const RectangleBoxItem = () => {
  return (
    <>
      <StyledBoxContainer>
        <StyledBoxTitle style={fontRegular}>호박소 계곡</StyledBoxTitle>
      </StyledBoxContainer>
    </>
  )
};
export default RectangleBoxItem;

const StyledBoxContainer = styled.div`
  flex: 0 0 220px;
  position: relative;
  height: 200px;
  margin-right: 10px;
  border-radius: 20px;
  background: linear-gradient(to bottom right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1));
  margin: 10px 20px;
`;
const StyledBoxTitle = styled.p`
  position: absolute ;
  font-size: 15px;
  bottom: 10px;
  left: 20px;
  color: white;
`
