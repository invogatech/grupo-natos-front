import type { NextPage } from 'next'
import useSideBarStore from '@stores/sideBar'
import { MainWrapper } from '@styles/globals';
import useExtractsStore from '@stores/extratos';
import { useState, useEffect } from 'react';
import SearchBarComponent from '@components/searchBar/searchBarComponent';
import { ExtratosContainer } from '@styles/pages/extratos';
import { MdOutlineWatchLater } from 'react-icons/md';

const Extratos: NextPage = () => {
  const setCurrentPage = useSideBarStore((state) => state.setCurrentPage);
  setCurrentPage('extratos')
  const extracts = useExtractsStore((state) => state.extracts);
  const [ currentEnterprise, setCurrentEnterprise ] = useState("");
  const [ sortedExtracts, setSortedExtracts ] = useState(extracts);

  useEffect(() => {
    setSortedExtracts(extracts.sort(function(a, b) {
      return b.currentMonth.getTime() - a.currentMonth.getTime();
    }))
  }, [extracts])

  useEffect(() => {
    if (extracts.length > 0) {
      setCurrentEnterprise(extracts[0].enterprise)
    }
  }, [extracts])
    
  //Return only boletos enterprise from boletos but no duplicates
  const enterprisesWithBoletos = extracts.filter((extract, index, self) =>
    index === self.findIndex((t) => (
      t.enterprise === extract.enterprise
    ))
  )

  const extractsPerEnterprise = sortedExtracts.filter((extract) => extract.enterprise === currentEnterprise)

  const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  
  //Return months names in order with boletos from boletos but no duplicates if the year is same
  const monthsWithExtracts =
    extractsPerEnterprise
      .map((extract) => {
        const month = monthNames[extract.currentMonth.getMonth()];
        const year = extract.currentMonth.getFullYear();
        return { month, year };
      })
      .filter((extract, index, self) => {
        return (
          index ===
          self.findIndex(
            (t) => t.month === extract.month && t.year === extract.year
          )
        );
      });

  return (
    <MainWrapper>
      <ExtratosContainer>
        <h1>Seus Extratos</h1>
        {extracts.length > 0 ? (
        <div className="enterprises">
          {enterprisesWithBoletos.map((enterprise) => (
            <div key={Math.random()} className={`enterprises__item ${currentEnterprise == enterprise.enterprise ? "selected" : ""}`} onClick={() => setCurrentEnterprise(enterprise.enterprise)}>
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
        {monthsWithExtracts.length > 0 ? (<div className="extratos">
          {monthsWithExtracts.map((month) => (
            <div className="extratos__month" key={Math.random() + `${month}`}>
              <div className="extratos__month__header">
                <p className="month">{month.month} {month.year}</p>
              </div>
              <div className="extratos__container">
                <table className="extratos__table-head-desktop">
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
                {extractsPerEnterprise.map((extract) => {
                  const boletoMonth = monthNames[extract.currentMonth.getMonth()];
                  const boletoYear = extract.currentMonth.getFullYear();
                  if (boletoMonth === month.month && boletoYear === month.year) {
                    return (
                      <>
                      <div className="extrato-mobile" key={Math.random() + `${extract.boletoCode}`}>
                        <section className="extratos__section-1">
                          <section className="extratos__icon-section">
                          <MdOutlineWatchLater className="extratos__icon"/>
                          </section>
                          <section className="extratos__section-1__text">
                            <p className="reference">{extract.extractReference}</p>
                            <p>Extrato</p>
                          </section>
                        </section>
                      </div>

                      <div className="extrato-desktop" key={Math.random() + `${extract.boletoCode}`}>
                      <table>
                          <tbody>
                            <tr>
                              <td className="extrato__enterprise-number">
                                <p>{extract.enterpriseNumber}</p>
                              </td>
                              <td className="extrato__reference">
                                <p>{extract.extractReference}</p>
                              </td>
                              <td className="extrato__contract-number">
                                <p>{extract.contractNumber}</p>
                              </td>
                              <td className="extrato__boleto-code">
                                <p>{extract.boletoCode}</p>
                              </td>
                              <td className="extrato__piu-code">
                                <p>{extract.piuCode}</p>
                              </td>
                              <td className="extrato__view-button">
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
        (<div className="no-extratos">
          <p>Nenhum extrato encontrado</p>
          </div>)}
      </ExtratosContainer>
    </MainWrapper>
  )
}

export default Extratos
