import {Colors} from '@theme/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Calendar = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.darkGrey,
      }}>
      <Text>Calendar</Text>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({});
