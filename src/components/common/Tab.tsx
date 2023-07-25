import React, { useState, ReactNode } from "react";
import styled from "styled-components";
import { colors } from "../../styles/variables";
import { fontBold } from "../../styles/font";

type TabProps = {
  items: string[];
  activeTab: number;
  handleTabClick: Function;
};
const Tab = ({ items, activeTab, handleTabClick }: TabProps) => {
  return (
    <StyledTabContainer>
      {items.map((item, index) => (
        <StyledTabTitle
          active={activeTab === index}
          onClick={() => handleTabClick(index)}
          style={fontBold}
          key={index}
        >
          {item}
          {activeTab === index && <StyledDot />}
        </StyledTabTitle>
      ))}
    </StyledTabContainer>
  );
};

export default Tab;

const StyledTabContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px 0;
  border-bottom: ${colors.gray1} 1px solid;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
  scrollbar-width: none;
`;
const StyledTabTitle = styled.div<{ active: boolean }>`
  padding: 10px;
  color: ${({ active }) => (active ? `${colors.green}` : `${colors.gray4}`)};
  position: relative;
  cursor: pointer;
  width: 100%;
  text-align: center;
  font-size: 12px;
  white-space: nowrap;
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

type TabViewProps = {
  activeTab: number;
  children: ReactNode[];
};
export const TabView = ({ activeTab, children }: TabViewProps) => {
  const transformValue = `translateX(-${activeTab * 100}%)`;
  return (
    <>
      <StyledTabViewWrap>
        <StyledTabViewContainer transformValue={transformValue}>
          {children.map((child, index) => (
            <StyledTabViewItem key={index}>{child}</StyledTabViewItem>
          ))}
        </StyledTabViewContainer>
      </StyledTabViewWrap>
    </>
  );
};

const StyledTabViewWrap = styled.div`
  overflow-x: hidden;
  width: 100%;
  max-height: 500px;
`;

const StyledTabViewContainer = styled.div<{ transformValue: string }>`
  display: flex;
  transition: transform 0.3s ease;
  transform: ${({ transformValue }) => transformValue};
`;
const StyledTabViewItem = styled.div`
  flex: 0 0 100%;
`;
