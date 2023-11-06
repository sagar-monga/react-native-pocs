import {SvgBack, SvgDrawer, SvgFilter} from '@svgs/index';
import React from 'react';
import {ColorValue} from 'react-native';
import {NumberProp} from 'react-native-svg';

export enum IconTypes {
  Back = 'back',
  Drawer = 'drawer',
  Filter = 'filter',
}

type IconProps = {
  name: IconTypes;
  color: ColorValue;
  height?: NumberProp;
};

const Icon = ({color, name, height = 24}: IconProps) => {
  switch (name) {
    case IconTypes.Back:
      return <SvgBack color={color} height={height} />;
    case IconTypes.Drawer:
      return <SvgDrawer color={color} height={height} />;
    case IconTypes.Filter:
      return <SvgFilter color={color} height={height} />;
  }
};

export default Icon;
