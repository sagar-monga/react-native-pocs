import {Colors} from '@theme/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <View style={styles.baseContainerStyle}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  baseContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.darkGrey,
  },
});

export default App;
