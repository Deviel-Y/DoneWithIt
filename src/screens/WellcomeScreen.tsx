import AppButton from "@/Components/AppButton";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const WellcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={10}
      resizeMode="cover"
      style={styles.backgroundImage}
      source={require("@/assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require("@/assets/logo-red.png")}
        />

        <Text style={styles.tagline}>Sell What you don't need</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton text="Login" onPress={() => console.log("Tapped")} />
        <AppButton
          text="Register"
          color="secondary"
          onPress={() => console.log("Tapped")}
        />
      </View>
    </ImageBackground>
  );
};
export default WellcomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logoImage: {
    height: 70,
    width: 70,
  },

  tagline: {
    fontSize: 20,
    fontWeight: 600,
  },

  logoContainer: {
    top: 70,
    position: "absolute",
    alignItems: "center",
  },

  buttonContainer: {
    width: "100%",
    padding: 10,
    gap: 10,
  },
});
