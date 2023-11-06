import {ScreenRouter} from './Routes';

export type DrawerParamList = {
  [ScreenRouter.DrawerHome]: undefined;
};

export type BottomTabParamList = {
  [ScreenRouter.ActivityTab]: undefined;
  [ScreenRouter.TeamsTab]: undefined;
  [ScreenRouter.ChatTab]: undefined;
  [ScreenRouter.TasksTab]: undefined;
  [ScreenRouter.CalendarTab]: undefined;
  [ScreenRouter.More]: undefined;
};

export type ChatStackParamList = {
  [ScreenRouter.ChatList]: undefined;
  [ScreenRouter.Chat]: undefined;
};
