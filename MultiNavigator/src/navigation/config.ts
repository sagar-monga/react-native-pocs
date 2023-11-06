import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {DrawerNavigationOptions} from '@react-navigation/drawer';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {StackNavigationOptions} from '@react-navigation/stack';
import {Colors} from '@theme/colors';

export const DrawerConfig:
  | DrawerNavigationOptions
  | ((props: {
      route: RouteProp<ParamListBase, string>;
      navigation: any;
    }) => DrawerNavigationOptions)
  | undefined = {
  headerShown: false,
  drawerStyle: {
    backgroundColor: Colors.black,
  },
  drawerActiveBackgroundColor: Colors.black,
  drawerActiveTintColor: Colors.white,
  drawerInactiveBackgroundColor: Colors.black,
  drawerInactiveTintColor: Colors.white,
};

export const TabConfig:
  | BottomTabNavigationOptions
  | ((props: {
      route: RouteProp<ParamListBase, string>;
      navigation: any;
    }) => BottomTabNavigationOptions)
  | undefined = {
  headerShown: false,
  tabBarInactiveTintColor: Colors.white,
  tabBarInactiveBackgroundColor: Colors.black,
  tabBarActiveTintColor: Colors.grape,
  tabBarActiveBackgroundColor: Colors.black,
  tabBarStyle: {
    borderTopWidth: 0,
  },
};

export const StackConfig:
  | StackNavigationOptions
  | ((props: {
      route: RouteProp<ParamListBase, string>;
      navigation: any;
    }) => StackNavigationOptions)
  | undefined = {
  headerShown: false,
};
