import {Text, TextInput, View, Image, Button} from "react-native";
import {useState} from "react";
import {State} from "react-native-gesture-handler";

export default function ReactFundamentals() {
  const name = "Maru";
  return (
    <View>
      <Text>Hello, I am {name}!</Text>
      <Text>Hello, I am {getFullName("Sangmin", "lee")}!</Text>
      <View>
        <Text>Hello, I am...</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          defaultValue="Name me!"
        />
      </View>
      <Cat name="Maru"/>
      <Cat name="Jelly"/>
      <Cat name="Spot"/>
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        style={{width: 200, height: 200}}
      />
      <StateCat name="Maru"/>
    </View>
  )
}

type CatProps = {
  name: string
}

const getFullName = (firstName: string, lastName: string) => {
  return `${firstName} ${lastName}`
}

const Cat = (props: CatProps) => {
  return (
    <View>
      <Text>I am {props.name}</Text>
    </View>
  )
}

const StateCat = (props: CatProps) => {
  const [isHungry, setIsHungry] = useState(true)

  return (
    <View>
      <Text>
        I am {props.name} and I am {isHungry ? "hungry" : "not hungry"}
      </Text>
      <Button
        title={isHungry ? "Give me some food, please!" : "Thank you for the food!"}
        onPress={() => {
          setIsHungry(false)
        }}
        disabled={!isHungry}
      />
    </View>
  )
}