import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import ParentView from '../../components/ParentView';
import Spacer from '../../components/Spacer';
import useLogin from '../../hooks/auth/useLogin';
import useFirestore from '../../hooks/firebase/useFirestore';
import {FontSize, StyleConfig} from '../../utils/constants';
import utils from '../../utils/utils';

const LoginScreen = () => {
  const {dummyLogin, googleSignIn} = useLogin();
  const {users} = useFirestore();

  return (
    <ParentView style={styles.container}>
      <Text style={styles.title}>Welcome to RN_Firebase</Text>
      <Spacer height={30} />
      <Text style={styles.description}>
        Login using any of the mentioned ways
      </Text>
      <Spacer height={20} />
      <View>
        <Pressable
          style={[styles.loginButton, styles.googleSignInButton]}
          onPress={googleSignIn}>
          <Text style={styles.googleLoginText}>Login With Google</Text>
        </Pressable>
        <Spacer height={10} />
        <Pressable
          style={[styles.loginButton, {backgroundColor: 'orange'}]}
          onPress={dummyLogin}>
          <Text style={styles.googleLoginText}>Login Dummy</Text>
        </Pressable>
      </View>
    </ParentView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  title: {
    fontSize: utils.pixelFont(FontSize.xl),
  },
  description: {
    fontSize: FontSize.small,
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleSignInButton: {
    backgroundColor: StyleConfig.colors.googleBlue,
  },
  googleLoginText: {
    paddingVertical: utils.pixelGap(15),
    paddingHorizontal: utils.pixelGap(20),
    fontSize: FontSize.small,
  },
});
