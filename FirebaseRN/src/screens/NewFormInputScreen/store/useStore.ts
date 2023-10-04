import {create} from 'zustand';
import createItemSlice, {Item} from './quantitySlice';
import createUserSlice, {UserSlice} from './userSlice';

export type RootState = UserSlice & Item;
// export type RootState = {
//   user: UserSlice;
// };

const useStateStore = create<RootState>((...a) => ({
  ...createUserSlice(...a),
  ...createItemSlice(...a),
}));

export default useStateStore;
