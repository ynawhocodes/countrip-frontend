import React, { useState } from 'react'
import styled from 'styled-components'

const ModalBottom = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(true)
  }
  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <StyledModalButton onClick={handleOpenModal}>
        Open Modal
      </StyledModalButton>
      <StyledOverlay isOpen={isOpen} onClick={handleCloseModal} />
      <StyledModalContainer isOpen={isOpen}>
     
      </StyledModalContainer>
    </>
  )
}

export default ModalBottom

const StyledModalContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  bottom: ${(props) => (props.isOpen ? '0' : '-100%')};
  left: 0;
  right: 0;
  height: 300px;
  background-color: #fff;
  margin: 0 auto;
  transition: bottom 0.3s ease-in-out;
  box-shadow: ${(props) =>
    props.isOpen ? '0px 2px 10px rgba(0, 0, 0, 0.3)' : 'none'};
  border-radius: 50px 50px 0 0;
  @media (min-width: 769px) {
    width: 768px;
  }
`
const StyledOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`
const StyledModalButton = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
`