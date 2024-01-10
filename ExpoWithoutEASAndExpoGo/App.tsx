import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Config from './config/env';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{`This is ${Config.PUBLIC_ENVIRONMENT} environment`}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
