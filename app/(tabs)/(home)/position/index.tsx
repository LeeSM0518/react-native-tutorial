import {PropsWithChildren, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

type PositionType = 'relative' | 'absolute' | 'static';

export default function Position() {
  const [position, setPosition] = useState<PositionType>('relative');

  return (
    <PreviewLayout label="position" values={['relative', 'absolute', 'static']} selectedValue={position} setSelectedValue={setPosition}>
      <View style={[styles.box, {top: 25, left: 25, position, backgroundColor: 'powderblue'}]}/>
      <View style={[styles.box, {top: 50, left: 50, position, backgroundColor: 'skyblue'}]}/>
      <View style={[styles.box, {top: 75, left: 75, position, backgroundColor: 'steelblue'}]}/>
    </PreviewLayout>
  )
};

type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values: Array<PositionType>;
  selectedValue: string;
  setSelectedValue: (value: PositionType) => void;
}>;

const PreviewLayout = ({
                         label,
                         children,
                         values,
                         selectedValue,
                         setSelectedValue
                       }: PreviewLayoutProps) => (
  <View style={{padding: 10, flex: 1}}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={styles.container}>{children}</View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
    minHeight: 200,
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: 'oldlace',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral'
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