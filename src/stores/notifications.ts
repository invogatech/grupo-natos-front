import create from 'zustand';

type NotificationType = {
  id: string;
  message: string;
}

type State = {
  notifications: NotificationType[];

}

const useNotificationsStore = create<State>((set) => ({
  notifications: [
    {
      id: '1',
      message: ""
    }
  ],
}));

export default useNotificationsStore;