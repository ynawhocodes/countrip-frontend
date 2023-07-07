import styled from 'styled-components'
import { colors } from './variables'

export const StyledTitle = styled.h1`
  font-size: 20px;
`
interface StyledProgressBarProps {
  totalSteps?: number;
  currentStep?: number;
}
export const StyledProgressBar = styled.div<StyledProgressBarProps>`
  height: 10px;
  margin-top: 5%;
  margin-bottom: 10%;
  border-radius: 10px;
  background: linear-gradient(
    to right,
    ${colors.green} 0%,
    ${colors.green} ${props => ((props.currentStep ?? 0) / (props.totalSteps ?? 1)) * 100}%,
    ${colors.gray1} ${props => ((props.currentStep ?? 0) / (props.totalSteps ?? 1)) * 100}%,
    ${colors.gray1} 100%
  );
`
export const StyledCommonFlexContainer = styled.div<{
  align?: string;
  justify?:string;
  padding?: string;
}>`
  display: flex;
  align-items: ${({ align }) => (align ? align : 'center')};
  justify-content: ${({ justify }) => (justify ? justify : 'center')};
  padding: ${({ padding }) => (padding ? padding : '0')};
`;