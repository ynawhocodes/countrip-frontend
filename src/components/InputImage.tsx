import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { colors } from "../styles/variables";
import ImageIcon from "../assets/ImageIcon";

interface InputImageProps {
  fileContent: string;
  onChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputImage = ({ fileContent, onChangeImage }: InputImageProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleContainerClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <>
      <input
        type="file"
        onChange={onChangeImage}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      <StyledContainer
        onClick={handleContainerClick}
        backgroundImage={fileContent || ""}
      >
        <StyledWrap>
          <ImageIcon />
          <StyledText>*장소에 대한 사진을 넣어주세요.</StyledText>
        </StyledWrap>
      </StyledContainer>
    </>
  );
};
export default InputImage;

const StyledContainer = styled.div<{ backgroundImage: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  background-color: ${colors.gray1};
  border-radius: 20px;
  margin: 30px 0;
  cursor: pointer;
  background-image: ${({ backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage})` : "none"};
  background-size: cover;
  background-position: center;
`;
const StyledWrap = styled.div`
  text-align: center;
`;
const StyledText = styled.p`
  color: ${colors.gray2};
  font-size: 11px;
`;
