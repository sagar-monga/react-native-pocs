import {BottomTabParamList} from '@navigation/ParamList';
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
import React from 'react';
import {TabConfig} from '../config';
import ActivityTab from './activity';
import CalendarTab from './calendar';
import ChatTab from './chat';
import MoreTab from './more';
import TasksTab from './tasks';
import TeamsTab from './teams';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={ScreenRouter.ChatTab}
      screenOptions={TabConfig}
      // https://github.com/react-navigation/react-navigation/issues/526
      backBehavior='none'>
      <Tab.Screen
        name={ScreenRouter.ActivityTab}
        component={ActivityTab}
        options={{
          tabBarIcon: ({color}) => <SvgActivity color={color} />,
          tabBarLabel: 'Activity',
        }}
      />
      <Tab.Screen
        name={ScreenRouter.TeamsTab}
        component={TeamsTab}
        options={{
          tabBarIcon: ({color}) => <SvgTeams color={color} />,
          tabBarLabel: 'Teams',
        }}
      />
      <Tab.Screen
        name={ScreenRouter.ChatTab}
        component={ChatTab}
        options={{
          tabBarIcon: ({color}) => <SvgChat color={color} />,
          tabBarLabel: 'Chat',
        }}
      />
      <Tab.Screen
        name={ScreenRouter.TasksTab}
        component={TasksTab}
        options={{
          tabBarIcon: ({color}) => <SvgTasks color={color} />,
          tabBarLabel: 'Tasks',
        }}
      />
      <Tab.Screen
        name={ScreenRouter.CalendarTab}
        component={CalendarTab}
        options={{
          tabBarIcon: ({color}) => <SvgCalendar color={color} />,
          tabBarLabel: 'Calendar',
        }}
      />
      <Tab.Screen
        name={ScreenRouter.More}
        component={MoreTab}
        options={{
          tabBarIcon: ({color}) => <SvgMore color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
