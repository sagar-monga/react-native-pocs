import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Curl } from './Curl';

const PageCurl = () => {
  return (
    <Curl project={{id:'1', title:'ABC', picture: require('../assets/oslo.jpg'), color: 'blue'}} />
  );
};

export default PageCurl;

const styles = StyleSheet.create({});
