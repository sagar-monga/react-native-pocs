import {create} from 'zustand';
import createUserSlice, {UserSlice} from './userSlice';
import createItemSlice, { Item } from './quantitySlice';

export type RootState = UserSlice & Item;
// export type RootState = {
//   user: UserSlice;
// };

const useStateStore = create<RootState>((...a) => ({
  ...createUserSlice(...a),
  ...createItemSlice(...a)
}));

export default useStateStore;
