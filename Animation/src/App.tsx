import {SafeAreaView} from 'react-native';
import PageCurl from './PageCurl';
import React from 'react';
import Flip from './FlipPage/Flip';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PageCurl />
      {/* <PageFlip /> */}
      {/* <Flip/> */}
    </SafeAreaView>
  );
};

export default App;
