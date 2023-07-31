import {createSlice} from '@reduxjs/toolkit';
import { Item } from '../../models/interfaces';

export interface CartState {
  item: Item[];
  accessTime: string;
}
const initialState: CartState = {
  item: [],
  accessTime: '',
};

const itemSlice = createSlice({
  name: 'item',
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      state.item.push(action.payload);
    },
    deleteItemById(state, action) {
      state.item = state.item.filter(item => item.id !== action.payload);
    },
    updateAccessDate(state, action) {
      state.accessTime = action.payload;
    },
  },
});

export const {addItem, deleteItemById, updateAccessDate} = itemSlice.actions;

export default itemSlice.reducer;
