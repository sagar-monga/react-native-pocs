import {SafeAreaView, View} from 'react-native';
import React, {useEffect} from 'react';
import AppEntry from './src/AppEntry';
import {useAppStateChange} from './src/hooks/useAppStateChange';
import InactiveScreen from './src/screens/InactiveScreen';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const App = () => {
  GoogleSignin.configure({
    webClientId:
      '458716631788-5l39ncfn1m6hol1v3rmeqs2bg5po95ao.apps.googleusercontent.com',
  });

  const {isFocused} = useAppStateChange();
  return (
    <View style={{flex: 1}}>
      {isFocused ? <AppEntry /> : <InactiveScreen />}
      {/* <AppEntry /> */}
      {/* <InactiveScreen/> */}
    </View>
  );
};

export default App;
