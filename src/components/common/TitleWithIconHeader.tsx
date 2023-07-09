import React from 'react'
import styled from 'styled-components'
import LeftArrowIcon from '../../assets/LeftArrowIcon'
import { fontBold } from '../../styles/font'
import { colors } from '../../styles/variables';

interface TitleWithIconHeaderType {
  title?: string;
  icon?: any;
}
const TitleWithIconHeader = ({ title, icon }: TitleWithIconHeaderType) => {
  return (
    <>
      <StyledHeader>
        <StyledFlexWrap>
          <StyledContentWrap>
            <StyledTitle style={fontBold}>{title}</StyledTitle>
          </StyledContentWrap>
        </StyledFlexWrap>
        {icon}
      </StyledHeader>
    </>
  )
};
export default TitleWithIconHeader;

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
  @media (min-width: 769px) {
    width: 768px;
  }
`
const StyledFlexWrap = styled.div`
  display: flex;
  align-items: center;
`
const StyledContentWrap = styled.div`
  margin-left: 20px;
`
const StyledTitle = styled.p`
  font-size: 18px;
`