import {Alert, Button, StyleSheet, View} from "react-native";

export default function ButtonBasics() {
  const onPress = () => {
    Alert.alert("You tapped the button!");
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Press Me" onPress={onPress} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Press Me" onPress={onPress} color="white" />
      </View>
      <View style={styles.alternativeLayoutButtonContainer}>
        <Button title="This looks great!" onPress={onPress} />
        <Button title="OK!" onPress={onPress} color="#841584" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
    backgroundColor: '#2196F3',
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})