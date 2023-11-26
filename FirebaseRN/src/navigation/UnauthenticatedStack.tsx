import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import {UnauthenticatedRoutes} from './Routes';
import {ScreenOptions} from './config';

const UnauthenticatedStack = () => {
  const UnauthStack = createNativeStackNavigator();

  return (
    <UnauthStack.Navigator screenOptions={ScreenOptions}>
      <UnauthStack.Screen
        name={UnauthenticatedRoutes.Login}
        component={LoginScreen}
      />
    </UnauthStack.Navigator>
  );
};

export default UnauthenticatedStack;

const styles = StyleSheet.create({});
