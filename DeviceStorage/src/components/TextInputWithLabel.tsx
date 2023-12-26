import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

type Props = {
  label: string;
  value: string;
  onChange: (text: string) => void;
};

const TextInputWithLabel = ({label, onChange, value}: Props) => {
  const [text, setText] = useState('');

  const updateText = (text: string) => {
    setText(text);
  };

  return (
    <View style={styles.rowContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        autoCapitalize="words"
        autoCorrect={false}
        style={styles.input}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

export default TextInputWithLabel;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 50,
    paddingHorizontal: 20,
  },
  label: {
    width: '20%',
  }
});
