import create from 'zustand'

type BoletoType = {
  id: string;
  to: string;
  value: number;
  dueDate: Date;
  paid: boolean;
  code: string;
  enterprise: string;
}

type State = {
  boletos: BoletoType[];
  setBoletos: (boletos: BoletoType[]) => void;
}

const useBoletosStore = create<State>((set) => ({
  boletos: [
    {
      id: '3',
      to: 'Beltrano de Almeida',
      value: 54320,
      dueDate: new Date('2021-01-23T03:24:00'),
      paid: false,
      code: '123456783',
      enterprise: 'Empresa 1',
    },
    {
      id: '1',
      to: 'Fulano de Tal',
      value: 100,
      dueDate: new Date('2022-09-17T03:24:00'),
      paid: false,
      code: '123456789',
      enterprise: 'Empresa 1',
    },
    {
      id: '2',
      to: 'Lorem ipsum dolor sit amet, consectetur',
      value: 9000,
      dueDate: new Date('2022-09-23T03:24:00'),
      paid: false,
      code: '123456784',
      enterprise: 'Empresa 1',
    },
    {
      id: '2',
      to: 'Ciclano de Cá',
      value: 9000,
      dueDate: new Date('2022-09-23T03:24:00'),
      paid: false,
      code: '123456784',
      enterprise: 'Empresa 1',
    },
    {
      id: '4',
      to: 'Maria de Almeida',
      value: 342.34,
      dueDate: new Date('2021-06-23T03:24:00'),
      paid: true,
      code: '123456782',
      enterprise: 'Empresa 2',
    },
  ],

  setBoletos: (boletos: BoletoType[]) => set(() => ({ boletos })),
}));

export default useBoletosStore;