import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ParentView from '../../components/ParentView';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import {FontSize} from '../../utils/constants';
import utils from '../../utils/utils';
import Spacer from '../../components/Spacer';
import useStateStore from './store/useStore';
import List from './components/List';
import { useFormLogic } from '../../hooks/useFormLogic';

const NewFormInputScreen = () => {
  const {
    name,
    email,
    age,
    itemName,
    quantity,
    setName,
    setAge,
    setEmail,
    onPressAddButton,
    onPressClearAll,
    setItemName,
    setQuantity,
  } = useFormLogic();

  return (
    <ParentView style={styles.parentContainer}>
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
        }}>
        <Pressable
          style={{
            alignSelf: 'flex-start',
            backgroundColor: 'orange',
            padding: 10,
            borderRadius: 50,
          }}
          onPress={onPressAddButton}>
          <Text>Add</Text>
        </Pressable>
        <Pressable
          style={{
            alignSelf: 'flex-start',
            backgroundColor: 'orange',
            padding: 10,
            borderRadius: 50,
          }}
          onPress={onPressClearAll}>
          <Text>Clear</Text>
        </Pressable>
      </View>
      <Spacer height={20} />
      <View style={{flexDirection: 'row'}}>
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
    </ParentView>
  );
};

export default NewFormInputScreen;

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
