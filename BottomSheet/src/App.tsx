import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootView from './RootView';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <RootView />
    </GestureHandlerRootView>
  );
};

export default App;
