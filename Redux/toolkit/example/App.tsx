import React from 'react';
import store from './src/store';
import { Provider } from 'react-redux';
import AppEntry from './src/AppEntry';

const App = () => {
  return (
    <Provider store={store}>
      <AppEntry />
    </Provider>
  );
}


export default App;
