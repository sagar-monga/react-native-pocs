import {View} from 'react-native';
import React from 'react';
import AppEntry from './src/AppEntry';
import InactiveScreen from './src/screens/InactiveScreen';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import useAppStateChange from './src/hooks/useAppStateChange';

const App = () => {
  GoogleSignin.configure({
    webClientId:
      '771672005871-lb7c3cud3l38i95q6cni8ksh2irau6ft.apps.googleusercontent.com',
    offlineAccess: false,
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
