import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

function App(): Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'blue'}}>
      <StatusBar />
    </SafeAreaView>
  );
}

export default App;
