import { Wrapper } from '@styles/pages'
import type { NextPage } from 'next'
import useSideBarStore from '@stores/sideBar'
import { MainWrapper } from '@styles/globals';
import useBoletosStore from '@stores/boletos';
import { useState } from 'react';
import SearchBarComponent from '@components/searchBar/searchBarComponent';
import { BoletosContainer } from '@styles/pages/boletos';
import { MdOutlineWatchLater } from 'react-icons/md';


const Boletos: NextPage = () => {
  const setCurrentPage = useSideBarStore((state) => state.setCurrentPage);
  setCurrentPage('boletos')
  const boletos = useBoletosStore((state) => state.boletos);
  const [ currentEnterprise, setCurrentEnterprise ] = useState(boletos[0].enterprise)

  const sortedBoletos = boletos.sort(function(a, b) {
    return b.dueDate.getTime() - a.dueDate.getTime();
  });

  //Return only boletos enterprise from boletos but no duplicates
  const enterprisesWithBoletos = boletos.filter((boleto, index, self) =>
    index === self.findIndex((t) => (
      t.enterprise === boleto.enterprise
    ))
  )

  const boletosPerEnterprise = sortedBoletos.filter((boleto) => boleto.enterprise === currentEnterprise)

  const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  
  //Return months names in order with boletos from boletos but no duplicates if the year is same
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
        <div className="enterprises">
          {enterprisesWithBoletos.map((enterprise) => (
            <div>
              <p className={currentEnterprise == enterprise.enterprise ? "selected" : ""} onClick={() => setCurrentEnterprise(enterprise.enterprise)}>{enterprise.enterprise}</p>
            </div>
          ))}
        </div>
        <SearchBarComponent/>
        <div className="boletos">
          {monthsWithBoletos.map((month) => (
            <div className="boletos__month">
              <p className="month">{month.month} {month.year}</p>
              <div className="boletos__container">
                {boletosPerEnterprise.map((boleto) => {
                  const boletoMonth = monthNames[boleto.dueDate.getMonth()];
                  const boletoYear = boleto.dueDate.getFullYear();
                  const boletoValue = boleto.value.toString().replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
                  if (boletoMonth === month.month && boletoYear === month.year) {
                    return (
                      <div className="boleto">
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
                          <p className="value">R${boletoValue}</p>
                          <p>{boleto.dueDate.toLocaleDateString()}</p>
                        </section>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          ))}
        </div>
      </BoletosContainer>
    </MainWrapper>
  )
}

export default Boletos
