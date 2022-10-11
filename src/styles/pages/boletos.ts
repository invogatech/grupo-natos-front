import { colors } from "@styles/variables";
import styled from "styled-components";

export const BoletosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6875rem;

  .enterprises {
    display: flex;
    align-items: center;
    
    gap: 0.5rem;
    overflow-x: auto;
    
    padding-bottom: 0.625rem;
    
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.3rem 1rem;
      min-width: 120px;

      &.selected {
        color: white;
        background: ${colors.mainBlue};
        border-radius: 5rem;
      }
    }
  }

  .boletos {
    display: flex;
    flex-direction: column;
    gap: 1.6875rem;

    .boletos__month {
      

      .month {
        color: ${colors.grey700};
        margin-bottom: 10px;
      }
    }

    .boletos__container {
      display: flex;
      flex-direction: column;
      gap: 1.6875rem;

      .boleto {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: white;
        padding: 0.875rem;
        border-radius: 0.5rem;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

        max-height: 5.625rem;
        min-height: 5.625rem;

        p {
          color: ${colors.grey700};
          font-size: 0.875rem;
        }

        .boleto__section-1 {
          display: flex;
          align-items: center;
          gap: 1rem;
          height: 100%;

          .boleto__section-1__text {
            display: flex;
            max-width: 70%;
            flex-direction: column;
            justify-content: space-between;
            gap: 0.5rem;
          }

          .to {
            font-weight: 600;
            font-size: 0.75rem;
            color: black;
          }

          .boleto__icon-section {
            display: flex;
            align-items: center;
            justify-content: center;
                
            background: ${colors.grey400};
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;

            .boleto__icon {
              width: 1.5rem;
              height: 1.5rem;
            }
          }
        }

        .boleto__section-2 {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          gap: 0.5rem;

          text-align: right;

          .value {
            color: black;
            font-weight: 600;
            font-size: 1.125rem;
          }
        }
      }
    }

  }
`;