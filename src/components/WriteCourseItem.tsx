import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { fontBold } from "../styles/font";
import InputText, { focusRef } from "./common/InputText";
import { colors } from "../styles/variables";
const WriteCourseItem = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const passwordRef = useRef<focusRef>(null);
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setUserInfo((currVal) => ({
      ...currVal,
      [name]: value,
    }));
  };
  return (
    <>
      <StyledPaddingWrap>
        <StyledPriceTitle style={fontBold}>금액 설정</StyledPriceTitle>
        <InputText
          ref={passwordRef}
          type="password"
          isInValid={false}
          value={userInfo.password}
          name="password"
          text="대인(13세 이상)"
          onChangeInput={onChangeInput}
        />
        <InputText
          ref={passwordRef}
          type="password"
          isInValid={false}
          value={userInfo.password}
          name="password"
          text="소인(13세 미만)"
          onChangeInput={onChangeInput}
        />
        <InputText
          ref={passwordRef}
          type="password"
          isInValid={false}
          value={userInfo.password}
          name="password"
          text="유아(24개월 미만)"
          onChangeInput={onChangeInput}
        />
      </StyledPaddingWrap>
      <StyledGap></StyledGap>
    </>
  );
};
export default WriteCourseItem;

const StyledPaddingWrap = styled.div`
  padding: 0 20px;
`;
const StyledPriceTitle = styled.p`
  font-size: 18px;
`;
const StyledGap = styled.div`
  height: 10px;
  background-color: ${colors.gray1};
  margin: 30px 0;
`;
