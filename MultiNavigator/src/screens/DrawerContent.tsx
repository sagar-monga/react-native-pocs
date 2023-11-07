import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {ScreenRouter} from '@navigation/Routes';
import {useNavigation} from '@react-navigation/native';
import {DrawerParamList} from '@navigation/ParamList';

type NavProps = DrawerNavigationProp<DrawerParamList, ScreenRouter.DrawerHome>;

/**
 * Custom Drawer Content Component
 * @returns 
 */
const DrawerContent = () => {
  const navigation = useNavigation<NavProps>();
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label={() => <Text>{ScreenRouter.Profile}</Text>}
        onPress={() => {}}></DrawerItem>
      <DrawerItem
        label={() => <Text>{ScreenRouter.Status}</Text>}
        onPress={() => {}}></DrawerItem>
      <DrawerItem
        label={() => <Text>{ScreenRouter.Settings}</Text>}
        onPress={() => {}}></DrawerItem>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({});
