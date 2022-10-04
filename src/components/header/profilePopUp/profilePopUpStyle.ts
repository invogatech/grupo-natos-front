import { colors, device } from '@styles/variables';
import styled from 'styled-components';

export const Container = styled.div`
  display: none;
   
  @media (${device.laptop}) {
    display: flex;
    flex-direction: column;

    position: absolute;
    top: 80px;
    right: 20px;

    width: 12.5rem;

    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);

    z-index: 997;
    

    .edit-profile-section {
      display: flex;

      border-bottom: 2px solid ${colors.grey400};

      p {
        color: ${colors.textGrey};
        margin: 23px 25px;
        font-size: 0.875rem;

        &:hover {
          cursor: pointer;
          color: ${colors.mainBlue};

          transition: color 0.2s ease-in-out;
        }
      }
    }
  }
`;

export const LogOutButton = styled.button`
  display: flex;

  align-items: center;

  
  border: 1px solid ${colors.grey500};
  background: none;
  border-radius: 0.5rem;

  color: ${colors.textGrey};
  
  margin: 1.4375rem 1.5625rem;
  padding: 0.3125rem 1.25rem;
  gap: 0.5rem;


  .icon {
    fill: #878E9F;
    stroke: #878E9F;
  }

  &:hover {
    cursor: pointer;
    background: #FF7276;
    color: white;
    border: 1px solid #FF7276;
    
    transition: background 0.3s ease-in-out, border 0.3s ease-in-out, color 0.3s ease-in-out;

    .icon {
      fill: white;
      stroke: white;

      transition: fill 0.3s ease-in-out, stroke 0.3s ease-in-out;
    }
    
  }

`;