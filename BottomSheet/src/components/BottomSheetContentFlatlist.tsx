import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  BottomSheetFlatList,
  BottomSheetView,
  useBottomSheet,
} from '@gorhom/bottom-sheet';

const BottomSheetContentFlatList = () => {
  // Important hook for accessing bottomsheet in the child of bottom sheet
  const {close, collapse, expand, forceClose, snapToIndex, snapToPosition} =
    useBottomSheet();

  return (
    <BottomSheetFlatList
      ListHeaderComponent={() => {
        return (
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: 'red', paddingVertical: 5}}>
            <Pressable
              onPress={() => expand()}
              style={{
                backgroundColor: 'lightblue',
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 10,
              }}>
              <Text>Expand</Text>
            </Pressable>
            <Pressable onPress={() => collapse()}>
              <Text>Collapse</Text>
            </Pressable>
          </View>
        );
      }}
      // Makes header stick to top
      // Can make multiple items stick too by mentioning indices in array
      stickyHeaderIndices={[0, 7, 20]}
      data={[
        'Demo test',
        'Demo test',
        'Demo test',
        'Demo test',
        'Demo test',
        'Demo test',
        'Demo test - sticky',
        'Demo test',
        'Demo test',
        'Demo test',
        'Demo test',
        'Demo test',
        'Demo test',
        'Demo test',
        'Demo test',
        'Demo test',
        'Demo test',
        'Demo test',
        'Demo test',
        'Demo test - sticks',
        'Demo test',
        'Demo test',
        'Demo test',
        'Demo test',
        'Demo test',
        'Demo test',
        'Demo test',
        'Demo test',
        'Demo test',
        'Demo test',
        'Demo test',
        'Demo test',
        'Demo test',
        'Demo test',
        'Demo test',
        'Demo test',
      ]}
      renderItem={({item, index}) => {
        return (
          <View
            // style={index % 2 === 0 ? styles.evenListItem : styles.oddListItem}
            style={{backgroundColor: index % 2 === 0 ? '#B2FFFF' : '#3AB09E'}}
            >
            <Text>{item}</Text>
          </View>
        );
      }}
    />
  );
};

export default BottomSheetContentFlatList;

const styles = StyleSheet.create({
    oddListItem: {
        backgroundColor: '#B2FFFF'
    },
    evenListItem: {
        backgroundColor: '#3AB09E',
    }
});
