import { Wrapper } from '@styles/pages'
import type { NextPage } from 'next'
import useSideBarStore from '@stores/sideBar'
import { MainWrapper } from '@styles/globals';
import useBoletosStore from '@stores/boletos';
import { useState, useEffect } from 'react';
import SearchBarComponent from '@components/searchBar/searchBarComponent';
import { BoletosContainer } from '@styles/pages/boletos';
import { MdOutlineWatchLater } from 'react-icons/md';
import { BsChevronDown } from 'react-icons/bs'
import { useRouter } from 'next/router';

const Boletos: NextPage = () => {
  const setCurrentPage = useSideBarStore((state) => state.setCurrentPage);
  setCurrentPage('boletos')
  const boletos = useBoletosStore((state) => state.boletos);
  const [ currentEnterprise, setCurrentEnterprise ] = useState("")
  const [ currentFilter, setCurrentFilter ] = useState('Todos')
  const [ isFilterOpen, setIsFilterOpen ] = useState(false)
  const [ sortedBoletos, setSortedBoletos ] = useState(boletos);
  const [ filteredBoletos, setFilteredBoletos ] = useState(sortedBoletos);

  const router = useRouter();

  useEffect(() => {
    setSortedBoletos(boletos.sort(function(a, b) {
      return b.dueDate.getTime() - a.dueDate.getTime();
    }));
  }, [boletos])

  useEffect(() => {
    if (boletos.length > 0) {
      setCurrentEnterprise(boletos[0].enterprise)
    }
  }, [boletos])

  const filterBoletos = (filter: string) => {
    switch (filter) {
      case 'Todos':
        setFilteredBoletos(boletos)
        break;
      case 'Vencidos':
        setFilteredBoletos(boletos.filter(boleto => boleto.dueDate < new Date()))
        break;
      case 'Pendentes':
        setFilteredBoletos(boletos.filter(boleto => boleto.dueDate > new Date()))
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    filterBoletos(currentFilter)
  }, [currentFilter])

  const enterprisesWithBoletos = boletos.filter((boleto, index, self) =>
    index === self.findIndex((t) => (
      t.enterprise === boleto.enterprise
    ))
  )

  const boletosPerEnterprise = filteredBoletos.filter((boleto) => boleto.enterprise === currentEnterprise)

  const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const monthsWithBoletos =
    boletosPerEnterprise
      .map((boleto) => {
        const month = monthNames[boleto.dueDate.getMonth()];
        const year = boleto.dueDate.getFullYear();
        return { month, year };
      })
      .filter((boleto, index, self) => {
        return (
          index ===
          self.findIndex(
            (t) => t.month === boleto.month && t.year === boleto.year
          )
        );
      });

  return (
    <MainWrapper>
      <BoletosContainer>
        <h1>Seus Boletos</h1>
        {boletos.length > 0 ? (
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
          <div className="filter-div">
            <div className={`boletos__filter ${isFilterOpen ? "open" : "closed"}`} onClick={() => setIsFilterOpen(!isFilterOpen)}>
              <p>{currentFilter}</p>
              <BsChevronDown className={`icon ${isFilterOpen ? "open" : "closed"}`}/>
              <div className={`boletos__filter-dropped ${isFilterOpen ? "open" : "closed"}`}>
                <p onClick={() => setCurrentFilter("Todos")}>Todos</p>
                <p onClick={() => setCurrentFilter("Vencidos")}>Vencidos</p>
                <p onClick={() => setCurrentFilter("Pendentes")}>Pendentes</p>
              </div>
            </div>
          </div>
        </div>
        {monthsWithBoletos.length > 0 ? (<div className="boletos">
          {monthsWithBoletos.map((month) => (
            <div className="boletos__month" key={Math.random() + `${month}`}>
              <div className="boletos__month__header">
                <p className="month">{month.month} {month.year}</p>
              </div>
              <div className="boletos__container">
                <table className="boletos__table-head-desktop">
                  <thead>
                    <tr>
                      <td>Emissão</td>
                      <td>Vencimento</td>
                      <td>Número</td>
                      <td>Banco</td>
                      <td>Cedente</td>
                      <td>Valor</td>
                      <td></td>
                    </tr>
                  </thead>
                </table>
                {boletosPerEnterprise.map((boleto) => {
                  const boletoMonth = monthNames[boleto.dueDate.getMonth()];
                  const boletoYear = boleto.dueDate.getFullYear();
                  const boletoFormattedValue = boleto.value.toString().replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
                  if (boletoMonth === month.month && boletoYear === month.year) {
                    return (
                      <>
                      <div className="boleto-mobile" key={Math.random() + `${boleto.number}`} onClick={() => router.push({
                          pathname: '/boleto',
                          query: { id: boleto.code },
                        })}>
                        <section className="boleto__section-1">
                          <section className="boleto__icon-section">
                          <MdOutlineWatchLater className="boleto__icon"/>
                          </section>
                          <section className="boleto__section-1__text">
                            <p className="to">{boleto.to}</p>
                            <p>Boleto</p>
                          </section>
                        </section>
                        <section className="boleto__section-2">
                          <p className="value">R${boletoFormattedValue}</p>
                          <p>{boleto.dueDate.toLocaleDateString()}</p>
                        </section>
                      </div>

                      <div className="boleto-desktop" key={Math.random() + `${boleto.number}`}>
                      <table>
                          <tbody>
                            <tr>
                              <td className="boleto__issue-date">
                                <p>{boleto.issueDate.toLocaleDateString()}</p>
                              </td>
                              <td className="boleto__due-date">
                                <p>{boleto.dueDate.toLocaleDateString()}</p>
                              </td>
                              <td className="boleto__number">
                                <p>{boleto.number}</p>
                              </td>
                              <td className="boleto__bank">
                                <p>{boleto.bank}</p>
                              </td>
                              <td className="boleto__to">
                                <p>{boleto.to}</p>
                              </td>
                              <td className="boleto__value">
                                <p>R${boletoFormattedValue}</p>
                              </td>
                              <td className="boleto__view-button">
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
        (<div className="no-boletos">
          <p>Nenhum boleto encontrado</p>
          </div>)}
      </BoletosContainer>
    </MainWrapper>
  )
}

export default Boletos
