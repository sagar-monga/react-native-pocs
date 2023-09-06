import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';

interface Props {
  title: string;
  onPress: () => void;
}

const Button = ({title, onPress}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({});
