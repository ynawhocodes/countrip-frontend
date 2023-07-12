import React, { useEffect, useState } from 'react'
import { ko } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { colors } from '../../styles/variables';
import { fontMedium } from '../../styles/font';

interface SelectDateCalendarProps {
  selected: Date;
  // TODO: setSelected type 정확히
  setSelected: any;
  // handleValueChange: (newValue: Date) => void;
}
const SelectDateCalendar = ({ selected, setSelected }: SelectDateCalendarProps) => {
  // const [selected, setSelected] = useState<Date>()
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  // let footer = <p> </p>
  // if (selected) {
  //   footer = <p style={{ textAlign: "center" }} >{formatDate(selected)}</p>
  // }

  return (
    <>
      <style>{css}</style>
      <DayPicker
        locale={ko}
        mode="single"
        selected={selected}
        onSelect={setSelected}
        defaultMonth={new Date(year, month)}
        // footer={footer}
        fromDate={today}
        toYear={year + 1}
        modifiersClassNames={{
          selected: 'my-selected',
          today: 'my-today'
        }}
        modifiersStyles={{
          disabled: { fontSize: '75%' }
        }}
      />
    </>
  )
};
export default SelectDateCalendar;

const css = `
  .rdp {
    --rdp-cell-size: 50px;
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
`;