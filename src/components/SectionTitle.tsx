import React from 'react'
import styled from 'styled-components'
import { fontBold, fontMedium } from '../styles/font'
import { colors } from '../styles/variables'

interface SectionType {
  title: string
  hasMore?: boolean
  paddingHorizontal?: number
  // TODO: type 정확히
  onClickMore?: any;
}
const SectionTitle = ({
  title,
  hasMore,
  paddingHorizontal,
  onClickMore
}: SectionType) => {
  return (
    <SectionWrap paddingHorizontal={paddingHorizontal}>
      <StyledSectionTitle style={fontBold}>{title}</StyledSectionTitle>
      {hasMore && <StyledMoreButton onClick={onClickMore}/>}
    </SectionWrap>
  )
}
export default SectionTitle

const SectionWrap = styled.div<{ paddingHorizontal?: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ paddingHorizontal }) =>
    paddingHorizontal ? `0 ${paddingHorizontal}px` : 0};
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
