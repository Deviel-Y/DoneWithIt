import colors from "@/config/colors";
import { MaterialIcons } from "@react-native-vector-icons/material-icons";
import { Image, StyleSheet, View } from "react-native";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.productImage}
        resizeMode="contain"
        source={require("@/assets/chair.jpg")}
      />

      <MaterialIcons
        name="close"
        color="white"
        size={30}
        style={styles.closeButton}
      />

      <MaterialIcons
        name="delete-outline"
        size={30}
        color="white"
        style={styles.backButton}
      />
    </View>
  );
};
export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },

  productImage: {
    width: "100%",
    height: "100%",
  },

  closeButton: {
    position: "absolute",
    top: 20,
    left: 20,
  },

  backButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
});
