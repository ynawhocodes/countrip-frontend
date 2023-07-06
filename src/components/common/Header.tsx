import React from 'react'
import styled from 'styled-components'
import LeftArrowIcon from '../../assets/LeftArrowIcon'

const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyledHeaderContainer>
        <LeftArrowIcon />
        </StyledHeaderContainer>
      </StyledHeader>
    </>
  )
}
export default Header

const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 50%;
  height: 5%;
  width: 100%;
  backdrop-filter: blur(5px);
  transform: translateX(-50%);
  @media (min-width: 769px) {
    width: 768px;
  }
`
const StyledHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`
