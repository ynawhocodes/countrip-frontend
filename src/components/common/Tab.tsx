import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/variables';
import { fontBold } from '../../styles/font';

type tabTypes = {
  items: string[];
}
const Tab = ({ items }: tabTypes) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  return (
    <StyledTabContainer>
      {items.map((item, index) => (<StyledTabItem  active={activeTab === index} onClick={() => handleTabClick(index)} style={fontBold}>
        {item}{activeTab === index && <StyledDot />}
      </StyledTabItem>))}
    </StyledTabContainer>
  );
};

export default Tab;

const StyledTabContainer = styled.div`
  display: flex;
  padding: 15px 0;
  border-bottom: ${colors.gray1} 1px solid;
`;
const StyledTabItem = styled.div<{ active: boolean }>`
  padding: 10px;
  color: ${({ active }) => (active ? `${colors.green}` : `${colors.gray4}`)};
  position: relative;
  cursor: pointer;
  width: 100%;
  text-align: center;
  font-size: 12px;
`;
const StyledDot = styled.span`
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background-color: ${colors.green};
  border-radius: 50%;
`;
