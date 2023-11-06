import {NavigatorScreenParams} from '@react-navigation/native';
import {ScreenRouter} from './Routes';

export type DrawerParamList = {
  [ScreenRouter.DrawerHome]: NavigatorScreenParams<BottomTabParamList>;
};

export type BottomTabParamList = {
  [ScreenRouter.ActivityTab]: undefined;
  [ScreenRouter.TeamsTab]: undefined;
  [ScreenRouter.ChatTab]: NavigatorScreenParams<ChatStackParamList>;
  [ScreenRouter.TasksTab]: undefined;
  [ScreenRouter.CalendarTab]: undefined;
  [ScreenRouter.More]: undefined;
};

export type ChatStackParamList = {
  [ScreenRouter.ChatList]: undefined;
  [ScreenRouter.Chat]: undefined;
};
