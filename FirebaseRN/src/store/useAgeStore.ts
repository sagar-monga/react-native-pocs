import {StateCreator, create} from 'zustand';

export type AgeState = {
  age: string;
  setAge: (age: string) => void;
};

const initialState: AgeState = {
  age: '0',
  setAge: () => {},
};

const useAgeStore = create<AgeState>(set => ({
  age: initialState.age,

  setAge: (age: string) => {
    set((state: AgeState) => ({
      ...state,
      age: age,
    }));
  },
}));

// For combining multiple slices, use following approach

export const createAgeSlice: StateCreator<
  AgeState,
  [['zustand/devtools', never]],
  []
> = (set, get) => ({
  age: '0',
  setAge: (newAge: string) =>
    set((state: AgeState) => ({
      ...state,
      age: newAge,
    })),
});

export default useAgeStore;
