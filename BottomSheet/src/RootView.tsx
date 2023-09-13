import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import ButtonWithBottomSheet from './components/ButtonWithBottomSheet';

const RootView = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={{marginHorizontal: 10}}>
        <Text style={styles.heading}>This is bottom sheet POC</Text>
        <Text style={styles.subHeading}>Press the button below to show the bottom sheet.</Text>
        <Text>
          Click Expand and Collapse or drag the handle up and down for changing
          between different snap points of the bottom sheet.
        </Text>
      </View>
      <ButtonWithBottomSheet />
    </View>
  );
};

export default RootView;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'cyan',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 20,
    fontWeight: '500',
  },
});
