import React from 'react';
import {Text, View} from 'react-native';
import Card from './Card';
import ErrorBoundary from './ErrorBoundary';

function App(): JSX.Element {
  return (
    <ErrorBoundary fallback={'Error'}>
      <View>
        <Card hasError />
        <Card />
        <Card />
      </View>
    </ErrorBoundary>
  );
}

export default App;
