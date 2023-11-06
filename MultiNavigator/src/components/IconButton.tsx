import Icon, {IconTypes} from '@components/Icon';
import {Colors} from '@theme/colors';
import React from 'react';
import {
  ColorValue,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
} from 'react-native';
import {NumberProp} from 'react-native-svg';

type Props = {
  icon: IconTypes;
  color?: ColorValue;
  onPress?: (event: GestureResponderEvent) => void;
  height?: NumberProp;
};
const IconButton = ({
  icon,
  color = Colors.black,
  onPress = () => {},
  height,
}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Icon name={icon} color={color} height={height} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
