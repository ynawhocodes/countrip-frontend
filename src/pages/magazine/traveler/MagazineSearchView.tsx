import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../styles/variables";
import GoBackHeader from "../../../components/common/GoBackHeader";
import GoBackButton from "../../../components/common/GoBackButton";

const MagazineSearchView = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  return (
    <>
      <StyledHeader>
        <GoBackButton />
        <StyledInput
          placeholder="지역을 검색해보세요."
          value={keyword}
          name="keyword"
          onChange={onChangeInput}
        />
        <StyledSearch
          onClick={() =>
            navigate("/magazine/search/result", { state: { search: keyword } })
          }
        >
          검색
        </StyledSearch>
      </StyledHeader>
    </>
  );
};
export default MagazineSearchView;

// TODO GoBackHeader style과 동일
const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 50%;
  height: 70px;
  width: 100%;
  align-items: center;
  background-color: white;
  transform: translateX(-50%);
  justify-content: space-between;
  z-index: 9;
  @media (min-width: 769px) {
    width: 768px;
  }
`;
const StyledInput = styled.input`
  margin: 0 20px;
  all: unset;
  width: 70%;

  &::placeholder {
    color: ${colors.gray2};
  }
`;
const StyledSearch = styled.div`
  cursor: pointer;
  margin-right: 20px;
`;
