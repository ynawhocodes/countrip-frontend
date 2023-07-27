import React, { useState } from "react";
import styled from "styled-components";

interface CenterModalProps {
  isOpen: boolean;
  setIsOpen: any;
  children: React.ReactNode;
}
function CenterModal({ isOpen, setIsOpen, children }: CenterModalProps) {
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {isOpen && (
        <ModalOverlay onClick={handleOverlayClick}>
          <ModalContainer>{children}</ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
}
export default CenterModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  @media (min-width: 769px) {
    width: 40%;
  }
  height: 70%;
  max-height: 30%;
  background-color: #fff;
  border-radius: 8px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
