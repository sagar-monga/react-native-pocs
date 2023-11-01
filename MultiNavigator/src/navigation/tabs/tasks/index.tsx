import {Colors} from '@theme/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Tasks = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.darkGrey,
      }}>
      <Text>Tasks</Text>
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({});
