import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

export type AvatarProps = {
  containerStyle?: StyleProp<ViewStyle>;
  children?: ReactNode;
};

export const Avatar = ({containerStyle, children}: AvatarProps) => {
  return <View style={[styles.avatar, containerStyle]}>{children}</View>;
};

export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: 'darkorange',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {fontSize: 18},
});
