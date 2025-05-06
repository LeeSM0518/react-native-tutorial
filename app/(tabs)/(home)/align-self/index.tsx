import {PropsWithChildren, useState} from "react";
import {FlexAlignType, StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default function AlignSelf() {
  const [alignSelf, setAlignSelf] = useState<FlexAlignType>('stretch');

  return (
    <PreviewLayout label="alignSelf" values={['stretch', 'flex-start', 'flex-end', 'center', 'baseline']}
                   selectedValue={alignSelf} setSelectedValue={setAlignSelf}>
      <View style={[styles.box, {alignSelf, width: 'auto', minWidth: 50, backgroundColor: 'powderblue'}]}/>
      <View style={[styles.box, {backgroundColor: 'skyblue'}]}/>
      <View style={[styles.box, {backgroundColor: 'steelblue'}]}/>
    </PreviewLayout>
  )
};

type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values: FlexAlignType[];
  selectedValue: FlexAlignType;
  setSelectedValue: (value: FlexAlignType) => void;
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
            style={[styles.buttonLabel, selectedValue === value && styles.selectedLabel]}>
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
    height: 50
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
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
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  }
})