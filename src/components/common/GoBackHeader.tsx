import React from 'react'
import styled from 'styled-components'
import LeftArrowIcon from '../../assets/LeftArrowIcon'
import { fontBold } from '../../styles/font'
import { colors } from '../../styles/variables';

interface GoBackHeaderType {
  title?: string;
  firstInfo?: string | undefined;
  secondInfo?: string;
  icon?: any;
}
const GoBackHeader = ({ title, firstInfo, secondInfo, icon }: GoBackHeaderType) => {
  return (
    <>
      <StyledHeader>
        <StyledFlexWrap>
          <LeftArrowIcon style={{ marginLeft: 20 }} />
          <StyledContentWrap>
            <StyledTitle style={fontBold} hasInfo={firstInfo ? true : false}>{title}</StyledTitle>
            <StyledInfoWrap>
              <StyledFirstInfo>{firstInfo}</StyledFirstInfo>
              <StyledSecondInfo>{secondInfo}</StyledSecondInfo>
            </StyledInfoWrap>
          </StyledContentWrap>
        </StyledFlexWrap>
        {icon}
      </StyledHeader>
    </>
  )
};
export default GoBackHeader;

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
const StyledTitle = styled.p<{hasInfo: boolean}>`
  margin: ${({ hasInfo }) => hasInfo ? '0 0 7px 0' : '0'};
  font-size: 18px;
`
const StyledInfoWrap = styled.div`
  display: flex;
`
const StyledInfo = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${colors.gray4};
`
const StyledFirstInfo = styled(StyledInfo)`
  margin-right: 5px;
`
const StyledSecondInfo = styled(StyledInfo)`
`