import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {UserType} from '../utils/constants';

interface UserState {
  // Add States
  user: UserType | undefined;

  // Add state modifying functions
  setUser: (user: UserType | undefined) => void;
}

const useUserStore = create<UserState>()(
  devtools(set => ({
    user: undefined,
    // Write state modification logic here
    setUser: (user: UserType | undefined) => set(state => ({user: user})),
  })),
);

export default useUserStore;
