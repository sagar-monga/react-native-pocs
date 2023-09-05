import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Home from './src/screens/Home';

function App(): Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Home />
    </SafeAreaView>
  );
}

export default App;
