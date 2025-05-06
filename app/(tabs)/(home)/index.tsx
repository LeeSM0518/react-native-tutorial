import {Text, StyleSheet, SafeAreaView, View, ScrollView} from 'react-native';
import {Link} from "expo-router";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
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
      <Link style={styles.link} href="/(tabs)/(home)/layout-direction">Layout Direction</Link>
      <Link style={styles.link} href="/(tabs)/(home)/justify-content">Justify Content</Link>
      <Link style={styles.link} href="/(tabs)/(home)/align-items">Align Items</Link>
      <Link style={styles.link} href="/(tabs)/(home)/align-self">Align Self</Link>
      <Link style={styles.link} href="/(tabs)/(home)/align-content">Align Content</Link>
      <Link style={styles.link} href="/(tabs)/(home)/flex-wrap">Flex Wrap</Link>
      <Link style={styles.link} href="/(tabs)/(home)/flex-basis">Flex Basis, Grow, and Shrink</Link>
      <Link style={styles.link} href="/(tabs)/(home)/row-gap">Row Gap, Column Gap and Gap</Link>
      <Link style={styles.link} href="/(tabs)/(home)/width-and-height">Width and Height</Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '5%'
  },
  link: {
    fontSize: 20,
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});