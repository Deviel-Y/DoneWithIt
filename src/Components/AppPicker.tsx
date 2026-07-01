import colors from "@/config/colors";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import PickerItem from "./PickerItem";

interface Props {
  datas: PickeItemType[];
  placeholder?: string;
  selectedItem: PickeItemType;
  setSelectedItem: (item: PickeItemType) => void;
}

const AppPicker = ({
  placeholder,
  selectedItem,
  setSelectedItem,
  datas,
}: Props) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <>
      <TouchableWithoutFeedback
        touchSoundDisabled
        onPress={() => setIsModalVisible(true)}
      >
        <View style={styles.container}>
          <MaterialIcons name="apps" size={23} color={colors.darkGray} />

          <Text
            style={[
              styles.placeholder,
              { color: selectedItem.name ? colors.black : undefined },
            ]}
          >
            {selectedItem.name || placeholder}
          </Text>

          <MaterialIcons
            style={styles.chevron}
            name="chevron-left"
            size={23}
            color={colors.darkGray}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="slide" visible={isModalVisible}>
        <Button
          touchSoundDisabled
          title="Close"
          color="blue"
          onPress={() => setIsModalVisible(false)}
        />

        <FlatList
          data={datas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PickerItem
              label={item.name}
              onPress={() => {
                setSelectedItem(item);
                setIsModalVisible(false);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
};
export default AppPicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.lightGray,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 500,
    gap: 5,
  },

  placeholder: {
    color: colors.darkGray,
    fontSize: 17,
    flex: 1,
  },

  chevron: {
    transform: [{ rotate: "-90deg" }],
  },
});

type PickeItemType = { id: number; name: string; value: number };
