import { device } from "@styles/variables";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  @media (${device.laptop}) {
    flex-direction: row;
    overflow-x: hidden;
    overflow-y: hidden;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  overflow-y: auto;
`;
