import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button , TouchableHighlight} from 'react-native';

const logo = require('./assets/icon.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 100, height: 100 }} />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Click me" onPress={() => alert('Button pressed')} />
      <TouchableHighlight
      underlayColor="red"
      onPress={() => alert('Button pressed')} 
      style={{width: 100, height: 100, backgroundColor: 'red', borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Click me</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
