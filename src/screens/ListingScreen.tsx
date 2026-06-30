import Card from "@/Components/Card";
import Screen from "@/Components/Screen";
import { ComponentProps } from "react";
import { FlatList, StyleSheet } from "react-native";

const ListingScreen = () => {
  return (
    <Screen screenStyles={styles.screen}>
      <FlatList
        contentContainerStyle={styles.itemContainer}
        data={listingItems}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Card
            imageSource={item.imageSource}
            subTitle={item.subTitle}
            title={item.title}
          />
        )}
      />
    </Screen>
  );
};
export default ListingScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },

  itemContainer: { gap: 20 },
});

const listingItems: ComponentProps<typeof Card>[] = [
  {
    title: "Red jacket for sale",
    subTitle: "100",
    imageSource: require("@/assets/jacket.jpg"),
  },
  {
    title: "Couch in great condition.",
    subTitle: "1000",
    imageSource: require("@/assets/couch.jpg"),
  },
];
