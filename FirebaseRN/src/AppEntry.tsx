import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import ParentView from './components/ParentView';
import useUserStore from './hooks/useUserStore';
import AuthenticatedStack from './navigation/AuthenticatedStack';
import UnauthenticatedStack from './navigation/UnauthenticatedStack';
import { AppRoutes } from './navigation/Routes';

const AppEntry = () => {
  // Handle user state changes
  function onAuthStateChanged(user: any) {
    if (user !== null) {
      //! Not destructuring as destructuring provides some inner props too.
      // setUser({...user as User, platform: 'Google'} as GoogleUser);
      // if (initializing) setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => {
      subscriber();
    };
  }, []);

  const {user} = useUserStore();

  const BaseStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <ParentView>
        <BaseStack.Navigator screenOptions={{headerShown: false}}>
          {user ? (
            <BaseStack.Screen
              name={AppRoutes.AuthenticatedRoutes}
              component={AuthenticatedStack}
            />
          ) : (
            <BaseStack.Screen
              name={AppRoutes.UnauthenticatedRoutes}
              component={UnauthenticatedStack}
            />
          )}
        </BaseStack.Navigator>
      </ParentView>
    </NavigationContainer>
  );
};

export default AppEntry;

const styles = StyleSheet.create({});
