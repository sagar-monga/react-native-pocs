import { ChatStackParamList } from '@navigation/ParamList';
import {ScreenRouter} from '@navigation/Routes';
import {StackConfig} from '@navigation/config';
import {createStackNavigator} from '@react-navigation/stack';
import Chat from '@screens/Chat';
import ChatList from '@screens/ChatList';
import React from 'react';
import {StyleSheet} from 'react-native';

const Stack = createStackNavigator<ChatStackParamList>();

const ChatTab = () => {
  return (
    <Stack.Navigator screenOptions={StackConfig}>
      <Stack.Screen name={ScreenRouter.ChatList} component={ChatList} />
      <Stack.Screen name={ScreenRouter.Chat} component={Chat} />
    </Stack.Navigator>
  );
};

export default ChatTab;

const styles = StyleSheet.create({});
