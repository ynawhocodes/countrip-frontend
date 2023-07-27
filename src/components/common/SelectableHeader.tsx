import React from "react";
import styled from "styled-components";
import { fontBold } from "../../styles/font";
import { colors } from "../../styles/variables";
import GoBackButton from "./GoBackButton";
interface SelectableHeaderType {
  handleOption: () => void;
  onClickRegister: () => void;
}
const SelectableHeader = ({
  handleOption,
  onClickRegister,
}: SelectableHeaderType) => {
  return (
    <>
      <StyledHeader>
        <div>취소</div>
        <StyledOptionContainer onClick={handleOption}>
          지역 &#9660;
        </StyledOptionContainer>
        <StyledRegister onClick={onClickRegister}>등록</StyledRegister>
      </StyledHeader>
    </>
  );
};
export default SelectableHeader;

const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 50%;
  height: 70px;
  width: calc(100% - 40px);
  align-items: center;
  background-color: white;
  transform: translateX(-50%);
  justify-content: space-between;
  z-index: 10;
  padding: 0 20px;
  font-size: 14px;
  @media (min-width: 769px) {
    width: 768px;
  }
`;
const StyledOptionContainer = styled.div`
  cursor: pointer;
`;
const StyledRegister = styled.div`
  cursor: pointer;
`;
