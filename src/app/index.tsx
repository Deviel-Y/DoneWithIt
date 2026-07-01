import AppPicker from "@/Components/AppPicker";
import AppTextInput from "@/Components/AppTextInput";
import Screen from "@/Components/Screen";
import { ComponentProps, useState } from "react";
import { StyleSheet } from "react-native";

const index = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    ComponentProps<typeof AppPicker>["selectedItem"]
  >(pickerItems[0]);
  return (
    <Screen screenStyles={styles.container}>
      <AppTextInput iconName="mail" placeholder="Email Address" />

      <AppPicker
        datas={pickerItems}
        selectedItem={selectedCategory}
        setSelectedItem={setSelectedCategory}
        placeholder="Pick Category"
      />
    </Screen>
  );
};
export default index;

const styles = StyleSheet.create({
  container: { gap: 10, padding: 10 },
});

const pickerItems: ComponentProps<typeof AppPicker>["selectedItem"][] = [
  {
    id: 1,
    name: "Ferniture",
    value: 1,
  },
  {
    id: 2,
    name: "Clothing",
    value: 2,
  },
  {
    id: 3,
    name: "Groceries",
    value: 3,
  },
];
