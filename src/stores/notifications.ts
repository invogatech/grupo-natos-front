import create from 'zustand';

type NotificationType = {
  id: string;
  title: string;
  message: string;
  createdAt: Date;
}

type State = {
  notifications: NotificationType[];
}

const useNotificationsStore = create<State>((set) => ({
  notifications: [
    {
      id: '1',
      message: "Mensagem de testes 1",
      title: "Teste",
      createdAt: new Date('2022-09-17T03:24:00'),
    },
    {
      id: '2',
      message: "Mensagem de testes 2",
      title: "Teste 2",
      createdAt: new Date('2022-10-17T03:24:00'),
    },
    {
      id: '3',
      message: "Mensagem de testes 3",
      title: "Teste 3",
      createdAt: new Date('2022-12-17T03:24:00'),
    },
    {
      id: '4',
      message: "Mensagem de testes 4",
      title: "Teste 4",
      createdAt: new Date('2022-06-17T03:24:00'),
    },
    {
      id: '5',
      message: "Mensagem de testes 5",
      title: "Teste 5",
      createdAt: new Date('2022-09-17T03:24:00'),
    },
    {
      id: '6',
      message: "Mensagem de testes 6",
      title: "Teste 6",
      createdAt: new Date('2021-09-17T03:24:00'),
    },
    {
      id: '7',
      message: "Mensagem de testes 7",
      title: "Teste 7",
      createdAt: new Date('2022-09-17T03:24:00'),
    }
    
  ],
}));

export default useNotificationsStore;