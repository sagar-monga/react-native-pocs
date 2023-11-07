import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Avatar, {AvatarProps} from './Avatar';

type AvatarButtonProps = {
  onPress: () => void;
};

const AvatarButton = ({
  onPress,
  children,
  containerStyle,
}: AvatarProps & AvatarButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Avatar containerStyle={containerStyle}>{children}</Avatar>
    </Pressable>
  );
};

export default AvatarButton;

const styles = StyleSheet.create({});
