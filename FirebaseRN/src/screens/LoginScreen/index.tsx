import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ParentView from '../../components/ParentView';
import {FontSize, StyleConfig} from '../../utils/constants';
import Spacer from '../../components/Spacer';
import utils from '../../utils/utils';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const googleSignIn = async () => {
      try {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
        console.log(`Checked for play services`);
        // Get the users ID token
        const {idToken} = await GoogleSignin.signIn();
        console.log(`Sign in complete`);
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        console.log(`Credential generated`);
        // Sign-in the user with the credential
        const obj = await auth().signInWithCredential(googleCredential);
        console.log(`Signed in: ${JSON.stringify(obj)}`);
    } catch(e:unknown) {
        console.log(`Error is: ${JSON.stringify(e)}`);
    }


  };
  return (
    <ParentView style={styles.container}>
      <Text style={styles.title}>Welcome to RN_Firebase</Text>
      <Spacer height={30} />
      <Text style={styles.description}>
        Login using any of the mentioned ways
      </Text>
      <Spacer height={20} />
      <Pressable
        style={styles.googleLoginButton}
        onPress={() => googleSignIn()}>
        <Text style={styles.googleLoginText}>Login With Google</Text>
      </Pressable>
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
  googleLoginButton: {
    backgroundColor: StyleConfig.colors.googleBlue,
    paddingVertical: utils.pixelGap(15),
    paddingHorizontal: utils.pixelGap(20),
  },
  googleLoginText: {
    fontSize: FontSize.small,
  },
});
