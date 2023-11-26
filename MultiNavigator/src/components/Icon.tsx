import {
  SvgActivity,
  SvgBack,
  SvgCalendar,
  SvgChat,
  SvgDrawer,
  SvgFilter,
  SvgLocation,
  SvgMore,
  SvgPlus,
  SvgRightArrow,
  SvgSearch,
  SvgSettings,
  SvgTasks,
  SvgTeams,
  SvgTick,
  SvgWrite,
} from '@svgs/index';
import {Colors} from '@theme/colors';
import React from 'react';
import {ColorValue, View} from 'react-native';
import {NumberProp} from 'react-native-svg';

export enum IconTypes {
  Back = 'back',
  Drawer = 'drawer',
  Filter = 'filter',
  Activity = 'activity',
  Calendar = 'calendar',
  Chat = 'chat',
  More = 'more',
  Tasks = 'tasks',
  Teams = 'teams',
  Search = 'search',
  Location = 'location',
  Plus = 'plus',
  RightArrow = 'rightArrow',
  Settings = 'settings',
  Tick = 'tick',
  Write = 'write',
}

type IconProps = {
  name: IconTypes;
  color?: ColorValue;
  height?: NumberProp;
  width?: NumberProp;
};

const Icon = ({
  color = Colors.white,
  name,
  height = 24,
  width = 24,
}: IconProps) => {
  let icon = <View />;
  switch (name) {
    case IconTypes.Back:
      icon = <SvgBack color={color} height={height} width={width} />;
      break;
    case IconTypes.Drawer:
      icon = <SvgDrawer color={color} height={height} width={width} />;
      break;
    case IconTypes.Filter:
      icon = <SvgFilter color={color} height={height} width={width} />;
      break;
    case IconTypes.Activity:
      icon = <SvgActivity color={color} height={height} width={width} />;
      break;
    case IconTypes.Calendar:
      icon = <SvgCalendar color={color} height={height} width={width} />;
      break;
    case IconTypes.Chat:
      icon = <SvgChat color={color} height={height} width={width} />;
      break;
    case IconTypes.More:
      icon = <SvgMore color={color} height={height} width={width} />;
      break;
    case IconTypes.Tasks:
      icon = <SvgTasks color={color} height={height} width={width} />;
      break;
    case IconTypes.Teams:
      icon = <SvgTeams color={color} height={height} width={width} />;
      break;
    case IconTypes.Search:
      icon = <SvgSearch color={color} height={height} width={width} />;
      break;
    case IconTypes.Location:
      icon = <SvgLocation color={color} height={height} width={width} />;
      break;
    case IconTypes.Plus:
      icon = <SvgPlus color={color} height={height} width={width} />;
      break;
    case IconTypes.RightArrow:
      icon = <SvgRightArrow color={color} height={height} width={width} />;
      break;
    case IconTypes.Settings:
      icon = <SvgSettings color={color} height={height} width={width} />;
      break;
    case IconTypes.Tick:
      icon = <SvgTick color={color} height={height} width={width} />;
      break;
    case IconTypes.Write:
      icon = <SvgWrite color={color} height={height} width={width} />;
      break;
  }
  return icon;
};

export default Icon;
