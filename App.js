import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';

export default function App() {

  const callHeader = (data) => {
    alert(data)
  }

  return (
    <View style={styles.container}>
      <Header key={'header_myapp'} subtitle={'Juan Gómez'} call={callHeader}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "red",
    fontSize: 20
  }
});
