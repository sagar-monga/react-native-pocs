import auth from '@react-native-firebase/auth';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import ParentView from './components/ParentView';
import useUserStore from './hooks/useUserStore';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

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

  return (
    <ParentView>
      {user ? <HomeScreen /> : <LoginScreen />}
      {/* <FormInputScreen /> */}
      {/* <NewFormInputScreen /> */}
      {/* <TailwindStyled /> */}
    </ParentView>
  );
};

export default AppEntry;

const styles = StyleSheet.create({});
