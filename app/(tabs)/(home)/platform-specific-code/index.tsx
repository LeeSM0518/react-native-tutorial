import {Platform, StyleSheet, Text, View} from "react-native";

export default function PlatformSpecificCode() {
  let platform = Platform.OS === "ios" ? "iOS" : "Android";
  return (
    <View style={styles.container}>
      <Text>{platform}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        backgroundColor: 'blue',
      },
      android: {
        backgroundColor: 'green',
      },
      default: {
        backgroundColor: 'red',
      }
    })
  }
})