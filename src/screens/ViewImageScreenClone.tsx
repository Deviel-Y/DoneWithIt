import colors from "@/config/colors";
import { Image, StyleSheet, View } from "react-native";

const ViewImageScreenClone = () => {
  return (
    <View style={styles.container}>
      <View style={styles.deleteButton} />
      <View style={styles.backButton} />

      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("@/assets/chair.jpg")}
      />
    </View>
  );
};
export default ViewImageScreenClone;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
  },

  deleteButton: {
    width: 30,
    height: 30,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 20,
    right: 20,
  },

  backButton: {
    width: 30,
    height: 30,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 20,
    left: 20,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
