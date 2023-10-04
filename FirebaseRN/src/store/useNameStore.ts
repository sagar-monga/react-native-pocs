import {StateCreator, create} from 'zustand';

type NameValues = {
  name: string;
};

type NameMutators = {
  setName: (name: string) => void;
};

// export type NameState = {
//   name: string;
//   setName: (name: string) => void;
// };

export type NameState = NameValues & NameMutators;

// const initialState: Omit<NameState, 'setName'> = {
//   name: '',
// };

const initialState: NameValues = {
  name: '',
};

const useNameStore = create<NameState>(set => ({
  name: initialState.name,

  setName: (name: string) => {
    set((state: NameState) => ({
      ...state,
      name: name,
    }));
  },
}));

// For combining multiple slices, use following approach

export const createNameSlice: StateCreator<
  NameState,
  [['zustand/devtools', never]],
  []
> = (set, get) => ({
  name: '',
  setName: (newName: string) =>
    set((state: NameState) => ({
      ...state,
      name: newName,
    })),
});

export default useNameStore;
