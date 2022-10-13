import create from 'zustand';

type State = {
  isSideBarOpen: boolean;
  currentPage: string;
  toggleSideBar: () => void;
  setCurrentPage: (page: string) => void;
  closeSideBar: () => void;
}

const useSideBarStore = create<State>((set) => ({
  isSideBarOpen: false,

  toggleSideBar: () => set((state) => ({ isSideBarOpen: !state.isSideBarOpen })),

  currentPage: '',

  setCurrentPage: (page: string) => set(() => ({ currentPage: page })),

  closeSideBar: () => set(() => ({ isSideBarOpen: false })),
}));

export default useSideBarStore;