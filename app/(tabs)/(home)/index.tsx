import {Text, StyleSheet, SafeAreaView} from 'react-native';
import {Link} from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
      <Link href={{
        pathname: '/details/[id]',
        params: {id: 'bacon'},
      }}>View user details</Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});