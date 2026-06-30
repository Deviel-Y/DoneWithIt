// import MaterialIcons from "@react-native-vector-icons/material-icons";
// import { Pressable, StyleSheet } from "react-native";
// import Animated, {
//   interpolate,
//   SharedValue,
//   useAnimatedStyle,
// } from "react-native-reanimated";

import MaterialIcons from "@react-native-vector-icons/material-icons";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

interface Props {
  onDelete: () => void;
  progress: SharedValue<number>;
}

const DeleteSwipeAction = ({ onDelete, progress }: Props) => {
  const animateStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: interpolate(progress.value, [0, 1], [80, 0]) }],
  }));

  return (
    <Animated.View style={[styles.deleteActionContainer, animateStyle]}>
      <Pressable onPress={onDelete}>
        <MaterialIcons name="delete-outline" size={35} color="white" />
      </Pressable>
    </Animated.View>
  );
};

export default DeleteSwipeAction;

const styles = StyleSheet.create({
  deleteActionContainer: {
    width: 70,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
  },
});
