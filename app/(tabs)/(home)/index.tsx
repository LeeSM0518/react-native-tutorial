import {Text, StyleSheet, SafeAreaView, View} from 'react-native';
import {Link} from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Link href="/(tabs)/(home)/core-components">Core Components</Link>
      <Link href="/(tabs)/(home)/react-fundamentals">React Fundamentals</Link>
      <Link href="/(tabs)/(home)/handling-text-input">Handling Text Input</Link>
      <Link href="/(tabs)/(home)/using-scroll-view">Using a ScrollView</Link>
      <Link href="/(tabs)/(home)/using-flat-list">Using FlatList</Link>
      <Link href="/(tabs)/(home)/using-section-list">Using SectionList</Link>
      <Link href="/(tabs)/(home)/platform-specific-code">Platform-Specific Code</Link>
      <Link href="/(tabs)/(home)/core-component-style">style</Link>
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