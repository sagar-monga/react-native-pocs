import {Colors} from '@theme/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ActivityTab = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.black,
      }}>
      <Text>Activity</Text>
    </View>
  );
};

export default ActivityTab;

const styles = StyleSheet.create({});
