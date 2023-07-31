import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ height: '100%', width: '100%' }}>
      <StatusBar />
      <View style={{ backgroundColor: 'lightblue', flex: 1 }}>
      </View>
    </SafeAreaView>
  );
}


export default App;
