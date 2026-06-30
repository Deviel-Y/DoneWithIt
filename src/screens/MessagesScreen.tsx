import ListItem from "@/Components/ListItem";
import ListSeperator from "@/Components/ListSeperator";
import Screen from "@/Components/Screen";
import { useState } from "react";
import { FlatList, ImageSourcePropType, StyleSheet } from "react-native";

const initialItems: {
  id: number;
  title: string;
  description: string;
  image: ImageSourcePropType;
}[] = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("@/assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("@/assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("@/assets/mosh.jpg"),
  },
];

const MessagesScreen = () => {
  const [items, setItems] = useState(initialItems);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const handleDelete = (itemId: number) => {
    setItems((prev) => prev.filter((message) => message.id !== itemId));
  };

  return (
    <Screen>
      <FlatList
        refreshing={isRefreshing}
        onRefresh={() => setItems(initialItems)}
        ItemSeparatorComponent={<ListSeperator />}
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            swipeOptions={{
              onDelete: () => handleDelete(item.id),
            }}
            cardInfo={{
              title: item.title,
              subTitle: item.description,
              containerStyle: styles.list,
            }}
          />
        )}
      />
    </Screen>
  );
};
export default MessagesScreen;

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
});
