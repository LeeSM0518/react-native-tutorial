import {PropsWithChildren, useState} from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";

export default function AlignContent() {
  const [alignContent, setAlignContent] = useState('flex-start');

  return (
    <PreviewLayout label="alignContent"
                   values={['flex-start', 'flex-end', 'stretch', 'center', 'space-between', 'space-around']}
                   selectedValue={alignContent} setSelectedValue={setAlignContent}>
      <View style={[styles.box, {backgroundColor: 'orangered'}]}/>
      <View style={[styles.box, {backgroundColor: 'yellow'}]}/>
      <View style={[styles.box, {backgroundColor: 'blue'}]}/>
      <View style={[styles.box, {backgroundColor: 'green'}]}/>
      <View style={[styles.box, {backgroundColor: 'purple'}]}/>
      <View style={[styles.box, {backgroundColor: 'pink'}]}/>
      <View style={[styles.box, {backgroundColor: 'orange'}]}/>
    </PreviewLayout>
  );
};

type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}>

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
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    marginTop: 8,
    backgroundColor: 'aliceblue',
    maxHeight: 400,
  },
  box: {
    width: 50,
    height: 80
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
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
})