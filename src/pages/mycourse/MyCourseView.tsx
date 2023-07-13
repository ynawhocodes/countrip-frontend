import React, { useState, useEffect } from 'react'
import MyPageIcon from "../../assets/MyPageIcon";
import Navigation from '../../components/common/Navigation';
import TitleWithIconHeader from "../../components/common/TitleWithIconHeader";
import CourseItem from '../../components/CourseItem';
import { StyledCommonFullHeigthWhiteWrap } from '../../styles/common';
import { useNavigate } from 'react-router-dom';
import { fetchMyCourseList } from '../../api/featureApi';
import checkResponseStatus from '../../utils/statusUtil';
import { SUCCESS_STATUS_CODE } from '../../config/status.code.config';
import CourseDto from '../../@types/CourseDto';
import SideModal from '../../components/common/SideModal';

const MyCourseView = () => {
  const [courses, setCourses] = useState<CourseDto[]>()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  
  const goToPage = (id: number) => {
    navigate(`/course/${id}`)
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  useEffect(() => {
    (async () => {
      const response = await fetchMyCourseList();
      if (checkResponseStatus(response.status) === SUCCESS_STATUS_CODE) {
        setCourses(response.data.data)
      }
    })();
  }, [])
  return (
    <>
      <TitleWithIconHeader title="내 코스" icon={<MyPageIcon style={{ marginRight: 20 }} onClick={openModal} />} />
      <SideModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>ss</SideModal>
      <StyledCommonFullHeigthWhiteWrap>
        {courses?.map((course, index) =>
          <div onClick={() => goToPage(course.id)} key={index}>
            <CourseItem hasPriceInfo={false} data={course} />
          </div>
        )}
       
      </StyledCommonFullHeigthWhiteWrap>
      <Navigation userType='guide' initTabIndex={2}/>
    </>
  )
};
export default MyCourseView;