import {ScreenRouter} from '@navigation/Routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SvgActivity,
  SvgCalendar,
  SvgChat,
  SvgMore,
  SvgTasks,
  SvgTeams,
} from '@svgs/index';
import {Colors} from '@theme/colors';
import React from 'react';
import Activity from './tabs/activity';
import Calendar from './tabs/calendar';
import Chat from './tabs/chat';
import More from './tabs/more';
import Tasks from './tabs/tasks';
import Teams from './tabs/teams';a

const Tab = createBottomTabNavigator();

const AppEntry = () => {
  return (
    <Tab.Navigator
      initialRouteName={ScreenRouter.Chat}
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: Colors.white,
        tabBarInactiveBackgroundColor: Colors.black,
        tabBarActiveTintColor: Colors.grape,
        tabBarActiveBackgroundColor: Colors.black,
        tabBarStyle: {
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name={ScreenRouter.Activity}
        component={Activity}
        options={{
          tabBarIcon: ({color, size}) => <SvgActivity color={color} />,
        }}
      />
      <Tab.Screen
        name={ScreenRouter.Teams}
        component={Teams}
        options={{
          tabBarIcon: ({color, size}) => <SvgTeams color={color} />,
        }}
      />
      <Tab.Screen
        name={ScreenRouter.Chat}
        component={Chat}
        options={{
          tabBarIcon: ({color, size}) => <SvgChat color={color} />,
        }}
      />
      <Tab.Screen
        name={ScreenRouter.Tasks}
        component={Tasks}
        options={{
          tabBarIcon: ({color, size}) => <SvgTasks color={color} />,
        }}
      />
      <Tab.Screen
        name={ScreenRouter.Calendar}
        component={Calendar}
        options={{
          tabBarIcon: ({color, size}) => <SvgCalendar color={color} />,
        }}
      />
      <Tab.Screen
        name={ScreenRouter.More}
        component={More}
        options={{
          tabBarIcon: ({color, size}) => <SvgMore color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppEntry;
