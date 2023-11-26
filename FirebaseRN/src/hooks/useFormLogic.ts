import {useState} from 'react';
import useStateStore from '../screens/NewFormInputScreen/store/useStore';

export const useFormLogic = () => {
  const {name, email, age, setName, setAge, setEmail, addItem, clearAllItems} =
    useStateStore();

  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(0);

  const onPressAddButton = () => {
    if (itemName === '' || quantity === 0) return;
    addItem({
      name: itemName,
      quantity: quantity,
    });

    setItemName('');
    setQuantity(0);
  };

  const onPressClearAll = () => {
    clearAllItems();
  };

  return {
    name,
    email,
    age,
    itemName,
    quantity,
    setName,
    setAge,
    setEmail,
    addItem,
    clearAllItems,
    onPressAddButton,
    onPressClearAll,
    setItemName,
    setQuantity,
  };
};
