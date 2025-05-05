import {View, StyleSheet, FlatList, Text} from "react-native";

export default function UsingFlatList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          'Devin',
          'Dan',
          'Dominic',
          'Jackson',
          'James',
          'Joel',
          'John',
          'Jillian',
          'Jimmy',
          'Julie'
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})