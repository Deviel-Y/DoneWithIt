import colors from "@/config/colors";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import AppText from "./AppText";

interface Props {
  title: string;
  subTitle: string;
  imageSource: ImageSourcePropType;
}

const Card = ({ imageSource, subTitle, title }: Props) => {
  return (
    <View style={styles.cardConatiner}>
      <Image source={imageSource} style={styles.image} />

      <View style={styles.textContainer}>
        <AppText>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};
export default Card;

const styles = StyleSheet.create({
  cardConatiner: {
    backgroundColor: colors.white,
    borderRadius: 16,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 200,
  },

  textContainer: {
    padding: 15,
    gap: 5,
  },

  subTitle: {
    fontWeight: 700,
    color: colors.secondary,
  },
});
