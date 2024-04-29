import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {env} from './config/env';

const Main = () => {
  return (
    <View style={styles.parent}>
      <Text>{`Environment: ${env.environment}`}</Text>
      <Text>{`Base URL: ${env.baseUrl}`}</Text>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  parent: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
