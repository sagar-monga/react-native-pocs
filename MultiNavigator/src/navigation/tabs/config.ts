import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {Colors} from '@theme/colors';

export const tabConfig:
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
