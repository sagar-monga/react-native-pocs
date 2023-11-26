import {Colors} from '@theme/colors';
import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle, View} from 'react-native';

type HeaderProps = {
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  leftItem?:  any
  rightItem?: any;
};

const Header = ({title, titleStyle, leftItem, rightItem}: HeaderProps) => {
  return (
    <View style={styles.parentContainer}>
      {leftItem && <View style={styles.leftItem}>{leftItem()}</View>}

      <View style={styles.titleContainer}>
        <Text style={[styles.titleStyle, titleStyle]} numberOfLines={1}>
          {title}
        </Text>
      </View>

      {rightItem && <View style={styles.rightItem}>{rightItem()}</View>}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  parentContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftItem: {
    height: '100%',
    width: 60,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  titleStyle: {
    color: Colors.white,
    fontSize: 20,
  },
  rightItem: {
    height: '100%',
    width: 60,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
