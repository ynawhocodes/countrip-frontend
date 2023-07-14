import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { logout } from '../../api/authApi'
import BellIcon from '../../assets/BellIcon'
import CloseIcon from '../../assets/CloseIcon'
import DefaultProfileIcon from '../../assets/DefaultProfileIcon'
import SettingIcon from '../../assets/SettingIcon'
import { StyledCommonHr } from '../../styles/common'
import { fontRegular, fontBold, fontMedium } from '../../styles/font'
import { colors } from '../../styles/variables'

interface SideModalProps {
  isOpen: boolean
  setIsOpen: any
  children: React.ReactNode
}
const SideModal = ({ isOpen, setIsOpen, children }: SideModalProps) => {
  const closeModal = () => {
    setIsOpen(false)
  }
  const handleOverlayClick = () => {
    closeModal()
  }

  return (
    <>
      <StyledModalOverlay open={isOpen} onClick={handleOverlayClick}>
        <StyledModalContainer open={isOpen}>
          <StyledModalContent>
            <div>
              <StyledIconWrap>
                <CloseIcon onClick={closeModal}></CloseIcon>
                <StyledFlexWrap>
                  <BellIcon style={{ marginRight: 20 }} />
                  <SettingIcon />
                </StyledFlexWrap>
              </StyledIconWrap>
            </div>
            <InfoContainer />
            <div>
              <StyledMenuItem style={fontMedium}>고객센터/도움말</StyledMenuItem>
              <StyledCommonHr></StyledCommonHr>
              <StyledMenuItem style={fontMedium}>버전정보</StyledMenuItem>
              <StyledCommonHr></StyledCommonHr>
              <StyledMenuItem style={fontMedium}>서비스 이용약관</StyledMenuItem>
              <StyledCommonHr></StyledCommonHr>
              <StyledMenuItem style={fontMedium}>개인정보 처리방침</StyledMenuItem>
              <StyledCommonHr></StyledCommonHr>
              <StyledMenuItem onClick={async() => await logout()} style={fontMedium}>로그아웃</StyledMenuItem>
            </div>
          </StyledModalContent>
        </StyledModalContainer>
      </StyledModalOverlay>
    </>
  )
}
export default SideModal
const StyledIconWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`
const StyledFlexWrap = styled.div`
  display: flex;
`
const slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`
const slideOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`
const StyledModalOverlay = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ open }) =>
    open ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
  z-index: 9998;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease-in-out;
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
`
const StyledModalContainer = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? '0' : '100%')};
  height: 100vh;
  width: 70%;
  background-color: #fff;
  z-index: 9999;
  animation: ${({ open }) => (open ? slideIn : slideOut)} 0.3s forwards;
  `
  const StyledModalContent = styled.div`
  padding: 20px;
  height: 100%;
`
const StyledMenuItem = styled.p`
  font-size: 13px;
  padding: 5px 0;
`
const InfoContainer = () => {
  return (
    <>
      <StyledProfileContainer>
        <StyledFlexWrap>
          <div>
            <StyledUserName style={fontBold}>김혜인 가이드님</StyledUserName>
            <div>
              <StyledFlexWrap>
                <StyledInfoItem>
                  <StyledInfoTitle style={fontMedium}>
                    예약 신청
                  </StyledInfoTitle>
                  <StyledInfoContent style={fontMedium}>1</StyledInfoContent>
                </StyledInfoItem>
                <StyledInfoItem>
                  <StyledInfoTitle style={fontMedium}>
                    지난 여행
                  </StyledInfoTitle>
                  <StyledInfoContent style={fontMedium}>1</StyledInfoContent>
                </StyledInfoItem>
              </StyledFlexWrap>
            </div>
          </div>
          <DefaultProfileIcon style={{ marginLeft: 20 }} />
        </StyledFlexWrap>
      </StyledProfileContainer>
    </>
  )
}
const StyledProfileContainer = styled.div`
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 769px) {
    width: 400px;
    margin: 0 auto;
  }
`
const StyledUserName = styled.h1`
  font-size: 20px;
`
const StyledInfoItem = styled.div`
  &:nth-child(1) {
    margin-right: 30px;
  }
  width: auto;
`
const StyledInfoTitle = styled.p`
  font-size: 12px;
  color: ${colors.gray3};
  text-align: center;
`
const StyledInfoContent = styled.p`
  font-size: 12px;
  color: ${colors.green};
  text-align: center;
`
