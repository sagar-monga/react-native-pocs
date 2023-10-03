import {Dimensions, PixelRatio} from 'react-native';
import uuid from 'react-native-uuid';
import {BasedAxis, referenceHeight, referenceWidth} from './constants';

export default class utils {
  public static normalize(size: number, based = BasedAxis.width) {

    const {height, width} = Dimensions.get('screen');
    const baseWidthScale = width / referenceWidth;
    const baseHeightScale = height / referenceHeight;

    const newSize =
      based === BasedAxis.height
        ? size * baseHeightScale
        : size * baseWidthScale;

    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }

  public static pixelWidth = (size: number) => {
    return utils.normalize(size);
  };
  public static pixelHeight = (size: number) => {
    return utils.normalize(size, BasedAxis.height);
  };
  public static pixelFont = (size: number) => {
    return utils.normalize(size);
  };
  public static pixelGap = (size: number) => {
    return utils.normalize(size);
  };
  public static getRandomStringUUID = () => {
    return uuid.v4().toString();
  }
}
