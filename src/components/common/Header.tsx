import React from 'react'
import styled from 'styled-components'
import LeftArrowIcon from '../../assets/LeftArrowIcon'

const Header = () => {
  return (
    <>
      <StyledHeader>
        <LeftArrowIcon />
      </StyledHeader>
    </>
  )
}
export default Header

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  backdrop-filter: blur(5px);
  height: 5%;
`
