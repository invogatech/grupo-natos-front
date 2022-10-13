import create from 'zustand'

type BoletoType = {
  number: string;
  to: string;
  value: number;
  issueDate: Date;
  dueDate: Date;
  paid: boolean;
  code: string;
  enterprise: string;
  bank: string;
}

type State = {
  boletos: BoletoType[];
  setBoletos: (boletos: BoletoType[]) => void;
}

const useBoletosStore = create<State>((set) => ({
  boletos: [
    {
      number: '#123456',
      to: 'Beltrano de Almeida',
      value: 54320,
      issueDate: new Date('2021-01-23T03:24:00'),
      dueDate: new Date('2021-01-23T03:24:00'),
      paid: false,
      code: '123456783',
      enterprise: 'Empresa 1',
      bank: "237"
    },
    {
      number: '#123455',
      to: 'Fulano de Tal',
      value: 100,
      issueDate: new Date('2021-01-23T03:24:00'),
      dueDate: new Date('2022-12-17T03:24:00'),
      paid: false,
      code: '123456789',
      enterprise: 'Empresa 1',
      bank: "237"
    },
    {
      number: '#123454',
      to: 'SPE WGSA 02 EMPREENDIMENTOS IMOBILIARIOS S/A',
      value: 9000,
      issueDate: new Date('2021-01-23T03:24:00'),
      dueDate: new Date('2022-09-23T03:24:00'),
      paid: false,
      code: '123456784',
      enterprise: 'Empresa 1',
      bank: "237"
    },
    {
      number: '#123453',
      to: 'Ciclano de Cá',
      value: 9000,
      issueDate: new Date('2021-01-23T03:24:00'),
      dueDate: new Date('2022-09-23T03:24:00'),
      paid: false,
      code: '123456784',
      enterprise: 'Empresa 1',
      bank: "237"
    },
    {
      number: '#123453',
      to: 'Ciclano de Cá',
      value: 9000,
      issueDate: new Date('2021-01-23T03:24:00'),
      dueDate: new Date('2022-09-23T03:24:00'),
      paid: false,
      code: '123456784',
      enterprise: 'Empresa 1',
      bank: "237"
    },
    {
      number: '#123453',
      to: 'Ciclano de Cá',
      value: 9000,
      issueDate: new Date('2021-01-23T03:24:00'),
      dueDate: new Date('2022-09-23T03:24:00'),
      paid: false,
      code: '123456784',
      enterprise: 'Empresa 1',
      bank: "237"
    },
    {
      number: '#123453',
      to: 'Ciclano de Cá',
      value: 9000,
      issueDate: new Date('2021-01-23T03:24:00'),
      dueDate: new Date('2022-09-23T03:24:00'),
      paid: false,
      code: '123456784',
      enterprise: 'Empresa 1',
      bank: "237"
    },
    {
      number: '#123453',
      to: 'Ciclano de Cá',
      value: 9000,
      issueDate: new Date('2021-01-23T03:24:00'),
      dueDate: new Date('2022-09-23T03:24:00'),
      paid: false,
      code: '123456784',
      enterprise: 'Empresa 1',
      bank: "237"
    },
    {
      number: '#123453',
      to: 'Ciclano de Cá',
      value: 9000,
      issueDate: new Date('2021-01-23T03:24:00'),
      dueDate: new Date('2022-09-23T03:24:00'),
      paid: false,
      code: '123456784',
      enterprise: 'Empresa 1',
      bank: "237"
    },
    {
      number: '#123453',
      to: 'Ciclano de Cá',
      value: 9000,
      issueDate: new Date('2021-01-23T03:24:00'),
      dueDate: new Date('2022-09-23T03:24:00'),
      paid: false,
      code: '123456784',
      enterprise: 'Empresa 1',
      bank: "237"
    },
    {
      number: '#123452',
      to: 'Maria de Almeida',
      value: 342.34,
      issueDate: new Date('2021-01-23T03:24:00'),
      dueDate: new Date('2021-06-23T03:24:00'),
      paid: true,
      code: '123456782',
      enterprise: 'Empresa 2',
      bank: "237"
    },
  ],

  setBoletos: (boletos: BoletoType[]) => set(() => ({ boletos })),
}));

export default useBoletosStore;