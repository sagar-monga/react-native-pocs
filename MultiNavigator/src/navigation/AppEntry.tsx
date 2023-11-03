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
import ActivityTab from './tabs/activity';
import CalendarTab from './tabs/calendar';
import ChatTab from './tabs/chat';
import {tabConfig} from './tabs/config';
import MoreTab from './tabs/more';
import TasksTab from './tabs/tasks';
import TeamsTab from './tabs/teams';

const Tab = createBottomTabNavigator();

const AppEntry = () => {
  return (
    <Tab.Navigator
      initialRouteName={ScreenRouter.ChatTab}
      screenOptions={tabConfig}>
      <Tab.Screen
        name={ScreenRouter.ActivityTab}
        component={ActivityTab}
        options={{
          tabBarIcon: ({color}) => <SvgActivity color={color} />,
        }}
      />
      <Tab.Screen
        name={ScreenRouter.TeamsTab}
        component={TeamsTab}
        options={{
          tabBarIcon: ({color}) => <SvgTeams color={color} />,
        }}
      />
      <Tab.Screen
        name={ScreenRouter.ChatTab}
        component={ChatTab}
        options={{
          tabBarIcon: ({color}) => <SvgChat color={color} />,
        }}
      />
      <Tab.Screen
        name={ScreenRouter.TasksTab}
        component={TasksTab}
        options={{
          tabBarIcon: ({color}) => <SvgTasks color={color} />,
        }}
      />
      <Tab.Screen
        name={ScreenRouter.CalendarTab}
        component={CalendarTab}
        options={{
          tabBarIcon: ({color}) => <SvgCalendar color={color} />,
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

export default AppEntry;
