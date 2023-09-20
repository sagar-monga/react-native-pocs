import {StyleSheet, Text} from 'react-native';
import React from 'react';
import ParentView from '../../components/ParentView';
import useUserStore from '../../hooks/useUserStore';
import {User} from '@react-native-google-signin/google-signin';
import {UserType} from '../../utils/constants';

const HomeScreen = () => {
  const {user} = useUserStore();

  return (
    <ParentView
      style={{
        flex: 1,
        backgroundColor: '#301934',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={styles.textStyle}>{JSON.stringify(user, null, 4)}</Text>
    </ParentView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
  },
});
