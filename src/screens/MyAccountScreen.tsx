import Icon from "@/Components/Icon";
import ListItem from "@/Components/ListItem";
import ListSeperator from "@/Components/ListSeperator";
import Screen from "@/Components/Screen";
import colors from "@/config/colors";
import { MaterialIconsIconName } from "@react-native-vector-icons/material-icons";
import { FlatList, Image, StyleSheet, View } from "react-native";

const MyAccountScreen = () => {
  return (
    <Screen screenStyles={styles.screen}>
      <View style={styles.container}>
        <ListItem
          swipeOptions={{ isEnabled: false }}
          cardInfo={{
            title: "Daniel Yadghar",
            subTitle: "daniel072.dy@gmail.com",
            ImageComponent: (
              <Image
                source={require("@/assets/mosh.jpg")}
                style={styles.profileImage}
              />
            ),
          }}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={listItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={<ListSeperator />}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <ListItem
                swipeOptions={{ isEnabled: false }}
                cardInfo={{
                  title: item.title,
                  ImageComponent: (
                    <Icon
                      name={item.iconsProps.iconName}
                      backgroundColor={colors[item.iconsProps.backgroundColor]}
                      size={40}
                    />
                  ),
                }}
              />
            </View>
          )}
        />
      </View>

      <View style={styles.container}>
        <ListItem
          swipeOptions={{ isEnabled: false }}
          cardInfo={{
            title: "Logout",
            ImageComponent: <Icon name="logout" backgroundColor="#ffe054" />,
          }}
        />
      </View>
    </Screen>
  );
};
export default MyAccountScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  screen: {
    backgroundColor: colors.lightGray,
    gap: 20,
  },

  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  listItem: { paddingVertical: 10 },
});

const listItems: {
  title: string;
  iconsProps: {
    iconName: MaterialIconsIconName;
    backgroundColor: keyof typeof colors;
  };
}[] = [
  {
    title: "My Listings",
    iconsProps: { backgroundColor: "primary", iconName: "list" },
  },

  {
    title: "My Account",
    iconsProps: { backgroundColor: "secondary", iconName: "verified-user" },
  },
];
