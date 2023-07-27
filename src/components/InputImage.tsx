import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../styles/variables";
import ImageIcon from "../assets/ImageIcon";

const InputImage = () => {
  return (
    <StyledContainer>
      <StyledWrap>
        <ImageIcon />
        <StyledText>*장소에 대한 사진을 넣어주세요.</StyledText>
      </StyledWrap>
    </StyledContainer>
  );
};
export default InputImage;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  background-color: ${colors.gray1};
  border-radius: 20px;
  margin: 30px 0;
`;
const StyledWrap = styled.div`
  text-align: center;
`;
const StyledText = styled.p`
  color: ${colors.gray2};
  font-size: 11px;
`;
