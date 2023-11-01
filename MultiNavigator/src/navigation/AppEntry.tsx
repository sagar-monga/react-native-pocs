import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '@theme/colors';

const AppEntry = () => {
  return (
    <View style={styles.baseContainer}>
      <Text>Hello</Text>
    </View>
  );
};

export default AppEntry;

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.darkGrey,
  },
});
