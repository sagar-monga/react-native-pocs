import React, {useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../components/Button';
import TextInputWithLabel from '../components/TextInputWithLabel';
import {MMKVSingleton} from '../extensions/mmkv';
import {StorageKeys} from '../extensions/keys';

const UserForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [likes, setLikes] = useState('');
  const storage = useRef(MMKVSingleton.getInstance()).current;

  const onSubmit = () => {
    storage.set(StorageKeys.name, name);
    storage.set(StorageKeys.age, age);
    storage.set(StorageKeys.likes, likes);
    console.log(`SUBMITTED`);
  };

  const onDelete = () => {};

  return (
    <View style={styles.parentcontainer}>
      <TextInputWithLabel
        label={'Name'}
        value={name}
        onChange={text => setName(text as string)}
      />
      <TextInputWithLabel
        label={'Age'}
        value={age.toString()}
        onChange={text => {
          setAge(text as number);
        }}
      />
      <TextInputWithLabel
        label={'Likes'}
        value={likes}
        onChange={text => {
          setLikes(text as string);
        }}
      />
      <View style={styles.btncontainer}>
        <Button label={'Submit'} onPress={onSubmit} />
        <Button
          label={'Delete'}
          buttonStyle={{backgroundColor: '#bb2124'}}
          labelStyle={{color: 'white'}}
          onPress={onDelete}
        />
      </View>
    </View>
  );
};

export default UserForm;

const styles = StyleSheet.create({
  parentcontainer: {
    flex: 1,
  },
  btncontainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
