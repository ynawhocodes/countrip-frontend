import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import BellIcon from '../../assets/BellIcon'
import CloseIcon from '../../assets/CloseIcon'
import DefaultProfileIcon from '../../assets/DefaultProfileIcon'
import SettingIcon from '../../assets/SettingIcon'

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
            <StyledTop>
              <StyledFlexWrap>
                <CloseIcon onClick={closeModal}></CloseIcon>
                <StyledFlexWrap>
                  <BellIcon />
                  <SettingIcon />
                </StyledFlexWrap>
              </StyledFlexWrap>
            </StyledTop>
            {/* {children} */}
            <StyledProfileContainer>
              <StyledFlexWrap>
                <StyledInfoContainer>

                </StyledInfoContainer>
                <DefaultProfileIcon />
              </StyledFlexWrap>
            </StyledProfileContainer>
          </StyledModalContent>
        </StyledModalContainer>
      </StyledModalOverlay>
    </>
  )
}
export default SideModal
const StyledFlexWrap = styled.div`
  display: flex;
`
const StyledTop = styled.div`
  display: flex;
  justify-content: space-between;
`
const StyledProfileContainer = styled.div`
  height: 30%;
`
const StyledInfoContainer = styled.div`
  width: 100%;
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
  width: 100%;
`
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`
