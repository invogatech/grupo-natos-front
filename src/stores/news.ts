import create from 'zustand';

type NewsType = {
  id: string;
  tag: string;
  title: string;
  content: string;
  image: string;
  createdAt: Date;
}

type State = {
  news: NewsType[];
}

const useNewsStore = create<State>((set) => ({
  news: [
    {
      id: '1',
      tag: 'Novidade',
      title: "Kiteland: mais uma inovação para sua casa de férias",
      content: "A Natos é resultado da parceria, esforço e dedicação de um grupo empreendedor sólido e atuante na gestão e incorporação de empreendimentos turísticos compartilhados. Somos conectados com o futuro, temos solidez e consistência em nossas ações, com essas premissas atuamos na gestão e incorporação de empreendimentos turísticos compartilhados. Muito mais que fazer negócios, a nossa motivação é a realização do sonho de milhares de pessoas que desejam ter uma casa de férias e vivenciar experiencias únicas de lazer e qualidade de vida. Com esse objetivo expandimos nossas operações de administração de empreendimentos de multipropriedade para outras regiões do país através de novas parcerias. Conquistamos, com o nosso trabalho eficaz, mais uma grande parceria de sucesso. Somos a nova administradora do Kiteland. Mais que um empreendimento imobiliário o Kiteland foi idealizado para gerar experiencias positivas para quem busca sair da rotina cotidiana, um lifestyle voltado para despertar a conexão com a sua essência. Será um paraíso para os amantes do Kitesurf. O projeto está na chamada rota dos ventos, nas praias de Maramar em Macapá -PI, Barrinha em Barra Grande-CE e em Guajiru em Flecheiras-CE. No Kiteland você poderá unir a prática esportiva a viagens de alto padrão por um baixo custo. O empreendimento será o primeiro projeto de multipropriedade temático Kitesurf de alto padrão do país, é um projeto ousado e ecológico, conectado com a natureza. No Kiteland, os clientes irão encontrar charmosos bangalôs com pé na areia e bem perto do mar, contar com todas as comodidades que um resort pode oferecer.",
      image: "https://www.brasilfashionnews.com.br/wp-content/uploads/2020/11/@geral002posalta-800x480.jpg",
      createdAt: new Date('2022-10-26T03:24:00'),
    },
    {
      id: '2',
      tag: 'Novidade',
      title: "Kiteland: mais uma inovação para sua casa de férias",
      content: "A Natos é resultado da parceria, esforço e dedicação de um grupo empreendedor sólido e atuante na gestão e incorporação de empreendimentos turísticos compartilhados. Somos conectados com o futuro, temos solidez e consistência em nossas ações, com essas premissas atuamos na gestão e incorporação de empreendimentos turísticos compartilhados. Muito mais que fazer negócios, a nossa motivação é a realização do sonho de milhares de pessoas que desejam ter uma casa de férias e vivenciar experiencias únicas de lazer e qualidade de vida. Com esse objetivo expandimos nossas operações de administração de empreendimentos de multipropriedade para outras regiões do país através de novas parcerias. Conquistamos, com o nosso trabalho eficaz, mais uma grande parceria de sucesso. Somos a nova administradora do Kiteland. Mais que um empreendimento imobiliário o Kiteland foi idealizado para gerar experiencias positivas para quem busca sair da rotina cotidiana, um lifestyle voltado para despertar a conexão com a sua essência. Será um paraíso para os amantes do Kitesurf. O projeto está na chamada rota dos ventos, nas praias de Maramar em Macapá -PI, Barrinha em Barra Grande-CE e em Guajiru em Flecheiras-CE. No Kiteland você poderá unir a prática esportiva a viagens de alto padrão por um baixo custo. O empreendimento será o primeiro projeto de multipropriedade temático Kitesurf de alto padrão do país, é um projeto ousado e ecológico, conectado com a natureza. No Kiteland, os clientes irão encontrar charmosos bangalôs com pé na areia e bem perto do mar, contar com todas as comodidades que um resort pode oferecer.",
      image: "https://www.brasilfashionnews.com.br/wp-content/uploads/2020/11/@geral002posalta-800x480.jpg",
      createdAt: new Date('2022-10-26T03:24:00'),
    },
    {
      id: '3',
      tag: 'Novidade',
      title: "Kiteland: mais uma inovação para sua casa de férias",
      content: "A Natos é resultado da parceria, esforço e dedicação de um grupo empreendedor sólido e atuante na gestão e incorporação de empreendimentos turísticos compartilhados. Somos conectados com o futuro, temos solidez e consistência em nossas ações, com essas premissas atuamos na gestão e incorporação de empreendimentos turísticos compartilhados. Muito mais que fazer negócios, a nossa motivação é a realização do sonho de milhares de pessoas que desejam ter uma casa de férias e vivenciar experiencias únicas de lazer e qualidade de vida. Com esse objetivo expandimos nossas operações de administração de empreendimentos de multipropriedade para outras regiões do país através de novas parcerias. Conquistamos, com o nosso trabalho eficaz, mais uma grande parceria de sucesso. Somos a nova administradora do Kiteland. Mais que um empreendimento imobiliário o Kiteland foi idealizado para gerar experiencias positivas para quem busca sair da rotina cotidiana, um lifestyle voltado para despertar a conexão com a sua essência. Será um paraíso para os amantes do Kitesurf. O projeto está na chamada rota dos ventos, nas praias de Maramar em Macapá -PI, Barrinha em Barra Grande-CE e em Guajiru em Flecheiras-CE. No Kiteland você poderá unir a prática esportiva a viagens de alto padrão por um baixo custo. O empreendimento será o primeiro projeto de multipropriedade temático Kitesurf de alto padrão do país, é um projeto ousado e ecológico, conectado com a natureza. No Kiteland, os clientes irão encontrar charmosos bangalôs com pé na areia e bem perto do mar, contar com todas as comodidades que um resort pode oferecer.",
      image: "https://www.brasilfashionnews.com.br/wp-content/uploads/2020/11/@geral002posalta-800x480.jpg",
      createdAt: new Date('2022-10-24T03:24:00'),
    },
    {
      id: '4',
      tag: 'Novidade',
      title: "Kiteland: mais uma inovação para sua casa de férias",
      content: "A Natos é resultado da parceria, esforço e dedicação de um grupo empreendedor sólido e atuante na gestão e incorporação de empreendimentos turísticos compartilhados. Somos conectados com o futuro, temos solidez e consistência em nossas ações, com essas premissas atuamos na gestão e incorporação de empreendimentos turísticos compartilhados. Muito mais que fazer negócios, a nossa motivação é a realização do sonho de milhares de pessoas que desejam ter uma casa de férias e vivenciar experiencias únicas de lazer e qualidade de vida. Com esse objetivo expandimos nossas operações de administração de empreendimentos de multipropriedade para outras regiões do país através de novas parcerias. Conquistamos, com o nosso trabalho eficaz, mais uma grande parceria de sucesso. Somos a nova administradora do Kiteland. Mais que um empreendimento imobiliário o Kiteland foi idealizado para gerar experiencias positivas para quem busca sair da rotina cotidiana, um lifestyle voltado para despertar a conexão com a sua essência. Será um paraíso para os amantes do Kitesurf. O projeto está na chamada rota dos ventos, nas praias de Maramar em Macapá -PI, Barrinha em Barra Grande-CE e em Guajiru em Flecheiras-CE. No Kiteland você poderá unir a prática esportiva a viagens de alto padrão por um baixo custo. O empreendimento será o primeiro projeto de multipropriedade temático Kitesurf de alto padrão do país, é um projeto ousado e ecológico, conectado com a natureza. No Kiteland, os clientes irão encontrar charmosos bangalôs com pé na areia e bem perto do mar, contar com todas as comodidades que um resort pode oferecer.",
      image: "https://www.brasilfashionnews.com.br/wp-content/uploads/2020/11/@geral002posalta-800x480.jpg",
      createdAt: new Date('2022-10-23T03:24:00'),
    },
    {
      id: '5',
      tag: 'Curiosidade',
      title: "Você conhece a lei de multipropriedade?",
      content: "A Natos é resultado da parceria, esforço e dedicação de um grupo empreendedor sólido e atuante na gestão e incorporação de empreendimentos turísticos compartilhados. Somos conectados com o futuro, temos solidez e consistência em nossas ações, com essas premissas atuamos na gestão e incorporação de empreendimentos turísticos compartilhados. Muito mais que fazer negócios, a nossa motivação é a realização do sonho de milhares de pessoas que desejam ter uma casa de férias e vivenciar experiencias únicas de lazer e qualidade de vida. Com esse objetivo expandimos nossas operações de administração de empreendimentos de multipropriedade para outras regiões do país através de novas parcerias. Conquistamos, com o nosso trabalho eficaz, mais uma grande parceria de sucesso. Somos a nova administradora do Kiteland. Mais que um empreendimento imobiliário o Kiteland foi idealizado para gerar experiencias positivas para quem busca sair da rotina cotidiana, um lifestyle voltado para despertar a conexão com a sua essência. Será um paraíso para os amantes do Kitesurf. O projeto está na chamada rota dos ventos, nas praias de Maramar em Macapá -PI, Barrinha em Barra Grande-CE e em Guajiru em Flecheiras-CE. No Kiteland você poderá unir a prática esportiva a viagens de alto padrão por um baixo custo. O empreendimento será o primeiro projeto de multipropriedade temático Kitesurf de alto padrão do país, é um projeto ousado e ecológico, conectado com a natureza. No Kiteland, os clientes irão encontrar charmosos bangalôs com pé na areia e bem perto do mar, contar com todas as comodidades que um resort pode oferecer.",
      image: "https://dhojeinterior.com.br/wp-content/uploads/2019/12/2019-10-17_NATOS_OLPA_aerea.jpg",
      createdAt: new Date('2022-10-15T03:24:00'),
    },
    {
      id: '6',
      tag: 'Curiosidade',
      title: "Você conhece a lei de multipropriedade?",
      content: "A Natos é resultado da parceria, esforço e dedicação de um grupo empreendedor sólido e atuante na gestão e incorporação de empreendimentos turísticos compartilhados. Somos conectados com o futuro, temos solidez e consistência em nossas ações, com essas premissas atuamos na gestão e incorporação de empreendimentos turísticos compartilhados. Muito mais que fazer negócios, a nossa motivação é a realização do sonho de milhares de pessoas que desejam ter uma casa de férias e vivenciar experiencias únicas de lazer e qualidade de vida. Com esse objetivo expandimos nossas operações de administração de empreendimentos de multipropriedade para outras regiões do país através de novas parcerias. Conquistamos, com o nosso trabalho eficaz, mais uma grande parceria de sucesso. Somos a nova administradora do Kiteland. Mais que um empreendimento imobiliário o Kiteland foi idealizado para gerar experiencias positivas para quem busca sair da rotina cotidiana, um lifestyle voltado para despertar a conexão com a sua essência. Será um paraíso para os amantes do Kitesurf. O projeto está na chamada rota dos ventos, nas praias de Maramar em Macapá -PI, Barrinha em Barra Grande-CE e em Guajiru em Flecheiras-CE. No Kiteland você poderá unir a prática esportiva a viagens de alto padrão por um baixo custo. O empreendimento será o primeiro projeto de multipropriedade temático Kitesurf de alto padrão do país, é um projeto ousado e ecológico, conectado com a natureza. No Kiteland, os clientes irão encontrar charmosos bangalôs com pé na areia e bem perto do mar, contar com todas as comodidades que um resort pode oferecer.",
      image: "https://dhojeinterior.com.br/wp-content/uploads/2019/12/2019-10-17_NATOS_OLPA_aerea.jpg",
      createdAt: new Date('2022-10-15T03:24:00'),
    },
    {
      id: '7',
      tag: 'Curiosidade',
      title: "Você conhece a lei de multipropriedade?",
      content: "A Natos é resultado da parceria, esforço e dedicação de um grupo empreendedor sólido e atuante na gestão e incorporação de empreendimentos turísticos compartilhados. Somos conectados com o futuro, temos solidez e consistência em nossas ações, com essas premissas atuamos na gestão e incorporação de empreendimentos turísticos compartilhados. Muito mais que fazer negócios, a nossa motivação é a realização do sonho de milhares de pessoas que desejam ter uma casa de férias e vivenciar experiencias únicas de lazer e qualidade de vida. Com esse objetivo expandimos nossas operações de administração de empreendimentos de multipropriedade para outras regiões do país através de novas parcerias. Conquistamos, com o nosso trabalho eficaz, mais uma grande parceria de sucesso. Somos a nova administradora do Kiteland. Mais que um empreendimento imobiliário o Kiteland foi idealizado para gerar experiencias positivas para quem busca sair da rotina cotidiana, um lifestyle voltado para despertar a conexão com a sua essência. Será um paraíso para os amantes do Kitesurf. O projeto está na chamada rota dos ventos, nas praias de Maramar em Macapá -PI, Barrinha em Barra Grande-CE e em Guajiru em Flecheiras-CE. No Kiteland você poderá unir a prática esportiva a viagens de alto padrão por um baixo custo. O empreendimento será o primeiro projeto de multipropriedade temático Kitesurf de alto padrão do país, é um projeto ousado e ecológico, conectado com a natureza. No Kiteland, os clientes irão encontrar charmosos bangalôs com pé na areia e bem perto do mar, contar com todas as comodidades que um resort pode oferecer.",
      image: "https://dhojeinterior.com.br/wp-content/uploads/2019/12/2019-10-17_NATOS_OLPA_aerea.jpg",
      createdAt: new Date('2022-10-15T03:24:00'),
    },
    {
      id: '8',
      tag: 'Curiosidade',
      title: "Você conhece a lei de multipropriedade?",
      content: "A Natos é resultado da parceria, esforço e dedicação de um grupo empreendedor sólido e atuante na gestão e incorporação de empreendimentos turísticos compartilhados. Somos conectados com o futuro, temos solidez e consistência em nossas ações, com essas premissas atuamos na gestão e incorporação de empreendimentos turísticos compartilhados. Muito mais que fazer negócios, a nossa motivação é a realização do sonho de milhares de pessoas que desejam ter uma casa de férias e vivenciar experiencias únicas de lazer e qualidade de vida. Com esse objetivo expandimos nossas operações de administração de empreendimentos de multipropriedade para outras regiões do país através de novas parcerias. Conquistamos, com o nosso trabalho eficaz, mais uma grande parceria de sucesso. Somos a nova administradora do Kiteland. Mais que um empreendimento imobiliário o Kiteland foi idealizado para gerar experiencias positivas para quem busca sair da rotina cotidiana, um lifestyle voltado para despertar a conexão com a sua essência. Será um paraíso para os amantes do Kitesurf. O projeto está na chamada rota dos ventos, nas praias de Maramar em Macapá -PI, Barrinha em Barra Grande-CE e em Guajiru em Flecheiras-CE. No Kiteland você poderá unir a prática esportiva a viagens de alto padrão por um baixo custo. O empreendimento será o primeiro projeto de multipropriedade temático Kitesurf de alto padrão do país, é um projeto ousado e ecológico, conectado com a natureza. No Kiteland, os clientes irão encontrar charmosos bangalôs com pé na areia e bem perto do mar, contar com todas as comodidades que um resort pode oferecer.",
      image: "https://dhojeinterior.com.br/wp-content/uploads/2019/12/2019-10-17_NATOS_OLPA_aerea.jpg",
      createdAt: new Date('2022-10-15T03:24:00'),
    },
  ],
}));

export default useNewsStore;