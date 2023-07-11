import React, { useState } from 'react'
import styled from 'styled-components'
import { MODAL_TYPE } from '../../constants';
import CompanionPicker from '../CompanionPicker';
import DatePicker from '../DatePicker';
import LocationPicker from '../LocationPicker';

interface ModalBottomProps {
  isOpen: boolean;
  // TODO: handleClose 정확히 하기
  handleClose: any;
  contentType: string;
}
const ModalBottom = ({ isOpen, handleClose, contentType }: ModalBottomProps) => (
  <>
    <StyledOverlay isOpen={isOpen} onClick={handleClose} />
    <StyledModalContainer isOpen={isOpen}>
      <StyledContent>
        {contentType === MODAL_TYPE.WHERE && <LocationPicker />}
        {contentType === MODAL_TYPE.WHEN && <DatePicker />}
        {contentType === MODAL_TYPE.WITH_WHOM && <CompanionPicker/>}
      </StyledContent>
    </StyledModalContainer>
  </>
);

export default ModalBottom;

const StyledModalContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  bottom: ${(props) => (props.isOpen ? '0' : '-100%')};
  left: 0;
  right: 0;
  height: auto;
  background-color: #fff;
  margin: 0 auto;
  z-index: 2;
  transition: bottom 0.3s ease-in-out;
  box-shadow: ${(props) =>
    props.isOpen ? '0px 2px 10px rgba(0, 0, 0, 0.3)' : 'none'};
  border-radius: 50px 50px 0 0;
  @media (min-width: 769px) {
    width: 768px;
  }
`
const StyledContent = styled.div`
  padding: 30px;
`
const StyledOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  z-index: 1;
`