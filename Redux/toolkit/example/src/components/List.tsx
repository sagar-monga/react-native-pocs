import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useRedux from '../hooks/useRedux';
import EmptyComponent from './EmptyComponent';

const List = () => {
  const {item: cartItems} = useRedux(s => s.cart);
  console.log(JSON.stringify(cartItems));
  return (
    <FlatList data={cartItems} renderItem={({ item }) => <View><Text>{item.name}</Text></View>} ListEmptyComponent={EmptyComponent} />
  )
}

export default List;

const styles = StyleSheet.create({})