import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import ParentView from './components/ParentView';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import auth from '@react-native-firebase/auth';
import useUserStore from './hooks/useUserStore';
import { UserType } from './utils/constants';
import FormInputScreen from './screens/FormInputScreen';
import NewFormInputScreen from './screens/NewFormInputScreen';

const AppEntry = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState<unknown>();
  const {user, setUser} = useUserStore();

  // Handle user state changes
  // function onAuthStateChanged(user: any) {
  //   console.log(`Auth state changed!`);
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return () => {
  //     console.log(`UNMOUNTING listener`);
  //     subscriber();
  //   }; // unsubscribe on unmount
  // }, []);
  return <ParentView>
    {/* {user ? <HomeScreen /> : <LoginScreen />} */}
    {/* <FormInputScreen /> */}
    <NewFormInputScreen />
    </ParentView>;
};

export default AppEntry;

const styles = StyleSheet.create({});
