import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import ParentView from '../../components/ParentView';
import Spacer from '../../components/Spacer';
import {AuthenticatedRoutes} from '../../navigation/Routes';
import {FontSize} from '../../utils/constants';
import utils from '../../utils/utils';
import useHome from './useHome';

const HomeScreen = () => {
  const {getName, user, logout} = useHome();
  const navigation = useNavigation();

  const navigateToFormScreen = () => {
    navigation.navigate(AuthenticatedRoutes.FormInput);
  };
  const navigateToNewFormScreen = () => {
    navigation.navigate(AuthenticatedRoutes.NewFormInput);
  };
  const navigateToTailwindStyledFormScreen = () => {
    navigation.navigate(AuthenticatedRoutes.TailwindStyles);
  };

  return (
    <ParentView style={styles.parent}>
      <View style={styles.header}>
        <Text style={styles.textStyle}>{user?.platform}</Text>
        <Text style={styles.textStyle}>{getName()}</Text>
        <Pressable style={styles.logout} onPress={logout}>
          <Text style={styles.textStyle}>Logout</Text>
        </Pressable>
      </View>
      <View style={styles.body}>
        <Pressable
          style={[styles.button, {backgroundColor: 'firebrick'}]}
          onPress={navigateToFormScreen}>
          <Text style={styles.buttonText}>Form Input Screen</Text>
        </Pressable>
        <Spacer height={30} />
        <Pressable
          style={[styles.button, {backgroundColor: 'darkblue'}]}
          onPress={navigateToNewFormScreen}>
          <Text style={styles.buttonText}>New Form Input Screen</Text>
        </Pressable>
        <Spacer height={30} />
        <Pressable
          style={[styles.button, {backgroundColor: 'rgb(153,27,27)'}]}
          onPress={navigateToTailwindStyledFormScreen}>
          <Text style={styles.buttonText}>
            Tailwind styled form Input Screen
          </Text>
        </Pressable>
      </View>
    </ParentView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#301934',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    top: 0,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textStyle: {
    color: 'white',
    fontSize: FontSize.small,
  },
  logout: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 50,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    paddingVertical: utils.pixelGap(15),
    paddingHorizontal: utils.pixelGap(20),
    fontSize: FontSize.small,
  },
});
