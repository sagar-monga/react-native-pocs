import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Button from 'components/Button';

const Home = () => {
  const [showWarning, setShowWarning] = useState(false);
  return (
    <View style={{flex:1}}>
      <Text>Header</Text>
      <Button />
      {/* {showWarning && <Modal />} */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
