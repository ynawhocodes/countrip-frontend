import styled from "styled-components";
import { colors } from "./variables";

export const StyledCommonWrap = styled.main`
  margin: 0 auto;
  @media (min-width: 769px) {
    width: 768px;
  }
`;
export const StyledCommonGreenLightWrap = styled(StyledCommonWrap)`
  padding: 0 20px;
  background-color: ${colors.greenLight};
  height: 100%;
`;
export const StyledCommonWhiteWrap = styled(StyledCommonWrap)`
  padding: 0 20px;
  padding-top: 15%;
`;
export const StyledCommonFullHeigthWhiteWrap = styled(StyledCommonWrap)<{
  paddingHorizontal?: number;
}>`
  padding: ${({ paddingHorizontal }) =>
    paddingHorizontal
      ? `80px ${paddingHorizontal}px 0 ${paddingHorizontal}px`
      : `80px 0 0 0`};
  height: 100%;
  overflow: auto;
  scrollbar-width: none; /* Firefox*/
  -ms-overflow-style: none; /*IE, Edge*/
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;
export const StyledCommonFlexContainer = styled.div<{
  align?: string;
  justify?: string;
  padding?: string;
}>`
  display: flex;
  align-items: ${({ align }) => (align ? align : "center")};
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  padding: ${({ padding }) => (padding ? padding : "0")};
`;
export const StyledCommonItemsPerRowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  gap: 10px;
`;
export const StyledCommonButton = styled.button<{
  width?: string;
  height?: string;
}>`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "50px")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  border-radius: 20px;
  border-style: none;
  font-weight: 700;
`;
export const StyledCommonBlackButton = styled(StyledCommonButton)`
  color: white;
  font-size: 12px;
  height: 40px;
  background-color: ${colors.gray5};
  &:hover {
    background-color: ${colors.gray4};
  }
`;
export const StyledCommonGrayBorderWhiteButton = styled(StyledCommonButton)`
  color: ${colors.gray2};
  background-color: white;
  border: 1.5px ${colors.gray2} solid;
  &:hover {
    background-color: ${colors.gray3};
  }
`;
export const StyledCommonBlackBottomButton = styled(StyledCommonButton)`
  color: white;
  font-size: 16px;
  background-color: ${colors.gray5};
  bottom: 2%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  &:hover {
    background-color: ${colors.gray4};
  }
  @media (min-width: 769px) {
    width: 768px;
  }
`;
// TODO: Title side effect 고려 후 삭제
export const StyledCommonColumnPostitionOuterWrap = styled.div<{
  top?: string;
}>`
  position: relative;
  height: 100%;
  > .Title {
    position: absolute;
    top: 15%;
    font-size: 30px;
    font-weight: 900;
    color: ${colors.gray5};
    font-family: "'Noto Sans KR', sans-serif";
    font-weight: 900;
  }
`;
export const StyledCommonColumnPostitionInnerWrap = styled.div<{
  top?: string;
  position?: string;
}>`
  top: ${({ top }) => (top ? top : "0")};
  position: ${({ position }) =>
    position === "relative" ? "relative" : "absolute"};
`;
export const StyledCommonHr = styled.div`
  border-bottom: 1px #e5e5e5 solid;
  margin: 20px 0 20px 0;
  height: 1px;
`;
