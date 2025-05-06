import {PropsWithChildren, useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";

export default function RowGap() {
  const [rowGap, setRowGap] = useState(10);
  const [columnGap, setColumnGap] = useState(10);

  return (
    <PreviewLayout columnGap={columnGap} handleColumnGapChange={setColumnGap} rowGap={rowGap}
                   handleRowGapChange={setRowGap}>
      <View style={[styles.box, styles.box1]}/>
      <View style={[styles.box, styles.box2]}/>
      <View style={[styles.box, styles.box3]}/>
      <View style={[styles.box, styles.box4]}/>
      <View style={[styles.box, styles.box5]}/>
    </PreviewLayout>
  )
};

type PreviewLayoutProps = PropsWithChildren<{
  columnGap: number;
  handleColumnGapChange: (gap: number) => void;
  rowGap: number;
  handleRowGapChange: (gap: number) => void;
}>

const PreviewLayout = ({
                         children,
                         handleColumnGapChange,
                         handleRowGapChange,
                         rowGap,
                         columnGap
                       }: PreviewLayoutProps) => (
  <View style={styles.previewContainer}>
    <View style={styles.inputContainer}>
      <View style={styles.itemCenter}>
        <Text>Row Gap</Text>
        <TextInput style={styles.input} value={String(rowGap)} onChangeText={v => handleRowGapChange(Number(v))}/>
      </View>
      <View style={styles.itemCenter}>
        <Text>Column Gap</Text>
        <TextInput style={styles.input} value={String(columnGap)} onChangeText={v => handleColumnGapChange(Number(v))}/>
      </View>
    </View>
    <View style={[styles.container, {rowGap, columnGap}]}>{children}</View>
  </View>
)

const styles = StyleSheet.create({
  itemCenter: {alignItems: 'center'},
  inputContainer: {
    gap: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  previewContainer: {padding: 10, flex: 1},
  input: {
    width: 50,
    borderBottomWidth: 1,
    paddingVertical: 3,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
    marginTop: 8,
    maxHeight: 400,
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  },
  box: {
    width: 50,
    height: 80,
  },
  box1: {
    backgroundColor: 'powderblue',
  },
  box2: {
    backgroundColor: 'skyblue',
  },
  box3: {
    backgroundColor: 'steelblue',
  },
  box4: {
    backgroundColor: 'lightgreen',
  },
  box5: {
    backgroundColor: 'lightcoral',
  },
})