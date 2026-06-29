import { ReactNode } from "react";
import { StyleSheet, Text, TextStyle } from "react-native";

interface Props {
  children: ReactNode;
  style?: TextStyle;
}

const AppText = ({ children, style }: Props) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};
export default AppText;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});
