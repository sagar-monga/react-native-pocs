import {StyleSheet, Text} from 'react-native';
import React from 'react';
import ParentView from '../../components/ParentView';

const HomeScreen = () => {
  return (
    <ParentView style={{flex: 1, backgroundColor: 'green'}}>
      <Text>HomeScreen</Text>
    </ParentView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
