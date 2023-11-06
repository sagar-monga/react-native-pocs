import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {DrawerParamList} from './ParamList';
import {ScreenRouter} from './Routes';
import {DrawerConfig} from './config';
import TabNavigator from './tabs';

const Drawer = createDrawerNavigator<DrawerParamList>();

const AppEntry = () => {
  return (
    <Drawer.Navigator screenOptions={DrawerConfig}>
      <Drawer.Screen name={ScreenRouter.DrawerHome} component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default AppEntry;
