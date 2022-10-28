import { colors } from "@styles/variables";
import styled from "styled-components";

export const BoletoContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 3rem;
  
  .boleto-informations {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  }

  .boleto-informations__section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-left: -1.75rem;
    margin-right: -1.75rem;
    padding: 0 1.75rem 1.75rem 1.75rem;

    border-bottom: 1px solid ${colors.grey400};

    .info-name {
      color: ${colors.grey500}
    }

    .info-data {
      color: black;
      font-size: 1.125rem;
      font-weight: bold;
    }
  }
`;