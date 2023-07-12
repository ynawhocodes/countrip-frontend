import React, { useState } from 'react';
import styled from 'styled-components'
import { format } from 'date-fns';
import { DayPicker, DayClickEventHandler } from 'react-day-picker';
import { colors } from '../../styles/variables'
import { ko } from 'date-fns/locale';
import TitleWithIconHeader from './TitleWithIconHeader';
import MyPageIcon from '../../assets/MyPageIcon';
import SideModal from './SideModal';
import convertToDateArray from '../../utils/dateUtil';
interface ReadOnlyCalendarProps {
  datas: string[];
}
const ReadOnlyCalendar = ({ datas }: ReadOnlyCalendarProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const bookedStyle = { backgroundColor:`${colors.green}`, fontWeight: `700`, borderBottom: `${colors.green} 3px solid`, color: `white`, width: '28px', height: '28px', marginLeft: '7px', paddingTop: '2px', fontSize: '13px' };
  const [booked, setBooked] = React.useState(false);
  const bookedDays = convertToDateArray(datas);

  // TODO: booked 상태에 따라 동적인 변화가 없다면 지울 것
  // const handleDayClick: DayClickEventHandler = (day, modifiers) => {
  //   setBooked(day && modifiers.booked);
  // };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <style>{css}</style>
      <TitleWithIconHeader title={"컨트립"} icon={<MyPageIcon style={{ marginRight: 20 }} onClick={openModal} />} />
      <SideModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>ss</SideModal>
      <StyledGuideCalendar>
        <DayPicker
          locale={ko}
          mode="single"
          modifiers={{ booked: bookedDays }}
          modifiersStyles={{ booked: bookedStyle }}
          // onDayClick={handleDayClick}
        />
      </StyledGuideCalendar>
    </>
  );
};
export default ReadOnlyCalendar;

const StyledGuideCalendar = styled.div`
  background-color: ${colors.gray1};
  height: 30%;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  padding: 5px 0 40px 0;
`
const css = `
  .rdp {
    --rdp-cell-size: 40px;
    --rdp-accent-color: #0000ff;
    --rdp-background-color: #e7edff;
    /* Switch to dark colors for dark themes */
    --rdp-accent-color-dark: #3003e1;
    --rdp-background-color-dark: #180270;
    /* Outline border for focused elements */
    --rdp-outline: 2px solid var(--rdp-accent-color);
    /* Outline border for focused and selected elements */
    --rdp-outline-selected: 2px solid rgba(0, 0, 0, 0.75);
  }
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid currentColor;
  }
  .my-selected:hover:not([disabled]) { 
    color: ${colors.green};
  }
  .my-today { 
    font-weight: bold;
    font-size: 110%; 
  }
  .rdp-nav_button {
    color: ${colors.gray2};
  }
  .rdp-day {
    color: ${colors.gray3};
  }
  .rdp-caption_label {
    font-size: 14px;
  }
`;