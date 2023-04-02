import { StatusBar } from 'expo-status-bar';
import { ScrollView , StyleSheet, Text, View } from 'react-native';
import Form from './src/components/Form'
import Logo from './src/components/Logo';
import style from './src/components/Form'

export default function App() {
  return (
    <View style={styles.container}>
      <Logo/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252e37',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
