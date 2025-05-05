import {Text, TextInput, View} from "react-native";
import {useState} from "react";

export default function HandlingTextInput() {
  const [text, setText] = useState('')

  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40, padding: 5}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')
        }
      </Text>
    </View>
  );
}