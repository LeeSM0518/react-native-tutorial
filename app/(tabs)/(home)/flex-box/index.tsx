import {StyleSheet, View} from "react-native";

export default function FlexBox() {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        }
      ]}>
      <View style={{flex: 1, backgroundColor: 'red'}}/>
      <View style={{flex: 2, backgroundColor: 'green'}}/>
      <View style={{flex: 3, backgroundColor: 'blue'}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
})