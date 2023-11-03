import {Colors} from '@theme/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TasksTab = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.black,
      }}>
      <Text>Tasks</Text>
    </View>
  );
};

export default TasksTab;

const styles = StyleSheet.create({});
