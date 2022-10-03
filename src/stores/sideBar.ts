import create from 'zustand';

type State = {
  isSideBarOpen: boolean;
  currentPage: string;
  toggleSideBar: () => void;
  setCurrentPage: (page: string) => void;
}

const useSideBarStore = create<State>((set) => ({
  isSideBarOpen: false,

  toggleSideBar: () => set((state) => ({ isSideBarOpen: !state.isSideBarOpen })),

  currentPage: '',

  setCurrentPage: (page: string) => set(() => ({ currentPage: page })),
}));

export default useSideBarStore;