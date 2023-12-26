import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import UserForm from './src/screens/UserForm';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <UserForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

export default App;
