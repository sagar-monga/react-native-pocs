import {Colors} from '@theme/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CalendarTab = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.black,
      }}>
      <Text>Calendar</Text>
    </View>
  );
};

export default CalendarTab;

const styles = StyleSheet.create({});
