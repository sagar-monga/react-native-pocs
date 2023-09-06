import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Button from '@components/Button';
import Modal from 'src/hooks/Modal';

const Home = () => {
  const [showWarning, setShowWarning] = useState(false);
  return (
    <View style={{flex: 1}}>
      <Text>Header</Text>
      <Button
        title={showWarning ? 'Hide' : 'Show'}
        onPress={() => setShowWarning(prev => !prev)}
      />
      {showWarning && <Modal />}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
