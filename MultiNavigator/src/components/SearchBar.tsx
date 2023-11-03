import {SvgSearch} from '@svgs/index';
import {Colors} from '@theme/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.parentContainer}>
      <SvgSearch color={Colors.white} height={14} width={14} />
      <View style={{width: 10}} />
      <Text style={{fontSize: 14, color: Colors.white}}>Search</Text>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  parentContainer: {
    height: 60,
    backgroundColor: Colors.darkGray,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderColor: 'red',
    borderWidth: 2,
  },
});
