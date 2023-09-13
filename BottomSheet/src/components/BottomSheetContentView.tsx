import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BottomSheetView, useBottomSheet} from '@gorhom/bottom-sheet';

const BottomSheetContentView = () => {
  // Important hook for accessing bottomsheet in the child of bottom sheet
  const {close, collapse, expand, forceClose, snapToIndex, snapToPosition} =
    useBottomSheet();

  // Doesnt render all text also is not scrollable
  return (
    <BottomSheetView>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Pressable onPress={() => expand()}>
          <Text>Expand</Text>
        </Pressable>
        <Pressable onPress={() => collapse()}>
          <Text>Collapse</Text>
        </Pressable>
      </View>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
      <Text>Demo Text </Text>
    </BottomSheetView>
    // <View style={{flex: 1, justifyContent: 'space-evenly'}}>

    // </View>
  );
};

export default BottomSheetContentView;

const styles = StyleSheet.create({});
