import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../components/Button';
import TextInputWithLabel from '../components/TextInputWithLabelF';

const UserForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [likes, setLikes] = useState('');

  const onSubmit = () => {};

  const onDelete = () => {};

  return (
    <View style={styles.parentcontainer}>
      <TextInputWithLabel
        label={'Name'}
        value={name}
        onChange={text => {
          setName(text);
        }}
      />
      <TextInputWithLabel
        label={'Age'}
        value={age}
        onChange={text => {
          setAge(text);
        }}
      />
      <TextInputWithLabel
        label={'Likes'}
        value={likes}
        onChange={text => {
          setLikes(text);
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
