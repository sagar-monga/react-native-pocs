import Icon, {IconTypes} from '@components/Icon';
import {BottomTabParamList} from '@navigation/ParamList';
import {ScreenRouter} from '@navigation/Routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
      backBehavior="none">
      <Tab.Screen
        name={ScreenRouter.ActivityTab}
        component={ActivityTab}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={IconTypes.Activity} color={color} />
          ),
          tabBarLabel: 'Activity',
        }}
      />
      <Tab.Screen
        name={ScreenRouter.TeamsTab}
        component={TeamsTab}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={IconTypes.Teams} color={color} />
          ),
          tabBarLabel: 'Teams',
        }}
      />
      <Tab.Screen
        name={ScreenRouter.ChatTab}
        component={ChatTab}
        options={{
          tabBarIcon: ({color}) => <Icon name={IconTypes.Chat} color={color} />,
          tabBarLabel: 'Chat',
        }}
      />
      <Tab.Screen
        name={ScreenRouter.TasksTab}
        component={TasksTab}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={IconTypes.Tasks} color={color} />
          ),
          tabBarLabel: 'Tasks',
        }}
      />
      <Tab.Screen
        name={ScreenRouter.CalendarTab}
        component={CalendarTab}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={IconTypes.Calendar} color={color} />
          ),
          tabBarLabel: 'Calendar',
        }}
      />
      <Tab.Screen
        name={ScreenRouter.More}
        component={MoreTab}
        options={{
          tabBarIcon: ({color}) => <Icon name={IconTypes.More} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
