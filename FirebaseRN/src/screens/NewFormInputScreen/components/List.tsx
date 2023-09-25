import {
  FlatList,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import useStateStore from '../store/useStore';
import {ItemType} from '../store/quantitySlice';

const List = () => {
  const items = useStateStore(state => state.items);
  return (
    <FlatList
      style={{width: '100%'}}
      data={items}
      renderItem={({item, index}) => {
        return <ListItem index={index} item={item} />;
      }}
    />
  );
};

type ListItemProps = {
  item: ItemType;
  index: number;
};
const ListItem = ({item, index}: ListItemProps) => {
  return (
    <Pressable
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        backgroundColor: 'red',
        marginVertical: 5,
      }}
      onPress={() => console.log(`BUTTON PRESS ${index}`)}>
      <View style={{flex: 1}}>
        <Text>{`${index + 1}: ${item.name}`}</Text>
      </View>
      <View style={{flex: 1}}>
        <Text>{item.quantity}</Text>
      </View>
    </Pressable>
  );
};

export default List;

const styles = StyleSheet.create({});
