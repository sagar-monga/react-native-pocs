import {combineReducers} from '@reduxjs/toolkit';
import cart, { CartState } from './item.reducer';

export const appReducer = combineReducers({
  cart,
});

export type MainState = {
  cart: CartState;
};
