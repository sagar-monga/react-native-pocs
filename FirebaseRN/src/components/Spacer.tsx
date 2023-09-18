import {View} from 'react-native';
import React from 'react';
import utils from '../utils/utils';

type SpacerProps = {
  height?: number;
  width?: number;
};

const Spacer = ({height = 0, width = 0}: SpacerProps) => {
  return <View style={{height: utils.pixelHeight(height), width: utils.pixelWidth(width)}} />;
};

export default Spacer;
