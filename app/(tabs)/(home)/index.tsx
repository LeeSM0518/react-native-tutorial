import {Text, StyleSheet, SafeAreaView, View} from 'react-native';
import {Link} from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Link href="/(tabs)/(home)/core-components">Core Components</Link>
      </View>
      <View>
        <Link href="/(tabs)/(home)/react-fundamentals">React Fundamentals</Link>
      </View>
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