import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { colors } from "../styles/variables";
import HalfLabelInputText from "./common/HalfLabelInputText";
import InputImage from "./InputImage";
import { fontBold } from "../styles/font";

interface WriteCourseItemProps {
  value: any;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const WriteCourseItem = ({ value, onChangeInput }: WriteCourseItemProps) => {
  return (
    <>
      <StyledGap />
      <StyledPaddingWrap>
        <HalfLabelInputText
          type="text"
          isInValid={false}
          value={value.title}
          name="title"
          label="*코스 1"
          placeholder="장소명을 입력해주세요."
          onChangeInput={onChangeInput}
        />
        <InputImage />
        <HalfLabelInputText
          type="text"
          isInValid={false}
          value={value.categoryId}
          name="categoryId"
          label="*카테고리"
          placeholder="장소명을 입력해주세요."
          onChangeInput={onChangeInput}
        />
        <HalfLabelInputText
          type="text"
          isInValid={false}
          value={value.address}
          name="address"
          label="*주소"
          placeholder="주소를 입력해주세요."
          onChangeInput={onChangeInput}
        />
        <HalfLabelInputText
          type="text"
          isInValid={false}
          value={value.telephone}
          name="telephone"
          label="*전화번호"
          placeholder="전화번호를 입력해주세요."
          onChangeInput={onChangeInput}
        />
        <HalfLabelInputText
          type="text"
          isInValid={false}
          value={value.homepage}
          name="homepage"
          label="*홈페이지"
          placeholder="홈페이지 주소를 입력해주세요."
          onChangeInput={onChangeInput}
        />
        <StyledDescriptionContainer>
          <StyledDescriptionTitle style={fontBold}>
            상세 설명
          </StyledDescriptionTitle>
          <StyledInput
            type="text"
            // isInValid={false}
            value={value.description}
            name="description"
            onChange={onChangeInput}
            placeholder="장소에 대한 자세한 설명을 적어주세요."
          ></StyledInput>
        </StyledDescriptionContainer>
      </StyledPaddingWrap>
    </>
  );
};
export default WriteCourseItem;

const StyledPaddingWrap = styled.div`
  padding: 0 20px;
`;
const StyledGap = styled.div`
  height: 10px;
  background-color: ${colors.gray1};
  margin: 30px 0;
`;
const StyledDescriptionContainer = styled.div`
  background-color: ${colors.gray1};
  min-height: 200px;
  border-radius: 20px;
  margin: 30px 0;
  padding: 10px;
`;
const StyledDescriptionTitle = styled.div`
  font-size: 12px;
  margin-bottom: 10px;
  color: ${colors.gray3};
`;
const StyledInput = styled.input`
  all: unset;
  width: 100%;
  font-size: 12px;
  &::placeholder {
    color: ${colors.gray2};
  }
`;
