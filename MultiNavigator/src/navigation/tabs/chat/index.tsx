import {ScreenRouter} from '@navigation/Routes';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import Chat from './screens/Chat';
import ChatList from './screens/ChatList';

const Stack = createStackNavigator();

const ChatTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ScreenRouter.ChatList} component={ChatList} />
      <Stack.Screen name={ScreenRouter.Chat} component={Chat} />
    </Stack.Navigator>
  );
};

export default ChatTab;

const styles = StyleSheet.create({});
