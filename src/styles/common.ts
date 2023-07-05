import styled from "styled-components"
import { colors } from "./variables"

export const StyledCommonWrap = styled.main`
  padding: 0 20px;
  margin: 0 auto;
  background-color: black;
  height: 100%;
  @media (min-width: 769px) {
    width: 768px;
  }
`;
export const StyledCommonGreenLightWrap = styled(StyledCommonWrap)`
  background-color: ${colors.greenLight};
`;
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
export const StyledCommonButton = styled.button<{
  width?: string;
  height?: string;
}>`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '50px')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  border-radius: 20px;
  border-style: none;
  font-size: 16px;
`;
export const StyledCommonBlackButton = styled(StyledCommonButton)`
  color: white;
  background-color: black;
  &:hover {
    background-color: ${colors.gray4};
  }
`;
export const StyledCommonColumnPostitionOuterWrap = styled.div<{
  top?: string;
}>`
  position: relative;
  height: 100%;
  > .Title {
    position: absolute;
    top: 20%;
    font-size: 30px;
    font-weight: 900;
    color: ${colors.gray5}
  }
`;
export const StyledCommonColumnPostitionInnerWrap = styled.div<{
  top?: string;
  position?: string;
}>`
  top: ${({ top }) => (top ? top : '0')};
  position: ${({ position }) => (position === 'relative' ? 'relative' : 'absolute')};
`;