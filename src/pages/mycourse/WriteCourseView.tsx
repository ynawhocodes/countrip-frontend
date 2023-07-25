import React, { useState, useEffect } from "react";
import { StyledCommonFullHeigthWhiteWrap } from "../../styles/common";
import SelectableHeader from "../../components/common/SelectableHeader";
import ModalBottom from "../../components/common/ModalBottom";
import { MODAL_TYPE } from "../../constants";

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
      <StyledCommonFullHeigthWhiteWrap></StyledCommonFullHeigthWhiteWrap>
    </>
  );
};
export default WriteCoursesView;
