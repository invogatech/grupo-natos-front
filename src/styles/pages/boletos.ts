import { colors, device } from "@styles/variables";
import { darken } from "polished";
import styled from "styled-components";

export const BoletosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6875rem;
  width: 100%;
  height: 100%;

  .enterprises {
    display: flex;
    align-items: center;
    
    gap: 0.5rem;
    overflow-x: auto;
    min-height: 3.75rem;
    
    padding-bottom: 0.625rem;

    @media (${device.laptop}) {
      padding-bottom: 0;
    }

    .enterprises__item {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem 1rem;

      &.selected {
        background: ${colors.mainBlue};
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 1.5625rem;
        user-select: none;
      }

      &:not(.selected) {
        &:hover {
          background: ${darken(0.1, colors.grey400)};
          padding: 0.5rem 1rem;
          border-radius: 1.5625rem;
          user-select: none;
        }
      }
    }
  }

  .search-filter {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (${device.laptop}) {
      flex-direction: row;
      justify-content: space-between;
    }

    .filter-div {
      display: flex;
      flex-direction: row-reverse;
      font-size: 0.875rem;

      .boletos__filter {
        display: flex;
        position: relative;
        background: ${colors.grey400};
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.625rem;
        width: 9.0625rem;
        border-radius: 1.5625rem;

        &:hover {
          cursor: pointer;
        }

        &.open {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }

        .icon {
          margin-top: 0.1875rem;
          &.closed {
            transform: rotate(0);
            transition: transform 0.3s ease-in-out;
          }

          &.open {
            transform: rotate(180deg);
            transition: transform 0.3s ease-in-out;
          }
        }

        .boletos__filter-dropped {
          &.closed {
            display: none;
          }

          &.open {
            display: block;
            position: absolute;
            top: 100%;
            background: ${colors.grey400};
            width: 100%;
            align-items: center;
            text-align: center;
            border-bottom-left-radius: 1.5625rem;
            border-bottom-right-radius: 1.5625rem;
            padding-bottom: 0.625rem;

            p {
              padding: 0.625rem;

              &:hover {
                cursor: pointer;
                background: ${darken (0.1, colors.grey400)};
              }
            }
          }
        }
      }
    }
  }

  

  .boletos {
    display: flex;
    flex-direction: column;
    gap: 1.6875rem;

    .boletos__month {

      border-bottom: 1px solid ${colors.grey400};
      padding-bottom: 1.6875rem;

      &:last-child {
        border-bottom: none;
      }

      .month {
        color: ${colors.grey700};
        margin-bottom: 10px;
      }
    }

    .boletos__container {
      display: flex;
      flex-direction: column;
      gap: 1.6875rem;

      .boletos__table-head-desktop {
        display: none;

        @media (${device.laptop}) {
          display: flex;
          flex-direction: row;
          width: 100%;
          margin-bottom: -0.625rem;

          thead {
            display: flex;
            width: 100%;

            tr {
              display: flex;
              width: 100%;
              padding: 0 0.875rem;
              gap: 1rem;

              td {
                display: flex;
                width: 100%;
                font-size: 14px;
                color: ${colors.grey700};
              }
            }
          }
        }
      }

      .boleto-mobile {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: white;
        padding: 0.875rem;
        border-radius: 0.5rem;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

        max-height: 5.625rem;
        min-height: 5.625rem;

        @media (${device.laptop}) {
          display: none;
        }

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

      .boleto-desktop {
        display: none;

        @media (${device.laptop}) {
          display: flex;

          table {
            width: 100%;
            border-collapse: collapse;
            display: flex;
            flex-direction: column;
            
            p {
              color: black;
              font-size: 12px;
              font-weight: bold;
            }

            tr {
              display: flex;
              align-items: center;
              background: white;
              text-align: left;
              padding: 0.875rem;
              border-radius: 0.5rem;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
              gap: 1rem;
              td {
                width: 100%;

                &.boleto__value {
                  p {
                    font-size: 14px;
                  }
                }

                /* &.boleto__to {
                  width: 120%;
                } */

                &.boleto__view-button {
                  display: flex;
                  justify-content: center;
                  button {
                    background: ${colors.mainBlue};
                    border: none;
                    border-radius: 25px;
                    color: white;
                    padding: 0.75rem 1.725rem;

                    &:hover {
                      cursor: pointer;
                      background: ${darken (0.1, colors.mainBlue)};
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

  }

  .no-boletos {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.125rem;
    color: ${colors.grey700};

    @media (${device.laptop}) {
      height: 30%;
    }
  }
`;