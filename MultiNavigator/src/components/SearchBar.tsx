import {Colors} from '@theme/colors';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon, {IconTypes} from './Icon';

const SearchBar = () => {
  return (
    <Pressable
      style={styles.parentContainer}
      android_ripple={{
        color: Colors.darkGray,
      }}>
      <Icon
        name={IconTypes.Search}
        color={Colors.white}
        height={14}
        width={14}
      />
      <View style={{width: 10}} />
      <Text style={{fontSize: 14, color: Colors.white}}>Search</Text>
    </Pressable>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  parentContainer: {
    marginHorizontal: 10,
    borderRadius: 100,
    height: 60,
    backgroundColor: Colors.darkGray,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderWidth: 2,
  },
});
