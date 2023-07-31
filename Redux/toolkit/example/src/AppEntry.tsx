import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from './store/reducers/item.reducer';
import List from './components/List';

const AppEntry = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{ height: '100%', width: '100%' }}>
      {/* <StatusBar /> */}
      <View style={{ backgroundColor: 'lightblue', flex: 1 }}>
        <Pressable style={{ backgroundColor: 'blue' }} onPress={() => {
          console.log(`Button Press`);
          dispatch(addItem({ id: 1, name: 'Ball' }));
        }}><Text>Button</Text>
        </Pressable>
        <List />
      </View>
    </SafeAreaView>

  )
}

export default AppEntry

const styles = StyleSheet.create({})