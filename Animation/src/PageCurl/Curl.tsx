import {SkFont, Text} from '@shopify/react-native-skia';
import {
  Image,
  RoundedRect,
  Easing,
  runTiming,
  useComputedValue,
  useValue,
  useTouchHandler,
  Canvas,
  Rect,
  rect,
  Group,
  Paint,
  RuntimeShader,
  Skia,
  useImage,
} from '@shopify/react-native-skia';
import {Dimensions, PixelRatio, View} from 'react-native';

import {pageCurl} from './pageCurl';

const {width: wWidth} = Dimensions.get('window');
const pd = PixelRatio.get();
const height = 150;
const outer = Skia.XYWHRect(0, 0, wWidth, height);
const pad = 16;
const cornerRadius = 16;

const inner = Skia.RRectXY(
  Skia.XYWHRect(pad, pad, wWidth - pad * 2, height - pad * 2),
  cornerRadius,
  cornerRadius,
);
const labelHeight = 25;

export interface Project {
  id: string;
  title: string;
  picture: number;
  color: string;
}

interface ProjectProps {
  project: Project;
}

export const Curl = ({project: {picture, title, color}}: ProjectProps) => {
  const {width} = outer;
  const image = useImage(picture);
  const origin = useValue(width);
  const pointer = useValue(width);
  const onTouch = useTouchHandler({
    onStart: ({x}) => {
      origin.current = x;
    },
    onActive: ({x}) => {
      pointer.current = x;
    },
    // onEnd: () => {
    //   runTiming(pointer, width, {
    //     duration: 450,
    //     easing: Easing.inOut(Easing.ease),
    //   });
    //   runTiming(origin, width, {
    //     duration: 450,
    //     easing: Easing.inOut(Easing.ease),
    //   });
    // },
  });
  const uniforms = useComputedValue(() => {
    return {
      pointer: pointer.current * pd,
      origin: origin.current * pd,
      resolution: [outer.width * pd, outer.height * pd],
      container: [
        inner.rect.x,
        inner.rect.y,
        inner.rect.x + inner.rect.width,
        inner.rect.y + inner.rect.height,
      ].map(v => v * pd),
      cornerRadius: cornerRadius * pd,
    };
  }, [origin, pointer]);
  if (!image) {
    return null;
  }
  return (
    <Canvas
      style={{
        width: outer.width,
        height: outer.height,
      }}
      onTouch={onTouch}>
      <RoundedRect rect={inner} color="blue" >
      </RoundedRect>
      <Group
        transform={[
          {translateX: 310},
          {translateY: (150 - 24 * 1.5) / 2},
          {scale: 1.5},
        ]}></Group>
      <Group transform={[{scale: 1 / pd}]}>
        <Group
          layer={
            <Paint>
              <RuntimeShader source={pageCurl} uniforms={uniforms} />
            </Paint>
          }
          transform={[{scale: pd}]}
          clip={inner}>
          <Image image={image} rect={inner.rect} fit="cover" />
          <Rect
            rect={rect(
              inner.rect.x,
              inner.rect.y + inner.rect.height - labelHeight,
              inner.rect.width,
              labelHeight,
            )}
            color={color}
          />
          {/* <Text x={32} y={height - 50} text={title} color="white" /> */}
        </Group>
      </Group>
    </Canvas>
  );
};
