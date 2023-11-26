import React from 'react';
import {Image, StatusBar, StyleSheet} from 'react-native';
import ParentView from '../../components/ParentView';

/**
 * Works great on all gesture based navigation systems, shows black bar on top & bottom in recents menu.
 * Fixed it on top using StatusBar
 * @returns
 */
const InactiveScreen = () => {
  return (
    <>
      <StatusBar translucent backgroundColor={'transparent'} />
      <ParentView
        style={{
          flex: 1,
          backgroundColor: '#f3f3f3',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('../../assets/logo.jpg')} />
      </ParentView>
    </>
  );
};

export default InactiveScreen;

const styles = StyleSheet.create({});
