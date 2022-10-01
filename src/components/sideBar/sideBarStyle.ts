import { colors, device } from "@styles/variables";
import { darken, lighten } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;

  position: absolute;

  @media (${device.laptop}) {
    width: fit-content;

    position: relative;
  }
`;

export const SideBarContainer = styled.div`
  display: flex;

  flex-direction: column;

  background: ${colors.darkGrey};

  height: 100%;
  width: 70%;

  padding: 3.125rem 1.875rem;
  
  gap: 3.4375rem;


  @media (${device.laptop}) {
    width: 16.375rem;
  }
`;

export const Overlay = styled.div`
  display: flex;

  background: rgba(255, 255, 255, 0.75);

  width: 30%;
  height: 100%;

  @media (${device.laptop}) {
    display: none;
  }
`;

export const MenuContainer = styled.section`
  display: flex;

  flex-direction: column;

  color: ${colors.navBarGrey};

  gap: 1.125rem;
`;

export const MenuItem = styled.section`
  display: flex;

  border-bottom: 1px solid ${colors.navBarGrey};

  padding-bottom: 1.125rem;

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
  }
  
  .item-information {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1.125rem;

    .icon {
    width: 1.75rem;
    }

    p {
      font-size: 1.0625rem;
    }
  }

  &.deactive { 

    .item-information {
      &:hover {
        color: ${lighten(0.2, colors.navBarGrey)};
        cursor: pointer;

        .icon {
          fill: ${lighten(0.2, colors.navBarGrey)};
        }
      }
    }
    

    .active-marker { 
      display: none;
    }

    .icon {
      fill: ${colors.navBarGrey};
    }
  }

  &.active {
    color: white;
    
    .icon {
      fill: white;
    }

    .active-marker {
      width: 0.25rem;
      height: 1.25rem;
      background: white;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
      position: absolute;
      left: 0%;
    }
  }

  
`;
