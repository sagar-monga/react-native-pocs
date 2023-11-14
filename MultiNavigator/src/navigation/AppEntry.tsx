import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '@screens/DrawerContent';
import React from 'react';
import {DrawerConfig} from './config';
import {DrawerParamList} from './ParamList';
import {ScreenRouter} from './Routes';
import TabNavigator from './tabs';

const Drawer = createDrawerNavigator<DrawerParamList>();

const AppEntry = () => {
  return (
    <Drawer.Navigator
      screenOptions={DrawerConfig}
      drawerContent={() => <DrawerContent />}
      initialRouteName={ScreenRouter.DrawerHome}>
      <Drawer.Screen
        name={ScreenRouter.DrawerHome}
        component={TabNavigator}
        // Hides this label from UI
        // options={{drawerItemStyle: {height: 0}}}
      />
      {/* <Drawer.Screen name={ScreenRouter.Profile} component={Profile} />
      <Drawer.Screen name={ScreenRouter.Status} component={Status} />
      <Drawer.Screen name={ScreenRouter.Settings} component={Settings} /> */}
    </Drawer.Navigator>
  );
};

export default AppEntry;
