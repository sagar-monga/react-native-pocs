import {StateCreator} from 'zustand';

export type ItemType = {
  name: string;
  quantity: number;
};

export type Item = {
  items: ItemType[];
  addItem: (item: ItemType) => void;
  updateItem: (item: ItemType, index: number) => void;
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

  updateItem: (item, index) => {
    set(state => {
      const selectedItem = state.items[index];
      selectedItem.name = item.name;
      selectedItem.quantity = item.quantity;

      return state;
    });
  },
});

export default createItemSlice;
