// store/viewStore.ts
import { create } from 'zustand';

interface ViewState {
  isGridView: boolean;
  setIsGridView: (value: boolean) => void;
  toggleView: () => void;
}

export const useGridViewStore = create<ViewState>((set) => ({
  isGridView: true,
  setIsGridView: (value) => set({ isGridView: value }),
  toggleView: () => set((state) => ({ isGridView: !state.isGridView })),
}));
