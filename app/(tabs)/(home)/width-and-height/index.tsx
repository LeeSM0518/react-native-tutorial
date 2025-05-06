import {PropsWithChildren, useState} from "react";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";

type Dimension = 'auto' | `${number}%` | number;

export default function WidthAndHeight() {
  const [widthType, setWidthType] = useState<Dimension>('auto')
  const [heightType, setHeightType] = useState<Dimension>('auto')

  return (
    <PreviewLayout widthType={widthType} heightType={heightType} widthValues={['auto', 300, '80%']}
                   heightValues={['auto', 300, '60%']} setWidthType={setWidthType} setHeightType={setHeightType}>
      <View style={{
        alignSelf: 'flex-start',
        backgroundColor: 'aliceblue',
        width: widthType,
        height: heightType,
        padding: 15
      }}>
        <View style={[styles.box, {backgroundColor: 'powerblue'}]}/>
        <View style={[styles.box, {backgroundColor: 'skyblue'}]}/>
        <View style={[styles.box, {backgroundColor: 'steelblue'}]}/>
        <View style={[styles.box, {backgroundColor: 'lightgreen'}]}/>
      </View>
    </PreviewLayout>
  )
};

type PreviewLayoutProps = PropsWithChildren<{
  widthType: Dimension;
  heightType: Dimension;
  widthValues: Dimension[];
  heightValues: Dimension[];
  setWidthType: (value: Dimension) => void;
  setHeightType: (value: Dimension) => void;
}>;

const PreviewLayout = ({
                         children,
                         widthType,
                         heightType,
                         widthValues,
                         heightValues,
                         setWidthType,
                         setHeightType,
                       }: PreviewLayoutProps) => (
  <SafeAreaProvider>
    <SafeAreaView style={{flex: 1, padding: 10}}>
      <View style={styles.row}>
        <Text style={styles.label}>width</Text>
        {widthValues.map(value => (
          <TouchableOpacity
            key={value}
            onPress={() => setWidthType(value)}
            style={[styles.button, widthType === value && styles.selected]}>
            <Text
              style={[
                styles.buttonLabel,
                widthType === value && styles.selectedLabel
              ]}>
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>height</Text>
        {heightValues.map(value => (
          <TouchableOpacity
            key={value}
            onPress={() => setHeightType(value)}
            style={[styles.button, heightType === value && styles.selected]}>
            <Text
              style={[styles.buttonLabel, heightType === value && styles.selectedLabel]}>
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {children}
    </SafeAreaView>
  </SafeAreaProvider>
)

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginRight: 10,
    marginBottom: 10
  },
  selected: {
    backgroundColor: 'coral',
    shadowOpacity: 0,
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white'
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24
  },
})