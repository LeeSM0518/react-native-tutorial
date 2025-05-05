import {Text, ScrollView, Image} from "react-native";

export default function UsingScrollView() {
  const logo = {
    uri: "https://reactnative.dev/img/tiny_logo.png",
    width: 64,
    height: 64
  }

  return (
    <ScrollView>
      <Text style={{fontSize: 96}}>Scroll me plz</Text>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Text style={{fontSize: 96}}>Scroll me plz</Text>
      <Image source={logo}/>
      <Text style={{fontSize: 96}}>Scroll me plz</Text>
      <Image source={logo}/>
      <Text style={{fontSize: 96}}>Scroll me plz</Text>
      <Image source={logo}/>
      <Image source={logo}/>
      <Text style={{fontSize: 96}}>Scroll me plz</Text>
    </ScrollView>
  );
}