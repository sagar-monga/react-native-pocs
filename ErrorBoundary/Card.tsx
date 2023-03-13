import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useAsyncEffect} from './hooks';

const Card = ({hasError = false}: {hasError?: boolean}) => {
  const [text, setText] = useState<string | undefined>('empty');
  const [loading, setLoading] = useState(false);
  useAsyncEffect(async () => {
    if (hasError) {
      // setText(undefined);
      throw new Error('Error occurred');
    }
    setLoading(true);
    await new Promise(res => setTimeout(res, 3000));
    const data = await (await fetch('https://reqres.in/api/users/2')).json();
    setText(data.data.first_name);
    setLoading(false);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{loading ? 'Loading...' : text}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderColor: 'black',
    borderWidth: 2,
    margin: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});
