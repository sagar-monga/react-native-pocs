import {Colors} from '@theme/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Activity = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.darkGrey,
      }}>
      <Text>Activity</Text>
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({});
