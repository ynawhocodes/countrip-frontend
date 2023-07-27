import React, { ReactNode } from "react";
import styled from "styled-components";
import { colors } from "../../styles/variables";

interface EmptyStatusProps {
  children: React.ReactNode;
}
const EmptyStatus = ({ children }: EmptyStatusProps) => (
  <StyledEmptyStatus>{children}</StyledEmptyStatus>
);
export default EmptyStatus;

const StyledEmptyStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.gray2};
  height: 100px;
  font-size: 14px;
  border-radius: 25px;
`;
