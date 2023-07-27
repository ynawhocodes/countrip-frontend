import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  StyledCommonBlackButton,
  StyledCommonFullHeigthWhiteWrap,
  StyledCommonHr,
} from "../../styles/common";
import SelectableHeader from "../../components/common/SelectableHeader";
import ModalBottom from "../../components/common/ModalBottom";
import { MODAL_TYPE } from "../../constants";
import WriteCourseItem from "../../components/WriteCourseItem";
import { fontBold } from "../../styles/font";
import { colors } from "../../styles/variables";
import HalfLabelInputText from "../../components/common/HalfLabelInputText";
import {
  CourseDetailDto,
  SpotDetailDto,
  WriteCourseDto,
} from "../../@types/CourseDto";
import CenterModal from "../../components/CenterModal";
import { isAnyValueMissingInObject, isEmptyValue } from "../../utils/emptyUtil";

const WriteCoursesView = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // TODO 모달 정리
  const [isDeleteCenterModalOpen, setIsDeleteCenterModalOpen] = useState(false);
  const [isRegisterCenterModalOpen, setIsRegisterCenterModalOpen] =
    useState(false);
  const [isWarningCenterModalOpen, setIsWarningCenterModalOpen] =
    useState(false);
  const [courseInfo, setCourseInfo] = useState<WriteCourseDto>({
    cityId: 0,
    withGuide: true,
    title: "",
    adultPrice: undefined,
    childPrice: undefined,
    babyPrice: undefined,
    spots: [],
  });
  const [spotInfo, setSpotInfo] = useState({
    title: "",
    image: "",
    categoryId: undefined,
    address: "",
    telephone: "",
    homepage: "",
    description: "",
    orderNum: 0,
  });
  const onChangeSubInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.currentTarget;
    setSpotInfo((currVal) => ({
      ...currVal,
      [name]: value,
    }));
  };
  const handleModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const onChangeMainInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setCourseInfo((currVal) => ({
      ...currVal,
      [name]: value,
    }));
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setSpotInfo((currVal) => ({
        ...currVal,
        ["image"]: fileUrl,
      }));
    }
  };
  const handleRegister = (
    mainObj: WriteCourseDto,
    ...spots: SpotDetailDto[]
  ) => {
    const updatedMain = { ...mainObj };

    if (!updatedMain.spots) {
      updatedMain.spots = [];
    }

    spots.forEach((spot) => {
      updatedMain.spots.push(spot);
    });

    if (isAnyValueMissingInObject(updatedMain))
      setIsWarningCenterModalOpen(true);
    console.log(updatedMain);
  };
  const handleDelete = () => {
    if (courseInfo || spotInfo) setIsDeleteCenterModalOpen(true);
    else navigate(-1);
  };
  const deleteCenterModalContents = (
    <>
      <StyledCenterModalContainer>
        <StyledCenterModalTitle>
          작성하던 내용이 있습니다. 작성을 취소하시겠습니까?
        </StyledCenterModalTitle>
        <StyledCommonBlackButton onClick={() => navigate(-1)}>
          취소하기
        </StyledCommonBlackButton>
      </StyledCenterModalContainer>
    </>
  );
  const registerCenterModalContents = (
    <>
      <StyledCenterModalContainer>
        <StyledCenterModalTitle>코스 등록 완료</StyledCenterModalTitle>
        <StyledCommonBlackButton onClick={() => navigate("/mycourse")}>
          내 코스 보러가기
        </StyledCommonBlackButton>
      </StyledCenterModalContainer>
    </>
  );
  const warningCenterModalContents = (
    <>
      <StyledCenterModalContainer>
        <StyledCenterModalTitle>
          빈칸을 모두 채워야합니다.
        </StyledCenterModalTitle>
        <StyledCommonBlackButton
          onClick={() => setIsWarningCenterModalOpen(false)}
        >
          확인
        </StyledCommonBlackButton>
      </StyledCenterModalContainer>
    </>
  );
  return (
    <>
      <SelectableHeader
        onClickDelete={handleDelete}
        handleOption={handleModal}
        onClickRegister={() => handleRegister(courseInfo, spotInfo)}
      />
      <ModalBottom
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
        contentType={MODAL_TYPE.WHERE}
      ></ModalBottom>
      <CenterModal
        isOpen={isDeleteCenterModalOpen}
        setIsOpen={setIsDeleteCenterModalOpen}
      >
        {deleteCenterModalContents}
      </CenterModal>
      <CenterModal
        isOpen={isRegisterCenterModalOpen}
        setIsOpen={setIsRegisterCenterModalOpen}
      >
        {registerCenterModalContents}
      </CenterModal>
      <CenterModal
        isOpen={isWarningCenterModalOpen}
        setIsOpen={setIsWarningCenterModalOpen}
      >
        {warningCenterModalContents}
      </CenterModal>
      <StyledCommonFullHeigthWhiteWrap>
        <StyledCourseTitle
          placeholder="제목"
          style={fontBold}
          name="title"
          value={courseInfo.title}
          isInValid={isEmptyValue(courseInfo.title)}
          onChange={onChangeMainInput}
        ></StyledCourseTitle>
        <StyledCommonHr />{" "}
        <StyledPaddingWrap>
          <StyledPriceTitle style={fontBold}>금액 설정</StyledPriceTitle>
          <HalfLabelInputText
            type="text"
            isInValid={false}
            value={courseInfo.adultPrice}
            name="adultPrice"
            label="대인(13세 이상)"
            placeholder="0원"
            onChangeInput={onChangeMainInput}
          />
          <HalfLabelInputText
            type="text"
            isInValid={false}
            value={courseInfo.childPrice}
            name="childPrice"
            label="소인(13세 미만)"
            placeholder="0원"
            onChangeInput={onChangeMainInput}
          />
          <HalfLabelInputText
            type="text"
            isInValid={false}
            value={courseInfo.babyPrice}
            name="babyPrice"
            label="유아(24개월 미만)"
            placeholder="0원"
            onChangeInput={onChangeMainInput}
          />
        </StyledPaddingWrap>
        <WriteCourseItem
          value={spotInfo}
          onChangeImage={handleFileChange}
          onChangeInput={onChangeSubInput}
        ></WriteCourseItem>
        <StyledButtonContainer>
          {/* <StyledCommonBlackButton paddingHorizontal={20}>
            코스 추가하기
          </StyledCommonBlackButton> */}
        </StyledButtonContainer>
      </StyledCommonFullHeigthWhiteWrap>
    </>
  );
};
export default WriteCoursesView;

const StyledCourseTitle = styled.input<{ isInValid: boolean }>`
  all: unset;
  padding: 0 20px;
  font-size: 20px;

  &::placeholder {
    color: ${({ isInValid }) =>
      isInValid ? `${colors.warning}` : `${colors.gray2}`};
  }
`;
const StyledPaddingWrap = styled.div`
  padding: 0 20px;
`;
const StyledPriceTitle = styled.p`
  font-size: 18px;
`;
const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
// center modal
const StyledCenterModalContainer = styled.div`
  text-align: center;
`;
const StyledCenterModalTitle = styled.p`
  margin-bottom: 30px;
  font-size: 14px;
`;
