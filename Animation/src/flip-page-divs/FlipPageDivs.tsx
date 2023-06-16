import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlipPage from 'react-native-flip-page-divs';

const FlipPageDivs = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'aqua'}}>
      <FlipPage>
        {[1,2,3].map((e, index) => <View style={{}}></View>)}
      </FlipPage>
    </View>
  );
};

export default FlipPageDivs;
