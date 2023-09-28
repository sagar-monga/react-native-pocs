import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import ParentView from './components/ParentView';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import auth from '@react-native-firebase/auth';
import useUserStore from './hooks/useUserStore';
import {GoogleUser, UserType} from './utils/constants';
import FormInputScreen from './screens/FormInputScreen';
import NewFormInputScreen from './screens/NewFormInputScreen';
import TailwindStyled from './screens/TailwindStyled';
import {User} from '@react-native-google-signin/google-signin';

const AppEntry = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const {setUser} = useUserStore();

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    if (user !== null) {
      console.log(
        `Auth state changed! User is: ${JSON.stringify(user as GoogleUser)}`);
      // Not destructuring as destructuring provides some inner props too.
      // setUser({...user as User, platform: 'Google'} as GoogleUser);
      const newUser: GoogleUser = user;
      newUser.platform = 'Google';
      setUser(newUser);
      if (initializing) setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => {
      console.log(`UNMOUNTING listener`);
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
