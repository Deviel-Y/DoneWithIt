import {
  MaterialIcons,
  MaterialIconsIconName,
} from "@react-native-vector-icons/material-icons";
import { StyleSheet, View } from "react-native";

interface Props {
  name: MaterialIconsIconName;
  size?: number;
  backgroundColor?: string;
  iconColor?: string;
}

const Icon = ({
  name,
  backgroundColor = "#000",
  iconColor = "#fff",
  size = 40,
}: Props) => {
  const iconContainerStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor,
  };

  return (
    <View style={[styles.container, iconContainerStyle]}>
      <MaterialIcons name={name} size={size / 2} color={iconColor} />
    </View>
  );
};
export default Icon;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
