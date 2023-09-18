import {StyleSheet} from 'react-native';
import React from 'react';
import ParentView from './components/ParentView';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const AppEntry = () => {
  const auth = false;
  return <ParentView>{auth ? <HomeScreen /> : <LoginScreen />}</ParentView>;
};

export default AppEntry;

const styles = StyleSheet.create({});
