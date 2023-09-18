import {SafeAreaView} from 'react-native';
import React from 'react';
import AppEntry from './src/AppEntry';
import {useAppStateChange} from './src/hooks/useAppStateChange';
import InactiveScreen from './src/screens/InactiveScreen';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const App = () => {
  GoogleSignin.configure({
    webClientId:
      '458716631788-5l39ncfn1m6hol1v3rmeqs2bg5po95ao.apps.googleusercontent.com',
  });

  // const {isFocused} = useAppStateChange();
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* {isFocused ? <AppEntry /> : <InactiveScreen />} */}
      <AppEntry />
    </SafeAreaView>
  );
};

export default App;
