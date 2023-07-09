import React from 'react'
import styled from 'styled-components'
import { fontBold, fontMedium } from '../styles/font'
import { colors } from '../styles/variables'

interface SectionType {
  title: string
  isMore?: boolean
  url?: string
}
const SectionTitle = ({ title, isMore, url }: SectionType) => {
  return (
    <SectionWrap>
      <StyledSectionTitle style={fontBold}>{title}</StyledSectionTitle>
      {isMore && <StyledMoreButton/>}
    </SectionWrap>
  )
}
export default SectionTitle

const SectionWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyledSectionTitle = styled.p`
  font-size: 18px;
`
const StyledMoreButton = styled.button`
  all: unset;
  font-size: 12px;
  color: ${colors.gray4};
  &::after {
    content: '자세히 >';
  }
`