import {StateCreator} from 'zustand';

export type UserType = {
  name: string;
  age: number;
  email: string;
};

export type UserSlice = UserType & {
  setName: (name: string) => void;
  setAge: (age: string) => void;
  setEmail: (email: string) => void;
};

const createUserSlice: StateCreator<
  UserSlice,
  [['zustand/devtools', never]],
  []
> = (set, get) => ({
  name: '',
  age: 0,
  email: '',

  setName: (name: string) => {
    set((state: UserType) => ({
      ...state,
      name: name,
    }));
  },
  setAge: (age: string) => {
    set((state: UserType) => ({
      ...state,
      age: parseInt(age),
    }));
  },
  setEmail: (email: string) => {
    set((state: UserType) => ({
      ...state,
      email: email,
    }));
  },
});

export default createUserSlice;
