import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Env} from './env';

const App = () => {
  return <View style={styles.root}>
    <Text>{`Running on ${Env.PUBLIC_ENVIRONMENT} environment`}</Text>
  </View>;
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
