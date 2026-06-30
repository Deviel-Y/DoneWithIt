import { StyleSheet, View } from "react-native";

const ListSeperator = () => {
  return <View style={styles.seperator} />;
};
export default ListSeperator;

const styles = StyleSheet.create({
  seperator: {
    height: 1,
    width: "100%",
    backgroundColor: "lightgray",
  },
});
