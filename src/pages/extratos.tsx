import type { NextPage } from 'next'
import useSideBarStore from '@stores/sideBar'
import { MainWrapper } from '@styles/globals';
import useStatementsStore from '@stores/statements';
import { useState, useEffect } from 'react';
import SearchBarComponent from '@components/searchBar/searchBarComponent';
import { StatementsContainer } from '@styles/pages/extratos';
import { MdOutlineWatchLater } from 'react-icons/md';
import { useRouter } from 'next/router';

const Extratos: NextPage = () => {
  const setCurrentPage = useSideBarStore((state) => state.setCurrentPage);
  const statements = useStatementsStore((state) => state.statements);
  const [ currentEnterprise, setCurrentEnterprise ] = useState("");
  const [ sortedStatements, setSortedStatements ] = useState(statements);

  const router = useRouter();

  useEffect(() => {
    setSortedStatements(statements.sort(function(a, b) {
      return b.currentMonth.getTime() - a.currentMonth.getTime();
    }))

    if (statements.length > 0) {
      setCurrentEnterprise(statements[0].enterprise)
    } else {
      setCurrentEnterprise("")
    }
  }, [statements])

  useEffect(() => {
    setCurrentPage('extratos')
  }, [])
    
  const enterprisesWithStatements = statements.filter((statements, index, self) =>
    index === self.findIndex((t) => (
      t.enterprise === statements.enterprise
    ))
  )

  const statementsPerEnterprise = sortedStatements.filter((statement) => statement.enterprise === currentEnterprise)

  const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const monthsWithStatements =
    statementsPerEnterprise
      .map((statement) => {
        const month = monthNames[statement.currentMonth.getMonth()];
        const year = statement.currentMonth.getFullYear();
        return { month, year };
      })
      .filter((statement, index, self) => {
        return (
          index ===
          self.findIndex(
            (t) => t.month === statement.month && t.year === statement.year
          )
        );
      });

  return (
    <MainWrapper>
      <StatementsContainer>
        <h1>Seus Extratos</h1>
        {statements.length > 0 ? (
        <div className="enterprises">
          {enterprisesWithStatements.map((enterprise) => (
            <div key={enterprise.enterprise} className={`enterprises__item ${currentEnterprise == enterprise.enterprise ? "selected" : ""}`} onClick={() => setCurrentEnterprise(enterprise.enterprise)}>
              <p>{enterprise.enterprise}</p>
            </div>
          ))}
        </div>
        ) : (
          null
        )}
        <div className="search-filter">
          <SearchBarComponent/>
        </div>
        {monthsWithStatements.length > 0 ? (<div className="statements">
          {monthsWithStatements.map((month) => (
            <div className="statements__month" key={month.month + month.year.toString()}>
              <div className="statements__month__header">
                <p className="month">{month.month} {month.year}</p>
              </div>
              <div className="statements__container">
                <table className="statements__table-head-desktop">
                  <thead>
                    <tr>
                      <td className="enterprise-number">Empresa</td>
                      <td className="enterprise">Empreendimento</td>
                      <td className="contract-number">Nº Contrato</td>
                      <td className="descriptionCode">Cód-Descrição do Produto</td>
                      <td className="piuCode">Cód Produto-Identificador Unid.</td>
                      <td></td>
                    </tr>
                  </thead>
                </table>
                {statementsPerEnterprise.map((statement) => {
                  const boletoMonth = monthNames[statement.currentMonth.getMonth()];
                  const boletoYear = statement.currentMonth.getFullYear();
                  if (boletoMonth === month.month && boletoYear === month.year) {
                    return (
                      <>
                      <div className="statement-mobile" key={Math.random() + `${statement.boletoCode}`} onClick={() => router.push({
                          pathname: '/extrato',
                          query: { id: statement.id },
                        })}>
                        <section className="statements__section-1">
                          <section className="statements__icon-section">
                          <MdOutlineWatchLater className="statements__icon"/>
                          </section>
                          <section className="statements__section-1__text">
                            <p className="reference">{statement.statementReference}</p>
                            <p>Extrato</p>
                          </section>
                        </section>
                      </div>

                      <div className="statement-desktop" key={statement.boletoCode}>
                      <table>
                          <tbody>
                            <tr>
                              <td className="statement__enterprise-number">
                                <p>{statement.enterpriseNumber}</p>
                              </td>
                              <td className="statement__reference">
                                <p>{statement.statementReference}</p>
                              </td>
                              <td className="statement__contract-number">
                                <p>{statement.contractNumber}</p>
                              </td>
                              <td className="statement__boleto-code">
                                <p>{statement.boletoCode}</p>
                              </td>
                              <td className="statement__piu-code">
                                <p>{statement.piuCode}</p>
                              </td>
                              <td className="statement__view-button">
                                <button className="irpf-button">IRPF</button>
                                <button className="view-button">Visualizar</button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      </>
                    );
                  }
                })}
              </div>
            </div>
          ))}
        </div>) : 
        (<div className="no-statements">
          <p>Nenhum extrato encontrado</p>
          </div>)}
      </StatementsContainer>
    </MainWrapper>
  )
}

export default Extratos
