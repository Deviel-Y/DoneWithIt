import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  onPress: () => void;
  label: string;
}

const PickerItem = ({ onPress, label }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};
export default PickerItem;

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    padding: 13,
  },
});
