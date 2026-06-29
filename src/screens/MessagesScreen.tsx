import ListingIssuer from "@/Components/ListingIssuer";
import { FlatList, ImageSourcePropType } from "react-native";

const items: {
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
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ListingIssuer
          imageSource={item.image}
          name={item.title}
          subTitle={item.description}
        />
      )}
    />
  );
};
export default MessagesScreen;
