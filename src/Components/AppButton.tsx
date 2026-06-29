import colors from "@/config/colors";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  text: string;
  onPress: () => void;
  color?: "primary" | "secondary";
}

const AppButton = ({ onPress, text, color = "primary" }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
export default AppButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.white,
  },
});
