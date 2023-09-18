import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';

type ParentViewProps = {
  children: Element;
  style?: StyleProp<ViewStyle>;
};

const ParentView = ({children, style}: ParentViewProps) => {
  return <View style={[{flex: 1}, style]}>{children}</View>;
};

export default ParentView;

const styles = StyleSheet.create({});
