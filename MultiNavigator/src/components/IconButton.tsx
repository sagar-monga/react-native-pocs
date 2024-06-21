import Icon, {IconTypes} from '@components/Icon';
import {Colors} from '@theme/colors';
import React from 'react';
import {
  ColorValue,
  GestureResponderEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {NumberProp} from 'react-native-svg';

type Props = {
  icon: IconTypes;
  color?: ColorValue;
  onPress?: (event: GestureResponderEvent) => void;
  height?: NumberProp;
  buttonStyle?: StyleProp<ViewStyle>;
};
const IconButton = ({
  icon,
  color = Colors.black,
  onPress = () => {
    console.log(`Default`);
  },
  buttonStyle = {},
  height,
}: Props) => {
  const ripple_color = StyleSheet.flatten(buttonStyle).backgroundColor
    ? StyleSheet.flatten(buttonStyle).backgroundColor
    : Colors.darkGray;

  return (
    <Pressable
      onPress={onPress}
      key={icon}
      style={buttonStyle}
      android_ripple={{
        color: ripple_color,
      }}>
      <Icon name={icon} color={color} height={height} />
    </Pressable>
  );
};

export default IconButton;
