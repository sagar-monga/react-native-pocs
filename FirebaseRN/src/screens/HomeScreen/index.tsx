import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ParentView from '../../components/ParentView';
import useHome from './useHome';
import {FontSize} from '../../utils/constants';
import TailwindStyled from '../TailwindStyled';

const HomeScreen = () => {
  const {getName, user, logout} = useHome();

  return (
    <ParentView style={styles.parent}>
      <View style={styles.header}>
        <Text style={styles.textStyle}>{user?.platform}</Text>
        <Text style={styles.textStyle}>{getName()}</Text>
        <Pressable style={styles.logout} onPress={logout}>
          <Text style={styles.textStyle}>Logout</Text>
        </Pressable>
      </View>
      {
        <View>
          <TailwindStyled />
        </View>
      }
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
    position: 'absolute',
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
});
