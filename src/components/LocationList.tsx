import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../styles/variables'
import { fontRegular } from '../styles/font'

interface LocationListProps {
  datas: string[]
}
const LocationList = ({ datas }: LocationListProps) => {
  const [selectedSquare, setSelectedSquare] = useState<number | null>(null)

  const handleSquareClick = (index: number) => {
    setSelectedSquare(index === selectedSquare ? null : index)
  }

  return (
    <StyledWrap>
      {datas.map((data, index) => (
        <StyledSquare
          key={index}
          selected={selectedSquare === index}
          onClick={() => handleSquareClick(index)}
        >
          <StyledText suffix={index === 0} style={fontRegular}>{data}</StyledText>
        </StyledSquare>
      ))}
    </StyledWrap>
  )
};
export default LocationList;

const StyledWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`
const StyledSquare = styled.div<{ selected: boolean }>`
  height: 45px;
  background-color: ${(props) => (props.selected ? '#000' : '#fff')};
  border-radius: 10px;
  margin: 5px 5px;
  width: 30%;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.selected ? '#fff' : `${colors.gray2}`)};
  border: ${(props) =>
  props.selected ? '#000 1px solid' : `${colors.gray2} 1px solid`};
`
const StyledText = styled.p<{ suffix: boolean }>`
  text-align: center;
  font-size: 14px;
  margin: 0;
  line-height: 40px;
  &::after {
    content: ${(props) => props.suffix ? "' 전체'" : ''};
  };
`