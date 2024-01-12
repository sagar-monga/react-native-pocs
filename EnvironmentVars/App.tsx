import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return <View style={styles.root}>
    <Text>This is a new project</Text>
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
