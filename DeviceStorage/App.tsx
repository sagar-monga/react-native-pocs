import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import UserForm from './src/screens/UserForm';
import DisplayArea from './src/screens/DisplayArea';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <UserForm />
      <DisplayArea />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

export default App;
