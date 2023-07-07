import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/variables'
import { fontMedium } from '../../styles/font'
import RectangleBoxItem from '../RectangleBoxItem'
const SpotItem = () => {
  return (
    <>
      <StyledTitle style={fontMedium}>1. 오죽헌</StyledTitle>
      <RectangleBoxItem />
    </>
  )
}
export default SpotItem

const StyledTitle = styled.p`
  font-size: 16px;
`
