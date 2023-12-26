import React from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';

type Props = {
  label: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
};

const Button = ({buttonStyle, label, labelStyle, onPress}: Props) => {
  return (
    <Pressable
      style={[styles.btn, buttonStyle]}
      onPress={onPress}>
      <Text style={labelStyle}>{label}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#DECBA4',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});
