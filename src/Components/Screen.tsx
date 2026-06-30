import { ReactNode } from "react";
import { Platform, StatusBar, StyleSheet } from "react-native";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

interface Props {
  children: ReactNode;
  screenStyles?: SafeAreaViewProps["style"];
}

const Screen = ({ children, screenStyles }: Props) => {
  return (
    <SafeAreaView style={[styles.container, screenStyles]}>
      {children}
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
