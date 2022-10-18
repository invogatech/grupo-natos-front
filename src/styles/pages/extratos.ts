import { colors, device } from "@styles/variables";
import { darken } from "polished";
import styled from "styled-components";

export const ExtratosContainer = styled.div`
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
  }

  .extratos {
    display: flex;
    flex-direction: column;
    gap: 1.6875rem;

    .extratos__month {

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

    .extratos__container {
      display: flex;
      flex-direction: column;
      gap: 1.6875rem;

      .extratos__table-head-desktop {
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

                &.enterprise-number {
                  width: 30%
                }

                &.enterprise {
                  width: 60%;
                }

                &.contract-number {
                  width: 30%;
                }

                &.description-code {
                  width: 100%;
                }

                &.piu-code {
                  width: 100%;
                }
              }
            }
          }
        }
      }

      .extrato-mobile {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: white;
        padding: 0.875rem;
        border-radius: 25px;
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

        .extratos__section-1 {
          display: flex;
          align-items: center;
          gap: 1rem;
          height: 100%;

          .extratos__section-1__text {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 0.5rem;
          }

          .reference {
            font-weight: 600;
            font-size: 1rem;
            color: black;
          }

          .extratos__icon-section {
            display: flex;
            align-items: center;
            justify-content: center;
                
            background: ${colors.grey400};
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;

            .extratos__icon {
              width: 1.5rem;
              height: 1.5rem;
            }
          }
        }

        .extratos__section-2 {
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

      .extrato-desktop {
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
              width: 100%;
              td {
                width: 100%;

                &.extrato__enterprise-number {
                  width: 30%;
                }

                &.extrato__contract-number {
                  width: 30%;
                }

                &.extrato__reference {
                  width: 60%;
                }
                
                &.extrato__view-button {
                  display: flex;
                  justify-content: center;
                  gap: 0.5rem;
                  .view-button {
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

                  .irpf-button {
                    background: ${colors.grey400};
                    border: none;
                    border-radius: 25px;
                    padding: 0.75rem 1.725rem;
                    font-weight: bold;

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
      }
    }

  }

  .no-extratos {
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