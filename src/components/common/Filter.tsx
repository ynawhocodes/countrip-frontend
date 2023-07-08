import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/variables';
import { fontMedium, fontRegular } from '../../styles/font';

type filterTypes = {
  items: string[];
}
const Filter = ({ items }: filterTypes) => {
  const [activeFilter, setActiveFilter] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveFilter(index);
  };
  return (
    <StyledFilterContainer>
      <StyledResetFilterItem style={fontMedium}>초기화</StyledResetFilterItem>
      {items.map((item, index) => (<StyledFilterItem  active={activeFilter === index} onClick={() => handleTabClick(index)} style={fontRegular} key={index}>
        {item}
      </StyledFilterItem>))}
    </StyledFilterContainer>
  );
};

export default Filter;

const StyledFilterContainer = styled.div`
  display: flex;
  padding: 15px 20px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
const StyledFilterItem = styled.div<{ active: boolean }>`
  padding: 5px 10px;
  color: ${({ active }) => (active ? `white` : `${colors.gray2}`)};
  background-color: ${({ active }) => (active ? `${colors.green}` : `white`)};
  border: ${({ active }) => (active ? `${colors.green} 1px solid` : `${colors.gray1} 1px solid`)};
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  text-align: center;
  font-size: 12px;
  margin-right: 10px;
  white-space: nowrap;
`;
const StyledResetFilterItem = styled.div`
  padding: 5px 15px;
  color: ${colors.gray3};
  background-color: ${colors.gray1};
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  text-align: center;
  font-size: 12px;
  margin-right: 10px;
  white-space: nowrap;
`;