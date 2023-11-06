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
