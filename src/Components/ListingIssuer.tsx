import colors from "@/config/colors";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import AppText from "./AppText";

interface Props {
  imageSource: ImageSourcePropType;
  name: string;
  subTitle: string;
}

const ListingIssuer = ({ imageSource, name, subTitle }: Props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageSource} />

      <View style={styles.textContainer}>
        <AppText style={styles.title}>{name}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};
export default ListingIssuer;

const styles = StyleSheet.create({
  container: { flexDirection: "row", gap: 10 },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  textContainer: { justifyContent: "center" },

  title: { fontWeight: 500, fontSize: 17 },

  subTitle: {
    color: colors.mediumGray,
  },
});
