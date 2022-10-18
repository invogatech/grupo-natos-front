import create from 'zustand'

type ExtractType = {
  enterprise: string;
  enterpriseNumber: string;
  contractNumber: number;
  extractReference: string;
  piuCode: string;
  boletoCode: string;
  currentMonth: Date;
}

type State = {
  extracts: ExtractType[];
  setExtracts: (extract: ExtractType[]) => void;
}

const useExtractsStore = create<State>((set) => ({
  extracts: [
    { 
      enterprise: 'Empresa 1',
      enterpriseNumber: '1.0',
      contractNumber: 123456,
      extractReference: 'SOLAR DAS AGUAS - TORRE D',
      piuCode: '203.0 - OLÍMPIA PARK RESORT - DIREITO DE USO',
      boletoCode: '203.0 - AP 1407 TORRE C COTA 06 SEM 1',
      currentMonth: new Date('2021-01-23T03:24:00'),
    },
    { 
      enterprise: 'Empresa 1',
      contractNumber: 123456,
      enterpriseNumber: '1.0',
      extractReference: 'SOLAR DAS AGUAS - TORRE D',
      piuCode: '203.0 - OLÍMPIA PARK RESORT - DIREITO DE USO',
      boletoCode: '203.0 - AP 1407 TORRE C COTA 06 SEM 1',
      currentMonth: new Date('2021-02-23T03:24:00'),
    },
    { 
      enterprise: 'Empresa 1',
      contractNumber: 123456,
      enterpriseNumber: '1.0',
      extractReference: 'SOLAR DAS AGUAS - TORRE C',
      piuCode: '203.0 - OLÍMPIA PARK RESORT - DIREITO DE USO',
      boletoCode: '203.0 - AP 1407 TORRE C COTA 06 SEM 1',
      currentMonth: new Date('2021-01-20T03:24:00'),
    },
    { 
      enterprise: 'Empresa 2',
      contractNumber: 123456,
      enterpriseNumber: '1.0',
      extractReference: 'SOLAR DAS AGUAS - TORRE C',
      piuCode: '203.0 - OLÍMPIA PARK RESORT - DIREITO DE USO',
      boletoCode: '203.0 - AP 1407 TORRE C COTA 06 SEM 1',
      currentMonth: new Date('2021-01-20T03:24:00'),
    },
  ],

  setExtracts: (extracts: ExtractType[]) => set(() => ({ extracts })),
}));

export default useExtractsStore;