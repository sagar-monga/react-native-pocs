import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ParentView from '../../components/ParentView';
import useUserStore from '../../hooks/useUserStore';

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
      <Text style={styles.textStyle}>{`Hello, ${user?.displayName}`}</Text>
      <View style={{
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: 'midnightblue',
        padding: 15, borderRadius: 50
      }}>
        <Text>{user?.platform}</Text>
      </View>
    </ParentView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
  },
});
