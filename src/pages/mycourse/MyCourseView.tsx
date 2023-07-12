import React, { useState } from 'react'
import MyPageIcon from "../../assets/MyPageIcon";
import Navigation from '../../components/common/Navigation';
import TitleWithIconHeader from "../../components/common/TitleWithIconHeader";
import CourseItem from '../../components/CourseItem';
import { StyledCommonFullHeigthWhiteWrap } from '../../styles/common';
import { useNavigate } from 'react-router-dom';

const MyCourseView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  
  const goToPage = (id: number) => {
    navigate(`/course/${id}`)
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <TitleWithIconHeader title="내 코스" icon={<MyPageIcon style={{ marginRight: 20 }} onClick={openModal} />} />
      <StyledCommonFullHeigthWhiteWrap>
        <div onClick={() => goToPage(2)}>
          <CourseItem hasPriceInfo={false} />
        </div>
      </StyledCommonFullHeigthWhiteWrap>
      <Navigation userType='guide' initTabIndex={2}/>
    </>
  )
};
export default MyCourseView;