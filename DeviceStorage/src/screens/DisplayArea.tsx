import {StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import {MMKVSingleton} from '../extensions/mmkv';
import {StorageKeys} from '../extensions/keys';

const DisplayArea = () => {
  const storage = useRef(MMKVSingleton.getInstance()).current;
  return (
    <View style={styles.parentcontainer}>
      <Text>{`Name: ${storage.getString(StorageKeys.name)}`}</Text>
      <Text>{`Age: ${storage.getString(StorageKeys.age)}`}</Text>
      <Text>{`Likes: ${storage.getString(StorageKeys.likes)}`}</Text>
    </View>
  );
};

export default DisplayArea;

const styles = StyleSheet.create({
  parentcontainer: {flex: 1},
});
