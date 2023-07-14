import React, { useState } from 'react'
import styled from 'styled-components'
import { fontMedium, fontRegular } from '../styles/font';
import { colors } from '../styles/variables'

interface ToastModalProps {
  onClose: () => void;
}
const ToastModal: React.FC<ToastModalProps> = ({ onClose }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <StyledText style={{ ...fontMedium, textAlign: 'center'}}>문화데이터 경진대회 테스트 계정 공지</StyledText>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ marginRight: 40}}>
            <StyledText style={fontMedium}>[여행러]</StyledText>
            <StyledText style={fontRegular}>아이디:   testid1</StyledText>
            <StyledText style={fontRegular}>비밀번호:   passowrd123!!</StyledText>
          </div>
          <div>
            <StyledText style={fontMedium}>[가이드]</StyledText>
            <StyledText style={fontRegular}>아이디:   guidetestid1</StyledText>
            <StyledText style={fontRegular}>비밀번호:   passowrd123!!</StyledText>
          </div>
        </div>
        <StyledText style={{ ...fontMedium , color: `${colors.gray4}`, textAlign: 'center'}}>[토스트 눌러서 닫기]</StyledText>
      </ModalContent>
      <ModalOverlay onClick={onClose} />
    </ModalContainer>
)};

export default ToastModal;

const ModalContainer = styled.div`
  position: fixed;
  top: 7%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: rgba(242, 82, 46, 0.5);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 20px;
`;

const ModalContent = styled.div`
  /* 모달 내용에 대한 스타일 추가 */
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;
  /* background-color: rgba(0, 0, 0, 0.4); */
`;
const StyledText = styled.p`
  font-size: 12px;
  margin: 0;
`