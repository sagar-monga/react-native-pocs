import {SafeAreaView} from 'react-native';
import React from 'react';
import AppEntry from './src/AppEntry';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppEntry />
    </SafeAreaView>
  );
};

export default App;
