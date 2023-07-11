import React, { useRef, useState } from "react";
import styled from 'styled-components'
import { StyledCommonBlackButton } from "../styles/common";
import { colors } from '../styles/variables'
import { fontRegular, fontMedium } from '../styles/font';
import ModalBottom from "./common/ModalBottom";
import Tab from "./common/Tab";
import { MODAL_TYPE } from "../constants";

const CourseSearch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // TODO: useState, useRef 고민
  const [modalContentType, setModalContentType] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true)
  };
  const handleCloseModal = () => {
    setIsModalOpen(false)
  };

  return (
    <>
      <StyledSearchContainer>
        <StyledInput onClick={() => { handleOpenModal(); setModalContentType(MODAL_TYPE.WHERE) }} style={fontRegular}>어디로 떠나시나요?</StyledInput>
        <StyledInput onClick={() => { handleOpenModal(); setModalContentType(MODAL_TYPE.WHEN) }}>여행 날짜</StyledInput>
        <StyledInput onClick={() => { handleOpenModal(); setModalContentType(MODAL_TYPE.WITH_WHOM) }}>누구와 함께 하시나요?</StyledInput>
        <StyledButton onClick={handleOpenModal} style={fontMedium}>현지인 추천 코스 보러 가기</StyledButton>
        <ModalBottom isOpen={isModalOpen} handleClose={handleCloseModal} contentType={modalContentType} />
      </StyledSearchContainer>
    </>
  )
};
export default CourseSearch;

const StyledSearchContainer = styled.div`
  margin: 0 20px;
  background-color: ${colors.gray1};
  height: auto;
  border-radius: 30px;
  padding: 20px;
`
const StyledInput = styled.button`
  all: unset;
  width: 100%;
  height: 40px;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 20px;
  text-align: center;
  font-size: 14px;
`
const StyledButton = styled(StyledCommonBlackButton)`
  font-size: 14px;
`