import {Text, StyleSheet, SafeAreaView, View} from 'react-native';
import {Link} from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Link style={styles.link} href="/(tabs)/(home)/core-components">Core Components</Link>
      <Link style={styles.link} href="/(tabs)/(home)/react-fundamentals">React Fundamentals</Link>
      <Link style={styles.link} href="/(tabs)/(home)/handling-text-input">Handling Text Input</Link>
      <Link style={styles.link} href="/(tabs)/(home)/using-scroll-view">Using a ScrollView</Link>
      <Link style={styles.link} href="/(tabs)/(home)/using-flat-list">Using FlatList</Link>
      <Link style={styles.link} href="/(tabs)/(home)/using-section-list">Using SectionList</Link>
      <Link style={styles.link} href="/(tabs)/(home)/platform-specific-code">Platform-Specific Code</Link>
      <Link style={styles.link} href="/(tabs)/(home)/core-component-style">style</Link>
      <Link style={styles.link} href="/(tabs)/(home)/fixed-dimensions">Fixed Dimensions</Link>
      <Link style={styles.link} href="/(tabs)/(home)/flex-dimensions">Flex Dimensions</Link>
      <Link style={styles.link} href="/(tabs)/(home)/percentage-dimensions">Percentage Dimensions</Link>
      <Link style={styles.link} href="/(tabs)/(home)/flex-box">Flex Box</Link>
      <Link style={styles.link} href="/(tabs)/(home)/flex-direction">Flex Direction</Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    fontSize: 20,
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});