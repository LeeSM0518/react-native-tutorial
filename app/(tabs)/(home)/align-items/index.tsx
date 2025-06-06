import {PropsWithChildren, useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function AlignItems() {
  const [alignItems, setAlignItems] = useState('stretch');

  return (
    <PreviewLayout label="alignItems" values={['stretch', 'flex-start', 'flex-end', 'center', 'baseline']}
                   selectedValue={alignItems} setSelectedValue={setAlignItems}>
      <View style={[styles.box, {backgroundColor: 'powderblue'}]}/>
      <View style={[styles.box, {backgroundColor: 'skyblue'}]}/>
      <View style={[styles.box, {backgroundColor: 'steelblue', width: 'auto', minWidth: 50}]}/>
    </PreviewLayout>
  )
};

type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}>;

const PreviewLayout = ({
                         label,
                         children,
                         values,
                         selectedValue,
                         setSelectedValue,
                       }: PreviewLayoutProps) => (
  <View style={{padding: 10, flex: 1}}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Text style={[styles.buttonLabel, selectedValue === value && styles.selectedLabel]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, {[label]: selectedValue}]}>
      {children}
    </View>
  </View>
)

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    alignSelf: 'flex-start',
    backgroundColor: 'oldlace',
    minWidth: '48%',
    marginHorizontal: '1%',
    marginBottom: 6,
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: 500,
    color: 'coral',
  },
  selectedLabel: {
    color: 'white'
  },
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
    minHeight: 200
  }
})