import useSideBarStore from "@stores/sideBar";
import useStatementsStore from "@stores/statements";
import { MainWrapper } from "@styles/globals";
import { ExtratoContainer } from "@styles/pages/extrato";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Extrato() {
  const setCurrentPage = useSideBarStore((state) => state.setCurrentPage);
  const statements = useStatementsStore((state) => state.statements);

  const router = useRouter();

  const { id } = router.query;

  const currentStatement = statements.find((statement) => statement.id === id);

  const statementDate = {
    day: currentStatement?.currentMonth.getDate(),
    month: currentStatement?.currentMonth.getMonth(),
    year: currentStatement?.currentMonth.getFullYear()
  }

  useEffect(() => {
    setCurrentPage('extrato')
  }, [])


  return (
    <MainWrapper>
      <ExtratoContainer>
        {currentStatement && statementDate.month ? (
        <>
        <h1 className="title-page">Confira os dados do seu extrato</h1>
        <section className="statement-informations">
          <section className="statement-informations__section">
            <p className="info-name">Empresa</p> 
            <p className="info-data">{currentStatement.enterprise}</p>
          </section>
          <section className="statement-informations__section">
            <p className="info-name">Nº Contrato</p>
            <p className="info-data">{currentStatement.contractNumber}</p>
          </section>
          <section className="statement-informations__section">
            <p className="info-name">Cód Produto-Identificador Unid.</p>
            <p className="info-data">{currentStatement.piuCode}</p>
          </section>
          <section className="statement-informations__section">
            <p className="info-name">Código do Boleto</p>
            <p className="info-data">{currentStatement.boletoCode}</p>
          </section>
        </section>
        </>
        ): (
          <div className="no-statement">
            <h1>Extrato não encontrado</h1>
          </div>
        )}
      </ExtratoContainer>
    </MainWrapper>
  )
}