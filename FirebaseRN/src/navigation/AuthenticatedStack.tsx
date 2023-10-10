import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import FormInputScreen from '../screens/FormInputScreen';
import HomeScreen from '../screens/HomeScreen';
import NewFormInputScreen from '../screens/NewFormInputScreen';
import TailwindStyled from '../screens/TailwindStyled';
import {AuthenticatedRoutes} from './Routes';
import {ScreenOptions} from './config';

const AuthenticatedStack = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={ScreenOptions}>
      <AuthStack.Screen
        name={AuthenticatedRoutes.Home}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={AuthenticatedRoutes.FormInput}
        component={FormInputScreen}
      />
      <AuthStack.Screen
        name={AuthenticatedRoutes.NewFormInput}
        component={NewFormInputScreen}
      />
      <AuthStack.Screen
        name={AuthenticatedRoutes.TailwindStyles}
        component={TailwindStyled}
      />
    </AuthStack.Navigator>
  );
};

export default AuthenticatedStack;

const styles = StyleSheet.create({});
