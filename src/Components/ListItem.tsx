import colors from "@/config/colors";
import { JSX } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import ReanimatedSwipeable, {
  SwipeableMethods,
} from "react-native-gesture-handler/ReanimatedSwipeable";
import { SharedValue } from "react-native-reanimated";
import AppText from "./AppText";
import DeleteSwipeAction from "./DeleteSwipeAction";

interface Props {
  swipeOptions: {
    isEnabled?: boolean;
    onDelete?: () => void;
  };
  cardInfo: {
    ImageComponent?: JSX.Element;
    containerStyle?: ViewStyle;
    title: string;
    subTitle?: string;
  };
}

const ListItem = ({
  cardInfo: { subTitle, title, ImageComponent, containerStyle },
  swipeOptions: { isEnabled = true, onDelete },
}: Props) => {
  const renderRightAction = (
    progress: SharedValue<number>,
    _translation: SharedValue<number>,
    swipeableMethods: SwipeableMethods,
  ) => (
    <DeleteSwipeAction
      progress={progress}
      onDelete={() => {
        swipeableMethods.close();
        onDelete?.();
      }}
    />
  );

  return (
    <ReanimatedSwipeable
      enabled={isEnabled}
      overshootRight={false}
      renderRightActions={renderRightAction}
    >
      <View style={[styles.container, containerStyle]}>
        {ImageComponent}

        <View style={styles.textContainer}>
          <AppText style={styles.title}>{title}</AppText>
          {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
        </View>
      </View>
    </ReanimatedSwipeable>
  );
};
export default ListItem;

const styles = StyleSheet.create({
  container: { flexDirection: "row", gap: 10 },
  textContainer: { justifyContent: "center" },
  title: { fontWeight: 500, fontSize: 17 },
  subTitle: {
    color: colors.mediumGray,
  },
});
