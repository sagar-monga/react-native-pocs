import {AppState, StyleSheet} from 'react-native';
import React, {isValidElement, useEffect, useRef, useState} from 'react';
import ParentView from './components/ParentView';
import HomeScreen from './screens/HomeScreen';
import InactiveScreen from './screens/InactiveScreen';

export const useAppStateChange = (
  onAppBackgrounded = () => {},
  onAppForegrounded = () => {},
  onAppBlur = () => {},
  onAppFocus = () => {},
) => {
  const appState = useRef(AppState.currentState);
  const [isFocused, setIsFocused] = useState(true);
  useEffect(() => {
    const appStateSubscription = AppState.addEventListener(
      'change',
      nextState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextState.match(/active/)
        ) {
          setIsFocused(true);
          onAppForegrounded();
        } else if (
          appState.current.match(/active/) &&
          nextState.match(/inactive|background/)
        ) {
          setIsFocused(false);
          onAppBackgrounded();
        }

        // setIsFocused(nextState === 'active');
        appState.current = nextState;
      },
    );

    // Works on recents button press on android but not on home button press
    const blur = AppState.addEventListener('blur', () => {
      onAppBlur();
      setIsFocused(false);
    });

    const focus = AppState.addEventListener('focus', () => {
      onAppFocus();
      setIsFocused(true);
    });

    return () => {
      appStateSubscription.remove();
      blur.remove();
      focus.remove();
    };
  }, []);

  return {isFocused};
};

const AppEntry = () => {
  const {isFocused} = useAppStateChange();
  return (
    <ParentView>
      {/* <HomeScreen />
      {!isFocused && <InactiveScreen />} */}
      {isFocused ? <HomeScreen /> : <InactiveScreen />}
    </ParentView>
  );
};

export default AppEntry;

const styles = StyleSheet.create({});
