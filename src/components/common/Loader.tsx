import React from 'react';
import { SyncLoader } from 'react-spinners';
import styled from 'styled-components';

const DimmedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
`;

const LoadingSpinner = () => {
  return (
    <DimmedBackground>
      <SyncLoader size={15} color="#ffffff" /> 
    </DimmedBackground>
  );
};

export default LoadingSpinner;
