import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <View style={styles.row}>
      <View style={styles.column}>
        <View style={styles.purpleContainer}></View>
        <View style={styles.yellowContainer}></View>
        <View style={styles.pinkContainer}></View>
        </View>
        <View style={styles.row}>
        <View style={styles.redContainer}></View>
        <View style={styles.blueContainer}></View>
         </View>
        <View style={styles.column2}>
        <View style={styles.cyanContainer}></View>
        <View style={styles.magentaContainer}></View>
        </View>
        </View>
      <View style={styles.column}>
        <View style={styles.greyContainer}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  row:{
    flexDirection: "row",
    flex: 1,
  },
  column: {
    flex: 1,
    flexDirection: "column"
  },
  column2: {
    flex: 0.3,
    flexDirection: "column"
  },
  purpleContainer:{
    flex: 4,
    backgroundColor: 'purple'
  },
  yellowContainer:{
    flex: 1,
    backgroundColor: 'yellow'
  },
  pinkContainer: {
    flex: 1,
    backgroundColor: 'pink'

  },
  row: {
    flex: 1,
    flexDirection: "row"
  },
  redContainer:{
    flex: 3,
    backgroundColor: 'red'
  },
  blueContainer: {
    flex: 2,
    backgroundColor: 'blue'
  },
  cyanContainer: {
    flex: 1,
    backgroundColor: 'cyan',
  },
  magentaContainer: {
    flex: 1,
    backgroundColor: 'magenta'
  },
  greyContainer:{
    flex: 1,
    backgroundColor: 'grey'
  }


})