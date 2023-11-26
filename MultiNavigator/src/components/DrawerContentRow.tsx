import {Colors} from '@theme/colors';
import {globalStyles} from '@theme/styles';
import React from 'react';
import {ColorValue, Pressable, StyleSheet, Text, View} from 'react-native';
import Icon, {IconTypes} from './Icon';
import Spacer from './Spacer';

type Props = {
  onPress: () => void;
  iconName: IconTypes;
  iconColor?: ColorValue;
  label: string;
};

const DrawerContentRow = ({iconColor, iconName, label, onPress}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={styles.button}
      android_ripple={{
        color: Colors.darkGray,
      }}>
      <View style={styles.svgContainer}>
        <Icon name={iconName} color={iconColor} />
      </View>
      <Spacer width={10} />
      <Text style={[globalStyles.baseText, styles.label]}>{label}</Text>
    </Pressable>
  );
};

export default DrawerContentRow;

const styles = StyleSheet.create({
  svgContainer: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
  },
});
