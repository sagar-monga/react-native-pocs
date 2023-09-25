import {StateCreator} from 'zustand';

export type ItemType = {
  name: string;
  quantity: number;
};

export type Item = {
  items: ItemType[];
  addItem: (item: ItemType) => void;
  clearAllItems: () => void;
};

const createItemSlice: StateCreator<Item, [['zustand/devtools', never]], []> = (
  set,
  get,
) => ({
  items: [],

  addItem: (item: ItemType) => {
    set((state: Item) => ({
      items: [...state.items, item],
    }));
  },
  clearAllItems: () => {
    set(() => ({
      items: [],
    }));
  },
});

export default createItemSlice;
