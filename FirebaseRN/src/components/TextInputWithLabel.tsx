import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextProps,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import React, {
  ForwardedRef,
  MutableRefObject,
  forwardRef,
  useEffect,
} from 'react';

// type CustomTextInputProps = Omit<TextInputProps, 'style'>;
// type CustomViewProps = Omit<ViewProps, 'style'>;
// type CustomTextProps = Omit<TextProps, 'style'>;

type Props = {
  label: string;
  placeholder?: string;
  seperator?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  keyboardType?: KeyboardTypeOptions;
};

const TextInputWithLabel = ({
  label,
  placeholder,
  seperator = ':',
  value,
  onChangeText,
  containerStyle,
  inputStyle,
  labelStyle,
  keyboardType = 'default',
}: Props) => {
  const labelString = `${label}${seperator} `;
  return (
    <View style={[styles.defaultContainerStyle, containerStyle]}>
      <Text style={[styles.defaultTextStyle, labelStyle]}>{labelString}</Text>
      <TextInput
        placeholder={placeholder}
        style={[styles.defaultInputStyle, inputStyle]}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default TextInputWithLabel;

const styles = StyleSheet.create({
  defaultContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  defaultTextStyle: {
    width: '20%',
  },
  defaultInputStyle: {
    width: '80%',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },
});
