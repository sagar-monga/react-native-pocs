import {create} from 'zustand';
import {AgeState, createAgeSlice} from './useAgeStore';
import {NameState, createNameSlice} from './useNameStore';

// export const useStore = create((set: any, get: any) => ({
//   ...createNameSlice(set, get),
//   ...createAgeSlice(set, get),
// }));

export type MainState = NameState & AgeState;

export const useStore = create<MainState>((...a) => ({
  ...createNameSlice(...a),
  ...createAgeSlice(...a),
}));
