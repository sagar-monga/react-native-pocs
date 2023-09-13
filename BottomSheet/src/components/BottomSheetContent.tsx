import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useBottomSheet} from '@gorhom/bottom-sheet';

const BottomSheetContent = () => {
    // Important hook for accessing bottomsheet in the child of bottom sheet
  const {close, collapse, expand, forceClose, snapToIndex, snapToPosition} =
    useBottomSheet();

  return (
    <View style={{flex: 1, justifyContent: 'space-evenly', flexDirection: 'row'}}>
      <Pressable onPress={() => expand()}>
        <Text>Expand</Text>
      </Pressable>
      <Pressable onPress={() => collapse()}>
        <Text>Collapse</Text>
      </Pressable>
    </View>
  );
};

export default BottomSheetContent;

const styles = StyleSheet.create({});
