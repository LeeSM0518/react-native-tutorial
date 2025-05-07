import {Image, ImageBackground, ScrollView, Text} from "react-native";

export default function Images() {
  return (
    <ScrollView contentContainerStyle={{flex: 1, flexWrap: 'wrap', flexDirection: 'row'}}>
      <Image source={require('@/assets/images/adaptive-icon.png')} style={{width: 200, height: 200}}/>
      <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{width: 200, height: 200}}/>
      <Image source={{
        uri: 'https://reactjs.org/logo-og.png',
        method: 'POST',
        headers: {
          Pragma: 'no-cache',
        },
        body: 'Your Body goes here',
      }}
             style={{width: 200, height: 200}}
      />
      <Image
        style={{
          width: 200,
          height: 200,
          resizeMode: 'contain',
        }}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcn' +
            'VzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGB' +
            'gYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
      <Image
        source={{
          uri: 'https://reactjs.org/logo-og.png',
          cache: 'only-if-cached',
        }}
        style={{width: 200, height: 200}}/>

      <ImageBackground source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
                       style={{width: 200, height: 200}}>
        <Text>Inside</Text>
      </ImageBackground>
    </ScrollView>
  );
};