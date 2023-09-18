import {SafeAreaView} from 'react-native';
import React from 'react';
import AppEntry from './src/AppEntry';
import {useAppStateChange} from './src/hooks/useAppStateChange';
import InactiveScreen from './src/screens/InactiveScreen';

const App = () => {
  const {isFocused} = useAppStateChange();
  return (
    <SafeAreaView style={{flex: 1}}>
      {isFocused ? <AppEntry /> : <InactiveScreen />}
    </SafeAreaView>
  );
};

export default App;
