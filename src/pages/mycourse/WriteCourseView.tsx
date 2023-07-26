import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  StyledCommonFullHeigthWhiteWrap,
  StyledCommonHr,
} from "../../styles/common";
import SelectableHeader from "../../components/common/SelectableHeader";
import ModalBottom from "../../components/common/ModalBottom";
import { MODAL_TYPE } from "../../constants";
import WriteCourseItem from "../../components/WriteCourseItem";
const WriteCoursesView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <SelectableHeader handleOption={handleModal} />
      <ModalBottom
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
        contentType={MODAL_TYPE.WHERE}
      ></ModalBottom>
      <StyledCommonFullHeigthWhiteWrap>
        <StyledCourseTitle></StyledCourseTitle>
        <StyledCommonHr />
        <WriteCourseItem></WriteCourseItem>
      </StyledCommonFullHeigthWhiteWrap>
    </>
  );
};
export default WriteCoursesView;

const StyledCourseTitle = styled.input``;
