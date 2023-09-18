import {StyleSheet, Text} from 'react-native';
import React from 'react';
import ParentView from '../../components/ParentView';

const InactiveScreen = () => {
  return (
    <ParentView style={{flex: 1, backgroundColor: 'red'}}>
      <Text>InactiveScreen</Text>
    </ParentView>
  );
};

export default InactiveScreen;

const styles = StyleSheet.create({});
