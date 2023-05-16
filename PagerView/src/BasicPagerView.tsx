import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PagerView from 'react-native-pager-view';

const BasicPagerView = () => {
  return (
    <PagerView style={{flex: 1}} >
        <View style={{backgroundColor: 'red', flex: 1}}><Text>1</Text></View>
        <View style={{backgroundColor: 'blue', flex: 1}}><Text>2</Text></View>
        <View style={{backgroundColor: 'green', flex: 1}}><Text>3</Text></View>
    </PagerView>
  );
};

export default BasicPagerView;

const styles = StyleSheet.create({});
