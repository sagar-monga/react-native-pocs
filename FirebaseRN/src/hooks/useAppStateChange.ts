import {useEffect, useRef, useState} from 'react';
import {AppState, AppStateStatus, DeviceEventEmitter} from 'react-native';

export const useAppStateChange = (
  onAppBackgrounded = () => {},
  onAppForegrounded = () => {},
  onAppBlur = () => {},
  onAppFocus = () => {},
) => {
  const appState = useRef(AppState.currentState);
  const [isFocused, setIsFocused] = useState(true);

  useEffect(() => {
    // Provides same native effect as hook commented below
    const nativeEventListener = DeviceEventEmitter.addListener(
      'ActivityStateChange',
      (e: {event: AppStateStatus}) => {
        console.log(e.event);
        if (
          appState.current.match(/inactive|background/) &&
          e.event.match(/active/)
        ) {
          setIsFocused(true);
          onAppForegrounded();
        } else if (
          appState.current.match(/active/) &&
          e.event.match(/inactive/)
        ) {
          setIsFocused(false);
          onAppBackgrounded();
        }

        appState.current = e.event;
      },
    );

    return () => {
      console.log(`Unmounting native listener`);
      nativeEventListener.remove();
    };
  }, []);

  // useEffect(() => {
  //   const appStateSubscription = AppState.addEventListener(
  //     'change',
  //     nextState => {
  //       if (
  //         appState.current.match(/inactive|background/) &&
  //         nextState.match(/active/)
  //       ) {
  //         setIsFocused(true);
  //         onAppForegrounded();
  //       } else if (
  //         appState.current.match(/active/) &&
  //         nextState.match(/inactive|background/)
  //       ) {
  //         setIsFocused(false);
  //         onAppBackgrounded();
  //       }

  //       // setIsFocused(nextState === 'active');
  //       appState.current = nextState;
  //     },
  //   );

  //   // Works on recents button press on android but not on home button press
  //   const blur = AppState.addEventListener('blur', () => {
  //     onAppBlur();
  //     setIsFocused(false);
  //   });

  //   const focus = AppState.addEventListener('focus', () => {
  //     onAppFocus();
  //     setIsFocused(true);
  //   });

  //   return () => {
  //     appStateSubscription.remove();
  //     blur.remove();
  //     focus.remove();
  //   };
  // }, []);

  return {isFocused};
};

export default useAppStateChange;