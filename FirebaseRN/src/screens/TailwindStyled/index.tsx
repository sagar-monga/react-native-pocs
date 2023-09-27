import {View, Text, Pressable, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import useStateStore from '../NewFormInputScreen/store/useStore';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import Spacer from '../../components/Spacer';
import List from '../NewFormInputScreen/components/List';
import utils from '../../utils/utils';
import {FontSize} from '../../utils/constants';

const TailwindStyled = () => {
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
  return (
    <View className="flex-1 items-center justify-center bg-red-800">
      <TextInputWithLabel
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Spacer height={20} />
      <TextInputWithLabel
        label="Age"
        placeholder="Enter your age"
        value={age.toString() ?? '0'}
        keyboardType="numeric"
        onChangeText={text => {
          setAge(Number.isNaN(parseInt(text)) ? '0' : text);
        }}
      />
      <Spacer height={20} />
      <TextInputWithLabel
        label="Email"
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
      />
      <Spacer height={20} />
      <View className="flex-row justify-evenly w-full">
        <Pressable
          className="self-start bg-orange-500 rounded-full p-3"
          onPress={onPressAddButton}>
          <Text>Add</Text>
        </Pressable>
        <Pressable
          className="self-start bg-orange-500 rounded-full p-3"
          onPress={onPressClearAll}>
          <Text>Clear</Text>
        </Pressable>
      </View>
      <Spacer height={20} />
      <View className="flex-row">
        <TextInputWithLabel
          label="Name"
          placeholder="Enter item name"
          value={itemName}
          onChangeText={setItemName}
          containerStyle={{flex: 1}}
        />
        <TextInputWithLabel
          label="Qty"
          placeholder="Enter quantity"
          value={quantity.toString() ?? 0}
          keyboardType="numeric"
          onChangeText={text => {
            // Replace non numeric character with spaces
            const value = parseInt(text.replace(/[^0-9]/g, ''));
            setQuantity(Number.isNaN(value) ? 0 : value);
          }}
          containerStyle={{flex: 1}}
        />
      </View>
      <Spacer height={20} />
      <List />
      <Spacer height={20} />
      <Pressable
        style={[styles.button, {backgroundColor: 'orange'}]}
        onPress={() => {
          console.log(`Name: ${name} Age: ${age}`);
        }}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
};

export default TailwindStyled;

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: 'darkblue',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    borderRadius: 10,
  },
  buttonText: {
    paddingVertical: utils.pixelGap(15),
    paddingHorizontal: utils.pixelGap(20),
    fontSize: FontSize.small,
  },
});
