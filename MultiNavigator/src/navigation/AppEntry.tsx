import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {ScreenRouter} from '@navigation/Routes';
import Activity from './tabs/activity';
import Calendar from './tabs/calendar';
import Chat from './tabs/chat';
import More from './tabs/more';
import Tasks from './tabs/tasks';
import Teams from './tabs/teams';

const Tab = createBottomTabNavigator();

const AppEntry = () => {
  return (
    <Tab.Navigator initialRouteName={ScreenRouter.Chat}>
      <Tab.Screen name={ScreenRouter.Activity} component={Activity} />
      <Tab.Screen name={ScreenRouter.Teams} component={Teams} />
      <Tab.Screen name={ScreenRouter.Chat} component={Chat} />
      <Tab.Screen name={ScreenRouter.Tasks} component={Tasks} />
      <Tab.Screen name={ScreenRouter.Calendar} component={Calendar} />
      <Tab.Screen name={ScreenRouter.More} component={More} />
    </Tab.Navigator>
  );
};

export default AppEntry;
