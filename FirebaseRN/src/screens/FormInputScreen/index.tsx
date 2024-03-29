import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import ParentView from '../../components/ParentView';
import Spacer from '../../components/Spacer';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import {useStore} from '../../store/store';
import {FontSize} from '../../utils/constants';
import utils from '../../utils/utils';

const FormInputScreen = () => {
  //* Local State
  //   const [name, setName] = useState('');
  //   const [age, setAge] = useState();

  //* Zustand Different States
  //   const {age, setAge} = useAgeStore();
  //   const {name, setName} = useNameStore();

  //* Zustand combined slices
  const {name, age, setName, setAge} = useStore();

  // Can also be used as follows if part of state is required
  // const name = useStore(state => state.name);

  return (
    <ParentView style={styles.parentContainer}>
      <TextInputWithLabel
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Spacer height={20} />
      <TextInputWithLabel
        label="Age"
        placeholder="Enter your age"
        value={age.toString()}
        keyboardType="numeric"
        onChangeText={text => setAge(text)}
      />
      <Spacer height={20} />
      <Pressable
        style={[styles.button, {backgroundColor: 'green'}]}
        onPress={() => {
          console.log(`Name: ${name} Age: ${age}`);
        }}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </ParentView>
  );
};

export default FormInputScreen;

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: 'firebrick',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    borderRadius: 10,
  },
  buttonText: {
    paddingVertical: utils.pixelGap(15),
    paddingHorizontal: utils.pixelGap(20),
    fontSize: FontSize.small,
  },
});
