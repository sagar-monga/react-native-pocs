import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import BasicPagerView from './BasicPagerView';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text>Pager View</Text>
      </View>
      <BasicPagerView />
    </SafeAreaView>
  );
};

export default App;
