import {StyleSheet, View, ViewProps} from 'react-native';
import React from 'react';

type ParentViewProps = {};

const ParentView = ({children, style}: ViewProps & ParentViewProps) => {
  return <View style={[{flex: 1}, style]}>{children}</View>;
};

export default ParentView;

const styles = StyleSheet.create({});
