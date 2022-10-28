import useBoletosStore from "@stores/boletos";
import { MainWrapper } from "@styles/globals";
import { BoletoContainer } from "@styles/pages/boleto";
import { useRouter } from "next/router";

export default function Boleto() {
  const boletos = useBoletosStore((state) => state.boletos);

  const router = useRouter();

  const { id } = router.query;

  const currentBoleto = boletos.find((boleto) => boleto.code === id);

  const boletoDueDate = {
    day: currentBoleto?.dueDate.getDate(),
    month: currentBoleto?.dueDate.getMonth(),
    year: currentBoleto?.dueDate.getFullYear()
  }

  const boletoFormattedValue = currentBoleto?.value.toString().replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");


  return (
    <MainWrapper>
      <BoletoContainer>
        {currentBoleto && boletoDueDate.month ? (
        <>
        <h1 className="title-page">Confira os dados do seu boleto</h1>
        <section className="boleto-informations">
          <section className="boleto-informations__section">
            <p className="info-name">Para</p> 
            <p className="info-data">{currentBoleto.to}</p>
          </section>
          <section className="boleto-informations__section">
            <p className="info-name">Valor</p>
            <p className="info-data">R${boletoFormattedValue}</p>
          </section>
          <section className="boleto-informations__section">
            <p className="info-name">Vencimento</p>
            {(boletoDueDate.month + 1) < 10 ? <p className="info-data">{boletoDueDate.day}/0{boletoDueDate.month + 1 }/{boletoDueDate.year}</p> : <p className="info-data">{boletoDueDate.day}/{boletoDueDate.month + 1}/{boletoDueDate.year}</p>}
          </section>
          <section className="boleto-informations__section">
            <p className="info-name">Código do Boleto</p>
            <p className="info-data">{currentBoleto.code}</p>
          </section>
        </section>
        </>
        ): (
          <div className="no-boleto">
            <h1>Boleto não encontrado</h1>
          </div>
        )}
      </BoletoContainer>
    </MainWrapper>
  )
}