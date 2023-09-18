import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ParentView from '../../components/ParentView';
import {FontSize, StyleConfig} from '../../utils/constants';
import Spacer from '../../components/Spacer';
import utils from '../../utils/utils';

const LoginScreen = () => {
  return (
    <ParentView style={styles.container}>
      <Text style={styles.title}>Welcome to RN_Firebase</Text>
      <Spacer height={30} />
      <Text style={styles.description}>
        Login using any of the mentioned ways
      </Text>
      <Spacer height={20} />
      <Pressable style={styles.googleLoginButton}>
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
