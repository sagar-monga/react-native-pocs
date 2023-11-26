import React, {useState} from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import TextInputWithLabel from '../../../components/TextInputWithLabel';
import {ItemType} from '../store/quantitySlice';
import useStateStore from '../store/useStore';

const List = () => {
  const items = useStateStore(state => state.items);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <FlatList
      style={{width: '100%'}}
      data={items}
      renderItem={({item, index}) => {
        return (
          <ListItem
            index={index}
            item={item}
            selectedItem={selectedIndex}
            onPress={setSelectedIndex}
          />
        );
      }}
    />
  );
};

type ListItemProps = {
  item: ItemType;
  index: number;
  selectedItem: number | null;
  onPress: (index: number | null) => void;
};
const ListItem = ({item, index, selectedItem, onPress}: ListItemProps) => {
  if (selectedItem === index) {
    const [name, setName] = useState(item.name);
    const [quantity, setQuantity] = useState(item.quantity);
    const update = useStateStore(state => state.updateItem);

    const updateItem = (index: number) => {
      const newItem: ItemType = {
        name: name,
        quantity: quantity,
      };
      console.log(
        `Setting item at index ${index} to ${JSON.stringify(newItem)}`,
      );
      update(newItem, index);
      onPress(null);
    };

    return (
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-evenly',
          marginVertical: 5,
        }}>
        <View style={{width: '40%', alignItems: 'center'}}>
          <TextInputWithLabel
            labelStyle={{width: '0%'}}
            label={''}
            value={name}
            seperator=""
            onChangeText={text => setName(text)}
          />
        </View>
        <View style={{width: '40%', alignItems: 'center'}}>
          <TextInputWithLabel
            labelStyle={{width: '0%'}}
            label={''}
            value={quantity.toString()}
            seperator=""
            onChangeText={text =>
              setQuantity(Number.isNaN(parseInt(text)) ? 0 : parseInt(text))
            }
          />
        </View>
        <Pressable
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '15%',
          }}
          onPress={() => updateItem(index)}>
          <Text>Update</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <Pressable
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        marginVertical: 5,
      }}
      onPress={() => {
        console.log(`BUTTON PRESS ${index}`);
        onPress(index);
      }}>
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
