import {Colors} from '@theme/colors';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const Seperator = () => {
  return <View style={styles.seperator} />;
};

export default Seperator;

const styles = StyleSheet.create({
  seperator: {
    height: 0,
    borderBottomColor: Colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
