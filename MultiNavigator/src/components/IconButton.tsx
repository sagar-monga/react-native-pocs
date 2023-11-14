import Icon, {IconTypes} from '@components/Icon';
import {Colors} from '@theme/colors';
import React from 'react';
import {ColorValue, GestureResponderEvent, Pressable} from 'react-native';
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
  onPress = () => {
    console.log(`Default`);
  },
  height,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      key={icon}
      android_ripple={{
        color: Colors.darkGray,
      }}>
      <Icon name={icon} color={color} height={height} />
    </Pressable>
  );
};

export default IconButton;
