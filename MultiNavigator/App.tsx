import AppEntry from '@navigation/AppEntry';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AppEntry />
    </NavigationContainer>
  );
}

export default App;
