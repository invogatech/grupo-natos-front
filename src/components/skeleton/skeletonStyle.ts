import { colors } from "@styles/variables";
import styled from "styled-components"

type Props = {
  width: string,
  height: string,
  type: string
}

export const SkeletonWrapper = styled.div<Props>`
  display: flex;
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${colors.grey450};
  border-radius: ${props => props.type === "text" ? "5px" : "inherit"};
`;