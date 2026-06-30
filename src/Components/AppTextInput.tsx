import colors from "@/config/colors";
import MaterialIcons, {
  MaterialIconsIconName,
} from "@react-native-vector-icons/material-icons";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

interface Props extends TextInputProps {
  iconName?: MaterialIconsIconName;
}

const AppTextInput = ({ iconName, ...otherProps }: Props) => {
  return (
    <View style={styles.container}>
      {iconName && (
        <MaterialIcons name={iconName} size={23} color={colors.darkGray} />
      )}

      <TextInput style={styles.input} {...otherProps} />
    </View>
  );
};
export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.lightGray,
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 500,
    gap: 5,
  },

  input: {
    fontSize: 17,
    width: "100%",
  },
});
