import AppText from "@/Components/AppText";
import ListingIssuer from "@/Components/ListingIssuer";
import colors from "@/config/colors";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";

interface Props {
  image: ImageSourcePropType;
  title: string;
  subTitle: string;
}

const LisitngDetailScreen = ({ image, subTitle, title }: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={image} style={styles.image} />

        <View style={styles.textContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.price}>{subTitle}</AppText>
        </View>
      </View>

      <View style={styles.listingDetail}>
        <ListingIssuer
          imageSource={require("@/assets/mosh.jpg")}
          name="Daniel yadghar"
          subTitle="5 listings"
        />
      </View>
    </View>
  );
};
export default LisitngDetailScreen;

const styles = StyleSheet.create({
  container: {
    gap: 40,
  },
  image: {
    width: "100%",
    height: 300,
  },

  title: {
    fontWeight: 500,
    fontSize: 20,
  },

  price: {
    color: colors.secondary,
    fontSize: 18,
    fontWeight: 600,
  },

  textContainer: {
    padding: 15,
    gap: 10,
  },

  listingDetail: { padding: 15 },
});
